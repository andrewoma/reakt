package todo.components

import com.github.andrewoma.react.*
import todo.actions.CreatePayload
import todo.actions.TodoActions

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
            TodoActions.create(CreatePayload(text))
        }
    }
}

fun Component.todoHeader(): Component {
    return constructAndInsert(Component({ Header.factory(Ref(null)) }))
}
