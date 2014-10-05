package com.github.andrewoma.react

import kotlin.js.dom.html.Window
import kotlin.js.dom.html.Event

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

trait SyntheticEvent {
    var bubbles: Boolean
    var cancelable: Boolean
    var currentTarget: EventTarget
    var defaultPrevented: Boolean
    var eventPhase: Int
    var nativeEvent: Event
    var `type`: String
    var timeStamp: Date
    fun preventDefault(): Unit
    fun stopPropagation(): Unit
}

trait ClipboardEvent : SyntheticEvent {
    var clipboardData: DataTransfer
}

trait KeyboardEvent : SyntheticEvent {
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

trait FocusEvent : SyntheticEvent {
    var relatedTarget: EventTarget
}

trait FormEvent : SyntheticEvent {
}

trait MouseEvent : SyntheticEvent {
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

trait TouchEvent : SyntheticEvent {
    var altKey: Boolean
    var changedTouches: TouchEvent
    var ctrlKey: Boolean
    var metaKey: Boolean
    var shiftKey: Boolean
    var targetTouches: Any//DOMTouchList
    var touches: Any//DOMTouchList
}

trait UIEvent : SyntheticEvent {
    var detail: Int
    var view: Window
}

trait WheelEvent {
    var deltaX: Int
    var deltaMode: Int
    var deltaY: Int
    var deltaZ: Int
}

open class ReactAttributes {
    open var key: String? by Attribute()
    open var ref: String? by Attribute()
    var onCopy: ((event: ClipboardEvent) -> Unit)? by Attribute()
    var onCut: ((event: ClipboardEvent) -> Unit)? by Attribute()
    var onPaste: ((event: ClipboardEvent) -> Unit)? by Attribute()
    var onKeyDown: ((event: KeyboardEvent) -> Unit)? by Attribute()
    var onKeyPress: ((event: KeyboardEvent) -> Unit)? by Attribute()
    var onKeyUp: ((event: KeyboardEvent) -> Unit)? by Attribute()
    var onFocus: ((event: FocusEvent) -> Unit)? by Attribute()
    var onBlur: ((event: FocusEvent) -> Unit)? by Attribute()
    var onChange: ((event: FormEvent) -> Unit)? by Attribute()
    var onInput: ((event: FormEvent) -> Unit)? by Attribute()
    var onSubmit: ((event: FormEvent) -> Unit)? by Attribute()
    var onClick: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDoubleClick: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDrag: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragEnd: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragEnter: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragExit: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragLeave: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragOver: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDragStart: ((event: MouseEvent) -> Unit)? by Attribute()
    var onDrop: ((event: MouseEvent) -> Unit)? by Attribute()
    var onMouseDown: ((event: MouseEvent) -> Unit)? by Attribute()
    var onMouseEnter: ((event: MouseEvent) -> Unit)? by Attribute()
    var onMouseLeave: ((event: MouseEvent) -> Unit)? by Attribute()
    var onMouseMove: ((event: MouseEvent) -> Unit)? by Attribute()
    var onMouseUp: ((event: MouseEvent) -> Unit)? by Attribute()
    var onTouchCancel: ((event: TouchEvent) -> Unit)? by Attribute()
    var onTouchEnd: ((event: TouchEvent) -> Unit)? by Attribute()
    var onTouchMove: ((event: TouchEvent) -> Unit)? by Attribute()
    var onTouchStart: ((event: TouchEvent) -> Unit)? by Attribute()
    var onScroll: ((event: UIEvent) -> Unit)? by Attribute()
    var onWheel: ((event: WheelEvent) -> Unit)? by Attribute()
}

open class HTMLGlobalAttributes : ReactAttributes() {
    override var key: String? by Attribute()
    var accessKey: String? by Attribute()
    var className: String? by Attribute()
    var contentEditable: String? by Attribute()
    var contextMenu: String? by Attribute()
    var dir: String? by Attribute()
    var draggable: Boolean? by Attribute()
    var hidden: Boolean? by Attribute()
    var id: String? by Attribute()
    var lang: String? by Attribute()
    var spellCheck: Boolean? by Attribute()
    var role: String? by Attribute()
    var scrollLeft: Int? by Attribute()
    var scrollTop: Int? by Attribute()
    var style: Style? by Attribute()
}

class FormAttributes : HTMLGlobalAttributes() {
    var accept: String? by Attribute()
    var action: String? by Attribute()
    var autoCapitalize: String? by Attribute()
    var autoComplete: String? by Attribute()
    var encType: String? by Attribute()
    var method: String? by Attribute()
    var name: String? by Attribute()
    var target: String? by Attribute()
}

class InputAttributes : HTMLGlobalAttributes() {
    var accept: String? by Attribute()
    var alt: String? by Attribute()
    var autoCapitalize: String? by Attribute()
    var autoComplete: String? by Attribute()
    var autoFocus: Boolean? by Attribute()
    var checked: Any? by Attribute()
    var defaultValue: Any? by Attribute()
    var disabled: Boolean? by Attribute()
    var form: String? by Attribute()
    var height: Int? by Attribute()
    var list: String? by Attribute()
    var max: Int? by Attribute()
    var maxLength: Int? by Attribute()
    var min: Int? by Attribute()
    var multiple: Boolean? by Attribute()
    var name: String? by Attribute()
    var pattern: String? by Attribute()
    var placeholder: String? by Attribute()
    var readOnly: Boolean? by Attribute()
    var required: Boolean? by Attribute()
    var size: Int? by Attribute()
    var src: String? by Attribute()
    var step: Int? by Attribute()
    var `type`: String? by Attribute()
    var value: String? by Attribute()
    var width: Int? by Attribute()
}

class IframeAttributes : HTMLGlobalAttributes() {
    var allowFullScreen: Boolean? by Attribute()
    var allowTransparency: Boolean? by Attribute()
    var frameBorder: Int? by Attribute()
    var height: Int? by Attribute()
    var name: String? by Attribute()
    var src: String? by Attribute()
    var width: Int? by Attribute()
}

class AppletAttributes : HTMLGlobalAttributes() {
    var alt: String? by Attribute()
}

class AreaAttributes : HTMLGlobalAttributes() {
    var alt: String? by Attribute()
    var href: String? by Attribute()
    var rel: String? by Attribute()
    var target: String? by Attribute()
}

class ImgAttributes : HTMLGlobalAttributes() {
    var alt: String? by Attribute()
    var height: Int? by Attribute()
    var src: String? by Attribute()
    var width: Int? by Attribute()
}

class ButtonAttributes : HTMLGlobalAttributes() {
    var autoFocus: Boolean? by Attribute()
    var disabled: Boolean? by Attribute()
    var form: String? by Attribute()
    var name: String? by Attribute()
    var `type`: String? by Attribute()
    var value: String? by Attribute()
}

class KeygenAttributes : HTMLGlobalAttributes() {
    var autoFocus: Boolean? by Attribute()
    var form: String? by Attribute()
    var name: String? by Attribute()
}

class SelectAttributes : HTMLGlobalAttributes() {
    var autoFocus: Boolean? by Attribute()
    var disabled: Boolean? by Attribute()
    var form: String? by Attribute()
    var multiple: Boolean? by Attribute()
    var name: String? by Attribute()
    var required: Boolean? by Attribute()
    var size: Int? by Attribute()
}

class TextareaAttributes : HTMLGlobalAttributes() {
    var autoFocus: Boolean? by Attribute()
    var form: String? by Attribute()
    var maxLength: String? by Attribute()
    var name: String? by Attribute()
    var placeholder: String? by Attribute()
    var readOnly: String? by Attribute()
    var required: Boolean? by Attribute()
}

class AudioAttributes : HTMLGlobalAttributes() {
    var autoPlay: Boolean? by Attribute()
    var controls: Boolean? by Attribute()
    var loop: Boolean? by Attribute()
    var preload: String? by Attribute()
    var src: String? by Attribute()
}

class VideoAttributes : HTMLGlobalAttributes() {
    var autoPlay: Boolean? by Attribute()
    var controls: Boolean? by Attribute()
    var height: Int? by Attribute()
    var loop: Boolean? by Attribute()
    var poster: String? by Attribute()
    var preload: String? by Attribute()
    var src: String? by Attribute()
    var width: Int? by Attribute()
}

class TableAttributes : HTMLGlobalAttributes() {
    var cellPadding: Int? by Attribute()
    var cellSpacing: Int? by Attribute()
}

class MetaAttributes : HTMLGlobalAttributes() {
    var charSet: String? by Attribute()
    var content: String? by Attribute()
    var httpEquiv: String? by Attribute()
    var name: String? by Attribute()
}

class ScriptAttributes : HTMLGlobalAttributes() {
    var charSet: String? by Attribute()
    var src: String? by Attribute()
    var `type`: String? by Attribute()
}

class CommandAttributes : HTMLGlobalAttributes() {
    var checked: Boolean? by Attribute()
    var icon: String? by Attribute()
    var radioGroup: String? by Attribute()
    var `type`: String? by Attribute()
}

class TdAttributes : HTMLGlobalAttributes() {
    var colSpan: Int? by Attribute()
    var rowSpan: Int? by Attribute()
}

class ThAttributes : HTMLGlobalAttributes() {
    var colSpan: Int? by Attribute()
    var rowSpan: Int? by Attribute()
}

class ObjectAttributes : HTMLGlobalAttributes() {
    var data: String? by Attribute()
    var form: String? by Attribute()
    var height: Int? by Attribute()
    var name: String? by Attribute()
    var `type`: String? by Attribute()
    var width: Int? by Attribute()
    var wmode: String? by Attribute()
}

class DelAttributes : HTMLGlobalAttributes() {
    var dateTime: Date? by Attribute()
}

class InsAttributes : HTMLGlobalAttributes() {
    var dateTime: Date? by Attribute()
}

class TimeAttributes : HTMLGlobalAttributes() {
    var dateTime: Date? by Attribute()
}

class FieldsetAttributes : HTMLGlobalAttributes() {
    var form: String? by Attribute()
    var name: String? by Attribute()
}

class LabelAttributes : HTMLGlobalAttributes() {
    var form: String? by Attribute()
    var htmlFor: String? by Attribute()
}

class MeterAttributes : HTMLGlobalAttributes() {
    var form: String? by Attribute()
    var max: Int? by Attribute()
    var min: Int? by Attribute()
    var value: Int? by Attribute()
}

class OutputAttributes : HTMLGlobalAttributes() {
    var form: String? by Attribute()
    var htmlFor: String? by Attribute()
    var name: String? by Attribute()
}

class ProgressAttributes : HTMLGlobalAttributes() {
    var form: String? by Attribute()
    var max: Int? by Attribute()
    var value: Int? by Attribute()
}

class CanvasAttributes : HTMLGlobalAttributes() {
    var height: Int? by Attribute()
    var width: Int? by Attribute()
}

class EmbedAttributes : HTMLGlobalAttributes() {
    var height: Int? by Attribute()
    var src: String? by Attribute()
    var `type`: String? by Attribute()
    var width: Int? by Attribute()
}

class AAttributes : HTMLGlobalAttributes() {
    var href: String? by Attribute()
    var rel: String? by Attribute()
    var target: String? by Attribute()
}

class BaseAttributes : HTMLGlobalAttributes() {
    var href: String? by Attribute()
    var target: String? by Attribute()
}

class LinkAttributes : HTMLGlobalAttributes() {
    var href: String? by Attribute()
    var rel: String? by Attribute()
}

class TrackAttributes : HTMLGlobalAttributes() {
    var label: String? by Attribute()
    var src: String? by Attribute()
}

class BgsoundAttributes : HTMLGlobalAttributes() {
    var loop: Boolean? by Attribute()
}

class MarqueeAttributes : HTMLGlobalAttributes() {
    var loop: Boolean? by Attribute()
}

class MapAttributes : HTMLGlobalAttributes() {
    var name: String? by Attribute()
}

class ParamAttributes : HTMLGlobalAttributes() {
    var name: String? by Attribute()
    var value: String? by Attribute()
}

class OptionAttributes : HTMLGlobalAttributes() {
    var selected: Boolean? by Attribute()
    var value: String? by Attribute()
}

class SourceAttributes : HTMLGlobalAttributes() {
    var src: String? by Attribute()
    var `type`: String? by Attribute()
}

class StyleAttributes : HTMLGlobalAttributes() {
    var `type`: String? by Attribute()
}

class MenuAttributes : HTMLGlobalAttributes() {
    var `type`: String? by Attribute()
}

class LiAttributes : HTMLGlobalAttributes() {
    var value: String? by Attribute()
}

class SVGAttributes : ReactAttributes() {
    var id: String? by Attribute()
    var cx: Int? by Attribute()
    var cy: Int? by Attribute()
    var d: Int? by Attribute()
    var fill: String? by Attribute()
    var fx: Int? by Attribute()
    var fy: Int? by Attribute()
    var gradientTransform: Any? by Attribute()
    var gradientUnits: String? by Attribute()
    var offset: Int? by Attribute()
    var points: Any? by Attribute()
    var r: Int? by Attribute()
    var rx: Int? by Attribute()
    var ry: Int? by Attribute()
    var spreadMethod: String? by Attribute()
    var stopColor: String? by Attribute()
    var stopOpacity: Int? by Attribute()
    var stroke: String? by Attribute()
    var strokeLinecap: String? by Attribute()
    var strokeWidth: Int? by Attribute()
    var transform: String? by Attribute()
    var version: Int? by Attribute()
    var viewBox: Any? by Attribute()
    var x1: Int? by Attribute()
    var x2: Int? by Attribute()
    var x: Int? by Attribute()
    var y1: Int? by Attribute()
    var y2: Int? by Attribute()
    var y: Int? by Attribute()
}
