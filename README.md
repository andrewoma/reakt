#### Reakt

Reakt is a [Kotlin](http://kotlinlang.org/) wrapper for facebook's [React](http://facebook.github.io/react/) library.

It includes a working port of the [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc).

To run the example, clone the repository, build the project and open `index.html` from the `todo/build/web` directory.

#### Features
* A completely typesafe wrapper over React.
* A Kotlin-based HTML builder api (no JSX equivalent is required).

#### Comparison
* Component: [Kotlin](todo/src/main/kotlin/todo/components/TodoItem.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/components/TodoItem.react.js)
* Actions: [Kotlin](todo/src/main/kotlin/todo/actions/Actions.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/actions/TodoActions.js)
* Store: [Kotlin](todo/src/main/kotlin/todo/stores/TodoStore.kt)  vs [JavaScript](https://github.com/facebook/flux/blob/master/examples/flux-todomvc/js/stores/TodoStore.js)

#### Building
* Clone repository
```
./gradlew buildWeb
```

* That's it. Now you can open `todo/build/classes/main/index.html` to see the example Todo application.
* Open `build.gradle` in IntelliJ, make project will overwrite generated js, so just refresh in browser

#### Using in your project as a library
* Build reakt.jar (reakt/build/libs)
```
./gradlew reakt:jar
```

* In IntelliJ, you can add this jar as a dependency to your Kotlin(Javascript) project or from command line
```
kotlinc-js -output my-awesome-app.js src -library-files reakt.jar
```
* See Todo sample for how to use gradle build

#### Credits
* [wizzard0's](https://github.com/wizzard0) [React TypeScript Definitions](https://github.com/wizzard0/react-typescript-definitions).
* [Flux TodoMVC Example](https://github.com/facebook/flux/tree/master/examples/flux-todomvc)
* [Kara web framework](http://karaframework.com/) for Kotlin builder examples

#### Status
* Proof of concept

#### Roadmap
* Clean up copyrights and licenses for derivative work
* Review naming conventions (Actions/Events)
* Add properties to the CSS Sytle class
* Support the full React API (refs, renderToString, renderToDocument et al)
* Wrap the test API and support DOM-based tests (probably via Karma)
* Review the visibility of the react.* package

#### License
This project is licensed under a MIT license.
