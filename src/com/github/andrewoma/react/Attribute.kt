package com.github.andrewoma.react

public trait ReadWriteProperty<in R, T> {
    public fun get(thisRef: R, desc: PropertyMetadata): T
    public fun set(thisRef: R, desc: PropertyMetadata, value: T)
}

/**
 * Attribute is a delegated property that stores properties in a plain JavaScript object.
 * React doesn't find properties declared via a prototype, so this works around that limitation.
 */
public class Attribute<in R, T> : ReadWriteProperty<R, T> {
    override fun get(thisRef: R, desc: PropertyMetadata): T {
        return getAttribute(thisRef, desc.name)
    }
    override fun set(thisRef: R, desc: PropertyMetadata, value: T) {
        setAttribute(thisRef, desc.name, value)
    }
}

native("Reakt.getAttribute") suppress("UNUSED_PARAMETER")
private fun <T> getAttribute(thisRef: Any, name: String): T = noImpl

native("Reakt.setAttribute") suppress("UNUSED_PARAMETER")
private fun <T> setAttribute(thisRef: Any, name: String, value: T): Unit = noImpl

native("Reakt.getAttributes") suppress("UNUSED_PARAMETER")
private fun <T> getAttributes(thisRef: Any): T = noImpl