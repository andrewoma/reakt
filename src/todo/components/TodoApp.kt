package todo.components

import com.github.andrewoma.react.*
import todo.stores.Todo
import todo.stores.todoStore

data class TodoAppState(val todos: Collection<Todo>)

class TodoApp : ComponentSpec<Unit, TodoAppState>() {
    companion object {
        val factory = react.createFactory(TodoApp())
    }

    override fun initialState(): TodoAppState? {
        return TodoAppState(todoStore.getAll())
    }

    override fun componentDidMount() {
        todoStore.addChangeListener(this) {
            onChange()
        }
    }

    override fun componentWillUnmount() {
        todoStore.removeListener(this)
    }

    override fun Component.render() {
        div {
            todoHeader()
            todoMainSection(MainSectionProperties(state.todos))
            todoFooter(FooterProperties(state.todos))
        }
    }

    fun onChange() {
        state = TodoAppState(todoStore.getAll())
    }
}

fun createTodoApp() = TodoApp.factory(Ref(null))
