package todo.components

import com.github.andrewoma.react.*
import todo.actions.todoActions
import todo.stores.Todo
import todo.stores.completedCount

data class FooterProperties(val todos: Collection<Todo>)

class Footer : ComponentSpec<FooterProperties, Unit>() {
    companion object {
        val factory = react.createFactory(Footer())
    }

    override fun Component.render() {
        log.debug("Footer.render", props)

        if (props.todos.isEmpty()) return

        val completed = props.todos.completedCount()
        val itemsLeft = props.todos.size - completed
        val itemsLeftPhrase = (if (itemsLeft == 1) " item " else " items ") + "left"

        footer({ id = "footer" }) {
            span({ id = "todo-count" }) {
                strong { text("$itemsLeft") }.text(itemsLeftPhrase)
            }
            if (completed != 0) {
                button({
                    id = "clear-completed"
                    onClick = { onClearCompletedClick() }
                }) {
                    text("Clear completed ($completed)")
                }
            }
        }
    }

    fun onClearCompletedClick() {
        todoActions.destroyCompleted()
    }
}

fun Component.todoFooter(props: FooterProperties): Component {
    return construct(Component({ Footer.factory(Ref(props)) }))
}
