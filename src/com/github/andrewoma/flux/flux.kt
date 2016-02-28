package com.github.andrewoma.flux

// TODO ... this requires review ... lots of dubious casts between possibly unsound or unrelated PAYLOAD types
abstract class Store {

    private val changeListeners: MutableMap<Any, () -> Unit> = hashMapOf()

    fun <PAYLOAD> register(dispatcher: Dispatcher, actionDef: ActionDef<PAYLOAD>, callback: DispatchCallbackBody.(PAYLOAD) -> Unit): RegisteredActionHandler<PAYLOAD> {
        return dispatcher.register(this, actionDef, callback)
    }

    fun addChangeListener(self: Any, callback: () -> Unit) {
        changeListeners.put(self, callback)
    }

    protected fun emitChange() {
        changeListeners.values.forEach { it() }
    }

    fun removeListener(self: Any) {
        changeListeners.remove(self)
    }
}

class ActionDef<PAYLOAD>(val dispatcher: Dispatcher) {

    operator fun invoke(payload: PAYLOAD) {
        dispatcher.dispatch(this, payload)
    }
}


private class ActionHandlers<PAYLOAD>(val handlers: MutableList<RegisteredActionHandler<PAYLOAD>> = arrayListOf()) {

}

class RegisteredActionHandler<PAYLOAD>(val store: Store, val actionDef: ActionDef<PAYLOAD>, val callback: DispatchCallbackBody.(PAYLOAD) -> Unit) {
    var pending = false
    var handled = false
}

class DispatchCallbackBody(val dispatcher: Dispatcher, val store: Store) {
    fun waitFor(vararg registeredActionHandlers: Store) {
        dispatcher.waitFor(registeredActionHandlers)
    }
}

class Dispatcher {
    private var pendingPayload: Any? = null
    private var pendingActionDef: ActionDef<*>? = null
    private val actionHandlersList: MutableMap<ActionDef<*>, ActionHandlers<*>> = hashMapOf()
    private var dispatching = false

    fun <PAYLOAD> register(store: Store, action: ActionDef<PAYLOAD>, callback: DispatchCallbackBody.(PAYLOAD) -> Unit): RegisteredActionHandler<PAYLOAD> {
        val actionHandlers = actionHandlersList.getOrPut(action, { ActionHandlers<PAYLOAD>() }) as ActionHandlers<PAYLOAD>
        val registeredActionHandler = RegisteredActionHandler(store, action, callback)
        actionHandlers.handlers.add(registeredActionHandler)
        return registeredActionHandler
    }

    fun <PAYLOAD> unRegister(registeredActionHandler: RegisteredActionHandler<PAYLOAD>) {
        actionHandlersList[registeredActionHandler.actionDef]?.handlers?.remove(registeredActionHandler)
    }

    fun waitFor(stores: Array<out Store>) {
        require(dispatching) { "Dispatcher.waitFor(...): Must be invoked while dispatching." }
        val handlersForCurrentAction = actionHandlersList[pendingActionDef]?.handlers.orEmpty()
        val (pendingHandlers, nonPendingHandlers) = handlersForCurrentAction.filter { stores.contains(it.store) }.partition { it.pending || it.handled }
        val unhandledHandlers = pendingHandlers.firstOrNull { !it.handled }
        require(unhandledHandlers == null) { "Dispatcher.waitFor(...): Circular dependency detected while waiting for $unhandledHandlers." }
        nonPendingHandlers.forEach {
            require(actionHandlersList[it.actionDef]?.handlers?.contains(it) ?: false) { "Dispatcher.waitFor(...): $it does not map to a registered callback." }
            invokeCallback(it)
        }
    }

    fun <PAYLOAD> dispatch(action: ActionDef<PAYLOAD>, payload: PAYLOAD) {
        require(!dispatching) { "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch." }
        this.startDispatching(action, payload);
        try {
            actionHandlersList[action]?.handlers?.forEach {
                if (!it.pending) {
                    invokeCallback(it as RegisteredActionHandler<PAYLOAD>)
                }
            }
        } finally {
            this.stopDispatching();
        }
    }

    private fun <PAYLOAD> invokeCallback(it: RegisteredActionHandler<PAYLOAD>) {
        it.pending = true
        val body = DispatchCallbackBody(this, it.store)
        val callback = it.callback
        body.callback(pendingPayload as PAYLOAD)
        it.handled = true
    }

    private fun <PAYLOAD> startDispatching(action: ActionDef<PAYLOAD>, payload: PAYLOAD) {
        actionHandlersList[action]?.handlers?.forEach {
            it.pending = false
            it.handled = false
        }
        pendingPayload = payload
        pendingActionDef = action
        dispatching = true
    }

    private fun stopDispatching() {
        pendingActionDef = null
        pendingPayload = null
        dispatching = false
    }
}