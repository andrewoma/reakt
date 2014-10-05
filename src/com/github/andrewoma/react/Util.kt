package com.github.andrewoma.react

fun check(condition: Boolean, message: String = "Assertion failed"): Unit {
    if (!condition) {
        throw Exception(message)
    }
}

// Like the JS "debugger" statement. Launches the JS debugger
native
val debugger: Any = noImpl;

class Pair<K, V>(val first: K, val second: V)
fun <A, B> A.to(that: B): Pair<A, B> = Pair(this, that)


native("Reakt.uniqueId") suppress("UNUSED_PARAMETER")
fun uniqueId(obj: Any): String = noImpl