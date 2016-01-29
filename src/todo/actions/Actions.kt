package todo.actions

import com.github.andrewoma.flux.ActionDef
import todo.stores.Todo
import todo.stores.todoDispatcher

object TodoActions {
    val create = ActionDef<CreatePayload>(todoDispatcher)
    val update = ActionDef<UpdatePayload>(todoDispatcher)
    val complete = ActionDef<CompletePayload>(todoDispatcher)
    val undoComplete = ActionDef<UndoCompletePayload>(todoDispatcher)
    val toggleCompleteAll = ActionDef<Nothing?>(todoDispatcher)
    val destroy = ActionDef<DestroyPayload>(todoDispatcher)
    val destroyCompleted = ActionDef<Nothing?>(todoDispatcher)

    fun toggleComplete(todo: Todo) {
        if (todo.complete) {
            undoComplete(UndoCompletePayload(todo.id))
        } else {
            complete(CompletePayload(todo.id))
        }
    }
}

interface TodoAction
class CreatePayload(val text: String) : TodoAction
class UpdatePayload(val id: String, val text: String) : TodoAction
class UndoCompletePayload(val id: String) : TodoAction
class CompletePayload(val id: String) : TodoAction
class DestroyPayload(val id: String) : TodoAction

