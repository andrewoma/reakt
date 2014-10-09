package todo.stores

import com.github.andrewoma.react.*

import java.util.LinkedHashMap
import java.util.HashSet

import todo.actions.*
import todo.dispatcher.*

data class Todo (
        val id: String,
        val text: String,
        val complete: Boolean = false
)

trait Event
class ChangeEvent : Event

fun Collection<Todo>.areAllCompleted() = this.size() == completedCount()
fun Collection<Todo>.completedCount(): Int {
    var completed = 0
    for (t in this) if (t.complete) completed += 1
    return completed
}

class TodoStore {
    private val todos = LinkedHashMap<String, Todo>()
    private val listeners = HashSet<(Event) -> Unit>()

    fun getAll(): Collection<Todo> = todos.values()

    fun get(id: String) = todos[id]

    fun create(text: String) {
        val id = (Date().getTime() + Math.floor(Math.random() * 999999)).toString().toString()
        todos.put(id, Todo(id, text, complete = false))
    }

    inline fun update(id: String, update: (Todo) -> Todo) {
        val existing = todos.get(id)
        if (existing != null) {
            todos.put(id, update(existing))
        }
    }

    fun destroy(id: String) {
        todos.remove(id)
    }

    fun destroyCompleted() {
        for (todo in todos.values().copyToArray()) {
            if (todo.complete) todos.remove(todo.id)
        }
    }

    inline fun updateAll(update: (Todo) -> Todo) {
        // Obey Java contract of not updating while iterating?
        for (todo in todos.values().copyToArray()) {
            val updated = update(todo)
            if (!updated.identityEquals(todo)) {
                // Only put if actually changed
                todos.put(updated.id, updated)
            }
        }
    }

    fun areAllComplete() = todos.values().areAllCompleted()

    fun addChangeListener(callback: (Event) -> Unit) {
        listeners.add(callback)
    }

    fun removeChangeListener(callback: (Event) -> Unit) {
        listeners.remove(callback)
    }

    fun emitChange() {
        val event = ChangeEvent()
        for (l in listeners) l(event)
    }
}

/**
 * The action handler acts as a mediator between the view and store
 */
class TodoStoreActionHandler(val store: TodoStore, dispatcher: TodoDispatcher) {
    {
        dispatcher.register { onAction(it) }
    }

    inline fun withNonEmpty(text: String, onNonEmpty: (String) -> Unit) {
        val trimmed = text.trim()
        if (!trimmed.isEmpty()) onNonEmpty(trimmed)
    }

    fun onAction(action: TodoAction) {
        when (action) {
            is Create -> withNonEmpty(action.text) { store.create(it) }

            is ToggleCompleteAll -> {
                val complete = !store.areAllComplete()
                store.updateAll {
                    // Only update if required
                    if (it.complete == complete) it else it.copy(complete = complete)
                }
            }

            is UndoComplete -> store.update(action.id) { it.copy(complete = false) }

            is Complete -> store.update(action.id) { it.copy(complete = true) }

            is Update -> withNonEmpty(action.text) { text -> store.update(action.id) { it.copy(text = text) } }

            is Destroy -> store.destroy(action.id)

            is DestroyCompleted -> store.destroyCompleted()

            else -> log.error("Unknown action", action)
        }

        store.emitChange()
    }
}

val todoStore = TodoStore()
val todoStoreActionHandler = TodoStoreActionHandler(todoStore, todoDispatcher)




