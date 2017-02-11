package com.github.andrewoma.react

external object Reakt {

    fun <T> getProperty(thisRef: Any, name: String): T = definedExternally
    fun <T> setProperty(thisRef: Any, name: String, value: T): Unit = definedExternally
    fun <T> getProperties(thisRef: Any): T = definedExternally

    @JsName("flattenProperties")
    fun <T> flatten(properties: T): T = definedExternally

    @JsName("createClass")
    fun <P : Any, S : Any> reactCreateFactory(spec: ReactComponentSpec<P, S>): ReactComponentFactory<P, S> = definedExternally

    fun uniqueId(obj: Any): String = definedExternally
}