package todo.dispatcher

import todo.actions.TodoAction
import java.util.HashSet


/**
 * Grossly simplified Dispatcher. In particular it doesn't support the waitFor() semantics of Flux's dispatcher
 */
class TodoDispatcher {
    private val callbacks: MutableSet<(TodoAction) -> Unit> = HashSet()

    fun dispatch(action: TodoAction) {
        for (c in callbacks) c(action)
    }

    fun register(callback: (TodoAction) -> Unit) {
        callbacks.add(callback)
    }
}

val todoDispatcher = TodoDispatcher()