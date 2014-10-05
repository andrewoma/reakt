package com.github.andrewoma.react

fun classSet(vararg classes: Pair<String, Boolean>): String {
    val sb = StringBuilder()
    for (pair in classes) {
        if (pair.second) sb.append(pair.first)
    }
    return sb.toString()
}
