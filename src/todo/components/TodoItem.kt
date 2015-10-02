package todo.components

import com.github.andrewoma.react.*
import todo.actions.todoActions
import todo.stores.Todo

data class TodoItemProperties(val key: String, val todo: Todo)
data class TodoItemState(val isEditing: Boolean = false)

class TodoItem : ComponentSpec<TodoItemProperties, TodoItemState>() {
    companion object {
        val factory = react.createFactory(TodoItem())
    }

    override fun initialState(): TodoItemState? {
        return TodoItemState(isEditing = false)
    }

    override fun Component.render() {
        log.debug("TodoItem.render", props, state)

        val classes = classSet(
                "completed" to props.todo.complete,
                "editing" to state.isEditing
        )

        li({ className = classes; key = props.todo.id }) {
            div({ className = "view" }) {
                input({
                    className = "toggle"
                    `type` = "checkbox"
                    checked = props.todo.complete
                    onChange = { onToggleComplete() }
                })

                label({ onDoubleClick = { onDoubleClick() } }) {
                    text(props.todo.text)
                }

                button({
                    className = "destroy"
                    onClick = { onDestroyClick() }
                })
            }

            if (state.isEditing) {
                todoTextInput(TodoTextInputProperties(
                        className = "edit",
                        onSave = { onSave(it) },
                        value = props.todo.text))
            }
        }
    }

    fun onToggleComplete() {
        todoActions.toggleComplete(props.todo)
    }

    fun onDoubleClick() {
        state = state.copy(isEditing = true)
    }

    fun onSave(value: String) {
        todoActions.updateText(props.todo.id, value)
        state = state.copy(isEditing = false)
    }

    fun onDestroyClick() {
        todoActions.destroy(props.todo.id)
    }

    override fun shouldComponentUpdate(nextProps: TodoItemProperties, nextState: TodoItemState): Boolean {
        return !(props.todo === nextProps.todo && state === nextState)
    }
}

fun Component.todoItem(props: TodoItemProperties): Component {
    return construct(Component({ TodoItem.factory(Ref(props)) }))
}