var Reakt = Reakt || {};

Reakt.createClass = function (spec) {
    // React can't cope with functions defined on prototypes, so forward via simple properties
    // It also messes with 'this', replacing the spec's 'this' with the created component instance.
    // This doesn't play nicely with a class system, so we inject the component into an instance

    function injectComponent(spec, component) {
        var factory = spec.constructor.bind.apply(spec.constructor, [null]);
        var newSpec = new factory();
        newSpec.component = component;
        return newSpec;
    }

    function refValue(ref) {
        return ref ? ref.value : null;
    }

    spec.render = function () {
        return injectComponent(spec, this).render();
    };
    spec.getDefaultProps = function () {
        return injectComponent(spec, this).getDefaultProps();
    };
    spec.getInitialState = function () {
        return injectComponent(spec, this).getInitialState();
    };
    spec.componentWillMount = function () {
        return injectComponent(spec, this).componentWillMount();
    };
    spec.componentDidMount = function () {
        return injectComponent(spec, this).componentDidMount();
    };
    spec.shouldComponentUpdate = function (nextProps, nextState) {
        return injectComponent(spec, this).shouldComponentUpdate_wn2jw4$(refValue(nextProps), refValue(nextState));
    };

    // Wrap raw factory function into an object that we can provide an interface to
    var factory = React.createClass(spec);
    return {
        invoke: function (props, children) {
            return factory(props, children);
        }
    }
};

Reakt.setAttribute = function(thisRef, name, value) {
    if (!thisRef.__attrs) {
        thisRef.__attrs = {};
    }
    thisRef.__attrs[name] = value
};

Reakt.getAttribute = function(thisRef, name) {
    if (!thisRef.__attrs) return null;
    return thisRef.__attrs[name];
};

Reakt.getAttributes = function(thisRef) {
    return thisRef.__attrs;
};

Reakt.flattenProperties = function (props) {
    var flattened = null;
    if (props !== null && props.__attrs !== null) {
        flattened = Reakt.getAttributes(props);
    }
    return flattened;
};

Reakt.uniqueId = function(object) {
    return object.uniqueId();
};

// Generates a unique object id for debugging purposes
//(function() {
//    if ( typeof Object.prototype.uniqueId == "undefined" ) {
//        var id = 0;
//        Object.prototype.uniqueId = function() {
//            if ( typeof this.__uniqueid == "undefined" ) {
//                this.__uniqueid = ++id;
//            }
//            return this.__uniqueid;
//        };
//    }
//})();
