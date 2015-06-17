package todo.actions

import com.github.andrewoma.react.log
import todo.dispatcher.todoDispatcher
import todo.stores.Todo

interface TodoAction
class Create(val text: String) : TodoAction
class Update(val id: String, val text: String) : TodoAction
class UndoComplete(val id: String) : TodoAction
class Complete(val id: String) : TodoAction
class ToggleCompleteAll() : TodoAction
class Destroy(val id: String) : TodoAction
class DestroyCompleted() : TodoAction

class TodoActions {
    private fun viewAction(action: TodoAction) {
        log.debug("action", action)
        todoDispatcher.dispatch(action)
    }

    fun create(text: String) = viewAction(Create(text))

    fun updateText(id: String, text: String) = viewAction(Update(id, text))

    public fun toggleComplete(todo: Todo) {
        if (todo.complete) {
            viewAction(UndoComplete(todo.id))
        } else {
            viewAction(Complete(todo.id))
        }
    }

    fun toggleCompleteAll() = viewAction(ToggleCompleteAll())

    fun destroy(id: String) = viewAction(Destroy(id))

    fun destroyCompleted() = viewAction(DestroyCompleted())
}

val todoActions = TodoActions()

