package todo

import com.github.andrewoma.react.*
import todo.components.createTodoApp
import kotlin.js.dom.html.document
import org.w3c.dom.Element

fun main(args: Array<String>) {
    log.info("Starting Todo app")
    react.renderComponent(createTodoApp(), document.getElementById("todoapp"))
}
