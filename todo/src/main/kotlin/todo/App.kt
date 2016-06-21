package todo

import com.github.andrewoma.react.log
import com.github.andrewoma.react.react
import todo.components.createTodoApp
import kotlin.browser.document

fun main(args: Array<String>) {
    log.info("Starting Todo app")
    react.render(createTodoApp(), document.getElementById("todoapp")!!)
}
