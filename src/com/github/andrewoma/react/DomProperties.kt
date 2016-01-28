package com.github.andrewoma.react

import org.w3c.dom.Window
import org.w3c.dom.events.Event

// TODO
interface EventTarget {
    val value: String
}

// TODO
interface DataTransfer {
}

// TODO
class Style {
}

interface SyntheticEvent {
    var bubbles: Boolean
    var cancelable: Boolean
    var currentTarget: EventTarget
    var defaultPrevented: Boolean
    var eventPhase: Int
    var nativeEvent: Event
    var type: String
    var timeStamp: Date
    fun preventDefault(): Unit
    fun stopPropagation(): Unit
}

interface ClipboardEvent : SyntheticEvent {
    var clipboardData: DataTransfer
}

interface KeyboardEvent : SyntheticEvent {
    var altKey: Boolean
    var ctrlKey: Boolean
    var charCode: Int
    var key: String
    var keyCode: Int
    var locale: String
    var location: Int
    var metaKey: Boolean
    var repeat: Boolean
    var shiftKey: Boolean
    var which: Int
}

interface FocusEvent : SyntheticEvent {
    var relatedTarget: EventTarget
}

interface FormEvent : SyntheticEvent {
}

interface MouseEvent : SyntheticEvent {
    var altKey: Boolean
    var button: Int
    var buttons: Int
    var clientX: Int
    var clientY: Int
    var ctrlKey: Boolean
    var pageX: Int
    var pageY: Int
    var relatedTarget: EventTarget
    var screenX: Int
    var screenY: Int
    var shiftKey: Boolean
}

interface TouchEvent : SyntheticEvent {
    var altKey: Boolean
    var changedTouches: TouchEvent
    var ctrlKey: Boolean
    var metaKey: Boolean
    var shiftKey: Boolean
    var targetTouches: Any//DOMTouchList
    var touches: Any//DOMTouchList
}

interface UIEvent : SyntheticEvent {
    var detail: Int
    var view: Window
}

interface WheelEvent {
    var deltaX: Int
    var deltaMode: Int
    var deltaY: Int
    var deltaZ: Int
}

open class ReactProperties {
    open var key: String? by Property()

    // it can be String or (DOM|ReactComponent<Any, Any>) -> Unit
    open var ref: dynamic by Property()

    var onCopy: ((event: ClipboardEvent) -> Unit)? by Property()
    var onCut: ((event: ClipboardEvent) -> Unit)? by Property()
    var onPaste: ((event: ClipboardEvent) -> Unit)? by Property()
    var onKeyDown: ((event: KeyboardEvent) -> Unit)? by Property()
    var onKeyPress: ((event: KeyboardEvent) -> Unit)? by Property()
    var onKeyUp: ((event: KeyboardEvent) -> Unit)? by Property()
    var onFocus: ((event: FocusEvent) -> Unit)? by Property()
    var onBlur: ((event: FocusEvent) -> Unit)? by Property()
    var onChange: ((event: FormEvent) -> Unit)? by Property()
    var onInput: ((event: FormEvent) -> Unit)? by Property()
    var onSubmit: ((event: FormEvent) -> Unit)? by Property()
    var onClick: ((event: MouseEvent) -> Unit)? by Property()
    var onDoubleClick: ((event: MouseEvent) -> Unit)? by Property()
    var onDrag: ((event: MouseEvent) -> Unit)? by Property()
    var onDragEnd: ((event: MouseEvent) -> Unit)? by Property()
    var onDragEnter: ((event: MouseEvent) -> Unit)? by Property()
    var onDragExit: ((event: MouseEvent) -> Unit)? by Property()
    var onDragLeave: ((event: MouseEvent) -> Unit)? by Property()
    var onDragOver: ((event: MouseEvent) -> Unit)? by Property()
    var onDragStart: ((event: MouseEvent) -> Unit)? by Property()
    var onDrop: ((event: MouseEvent) -> Unit)? by Property()
    var onMouseDown: ((event: MouseEvent) -> Unit)? by Property()
    var onMouseEnter: ((event: MouseEvent) -> Unit)? by Property()
    var onMouseLeave: ((event: MouseEvent) -> Unit)? by Property()
    var onMouseMove: ((event: MouseEvent) -> Unit)? by Property()
    var onMouseUp: ((event: MouseEvent) -> Unit)? by Property()
    var onTouchCancel: ((event: TouchEvent) -> Unit)? by Property()
    var onTouchEnd: ((event: TouchEvent) -> Unit)? by Property()
    var onTouchMove: ((event: TouchEvent) -> Unit)? by Property()
    var onTouchStart: ((event: TouchEvent) -> Unit)? by Property()
    var onScroll: ((event: UIEvent) -> Unit)? by Property()
    var onWheel: ((event: WheelEvent) -> Unit)? by Property()
}

