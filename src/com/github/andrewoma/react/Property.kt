package com.github.andrewoma.react

import kotlin.reflect.KProperty

public interface ReadWriteProperty<in R, T> {
    public operator fun getValue(thisRef: R, property: KProperty<*>): T
    public operator fun setValue(thisRef: R, property: KProperty<*>, value: T)
}

/**
 * Property is a delegated property that stores properties in a plain JavaScript object.
 * React doesn't find properties declared via a prototype, so this works around that limitation.
 */
public class Property<in R, T> : ReadWriteProperty<R, T> {
    override fun getValue(thisRef: R, property: KProperty<*>): T {
        return getProperty(thisRef as Any, property.name)
    }

    override fun setValue(thisRef: R, property: KProperty<*>, value: T) {
        setProperty(thisRef as Any, property.name, value)
    }
}

@native("Reakt.getProperty") @Suppress("UNUSED_PARAMETER")
private fun <T> getProperty(thisRef: Any, name: String): T = noImpl

@native("Reakt.setProperty") @Suppress("UNUSED_PARAMETER")
private fun <T> setProperty(thisRef: Any, name: String, value: T): Unit = noImpl

@native("Reakt.getProperties") @Suppress("UNUSED_PARAMETER")
private fun <T> getProperties(thisRef: Any): T = noImpl