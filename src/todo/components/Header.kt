package todo.components

import com.github.andrewoma.react.*
import todo.actions.todoActions

class Header : ComponentSpec<Unit, Unit>() {
    companion object {
        val factory = react.createFactory(Header())
    }

    override fun Component.render() {
        log.debug("Header.render")

        header({ id = "header" }) {
            h1 { text("todos") }
            todoTextInput(TodoTextInputProperties(
                    id = "new-todo",
                    placeHolder = "What needs to be done?",
                    onSave = { onSave(it) })
            )
        }
    }

    fun onSave(text: String) {
        if (!text.trim().isEmpty()) {
            todoActions.create(text)
        }
    }
}

fun Component.todoHeader(): Component {
    return construct(Component({ Header.factory(Ref(null)) }))
}