open class HtmlGlobalProperties : ReactProperties() {
    override var key: String? by Property()
    var accessKey: String? by Property()
    var className: String? by Property()
    var contentEditable: String? by Property()
    var contextMenu: String? by Property()
    var dir: String? by Property()
    var draggable: Boolean? by Property()
    var hidden: Boolean? by Property()
    var id: String? by Property()
    var lang: String? by Property()
    var spellCheck: Boolean? by Property()
    var role: String? by Property()
    var scrollLeft: Int? by Property()
    var scrollTop: Int? by Property()
    var style: Style? by Property()
}

class FormProperties : HtmlGlobalProperties() {
    var accept: String? by Property()
    var action: String? by Property()
    var autoCapitalize: String? by Property()
    var autoComplete: String? by Property()
    var encType: String? by Property()
    var method: String? by Property()
    var name: String? by Property()
    var target: String? by Property()
}

class InputProperties : HtmlGlobalProperties() {
    var accept: String? by Property()
    var alt: String? by Property()
    var autoCapitalize: String? by Property()
    var autoComplete: String? by Property()
    var autoFocus: Boolean? by Property()
    var checked: Any? by Property()
    var defaultValue: Any? by Property()
    var disabled: Boolean? by Property()
    var form: String? by Property()
    var height: Int? by Property()
    var list: String? by Property()
    var max: Int? by Property()
    var maxLength: Int? by Property()
    var min: Int? by Property()
    var multiple: Boolean? by Property()
    var name: String? by Property()
    var pattern: String? by Property()
    var placeholder: String? by Property()
    var readOnly: Boolean? by Property()
    var required: Boolean? by Property()
    var size: Int? by Property()
    var src: String? by Property()
    var step: Int? by Property()
    var type: String? by Property()
    var value: String? by Property()
    var width: Int? by Property()
    var formAction: String? by Property()
    var formEncType: String? by Property()
    var formMethod: String? by Property()
    var formTarget: String? by Property()
}

class IframeProperties : HtmlGlobalProperties() {
    var allowFullScreen: Boolean? by Property()
    var allowTransparency: Boolean? by Property()
    var frameBorder: Int? by Property()
    var height: Int? by Property()
    var name: String? by Property()
    var src: String? by Property()
    var width: Int? by Property()
    var marginHeight: String? by Property()
    var marginWidth: String? by Property()
}

class AppletProperties : HtmlGlobalProperties() {
    var alt: String? by Property()
}

class AreaProperties : HtmlGlobalProperties() {
    var alt: String? by Property()
    var href: String? by Property()
    var rel: String? by Property()
    var target: String? by Property()
}

class ImgProperties : HtmlGlobalProperties() {
    var alt: String? by Property()
    var height: Int? by Property()
    var src: String? by Property()
    var width: Int? by Property()
}

class ButtonProperties : HtmlGlobalProperties() {
    var autoFocus: Boolean? by Property()
    var disabled: Boolean? by Property()
    var form: String? by Property()
    var name: String? by Property()
    var type: String? by Property()
    var value: String? by Property()
}

class KeygenProperties : HtmlGlobalProperties() {
    var autoFocus: Boolean? by Property()
    var form: String? by Property()
    var name: String? by Property()
}

class SelectProperties : HtmlGlobalProperties() {
    var autoFocus: Boolean? by Property()
    var disabled: Boolean? by Property()
    var form: String? by Property()
    var multiple: Boolean? by Property()
    var name: String? by Property()
    var required: Boolean? by Property()
    var size: Int? by Property()
}

class TextareaProperties : HtmlGlobalProperties() {
    var autoFocus: Boolean? by Property()
    var form: String? by Property()
    var maxLength: String? by Property()
    var name: String? by Property()
    var placeholder: String? by Property()
    var readOnly: String? by Property()
    var required: Boolean? by Property()
}

class AudioProperties : HtmlGlobalProperties() {
    var autoPlay: Boolean? by Property()
    var controls: Boolean? by Property()
    var loop: Boolean? by Property()
    var preload: String? by Property()
    var src: String? by Property()
}

class VideoProperties : HtmlGlobalProperties() {
    var autoPlay: Boolean? by Property()
    var controls: Boolean? by Property()
    var height: Int? by Property()
    var loop: Boolean? by Property()
    var poster: String? by Property()
    var preload: String? by Property()
    var src: String? by Property()
    var width: Int? by Property()
}

class TableProperties : HtmlGlobalProperties() {
    var cellPadding: Int? by Property()
    var cellSpacing: Int? by Property()
}

class MetaProperties : HtmlGlobalProperties() {
    var charSet: String? by Property()
    var content: String? by Property()
    var httpEquiv: String? by Property()
    var name: String? by Property()
}

