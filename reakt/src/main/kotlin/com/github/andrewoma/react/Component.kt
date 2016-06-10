package com.github.andrewoma.react

/**
 * A trait to allow rendering of React components using the Component builders
 */
interface ComponentRenderer {
    @Suppress("UNCHECKED_CAST")
    fun render(): ReactElement<*>? {
        // This bit of trickery makes root an instance of Component so that the scoped render method is visible
        val root = object : Component({ 0 }) {}
        root.render()
        check(root.children.size <= 1, "React only supports one (or zero) root components")

        // Can't check instance type when native
        // check(root.children[0] is ReactComponent<*, *>, "Root must be a Component or null")
        if (root.children.isEmpty()) return null

        return root.children[0].transform() as ReactElement<Any>
    }

    // Stolen from Kara. This allows a component to create an extension function to Component
    // that is scoped to this component
    fun Component.render()
}

/**
 * The standard base class for Kotlin components that use the Component builder
 */
abstract class ComponentSpec<S:Any, P:Any> : ReactComponentSpec<S, P>(), ComponentRenderer


/**
 * The base Component type
 */
open class Component(val transformer: (Component) -> Any) {
    public val children: MutableList<Component> = java.util.ArrayList()

    public fun constructAndInsert(component: Component, init: Component.() -> Unit = {}): Component {
        component.init()
        children.add(component)
        return component
    }

    public fun transform(): Any {
        return transformer(this)
    }

    public fun transformChildren(): Array<Any?> = Array(children.size, { children[it].transform() })
}
