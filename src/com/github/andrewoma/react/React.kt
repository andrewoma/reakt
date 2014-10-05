package com.github.andrewoma.react

import org.w3c.dom.Element

/**
 * React is the top-level class for interacting with the React environment externally.
 */
public class React {
    public fun <P, S>createFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S>
            = reactCreateFactory(spec)

    public fun <C : ReactComponent<*, *>> renderComponent(component: C, container: Element, callback: () -> Unit = {}): C
            = reactRenderComponent(component, container, callback)
}
public val react: React = React()

// Can't seem to nest these inside a class
native("Reakt.createClass") suppress("UNUSED_PARAMETER")
private fun <P, S>reactCreateFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S> = noImpl

native("React.renderComponent") suppress("UNUSED_PARAMETER")
private fun <C : ReactComponent<*, *>> reactRenderComponent(component: C, container: Element, callback: () -> Unit = {}): C = noImpl

native("Reakt.flattenProperties") suppress("UNUSED_PARAMETER")
private fun <T>  flatten(properties: T): T = noImpl
