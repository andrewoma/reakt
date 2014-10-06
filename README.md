#### Reakt

Reakt is a [Kotlin](http://kotlinlang.org/) wrapper for facebook's [React](http://facebook.github.io/react/) library.

It includes a working port of the [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc).

To run the example, clone the repository and open `index.html` from the `todo` directory.

#### Features
* A completely typesafe wrapper over React.
* A Kotlin-based HTML builder api (no JSX equivalent is required).

#### Comparison
* Component: [Kotlin](https://github.com/andrewoma/reakt/blob/master/src/todo/components/TodoItem.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js)
* Actions: [Kotlin](https://github.com/andrewoma/reakt/blob/master/src/todo/actions/Actions.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js)  
* Store: [Kotlin](https://github.com/andrewoma/reakt/blob/master/src/todo/stores/TodoStore.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/stores/TodoStore.js)

#### Building
* Currently, it can only be built using IntelliJ IDEA.

#### Credits
* [wizzard0's](https://github.com/wizzard0) [React TypeScript Definitions](https://github.com/wizzard0/react-typescript-definitions).
* [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
* [Kara web framework](http://karaframework.com/) for Kotlin builder examples

#### Status
* Proof of concept

#### Roadmap
* Clean up copyrights and licenses for derivative work
* Review naming conventions (remove mixtures of Attributes/Properites, Actions/Events)
* Add attributes to the CSS Sytle class
* Support the full React API (refs, renderToString, renderToDocument et al)
* Build as a library and separate out the todo example as a user of the library
* Wrap the test API and support DOM-based tests (probably via Karma)
* Review the visibility of the react.* package

#### License
This project is licensed under a MIT license.
