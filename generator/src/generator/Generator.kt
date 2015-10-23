package generator

import java.io.File
import java.util.regex.Pattern

// A very quick and dirty generator of React Dom components and properties by parsing
// the typescript definitions from https://github.com/wizzard0/react-typescript-definitions
fun main(args: Array<String>) {
    val lines = File("generator/src/generator/react.d.ts").readLines(Charsets.UTF_8)
        generateEvents(lines)
//    generateDom(lines)
}

data class Property(val name: String, val kind: String, val optional: Boolean, val isOpen: Boolean = false) {

    fun propertyType() = if (name.contains("(")) "fun" else if (isOpen) "open var" else "var"

    override fun toString(): String {
        return "$name: $kind" + if (optional) "?" else ""
    }
}
data class Kind(val name: String, val properties: List<Property>, val extends: List<String> = arrayListOf(),
        val isClass: Boolean, val isOpen: Boolean = false) {

    override fun toString(): String {

        val prefix = if (extends.isEmpty()) "" else ": "
        val classType = if (isClass && isOpen) "open class" else if (isClass) "class" else "trait"
        val extendsConstructors = extends.map { if (it.contains("Properties")) it + "()" else it }

        val sb = StringBuilder("$classType $name ${extendsConstructors.joinToString(", ", prefix)} {\n")
        for (property in properties) {
            sb.append("\t${property.propertyType()} ${property}")
            if (isClass) sb.append(" by Property()\n") else sb.append("\n")
        }

        sb.append("}\n")

        return sb.toString()
    }
}

data class Dom(val name: String, var attributes: String) {
    init {
        attributes = rename(attributes)
    }
    val initialCapName: String
        get() = Character.toUpperCase(name[0]) + name.substring(1)

    val safeName: String
        get() = when (name) {
            "object" -> "obj"
            "var" -> "variable"
            else -> name
        }
}

fun generateDom(lines: List<String>) {
    val domTypes = extractDomTypes(lines)
    domTypes.forEach { dom ->
        println(
                """native("React.DOM.${dom.name}") suppress("UNUSED_PARAMETER")
fun react${dom.initialCapName}(props: ${dom.attributes}, vararg children: Any?): ReactComponent<${dom.attributes}, Any> = noImpl
public fun Component.${dom.safeName}(properties: ${dom.attributes}.() -> Unit = {}, init: Component.() -> Unit = {}): Component {
    return construct(Component({ react${dom.initialCapName}(initProps(${dom.attributes}(), properties), *it.transformChildren()) }), init)
}
""")
    }
}

fun extractDomTypes(lines: List<String>): List<Dom> {
    var inDom = false

    val domPattern = Pattern.compile(""" +(.*?): +ReactComponentFactory *< *(.*?)>""")

    val domTypes = arrayListOf<Dom>()

    for (line in lines) {
        inDom = inDom || line.contains("export var DOM")
        if (!inDom) continue
        val matcher = domPattern.matcher(line)
        if (matcher.find()) {
            domTypes.add(Dom(matcher.group(1)!!, matcher.group(2)!!))
        }
    }
    return domTypes
}

fun generateEvents(lines: List<String>) {
    val kinds: MutableMap<String, Kind> = extractKinds(lines)

    mungeClasses(kinds)
    printClasses(kinds)
}

fun extractKinds(lines: List<String>): MutableMap<String, Kind> {
    val namePattern = Pattern.compile("""interface +(.*?) +(extends +)?(.*?) *\{""")
    val propertyPattern = Pattern.compile(""" +(.*?)(\?)? *: +(.*?);""")

    var inEvents = false

    var name: String? = null
    var extends: String? = null

    val kinds: MutableMap<String, Kind> = linkedMapOf()
    var properties: MutableList<Property> = arrayListOf()

    for (line in lines) {
        if (line.contains("export var DOM")) break

        inEvents = inEvents || line.contains("export interface SyntheticEvent")
        if (!inEvents) continue

        if (name == null) {
            val matcher = namePattern.matcher(line)
            if (matcher.find()) {
                name = matcher.group(1)
                extends = matcher.group(3)
            }
        } else {
            val matcher = propertyPattern.matcher(line)
            if (matcher.matches()) {
                properties.add(Property(translateName(matcher.group(1)!!),
                        translateKind(matcher.group(3)!!), matcher.group(2) != null))
            }

            if (line.contains("}")) {
                val parents = extends?.let { it.split(",".toRegex()) }?.map { it.trim() }?.filter { !it.isEmpty() } ?: arrayListOf()
                val kind = Kind(name, properties, parents, name.contains("Attribute"))
                kinds[name] = kind
                properties = arrayListOf()
                name = null
            }
        }
    }

    return kinds
}

private fun printClasses(kinds: MutableMap<String, Kind>) {
    println("""package com.github.andrewoma.react

import kotlin.js.dom.html.Window
import kotlin.js.dom.html.Event
import com.github.andrewoma.react.Property

// TODO
trait EventTarget {
    val value: String
}

// TODO
trait DataTransfer {
}

// TODO
class Style {
}
""")

    for (kind in kinds) {
        println(kind.value)
    }
}

fun rename(name: String) = name.replace("Attributes".toRegex(), "Properties")
        .replace("HTML".toRegex(), "Html")
        .replace("SVG".toRegex(), "Svg")

fun mungeClasses(kinds: MutableMap<String, Kind>) {
    val events = kinds.remove("ReactEvents")!!
    val attributes = kinds["ReactAttributes"]!!

    kinds.put(attributes.name, attributes.copy(properties = attributes.properties + events.properties))

    for (kind in kinds.values) {
        var result = kind
        if (kind.extends == listOf("ReactAttributes", "ReactEvents")) {
            result = result.copy(extends = listOf("ReactAttributes"))
        }
        if (kind.name in setOf("ReactAttributes", "HTMLGlobalAttributes")) {
            val props = result.properties.map { if (it.name in setOf("key", "ref")) it.copy(isOpen = true) else it }
            result = result.copy(isOpen = true, properties = props)
        }

        result = result.copy(name = rename(result.name), extends = result.extends.map { rename(it) })

        if (result.name != kind.name) kinds.remove(kind.name)

        kinds[result.name] = result
    }
}

fun translateKind(kind: String): String {
    var result = kind.replace("^any".toRegex(), "Any").replace(" void".toRegex(), " Unit").replace("=>".toRegex(), "->")
    result = if (result.contains("(")) "($result)" else result
    return when (result) {
        "boolean" -> "Boolean"
        "string" -> "String"
        "number" -> "Int"
        "void" -> "Unit"
        "any" -> "Any"
        "{ [styleNam: string]: string }" -> "Style"
        else -> result
    }
}

fun translateName(name: String): String {
    return when (name) {
        "type" -> "`type`"
        else -> name
    }
}