class ScriptProperties : HtmlGlobalProperties() {
    var charSet: String? by Property()
    var src: String? by Property()
    var type: String? by Property()
}

class CommandProperties : HtmlGlobalProperties() {
    var checked: Boolean? by Property()
    var icon: String? by Property()
    var radioGroup: String? by Property()
    var type: String? by Property()
}

class TdProperties : HtmlGlobalProperties() {
    var colSpan: Int? by Property()
    var rowSpan: Int? by Property()
}

class ThProperties : HtmlGlobalProperties() {
    var colSpan: Int? by Property()
    var rowSpan: Int? by Property()
}

class ObjectProperties : HtmlGlobalProperties() {
    var data: String? by Property()
    var form: String? by Property()
    var height: Int? by Property()
    var name: String? by Property()
    var type: String? by Property()
    var width: Int? by Property()
    var wmode: String? by Property()
}

class DelProperties : HtmlGlobalProperties() {
    var dateTime: Date? by Property()
}

class InsProperties : HtmlGlobalProperties() {
    var dateTime: Date? by Property()
}

class TimeProperties : HtmlGlobalProperties() {
    var dateTime: Date? by Property()
}

class FieldsetProperties : HtmlGlobalProperties() {
    var form: String? by Property()
    var name: String? by Property()
}

class LabelProperties : HtmlGlobalProperties() {
    var form: String? by Property()
    var htmlFor: String? by Property()
}

class MeterProperties : HtmlGlobalProperties() {
    var form: String? by Property()
    var max: Int? by Property()
    var min: Int? by Property()
    var value: Int? by Property()
    var high: Int? by Property()
    var low: Int? by Property()
    var optimum: Int? by Property()
}

class OutputProperties : HtmlGlobalProperties() {
    var form: String? by Property()
    var htmlFor: String? by Property()
    var name: String? by Property()
}

class ProgressProperties : HtmlGlobalProperties() {
    var form: String? by Property()
    var max: Int? by Property()
    var value: Int? by Property()
}

class CanvasProperties : HtmlGlobalProperties() {
    var height: Int? by Property()
    var width: Int? by Property()
}

class EmbedProperties : HtmlGlobalProperties() {
    var height: Int? by Property()
    var src: String? by Property()
    var type: String? by Property()
    var width: Int? by Property()
}

class AProperties : HtmlGlobalProperties() {
    var href: String? by Property()
    var rel: String? by Property()
    var target: String? by Property()
}

class BaseProperties : HtmlGlobalProperties() {
    var href: String? by Property()
    var target: String? by Property()
}

class LinkProperties : HtmlGlobalProperties() {
    var href: String? by Property()
    var rel: String? by Property()
}

class TrackProperties : HtmlGlobalProperties() {
    var label: String? by Property()
    var src: String? by Property()
}

class BgsoundProperties : HtmlGlobalProperties() {
    var loop: Boolean? by Property()
}

class MarqueeProperties : HtmlGlobalProperties() {
    var loop: Boolean? by Property()
}

class MapProperties : HtmlGlobalProperties() {
    var name: String? by Property()
}

class ParamProperties : HtmlGlobalProperties() {
    var name: String? by Property()
    var value: String? by Property()
}

class OptionProperties : HtmlGlobalProperties() {
    var selected: Boolean? by Property()
    var value: String? by Property()
}

class SourceProperties : HtmlGlobalProperties() {
    var src: String? by Property()
    var type: String? by Property()
}

class StyleProperties : HtmlGlobalProperties() {
    var type: String? by Property()
    var scoped: Boolean? by Property()
}

class MenuProperties : HtmlGlobalProperties() {
    var type: String? by Property()
}

class LiProperties : HtmlGlobalProperties() {
    var value: String? by Property()
}

class SvgProperties : ReactProperties() {
    var id: String? by Property()
    var cx: Int? by Property()
    var cy: Int? by Property()
    var d: Int? by Property()
    var fill: String? by Property()
    var fx: Int? by Property()
    var fy: Int? by Property()
    var gradientTransform: Any? by Property()
    var gradientUnits: String? by Property()
    var offset: Int? by Property()
    var points: Any? by Property()
    var r: Int? by Property()
    var rx: Int? by Property()
    var ry: Int? by Property()
    var spreadMethod: String? by Property()
    var stopColor: String? by Property()
    var stopOpacity: Int? by Property()
    var stroke: String? by Property()
    var strokeLinecap: String? by Property()
    var strokeWidth: Int? by Property()
    var transform: String? by Property()
    var version: Int? by Property()
    var viewBox: Any? by Property()
    var x1: Int? by Property()
    var x2: Int? by Property()
    var x: Int? by Property()
    var y1: Int? by Property()
    var y2: Int? by Property()
    var y: Int? by Property()
}
