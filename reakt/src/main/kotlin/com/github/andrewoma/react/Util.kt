package com.github.andrewoma.react

fun check(condition: Boolean, message: String = "Assertion failed"): Unit {
    if (!condition) {
        throw Exception(message)
    }
}

// Like the JS "debugger" statement. Launches the JS debugger
@native
val debugger: Any = noImpl

@native("Reakt.uniqueId") @Suppress("UNUSED_PARAMETER")
fun uniqueId(obj: Any): String = noImpl