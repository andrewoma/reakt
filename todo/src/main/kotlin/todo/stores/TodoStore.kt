package todo.stores

import com.github.andrewoma.flux.Dispatcher
import com.github.andrewoma.flux.Store
import todo.actions.*
import java.util.LinkedHashMap

data class Todo(
        val id: String,
        val text: String,
        val complete: Boolean = false
)


fun Collection<Todo>.areAllCompleted() = this.size == completedCount()
fun Collection<Todo>.completedCount(): Int {
    var completed = 0
    for (t in this) if (t.complete) completed += 1
    return completed
}

val todoDispatcher = Dispatcher()

class TodoStore : Store() {
    private val todos = LinkedHashMap<String, Todo>()

    init {
        register(todoDispatcher, TodoActions.create) { payload ->
            withNonEmpty(payload.text) {
                create(it)
                emitChange()
            }
        }
        register(todoDispatcher, TodoActions.toggleCompleteAll) { payload ->
            val complete = !areAllComplete()
            updateAll {
                // Only update if required
                if (it.complete == complete) it else it.copy(complete = complete)
            }
            emitChange()
        }
        register(todoDispatcher, TodoActions.undoComplete) { payload ->
            update(payload.id) { it.copy(complete = false) }
            emitChange()
        }
        register(todoDispatcher, TodoActions.complete) { payload ->
            update(payload.id) { it.copy(complete = true) }
            emitChange()
        }
        register(todoDispatcher, TodoActions.update) { payload ->
            withNonEmpty(payload.text) { text ->
                update(payload.id) { it.copy(text = text) }
                emitChange()
            }
        }
        register(todoDispatcher, TodoActions.destroy) { payload ->
            destroy(payload.id)
            emitChange()
        }
        register(todoDispatcher, TodoActions.destroyCompleted) { payload ->
            destroyCompleted()
            emitChange()
        }
    }

    fun getAll(): Collection<Todo> = todos.values

    fun get(id: String) = todos[id]

    fun create(text: String) {
        val id = (Date().getTime() + Math.floor(Math.random() * 999999)).toString().toString()
        todos.put(id, Todo(id, text, complete = false))
    }

    fun update(id: String, update: (Todo) -> Todo) {
        val existing = todos.get(id)
        if (existing != null) {
            todos.put(id, update(existing))
        }
    }

    fun destroy(id: String) {
        todos.remove(id)
    }

    fun destroyCompleted() {
        for (todo in todos.values) {
            if (todo.complete) todos.remove(todo.id)
        }
    }

    fun updateAll(update: (Todo) -> Todo) {
        // Obey Java contract of not updating while iterating?
        for (todo in todos.values) {
            val updated = update(todo)
            if (updated !== todo) {
                // Only put if actually changed
                todos.put(updated.id, updated)
            }
        }
    }

    fun areAllComplete() = todos.values.areAllCompleted()

    inline fun withNonEmpty(text: String, onNonEmpty: (String) -> Unit) {
        val trimmed = text.trim()
        if (!trimmed.isEmpty()) onNonEmpty(trimmed)
    }
}


val todoStore = TodoStore()




