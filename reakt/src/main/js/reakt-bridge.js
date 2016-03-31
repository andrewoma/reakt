var Reakt = Reakt || {};

Reakt.createClass = function (spec) {
    function refValue(ref) {
        return ref ? ref.value : null;
    }

    var reactComponentSpec = {};

    function KotlinComponentConstructor(reactComponent) {
        var newKotlinComponentSpecFactory = spec.constructor.bind.apply(spec.constructor, [null]);
        var newKotlinComponentSpec = new newKotlinComponentSpecFactory();
        newKotlinComponentSpec.component = reactComponent;
        reactComponent.kotlinComponent = newKotlinComponentSpec;
    }

    reactComponentSpec.getDefaultProps = function () {
        return spec.getDefaultProps();
    };

    reactComponentSpec.getInitialState = function() {
        KotlinComponentConstructor(this)
        return this.kotlinComponent.getInitialState()
    }

    reactComponentSpec.componentWillMount = function() {
        return this.kotlinComponent.componentWillMount();
    }

    reactComponentSpec.componentDidMount = function () {
        return this.kotlinComponent.componentDidMount();
    };

    reactComponentSpec.render = function() {
        return this.kotlinComponent.render();
    }

    reactComponentSpec.shouldComponentUpdate = function (nextProps, nextState) {
        return this.kotlinComponent.shouldComponentUpdate_wn2jw4$(refValue(nextProps), refValue(nextState));
    };

    reactComponentSpec.componentWillUnmount = function () {
        return this.kotlinComponent.componentWillUnmount();
    };

    var reactClass = React.createClass(reactComponentSpec);
    var factory = React.createFactory(reactClass);

    return {
            invoke: function (props, children) {
                return factory(props, children);
            }
         }
};

Reakt.setProperty = function(thisRef, name, value) {
    if (!thisRef.__props) {
        thisRef.__props = {};
    }
    thisRef.__props[name] = value
};

Reakt.getProperty = function(thisRef, name) {
    if (!thisRef.__props) return null;
    return thisRef.__props[name];
};

Reakt.getProperties = function(thisRef) {
    return thisRef.__props;
};

Reakt.flattenProperties = function (props) {
    var flattened = null;
    if (props !== null && props.__props !== null) {
        flattened = Reakt.getProperties(props);
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
