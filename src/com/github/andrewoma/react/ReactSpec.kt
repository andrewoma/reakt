package com.github.andrewoma.react

/**
 * Interface describing ReactComponentSpec
 */
import org.w3c.dom.Element
import org.w3c.dom.HTMLElement

interface ReactMixin<P, S> {

    /**
     * Invoked immediately before rendering occurs.
     * If you call setState within this method, render() will see the updated state and will be executed only once despite the state change.
     */
    fun componentWillMount(): Unit {
    }

    /**
     * Invoked immediately after rendering occurs.
     * At this point in the lifecycle, the component has a DOM representation which you can access via the rootNode argument or by calling this.getDOMNode().
     * If you want to integrate with other JavaScript frameworks, set timers using setTimeout or setInterval,
     * or send AJAX requests, perform those operations in this method.
     */
    fun componentDidMount(): Unit {
    }

    /**
     * Invoked when a component is receiving new props. This method is not called for the initial render.
     *
     * Use this as an opportunity to react to a prop transition before render() is called by updating the state using this.setState().
     * The old props can be accessed via this.props. Calling this.setState() within this function will not trigger an additional render.
     *
     * @param nextProps the props object that the component will receive
     */
    fun componentWillReceiveProps(nextProps: P): Unit {
    }

    /**
     * Invoked before rendering when new props or state are being received.
     * This method is not called for the initial render or when forceUpdate is used.
     * Use this as an opportunity to return false when you're certain that the transition to the new props and state will not require a component update.
     * By default, shouldComponentUpdate always returns true to prevent subtle bugs when state is mutated in place,
     * but if you are careful to always treat state as immutable and to read only from props and state in render()
     * then you can override shouldComponentUpdate with an implementation that compares the old props and state to their replacements.
     *
     * If performance is a bottleneck, especially with dozens or hundreds of components, use shouldComponentUpdate to speed up your app.
     *
     * @param nextProps the props object that the component will receive
     * @param nextState the state object that the component will receive
     */
    fun shouldComponentUpdate(nextProps: P, nextState: S): Boolean {
        return true
    }

    /**
     * Invoked immediately before rendering when new props or state are being received. This method is not called for the initial render.
     * Use this as an opportunity to perform preparation before an update occurs.
     *
     * @param nextProps the props object that the component has received
     * @param nextState the state object that the component has received
     */
    fun componentWillUpdate(nextProps: P, nextState: S): Unit {
    }

    /**
     * Invoked immediately after updating occurs. This method is not called for the initial render.
     * Use this as an opportunity to operate on the DOM when the component has been updated.
     *
     * @param nextProps the props object that the component has received
     * @param nextState the state object that the component has received
     */
    fun componentDidUpdate(nextProps: P, nextState: S): Unit {
    }

    /**
     * Invoked immediately before a component is unmounted from the DOM.
     * Perform any necessary cleanup in this method, such as invalidating timers or cleaning up any DOM elements that were created in componentDidMount.
     */
    fun componentWillUnmount(): Unit {
    }
}

class Ref<T : Any>(val value: T?)

class RefContent(val realRef: dynamic) {
    fun asComponent(): ReactComponent<Any, Any> = realRef
    fun asDomNode(): HTMLElement = realRef
}

abstract class ReactComponentSpec<P : Any, S : Any>() : ReactMixin<P, S> {
    var component: ReactComponent<Ref<P>, Ref<S>>? = null

    /**
     * The mixins array allows you to use mixins to share behavior among multiple components.
     */
    var mixins: Array<ReactMixin<Any, Any>> = arrayOf()

    /**
     * The displayName string is used in debugging messages. JSX sets this value automatically.
     */
    var displayName: String = ""

    fun refs(refName: String): RefContent {
        return RefContent(component!!.refs[refName]!!)
    }

    var state: S
        get() = component!!.state.value!!
        set(value) = component!!.setState(Ref(value))

    var props: P
        get() = component!!.props.value!!
        set(value) = component!!.setProps(Ref(value), null)

    /**
     * The propTypes object allows you to validate props being passed to your components.
     */
    //var propTypes: PropTypeValidatorOptions

