package com.github.andrewoma.react

import org.w3c.dom.Element

/**
 * React is the top-level class for interacting with the React environment externally.
 */
public class React {
    public fun <P:Any, S:Any>createFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S>
            = reactCreateFactory(spec)

    public fun <C : ReactComponent<*, *>> render(component: C, container: Element, callback: () -> Unit = {}): C
            = reactRender(component, container, callback)
}

public val react: React = React()

// Can't seem to nest these inside a class
@native("Reakt.createClass") @Suppress("UNUSED_PARAMETER")
internal fun <P:Any, S:Any>reactCreateFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S> = noImpl

@native("ReactDOM.render") @Suppress("UNUSED_PARAMETER")
internal fun <C : ReactComponent<*, *>> reactRender(component: C, container: Element, callback: () -> Unit = {}): C = noImpl

@native("Reakt.flattenProperties") @Suppress("UNUSED_PARAMETER")
internal fun <T>  flatten(properties: T): T = noImpl
