package com.github.andrewoma.react

import org.w3c.dom.Element

/**
 * React is the top-level class for interacting with the React environment externally.
 */
class React {
    fun <P : Any, S : Any> createFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S>
            = Reakt.reactCreateFactory(spec)

    fun <C : ReactComponent<*, *>> render(component: C, container: Element, callback: () -> Unit = {}): C
            = ReactDOM.reactRender(component, container, callback)

    fun <P> createElement(reactComponent: ReactComponent<P, *>, prop: P, vararg children: Any?): Any {
        return ReactDOM.reactCreateElement(reactComponent, prop, children)
    }
}

val react: React = React()


external object ReactDOM {

    @JsName("render")
    fun <C : ReactComponent<*, *>> reactRender(component: C, container: Element, callback: () -> Unit = definedExternally): C = definedExternally

    @JsName("unmountComponentAtNode")
    fun unmountComponentAtNode(container: Element): Unit = definedExternally


    @JsName("createElement")
    fun <P> reactCreateElement(reactComponent: ReactComponent<*, *>, prop: P, vararg children: Any?): ReactComponent<Any, Any> = definedExternally
}