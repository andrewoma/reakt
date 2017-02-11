package com.github.andrewoma.react

import kotlin.browser.document

// Enum doesn't seem to be supported
//public enum class LogLevel { debug info warn error none }
class LogLevel(val ordinal: Int) {
    companion object {
        val debug = LogLevel(1)
        val info = LogLevel(2)
        val warn = LogLevel(3)
        val error = LogLevel(4)
        val none = LogLevel(5)

        fun parse(value: String): LogLevel {
            return when (value) {
                "debug" -> debug
                "info" -> info
                "warn" -> warn
                "error" -> error
                "none" -> none
                else -> throw Exception("Unknown log level: '$value'")
            }
        }
    }
}

class Log(val logLevel: LogLevel) {

    fun debug(vararg objects: Any?): Unit = logIfEnabled(LogLevel.debug) { console.info(*objects) }
    fun info(vararg objects: Any?): Unit = logIfEnabled(LogLevel.info) { console.info(*objects) }
    fun warn(vararg objects: Any?): Unit = logIfEnabled(LogLevel.warn) { console.warn(*objects) }
    fun error(vararg objects: Any?): Unit = logIfEnabled(LogLevel.error) { console.error(*objects) }

    inline private fun logIfEnabled(level: LogLevel, f: () -> Unit) {
        if (level.ordinal >= logLevel.ordinal) f()
    }
}


private fun logLevelFromLocation(location: String): LogLevel {
    // Doesn't seem to be regex support for capturing groups, so hack away
    val prefix = "log-level="
    for (token in location.split("[?&]".toRegex()).toTypedArray()) {
        if (token.startsWith(prefix)) return LogLevel.parse(token.substring(prefix.length))
    }
    return LogLevel.none
}

val log: Log = Log(logLevelFromLocation(document.location!!.search))