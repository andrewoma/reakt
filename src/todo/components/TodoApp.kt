package todo.components

import com.github.andrewoma.react.*
import todo.stores.*

data class TodoAppState(val todos: Collection<Todo>)

class TodoApp : ComponentSpec<Unit, TodoAppState>() {
    class object {
        val factory = react.createFactory(TodoApp())
    }

    val listener: (Event) -> Unit = { onChange() } // Create a val so the reference is stable for removal

    override fun initialState(): TodoAppState? {
        return TodoAppState(todoStore.getAll())
    }

    override fun componentDidMount() {
        todoStore.addChangeListener(listener)
    }

    override fun componentWillMount() {
        todoStore.removeChangeListener(listener)
    }

    override fun Component.render() {
        div {
            todoHeader()
            todoMainSection(MainSectionProps(state.todos))
            todoFooter(FooterProps(state.todos))
        }
    }

    fun onChange() {
        state = TodoAppState(todoStore.getAll())
    }
}

fun createTodoApp() = TodoApp.factory(Ref(null))