    /**
     * Invoked once before the component is mounted. The return value will be used as the initial value of this.state.
     */
    fun getInitialState(): Ref<S>? {
        val state = initialState()
        return if (state == null) null else Ref(state)
    }

    open fun initialState(): S? {
        return null
    }

    /**
     * The render() method is required. When called, it should examine this.props and this.state and return a single child component.
     * This child component can be either a virtual representation of a native DOM component (such as <div /> or React.DOM.div())
     * or another composite component that you've defined yourself.
     * The render() function should be pure, meaning that it does not modify component state, it returns the same result each time it's invoked,
     * and it does not read from or write to the DOM or otherwise interact with the browser (e.g., by using setTimeout).
     * If you need to interact with the browser, perform your work in componentDidMount() or the other lifecycle methods instead.
     * Keeping render() pure makes server rendering more practical and makes components easier to think about.
     */
    abstract fun render(): ReactElement<P>?

    // DefaultProps don't work very well as Kotlin set all the keys on an object and makes set versus null ambiguous
    // So prevent the usage.
    /**
     * Invoked once when the component is mounted.
     * Values in the mapping will be set on this.props if that prop is not specified by the parent component (i.e. using an in check).
     * This method is invoked before getInitialState and therefore cannot rely on this.state or use this.setState.
     */
    fun getDefaultProps(): Ref<P>? {
        return null
    }
}

/**
 * Component classses created by createClass() return instances of ReactComponent when called.
 * Most of the time when you're using React you're either creating or consuming these component objects.
 */
@native
interface ReactComponent<P, S> {

    val refs: dynamic

    val state: S

    val props: P

    /**
     * If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
     * This method is useful for reading values out of the DOM, such as form field values and performing DOM measurements.
     */
    fun getDOMNode(): Element

    /**
     * When you're integrating with an external JavaScript application you may want to signal a change to a React component rendered with renderComponent().
     * Simply call setProps() to change its properties and trigger a re-render.
     *
     * @param nextProps the object that will be merged with the component's props
     * @param callback an optional callback function that is executed once setProps is completed.
     */
    fun setProps(nextProps: P, callback: (() -> Unit)?): Unit

    /**
     * Like setProps() but deletes any pre-existing props instead of merging the two objects.
     *
     * @param nextProps the object that will replace the component's props
     * @param callback an optional callback function that is executed once replaceProps is completed.
     */
    fun replaceProps(nextProps: P, callback: () -> Unit): Unit

    /**
     * Transfer properties from this component to a target component that have not already been set on the target component.
     * After the props are updated, targetComponent is returned as a convenience.
     *
     * @param target the component that will receive the props
     */
    fun <C : ReactComponent<P, Any>> transferPropsTo(target: C): C

    /**
     * Merges nextState with the current state.
     * This is the primary method you use to trigger UI updates from event handlers and server request callbacks.
     * In addition, you can supply an optional callback function that is executed once setState is completed.
     *
     * @param nextState the object that will be merged with the component's state
     * @param callback an optional callback function that is executed once setState is completed.
     */
    fun setState(nextState: S, callback: () -> Unit = {}): Unit

    /**
     * Like setState() but deletes any pre-existing state keys that are not in nextState.
     *
     * @param nextState the object that will replace the component's state
     * @param callback an optional callback function that is executed once replaceState is completed.
     */
    fun replaceState(nextState: S, callback: () -> Unit): Unit

    /**
     * If your render() method reads from something other than this.props or this.state,
     * you'll need to tell React when it needs to re-run render() by calling forceUpdate().
     * You'll also need to call forceUpdate() if you mutate this.state directly.
     * Calling forceUpdate() will cause render() to be called on the component and its children,
     * but React will still only update the DOM if the markup changes.
     * Normally you should try to avoid all uses of forceUpdate() and only read from this.props and this.state in render().
     * This makes your application much simpler and more efficient.
     *
     * @param callback an optional callback that is executed once forceUpdate is completed.
     */
    fun forceUpdate(callback: () -> Unit): Unit
}

@native
interface ReactComponentFactory<P : Any, S : Any> {
    operator fun invoke(properties: Ref<P>?, vararg children: Any?): ReactComponent<Ref<P>, Ref<S>>
}

@native
interface ReactElement<P> {
}