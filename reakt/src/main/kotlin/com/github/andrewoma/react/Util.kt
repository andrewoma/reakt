package com.github.andrewoma.react

fun check(condition: Boolean, message: String = "Assertion failed"): Unit {
    if (!condition) {
        throw Exception(message)
    }
}

// Like the JS "debugger" statement. Launches the JS debugger
external val debugger: Any = definedExternally

