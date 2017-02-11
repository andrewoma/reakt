package com.github.andrewoma.react

import kotlin.reflect.KProperty

interface ReadWriteProperty<in R, T> {
    operator fun getValue(thisRef: R, property: KProperty<*>): T
    operator fun setValue(thisRef: R, property: KProperty<*>, value: T)
}

/**
 * Property is a delegated property that stores properties in a plain JavaScript object.
 * React doesn't find properties declared via a prototype, so this works around that limitation.
 */
class Property<in R, T> : ReadWriteProperty<R, T> {
    override fun getValue(thisRef: R, property: KProperty<*>): T {
        return Reakt.getProperty(thisRef as Any, property.name)
    }

    override fun setValue(thisRef: R, property: KProperty<*>, value: T) {
        Reakt.setProperty(thisRef as Any, property.name, value)
    }
}

open class PrefixProperty<in R, T>(val prefix: String) : ReadWriteProperty<R, T> {
    override fun getValue(thisRef: R, property: KProperty<*>): T {
        return Reakt.getProperty(thisRef as Any, prefix + property.name)
    }

    override fun setValue(thisRef: R, property: KProperty<*>, value: T) {
        Reakt.setProperty(thisRef as Any, prefix + property.name, value)
    }
}

class DataProperty<in R, T> : PrefixProperty<R, T>("data-")
class AreaProperty<in R, T> : PrefixProperty<R, T>("area-")


