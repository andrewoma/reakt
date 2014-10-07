(function (Kotlin) {
  'use strict';
  var _ = Kotlin.defineRootPackage(null, /** @lends _ */ {
    todo: Kotlin.definePackage(null, /** @lends _.todo */ {
      main: function (args) {
        _.com.github.andrewoma.react.log.info_9mqe4v$(['Starting Todo app']);
        _.com.github.andrewoma.react.react.renderComponent_vbpb6g$(_.todo.components.createTodoApp(), document.getElementById('todoapp'));
      },
      actions: Kotlin.definePackage(function () {
        this.todoActions = new _.todo.actions.TodoActions();
      }, /** @lends _.todo.actions */ {
        TodoAction: Kotlin.createTrait(null),
        Create: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, function (text) {
          this.text = text;
        }),
        Update: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, function (id, text) {
          this.id = id;
          this.text = text;
        }),
        UndoComplete: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, function (id) {
          this.id = id;
        }),
        Complete: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, function (id) {
          this.id = id;
        }),
        ToggleCompleteAll: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, null),
        Destroy: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, function (id) {
          this.id = id;
        }),
        DestroyCompleted: Kotlin.createClass(function () {
          return [_.todo.actions.TodoAction];
        }, null),
        TodoActions: Kotlin.createClass(null, null, /** @lends _.todo.actions.TodoActions.prototype */ {
          viewAction: function (action) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['action', action]);
            _.todo.dispatcher.todoDispatcher.dispatch(action);
          },
          create: function (text) {
            this.viewAction(new _.todo.actions.Create(text));
          },
          updateText: function (id, text) {
            this.viewAction(new _.todo.actions.Update(id, text));
          },
          toggleComplete: function (todo) {
            if (todo.complete) {
              this.viewAction(new _.todo.actions.UndoComplete(todo.id));
            }
             else {
              this.viewAction(new _.todo.actions.Complete(todo.id));
            }
          },
          toggleCompleteAll: function () {
            this.viewAction(new _.todo.actions.ToggleCompleteAll());
          },
          destroy: function (id) {
            this.viewAction(new _.todo.actions.Destroy(id));
          },
          destroyCompleted: function () {
            this.viewAction(new _.todo.actions.DestroyCompleted());
          }
        })
      }),
      components: Kotlin.definePackage(null, /** @lends _.todo.components */ {
        FooterProps: Kotlin.createClass(null, function (todos) {
          this.todos = todos;
        }, /** @lends _.todo.components.FooterProps.prototype */ {
          component1: function () {
            return this.todos;
          },
          copy: function (todos) {
            return new _.todo.components.FooterProps(todos === void 0 ? this.todos : todos);
          },
          toString: function () {
            return 'FooterProps(todos=' + Kotlin.toString(this.todos) + ')';
          },
          hashCode: function () {
            var result = -1249464522;
            result = result * 31 + Kotlin.hashCode(this.todos) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.todos, other.todos)));
          }
        }),
        Footer: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, /** @lends _.todo.components.Footer.prototype */ {
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['Footer.render', this.props]);
            if (this.props.todos.isEmpty())
              return;
            var completed = _.todo.stores.completedCount(this.props.todos);
            var itemsLeft = this.props.todos.size() - completed;
            var itemsLeftPhrase = (itemsLeft === 1 ? ' item ' : ' items ') + 'left';
            _.com.github.andrewoma.react.footer_cnsq9w$($receiver, _.todo.components.Footer.render_sx5o3u$f, _.todo.components.Footer.render_sx5o3u$f_0(itemsLeft, itemsLeftPhrase, completed, this));
          },
          onClearCompletedClick: function () {
            _.todo.actions.todoActions.destroyCompleted();
          }
        }, /** @lends _.todo.components.Footer */ {
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.Footer());
            });
          },
          render_sx5o3u$f: function () {
            this.id = 'footer';
          },
          f: function () {
            this.id = 'todo-count';
          },
          f_0: function (itemsLeft) {
            return function () {
              _.com.github.andrewoma.react.text_8z0lzh$(this, itemsLeft.toString());
            };
          },
          f_1: function (itemsLeft, itemsLeftPhrase) {
            return function () {
              _.com.github.andrewoma.react.text_8z0lzh$(_.com.github.andrewoma.react.strong_cnsq9w$(this, void 0, _.todo.components.Footer.f_0(itemsLeft)), itemsLeftPhrase);
            };
          },
          f_2: function (this$Footer) {
            return function (it) {
              this$Footer.onClearCompletedClick();
            };
          },
          f_3: function (this$Footer) {
            return function () {
              this.id = 'clear-completed';
              this.onClick = _.todo.components.Footer.f_2(this$Footer);
            };
          },
          f_4: function (completed) {
            return function () {
              _.com.github.andrewoma.react.text_8z0lzh$(this, 'Clear completed (' + completed + ')');
            };
          },
          render_sx5o3u$f_0: function (itemsLeft, itemsLeftPhrase, completed, this$Footer) {
            return function () {
              _.com.github.andrewoma.react.span_cnsq9w$(this, _.todo.components.Footer.f, _.todo.components.Footer.f_1(itemsLeft, itemsLeftPhrase));
              if (completed !== 0) {
                _.com.github.andrewoma.react.button_zacx7s$(this, _.todo.components.Footer.f_3(this$Footer), _.todo.components.Footer.f_4(completed));
              }
            };
          }
        }),
        todoFooter$f: function (props) {
          return function (it) {
            return _.todo.components.Footer.object.factory.invoke(new _.com.github.andrewoma.react.Ref(props));
          };
        },
        todoFooter: function ($receiver, props) {
          return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.todo.components.todoFooter$f(props)));
        },
        Header: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, /** @lends _.todo.components.Header.prototype */ {
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['Header.render']);
            _.com.github.andrewoma.react.header_cnsq9w$($receiver, _.todo.components.Header.render_sx5o3u$f, _.todo.components.Header.render_sx5o3u$f_0(this));
          },
          onSave: function (text) {
            if (text.trim().length !== 0) {
              _.todo.actions.todoActions.create(text);
            }
          }
        }, /** @lends _.todo.components.Header */ {
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.Header());
            });
          },
          render_sx5o3u$f: function () {
            this.id = 'header';
          },
          f: function () {
            _.com.github.andrewoma.react.text_8z0lzh$(this, 'todos');
          },
          f_0: function (this$Header) {
            return function (it) {
              this$Header.onSave(it);
            };
          },
          render_sx5o3u$f_0: function (this$Header) {
            return function () {
              _.com.github.andrewoma.react.h1_cnsq9w$(this, void 0, _.todo.components.Header.f);
              _.todo.components.todoTextInput(this, new _.todo.components.TodoTextInputProps(void 0, 'new-todo', 'What needs to be done?', void 0, _.todo.components.Header.f_0(this$Header)));
            };
          }
        }),
        todoHeader$f: function (it) {
          return _.todo.components.Header.object.factory.invoke(new _.com.github.andrewoma.react.Ref(null));
        },
        todoHeader: function ($receiver) {
          return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.todo.components.todoHeader$f));
        },
        MainSectionProps: Kotlin.createClass(null, function (todos) {
          this.todos = todos;
        }, /** @lends _.todo.components.MainSectionProps.prototype */ {
          component1: function () {
            return this.todos;
          },
          copy: function (todos) {
            return new _.todo.components.MainSectionProps(todos === void 0 ? this.todos : todos);
          },
          toString: function () {
            return 'MainSectionProps(todos=' + Kotlin.toString(this.todos) + ')';
          },
          hashCode: function () {
            var result = -1326077981;
            result = result * 31 + Kotlin.hashCode(this.todos) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.todos, other.todos)));
          }
        }),
        MainSection: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, /** @lends _.todo.components.MainSection.prototype */ {
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['MainSection.render', this.props]);
            if (this.props.todos.size() < 1)
              return;
            _.com.github.andrewoma.react.section_cnsq9w$($receiver, _.todo.components.MainSection.render_sx5o3u$f, _.todo.components.MainSection.render_sx5o3u$f_0(this));
          },
          onToggleCompleteAll: function () {
            _.todo.actions.todoActions.toggleCompleteAll();
          }
        }, /** @lends _.todo.components.MainSection */ {
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.MainSection());
            });
          },
          render_sx5o3u$f: function () {
            this.id = 'main';
          },
          f: function (this$MainSection) {
            return function (it) {
              this$MainSection.onToggleCompleteAll();
            };
          },
          f_0: function (this$MainSection) {
            return function () {
              this.id = 'toggle-all';
              this.type = 'checkbox';
              this.onChange = _.todo.components.MainSection.f(this$MainSection);
              this.checked = _.todo.stores.areAllCompleted(this$MainSection.props.todos) ? 'checked' : '';
            };
          },
          f_1: function () {
            this.htmlFor = 'toggle-all';
          },
          f_2: function () {
            _.com.github.andrewoma.react.text_8z0lzh$(this, 'Mark all as complete');
          },
          f_3: function () {
            this.id = 'todo-list';
          },
          f_4: function (this$MainSection) {
            return function () {
              var tmp$0;
              tmp$0 = this$MainSection.props.todos.iterator();
              while (tmp$0.hasNext()) {
                var todo = tmp$0.next();
                _.todo.components.todoItem(this, new _.todo.components.TodoItemProps(todo.id, todo));
              }
            };
          },
          render_sx5o3u$f_0: function (this$MainSection) {
            return function () {
              _.com.github.andrewoma.react.input_gcvk32$(this, _.todo.components.MainSection.f_0(this$MainSection));
              _.com.github.andrewoma.react.label_9jwnu0$(this, _.todo.components.MainSection.f_1, _.todo.components.MainSection.f_2);
              _.com.github.andrewoma.react.ul_cnsq9w$(this, _.todo.components.MainSection.f_3, _.todo.components.MainSection.f_4(this$MainSection));
            };
          }
        }),
        todoMainSection$f: function (props) {
          return function (it) {
            return _.todo.components.MainSection.object.factory.invoke(new _.com.github.andrewoma.react.Ref(props));
          };
        },
        todoMainSection: function ($receiver, props) {
          return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.todo.components.todoMainSection$f(props)));
        },
        TodoAppState: Kotlin.createClass(null, function (todos) {
          this.todos = todos;
        }, /** @lends _.todo.components.TodoAppState.prototype */ {
          component1: function () {
            return this.todos;
          },
          copy: function (todos) {
            return new _.todo.components.TodoAppState(todos === void 0 ? this.todos : todos);
          },
          toString: function () {
            return 'TodoAppState(todos=' + Kotlin.toString(this.todos) + ')';
          },
          hashCode: function () {
            var result = 838450901;
            result = result * 31 + Kotlin.hashCode(this.todos) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.todos, other.todos)));
          }
        }),
        TodoApp: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
          this.listener = _.todo.components.TodoApp.TodoApp$f(this);
        }, /** @lends _.todo.components.TodoApp.prototype */ {
          initialState: function () {
            return new _.todo.components.TodoAppState(_.todo.stores.todoStore.getAll());
          },
          componentDidMount: function () {
            _.todo.stores.todoStore.addChangeListener(this.listener);
          },
          componentWillMount: function () {
            _.todo.stores.todoStore.removeChangeListener(this.listener);
          },
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.div_cnsq9w$($receiver, void 0, _.todo.components.TodoApp.render_sx5o3u$f(this));
          },
          onChange: function () {
            this.state = new _.todo.components.TodoAppState(_.todo.stores.todoStore.getAll());
          }
        }, /** @lends _.todo.components.TodoApp */ {
          TodoApp$f: function (this$TodoApp) {
            return function (it) {
              this$TodoApp.onChange();
            };
          },
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.TodoApp());
            });
          },
          render_sx5o3u$f: function (this$TodoApp) {
            return function () {
              _.todo.components.todoHeader(this);
              _.todo.components.todoMainSection(this, new _.todo.components.MainSectionProps(this$TodoApp.state.todos));
              _.todo.components.todoFooter(this, new _.todo.components.FooterProps(this$TodoApp.state.todos));
            };
          }
        }),
        createTodoApp: function () {
          return _.todo.components.TodoApp.object.factory.invoke(new _.com.github.andrewoma.react.Ref(null));
        },
        TodoItemProps: Kotlin.createClass(null, function (key, todo) {
          this.key = key;
          this.todo = todo;
        }, /** @lends _.todo.components.TodoItemProps.prototype */ {
          component1: function () {
            return this.key;
          },
          component2: function () {
            return this.todo;
          },
          copy: function (key, todo) {
            return new _.todo.components.TodoItemProps(key === void 0 ? this.key : key, todo === void 0 ? this.todo : todo);
          },
          toString: function () {
            return 'TodoItemProps(key=' + Kotlin.toString(this.key) + (', todo=' + Kotlin.toString(this.todo)) + ')';
          },
          hashCode: function () {
            var result = 862721752;
            result = result * 31 + Kotlin.hashCode(this.key) | 0;
            result = result * 31 + Kotlin.hashCode(this.todo) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.todo, other.todo))));
          }
        }),
        TodoItemState: Kotlin.createClass(null, function (isEditing) {
          if (isEditing === void 0)
            isEditing = false;
          this.isEditing = isEditing;
        }, /** @lends _.todo.components.TodoItemState.prototype */ {
          component1: function () {
            return this.isEditing;
          },
          copy: function (isEditing) {
            return new _.todo.components.TodoItemState(isEditing === void 0 ? this.isEditing : isEditing);
          },
          toString: function () {
            return 'TodoItemState(isEditing=' + Kotlin.toString(this.isEditing) + ')';
          },
          hashCode: function () {
            var result = 865538553;
            result = result * 31 + Kotlin.hashCode(this.isEditing) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.isEditing, other.isEditing)));
          }
        }),
        TodoItem: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, /** @lends _.todo.components.TodoItem.prototype */ {
          initialState: function () {
            return new _.todo.components.TodoItemState(false);
          },
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['TodoItem.render', this.props, this.state]);
            var classes = _.com.github.andrewoma.react.classSet([Kotlin.modules['stdlib'].kotlin.to_l1ob02$('completed', this.props.todo.complete), Kotlin.modules['stdlib'].kotlin.to_l1ob02$('editing', this.state.isEditing)]);
            _.com.github.andrewoma.react.li_nvwzjh$($receiver, _.todo.components.TodoItem.render_sx5o3u$f(classes, this), _.todo.components.TodoItem.render_sx5o3u$f_0(this));
          },
          onToggleComplete: function () {
            _.todo.actions.todoActions.toggleComplete(this.props.todo);
          },
          onDoubleClick: function () {
            this.state = this.state.copy(true);
          },
          onSave: function (value) {
            _.todo.actions.todoActions.updateText(this.props.todo.id, value);
            this.state = this.state.copy(false);
          },
          onDestroyClick: function () {
            _.todo.actions.todoActions.destroy(this.props.todo.id);
          },
          shouldComponentUpdate_wn2jw4$: function (nextProps, nextState) {
            return !(this.props.todo === nextProps.todo && this.state === nextState);
          }
        }, /** @lends _.todo.components.TodoItem */ {
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.TodoItem());
            });
          },
          render_sx5o3u$f: function (classes, this$TodoItem) {
            return function () {
              this.className = classes;
              this.key = this$TodoItem.props.todo.id;
            };
          },
          f: function () {
            this.className = 'view';
          },
          f_0: function (this$TodoItem) {
            return function (it) {
              this$TodoItem.onToggleComplete();
            };
          },
          f_1: function (this$TodoItem) {
            return function () {
              this.className = 'toggle';
              this.type = 'checkbox';
              this.checked = this$TodoItem.props.todo.complete;
              this.onChange = _.todo.components.TodoItem.f_0(this$TodoItem);
            };
          },
          f_2: function (this$TodoItem) {
            return function (it) {
              this$TodoItem.onDoubleClick();
            };
          },
          f_3: function (this$TodoItem) {
            return function () {
              this.onDoubleClick = _.todo.components.TodoItem.f_2(this$TodoItem);
            };
          },
          f_4: function (this$TodoItem) {
            return function () {
              _.com.github.andrewoma.react.text_8z0lzh$(this, this$TodoItem.props.todo.text);
            };
          },
          f_5: function (this$TodoItem) {
            return function (it) {
              this$TodoItem.onDestroyClick();
            };
          },
          f_6: function (this$TodoItem) {
            return function () {
              this.className = 'destroy';
              this.onClick = _.todo.components.TodoItem.f_5(this$TodoItem);
            };
          },
          f_7: function (this$TodoItem) {
            return function () {
              _.com.github.andrewoma.react.input_gcvk32$(this, _.todo.components.TodoItem.f_1(this$TodoItem));
              _.com.github.andrewoma.react.label_9jwnu0$(this, _.todo.components.TodoItem.f_3(this$TodoItem), _.todo.components.TodoItem.f_4(this$TodoItem));
              _.com.github.andrewoma.react.button_zacx7s$(this, _.todo.components.TodoItem.f_6(this$TodoItem));
            };
          },
          f_8: function (this$TodoItem) {
            return function (it) {
              this$TodoItem.onSave(it);
            };
          },
          render_sx5o3u$f_0: function (this$TodoItem) {
            return function () {
              _.com.github.andrewoma.react.div_cnsq9w$(this, _.todo.components.TodoItem.f, _.todo.components.TodoItem.f_7(this$TodoItem));
              if (this$TodoItem.state.isEditing) {
                _.todo.components.todoTextInput(this, new _.todo.components.TodoTextInputProps('edit', void 0, void 0, this$TodoItem.props.todo.text, _.todo.components.TodoItem.f_8(this$TodoItem)));
              }
            };
          }
        }),
        todoItem$f: function (props) {
          return function (it) {
            return _.todo.components.TodoItem.object.factory.invoke(new _.com.github.andrewoma.react.Ref(props));
          };
        },
        todoItem: function ($receiver, props) {
          return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.todo.components.todoItem$f(props)));
        },
        TodoTextInputProps: Kotlin.createClass(null, function (className, id, placeHolder, value, onSave) {
          if (className === void 0)
            className = null;
          if (id === void 0)
            id = null;
          if (placeHolder === void 0)
            placeHolder = null;
          if (value === void 0)
            value = null;
          this.className = className;
          this.id = id;
          this.placeHolder = placeHolder;
          this.value = value;
          this.onSave = onSave;
        }),
        TodoTextInput: Kotlin.createClass(function () {
          return [_.com.github.andrewoma.react.ComponentSpec];
        }, function $fun() {
          $fun.baseInitializer.call(this);
        }, /** @lends _.todo.components.TodoTextInput.prototype */ {
          initialState: function () {
            var tmp$0;
            return (tmp$0 = this.props.value) != null ? tmp$0 : '';
          },
          render_sx5o3u$: function ($receiver) {
            _.com.github.andrewoma.react.log.debug_9mqe4v$(['TodoTextInput.render', this.props, this.state]);
            _.com.github.andrewoma.react.input_gcvk32$($receiver, _.todo.components.TodoTextInput.render_sx5o3u$f(this));
          },
          save: function () {
            this.props.onSave(this.state);
            this.state = '';
          },
          onChange: function (event) {
            this.state = event.currentTarget.value;
          },
          onKeyDown: function (event) {
            if (event.keyCode === _.todo.components.TodoTextInput.object.enterKeyCode) {
              this.save();
            }
          }
        }, /** @lends _.todo.components.TodoTextInput */ {
          object_initializer$: function () {
            return Kotlin.createObject(null, function () {
              this.enterKeyCode = 13;
              this.factory = _.com.github.andrewoma.react.react.createFactory_oqkx6a$(new _.todo.components.TodoTextInput());
            });
          },
          f: function (this$TodoTextInput) {
            return function (it) {
              this$TodoTextInput.save();
            };
          },
          f_0: function (this$TodoTextInput) {
            return function (it) {
              this$TodoTextInput.onChange(it);
            };
          },
          f_1: function (this$TodoTextInput) {
            return function (it) {
              this$TodoTextInput.onKeyDown(it);
            };
          },
          render_sx5o3u$f: function (this$TodoTextInput) {
            return function () {
              this.className = this$TodoTextInput.props.className;
              this.id = this$TodoTextInput.props.id;
              this.placeholder = this$TodoTextInput.props.placeHolder;
              this.onBlur = _.todo.components.TodoTextInput.f(this$TodoTextInput);
              this.onChange = _.todo.components.TodoTextInput.f_0(this$TodoTextInput);
              this.onKeyDown = _.todo.components.TodoTextInput.f_1(this$TodoTextInput);
              this.value = this$TodoTextInput.state;
              this.autoFocus = true;
            };
          }
        }),
        todoTextInput$f: function (props) {
          return function (it) {
            return _.todo.components.TodoTextInput.object.factory.invoke(new _.com.github.andrewoma.react.Ref(props));
          };
        },
        todoTextInput: function ($receiver, props) {
          return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.todo.components.todoTextInput$f(props)));
        }
      }),
      dispatcher: Kotlin.definePackage(function () {
        this.todoDispatcher = new _.todo.dispatcher.TodoDispatcher();
      }, /** @lends _.todo.dispatcher */ {
        TodoDispatcher: Kotlin.createClass(null, function () {
          this.callbacks_srs2oc$ = new Kotlin.ComplexHashSet();
        }, /** @lends _.todo.dispatcher.TodoDispatcher.prototype */ {
          dispatch: function (action) {
            var tmp$0;
            tmp$0 = this.callbacks_srs2oc$.iterator();
            while (tmp$0.hasNext()) {
              var c = tmp$0.next();
              c(action);
            }
          },
          register: function (callback) {
            this.callbacks_srs2oc$.add_za3rmp$(callback);
          }
        })
      }),
      stores: Kotlin.definePackage(function () {
        this.todoStore = new _.todo.stores.TodoStore();
        this.todoStoreActionHandler = new _.todo.stores.TodoStoreActionHandler(_.todo.stores.todoStore, _.todo.dispatcher.todoDispatcher);
      }, /** @lends _.todo.stores */ {
        Todo: Kotlin.createClass(null, function (id, text, complete) {
          if (complete === void 0)
            complete = false;
          this.id = id;
          this.text = text;
          this.complete = complete;
        }, /** @lends _.todo.stores.Todo.prototype */ {
          component1: function () {
            return this.id;
          },
          component2: function () {
            return this.text;
          },
          component3: function () {
            return this.complete;
          },
          copy: function (id, text, complete) {
            return new _.todo.stores.Todo(id === void 0 ? this.id : id, text === void 0 ? this.text : text, complete === void 0 ? this.complete : complete);
          },
          toString: function () {
            return 'Todo(id=' + Kotlin.toString(this.id) + (', text=' + Kotlin.toString(this.text)) + (', complete=' + Kotlin.toString(this.complete)) + ')';
          },
          hashCode: function () {
            var result = 1778066729;
            result = result * 31 + Kotlin.hashCode(this.id) | 0;
            result = result * 31 + Kotlin.hashCode(this.text) | 0;
            result = result * 31 + Kotlin.hashCode(this.complete) | 0;
            return result;
          },
          equals_za3rmp$: function (other) {
            return this === other || (other !== null && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.text, other.text) && Kotlin.equals(this.complete, other.complete))));
          }
        }),
        Event: Kotlin.createTrait(null),
        ChangeEvent: Kotlin.createClass(function () {
          return [_.todo.stores.Event];
        }, null),
        areAllCompleted: function ($receiver) {
          return $receiver.size() === _.todo.stores.completedCount($receiver);
        },
        completedCount: function ($receiver) {
          var tmp$0;
          var completed = 0;
          tmp$0 = $receiver.iterator();
          while (tmp$0.hasNext()) {
            var t = tmp$0.next();
            if (t.complete)
              completed += 1;
          }
          return completed;
        },
        TodoStore: Kotlin.createClass(null, function () {
          this.todos_91fe12$ = new Kotlin.LinkedHashMap();
          this.listeners_k2bw4o$ = new Kotlin.ComplexHashSet();
        }, /** @lends _.todo.stores.TodoStore.prototype */ {
          getAll: function () {
            return this.todos_91fe12$.values();
          },
          get: function (id) {
            return this.todos_91fe12$.get_za3rmp$(id);
          },
          create: function (text) {
            var id = ((new Date()).getTime() + Math.floor(Math.random() * 999999)).toString().toString();
            this.todos_91fe12$.put_wn2jw4$(id, new _.todo.stores.Todo(id, text, false));
          },
          update: function (id, update) {
            var tmp$0, tmp$1;
            var existing = this.todos_91fe12$.get_za3rmp$(id);
            if (existing != null) {
              tmp$1 = this.todos_91fe12$;
              tmp$0 = update(existing);
              tmp$1.put_wn2jw4$(id, tmp$0);
            }
          },
          destroy: function (id) {
            this.todos_91fe12$.remove_za3rmp$(id);
          },
          destroyCompleted: function () {
            var tmp$0, tmp$1, tmp$2;
            tmp$0 = Kotlin.copyToArray(this.todos_91fe12$.values()), tmp$1 = tmp$0.length;
            for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
              var todo = tmp$0[tmp$2];
              if (todo.complete)
                this.todos_91fe12$.remove_za3rmp$(todo.id);
            }
          },
          updateAll: function (update) {
            var tmp$0, tmp$1, tmp$2, tmp$3;
            tmp$0 = Kotlin.copyToArray(this.todos_91fe12$.values()), tmp$1 = tmp$0.length;
            for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
              var todo = tmp$0[tmp$2];
              tmp$3 = update(todo);
              var updated = tmp$3;
              if (updated !== todo) {
                this.todos_91fe12$.put_wn2jw4$(updated.id, updated);
              }
            }
          },
          areAllComplete: function () {
            return _.todo.stores.areAllCompleted(this.todos_91fe12$.values());
          },
          addChangeListener: function (callback) {
            this.listeners_k2bw4o$.add_za3rmp$(callback);
          },
          removeChangeListener: function (callback) {
            this.listeners_k2bw4o$.remove_za3rmp$(callback);
          },
          emitChange: function () {
            var tmp$0;
            var event = new _.todo.stores.ChangeEvent();
            tmp$0 = this.listeners_k2bw4o$.iterator();
            while (tmp$0.hasNext()) {
              var l = tmp$0.next();
              l(event);
            }
          }
        }),
        TodoStoreActionHandler: Kotlin.createClass(null, function (store, dispatcher) {
          this.store = store;
          dispatcher.register(_.todo.stores.TodoStoreActionHandler.TodoStoreActionHandler$f(this));
        }, /** @lends _.todo.stores.TodoStoreActionHandler.prototype */ {
          withNonEmpty: function (text, onNonEmpty) {
            var trimmed = text.trim();
            if (trimmed.length !== 0)
              onNonEmpty(trimmed);
          },
          onAction: function (action) {
            if (Kotlin.isType(action, _.todo.actions.Create)) {
              var onNonEmpty = _.todo.stores.TodoStoreActionHandler.onAction$f(this);
              var trimmed = action.text.trim();
              if (trimmed.length !== 0)
                onNonEmpty(trimmed);
            }
             else if (Kotlin.isType(action, _.todo.actions.ToggleCompleteAll)) {
              var complete = !this.store.areAllComplete();
              var $this = this.store;
              var tmp$0, tmp$1, tmp$2, tmp$3;
              tmp$0 = Kotlin.copyToArray($this.todos_91fe12$.values()), tmp$1 = tmp$0.length;
              for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
                var todo = tmp$0[tmp$2];
                tmp$3 = Kotlin.equals(todo.complete, complete) ? todo : todo.copy(void 0, void 0, complete);
                var updated = tmp$3;
                if (updated !== todo) {
                  $this.todos_91fe12$.put_wn2jw4$(updated.id, updated);
                }
              }
            }
             else if (Kotlin.isType(action, _.todo.actions.UndoComplete)) {
              var $this_0 = this.store;
              var tmp$0_0, tmp$1_0;
              var existing = $this_0.todos_91fe12$.get_za3rmp$(action.id);
              if (existing != null) {
                tmp$1_0 = $this_0.todos_91fe12$;
                tmp$0_0 = existing.copy(void 0, void 0, false);
                tmp$1_0.put_wn2jw4$(action.id, tmp$0_0);
              }
            }
             else if (Kotlin.isType(action, _.todo.actions.Complete)) {
              var $this_1 = this.store;
              var tmp$0_1, tmp$1_1;
              var existing_0 = $this_1.todos_91fe12$.get_za3rmp$(action.id);
              if (existing_0 != null) {
                tmp$1_1 = $this_1.todos_91fe12$;
                tmp$0_1 = existing_0.copy(void 0, void 0, true);
                tmp$1_1.put_wn2jw4$(action.id, tmp$0_1);
              }
            }
             else if (Kotlin.isType(action, _.todo.actions.Update)) {
              var onNonEmpty_0 = _.todo.stores.TodoStoreActionHandler.onAction$f_3(this, action);
              var trimmed_0 = action.text.trim();
              if (trimmed_0.length !== 0)
                onNonEmpty_0(trimmed_0);
            }
             else if (Kotlin.isType(action, _.todo.actions.Destroy))
              this.store.destroy(action.id);
            else if (Kotlin.isType(action, _.todo.actions.DestroyCompleted))
              this.store.destroyCompleted();
            else
              _.com.github.andrewoma.react.log.error_9mqe4v$(['Unknown action', action]);
            this.store.emitChange();
          }
        }, /** @lends _.todo.stores.TodoStoreActionHandler */ {
          TodoStoreActionHandler$f: function (this$TodoStoreActionHandler) {
            return function (it) {
              this$TodoStoreActionHandler.onAction(it);
            };
          },
          onAction$f: function (this$TodoStoreActionHandler) {
            return function (it) {
              this$TodoStoreActionHandler.store.create(it);
            };
          },
          onAction$f_3: function (this$TodoStoreActionHandler, action) {
            return function (text) {
              var tmp$0, tmp$1;
              var existing = this$TodoStoreActionHandler.store.todos_91fe12$.get_za3rmp$(action.id);
              if (existing != null) {
                tmp$1 = this$TodoStoreActionHandler.store.todos_91fe12$;
                tmp$0 = existing.copy(void 0, text);
                tmp$1.put_wn2jw4$(action.id, tmp$0);
              }
            };
          }
        })
      })
    }),
    com: Kotlin.definePackage(null, /** @lends _.com */ {
      github: Kotlin.definePackage(null, /** @lends _.com.github */ {
        andrewoma: Kotlin.definePackage(null, /** @lends _.com.github.andrewoma */ {
          react: Kotlin.definePackage(function () {
            this.log = new _.com.github.andrewoma.react.Log(_.com.github.andrewoma.react.logLevelFromLocation(document.location.search));
            this.react = new _.com.github.andrewoma.react.React();
          }, /** @lends _.com.github.andrewoma.react */ {
            ReadWriteProperty: Kotlin.createTrait(null),
            Attribute: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.ReadWriteProperty];
            }, null, /** @lends _.com.github.andrewoma.react.Attribute.prototype */ {
              get_1tsekc$: function (thisRef, desc) {
                return Reakt.getAttribute(thisRef, desc.name);
              },
              set_1z3uih$: function (thisRef, desc, value) {
                Reakt.setAttribute(thisRef, desc.name, value);
              }
            }),
            ComponentRenderer: Kotlin.createTrait(null, /** @lends _.com.github.andrewoma.react.ComponentRenderer.prototype */ {
              render: function () {
                var root = _.com.github.andrewoma.react.ComponentRenderer.render$f();
                this.render_sx5o3u$(root);
                _.com.github.andrewoma.react.check(root.children.size() <= 1, 'React only supports one (or zero) root components');
                if (root.children.isEmpty())
                  return null;
                return root.children.get_za3lpa$(0).transform();
              }
            }, /** @lends _.com.github.andrewoma.react.ComponentRenderer */ {
              f: function (it) {
                return null;
              },
              render$f: function () {
                return Kotlin.createObject(function () {
                  return [_.com.github.andrewoma.react.Component];
                }, function $fun() {
                  $fun.baseInitializer.call(this, _.com.github.andrewoma.react.ComponentRenderer.f);
                });
              }
            }),
            ComponentSpec: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.ComponentRenderer, _.com.github.andrewoma.react.ReactComponentSpec];
            }, function $fun() {
              $fun.baseInitializer.call(this);
            }),
            Component: Kotlin.createClass(null, function (transformer) {
              this.transformer = transformer;
              this.children = new Kotlin.ArrayList();
            }, /** @lends _.com.github.andrewoma.react.Component.prototype */ {
              construct_jol6v7$: function (component, init) {
                if (init === void 0)
                  init = _.com.github.andrewoma.react.Component.construct_jol6v7$f;
                init.call(component);
                this.children.add_za3rmp$(component);
                return component;
              },
              transform: function () {
                return this.transformer(this);
              },
              transformChildren: function () {
                return Kotlin.arrayFromFun(this.children.size(), _.com.github.andrewoma.react.Component.transformChildren$f(this));
              }
            }, /** @lends _.com.github.andrewoma.react.Component */ {
              construct_jol6v7$f: function () {
              },
              transformChildren$f: function (this$Component) {
                return function (it) {
                  return this$Component.children.get_za3lpa$(it).transform();
                };
              }
            }),
            EventTarget: Kotlin.createTrait(null, /** @lends _.com.github.andrewoma.react.EventTarget.prototype */ {
              value: {
                get: function () {
                  return this.$value_8cxk3t$;
                }
              }
            }),
            DataTransfer: Kotlin.createTrait(null),
            Style: Kotlin.createClass(null, null),
            SyntheticEvent: Kotlin.createTrait(null, /** @lends _.com.github.andrewoma.react.SyntheticEvent.prototype */ {
              bubbles: {
                get: function () {
                  return this.$bubbles_dk0ij1$;
                },
                set: function (bubbles) {
                  this.$bubbles_dk0ij1$ = bubbles;
                }
              },
              cancelable: {
                get: function () {
                  return this.$cancelable_65nf5k$;
                },
                set: function (cancelable) {
                  this.$cancelable_65nf5k$ = cancelable;
                }
              },
              currentTarget: {
                get: function () {
                  return this.$currentTarget_shz0sq$;
                },
                set: function (currentTarget) {
                  this.$currentTarget_shz0sq$ = currentTarget;
                }
              },
              defaultPrevented: {
                get: function () {
                  return this.$defaultPrevented_m6ojqi$;
                },
                set: function (defaultPrevented) {
                  this.$defaultPrevented_m6ojqi$ = defaultPrevented;
                }
              },
              eventPhase: {
                get: function () {
                  return this.$eventPhase_lcpv0r$;
                },
                set: function (eventPhase) {
                  this.$eventPhase_lcpv0r$ = eventPhase;
                }
              },
              nativeEvent: {
                get: function () {
                  return this.$nativeEvent_5qat1r$;
                },
                set: function (nativeEvent) {
                  this.$nativeEvent_5qat1r$ = nativeEvent;
                }
              },
              type: {
                get: function () {
                  return this.$type_4bbnce$;
                },
                set: function (type) {
                  this.$type_4bbnce$ = type;
                }
              },
              timeStamp: {
                get: function () {
                  return this.$timeStamp_vamdaa$;
                },
                set: function (timeStamp) {
                  this.$timeStamp_vamdaa$ = timeStamp;
                }
              }
            }),
            ClipboardEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.ClipboardEvent.prototype */ {
              clipboardData: {
                get: function () {
                  return this.$clipboardData_ttrygr$;
                },
                set: function (clipboardData) {
                  this.$clipboardData_ttrygr$ = clipboardData;
                }
              }
            }),
            KeyboardEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.KeyboardEvent.prototype */ {
              altKey: {
                get: function () {
                  return this.$altKey_t88sui$;
                },
                set: function (altKey) {
                  this.$altKey_t88sui$ = altKey;
                }
              },
              ctrlKey: {
                get: function () {
                  return this.$ctrlKey_kllp8s$;
                },
                set: function (ctrlKey) {
                  this.$ctrlKey_kllp8s$ = ctrlKey;
                }
              },
              charCode: {
                get: function () {
                  return this.$charCode_toasf7$;
                },
                set: function (charCode) {
                  this.$charCode_toasf7$ = charCode;
                }
              },
              key: {
                get: function () {
                  return this.$key_i3457j$;
                },
                set: function (key) {
                  this.$key_i3457j$ = key;
                }
              },
              keyCode: {
                get: function () {
                  return this.$keyCode_irxazw$;
                },
                set: function (keyCode) {
                  this.$keyCode_irxazw$ = keyCode;
                }
              },
              locale: {
                get: function () {
                  return this.$locale_nzdz1i$;
                },
                set: function (locale) {
                  this.$locale_nzdz1i$ = locale;
                }
              },
              location: {
                get: function () {
                  return this.$location_xnddfv$;
                },
                set: function (location) {
                  this.$location_xnddfv$ = location;
                }
              },
              metaKey: {
                get: function () {
                  return this.$metaKey_mymqjq$;
                },
                set: function (metaKey) {
                  this.$metaKey_mymqjq$ = metaKey;
                }
              },
              repeat: {
                get: function () {
                  return this.$repeat_ladt2d$;
                },
                set: function (repeat) {
                  this.$repeat_ladt2d$ = repeat;
                }
              },
              shiftKey: {
                get: function () {
                  return this.$shiftKey_2qw0oz$;
                },
                set: function (shiftKey) {
                  this.$shiftKey_2qw0oz$ = shiftKey;
                }
              },
              which: {
                get: function () {
                  return this.$which_l8b7c3$;
                },
                set: function (which) {
                  this.$which_l8b7c3$ = which;
                }
              }
            }),
            FocusEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.FocusEvent.prototype */ {
              relatedTarget: {
                get: function () {
                  return this.$relatedTarget_wqfvjp$;
                },
                set: function (relatedTarget) {
                  this.$relatedTarget_wqfvjp$ = relatedTarget;
                }
              }
            }),
            FormEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }),
            MouseEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.MouseEvent.prototype */ {
              altKey: {
                get: function () {
                  return this.$altKey_7h4dpy$;
                },
                set: function (altKey) {
                  this.$altKey_7h4dpy$ = altKey;
                }
              },
              button: {
                get: function () {
                  return this.$button_6v3rcq$;
                },
                set: function (button) {
                  this.$button_6v3rcq$ = button;
                }
              },
              buttons: {
                get: function () {
                  return this.$buttons_b3m25$;
                },
                set: function (buttons) {
                  this.$buttons_b3m25$ = buttons;
                }
              },
              clientX: {
                get: function () {
                  return this.$clientX_ajrys9$;
                },
                set: function (clientX) {
                  this.$clientX_ajrys9$ = clientX;
                }
              },
              clientY: {
                get: function () {
                  return this.$clientY_ajrysa$;
                },
                set: function (clientY) {
                  this.$clientY_ajrysa$ = clientY;
                }
              },
              ctrlKey: {
                get: function () {
                  return this.$ctrlKey_eh6twg$;
                },
                set: function (ctrlKey) {
                  this.$ctrlKey_eh6twg$ = ctrlKey;
                }
              },
              pageX: {
                get: function () {
                  return this.$pageX_ib9ifp$;
                },
                set: function (pageX) {
                  this.$pageX_ib9ifp$ = pageX;
                }
              },
              pageY: {
                get: function () {
                  return this.$pageY_ib9ifq$;
                },
                set: function (pageY) {
                  this.$pageY_ib9ifq$ = pageY;
                }
              },
              relatedTarget: {
                get: function () {
                  return this.$relatedTarget_35n53c$;
                },
                set: function (relatedTarget) {
                  this.$relatedTarget_35n53c$ = relatedTarget;
                }
              },
              screenX: {
                get: function () {
                  return this.$screenX_s6bpeg$;
                },
                set: function (screenX) {
                  this.$screenX_s6bpeg$ = screenX;
                }
              },
              screenY: {
                get: function () {
                  return this.$screenY_s6bpeh$;
                },
                set: function (screenY) {
                  this.$screenY_s6bpeh$ = screenY;
                }
              },
              shiftKey: {
                get: function () {
                  return this.$shiftKey_j6zn69$;
                },
                set: function (shiftKey) {
                  this.$shiftKey_j6zn69$ = shiftKey;
                }
              }
            }),
            TouchEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.TouchEvent.prototype */ {
              altKey: {
                get: function () {
                  return this.$altKey_fplnmk$;
                },
                set: function (altKey) {
                  this.$altKey_fplnmk$ = altKey;
                }
              },
              changedTouches: {
                get: function () {
                  return this.$changedTouches_f28idj$;
                },
                set: function (changedTouches) {
                  this.$changedTouches_f28idj$ = changedTouches;
                }
              },
              ctrlKey: {
                get: function () {
                  return this.$ctrlKey_rqcj96$;
                },
                set: function (ctrlKey) {
                  this.$ctrlKey_rqcj96$ = ctrlKey;
                }
              },
              metaKey: {
                get: function () {
                  return this.$metaKey_u3dkk4$;
                },
                set: function (metaKey) {
                  this.$metaKey_u3dkk4$ = metaKey;
                }
              },
              shiftKey: {
                get: function () {
                  return this.$shiftKey_aqnp3p$;
                },
                set: function (shiftKey) {
                  this.$shiftKey_aqnp3p$ = shiftKey;
                }
              },
              targetTouches: {
                get: function () {
                  return this.$targetTouches_6xzzvy$;
                },
                set: function (targetTouches) {
                  this.$targetTouches_6xzzvy$ = targetTouches;
                }
              },
              touches: {
                get: function () {
                  return this.$touches_6dc91b$;
                },
                set: function (touches) {
                  this.$touches_6dc91b$ = touches;
                }
              }
            }),
            UIEvent: Kotlin.createTrait(function () {
              return [_.com.github.andrewoma.react.SyntheticEvent];
            }, /** @lends _.com.github.andrewoma.react.UIEvent.prototype */ {
              detail: {
                get: function () {
                  return this.$detail_681d5u$;
                },
                set: function (detail) {
                  this.$detail_681d5u$ = detail;
                }
              },
              view: {
                get: function () {
                  return this.$view_yw0ywi$;
                },
                set: function (view) {
                  this.$view_yw0ywi$ = view;
                }
              }
            }),
            WheelEvent: Kotlin.createTrait(null, /** @lends _.com.github.andrewoma.react.WheelEvent.prototype */ {
              deltaX: {
                get: function () {
                  return this.$deltaX_vyd97u$;
                },
                set: function (deltaX) {
                  this.$deltaX_vyd97u$ = deltaX;
                }
              },
              deltaMode: {
                get: function () {
                  return this.$deltaMode_5g2s4x$;
                },
                set: function (deltaMode) {
                  this.$deltaMode_5g2s4x$ = deltaMode;
                }
              },
              deltaY: {
                get: function () {
                  return this.$deltaY_vyd97v$;
                },
                set: function (deltaY) {
                  this.$deltaY_vyd97v$ = deltaY;
                }
              },
              deltaZ: {
                get: function () {
                  return this.$deltaZ_vyd97w$;
                },
                set: function (deltaZ) {
                  this.$deltaZ_vyd97w$ = deltaZ;
                }
              }
            }),
            ReactAttributes: Kotlin.createClass(null, function () {
              this.key$delegate = new _.com.github.andrewoma.react.Attribute();
              this.ref$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onCopy$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onCut$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onPaste$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onKeyDown$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onKeyPress$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onKeyUp$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onBlur$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onChange$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onInput$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onSubmit$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onClick$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDoubleClick$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDrag$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragEnd$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragEnter$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragExit$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragLeave$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragOver$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDragStart$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onDrop$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onMouseDown$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onMouseEnter$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onMouseLeave$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onMouseMove$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onMouseUp$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onTouchCancel$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onTouchEnd$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onTouchMove$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onTouchStart$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onScroll$delegate = new _.com.github.andrewoma.react.Attribute();
              this.onWheel$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ReactAttributes.prototype */ {
              key: {
                get: function () {
                  return this.key$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('key'));
                },
                set: function (key) {
                  this.key$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('key'), key);
                }
              },
              ref: {
                get: function () {
                  return this.ref$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('ref'));
                },
                set: function (ref) {
                  this.ref$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('ref'), ref);
                }
              },
              onCopy: {
                get: function () {
                  return this.onCopy$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onCopy'));
                },
                set: function (onCopy) {
                  this.onCopy$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onCopy'), onCopy);
                }
              },
              onCut: {
                get: function () {
                  return this.onCut$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onCut'));
                },
                set: function (onCut) {
                  this.onCut$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onCut'), onCut);
                }
              },
              onPaste: {
                get: function () {
                  return this.onPaste$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onPaste'));
                },
                set: function (onPaste) {
                  this.onPaste$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onPaste'), onPaste);
                }
              },
              onKeyDown: {
                get: function () {
                  return this.onKeyDown$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onKeyDown'));
                },
                set: function (onKeyDown) {
                  this.onKeyDown$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onKeyDown'), onKeyDown);
                }
              },
              onKeyPress: {
                get: function () {
                  return this.onKeyPress$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onKeyPress'));
                },
                set: function (onKeyPress) {
                  this.onKeyPress$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onKeyPress'), onKeyPress);
                }
              },
              onKeyUp: {
                get: function () {
                  return this.onKeyUp$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onKeyUp'));
                },
                set: function (onKeyUp) {
                  this.onKeyUp$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onKeyUp'), onKeyUp);
                }
              },
              onFocus: {
                get: function () {
                  return this.onFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onFocus'));
                },
                set: function (onFocus) {
                  this.onFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onFocus'), onFocus);
                }
              },
              onBlur: {
                get: function () {
                  return this.onBlur$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onBlur'));
                },
                set: function (onBlur) {
                  this.onBlur$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onBlur'), onBlur);
                }
              },
              onChange: {
                get: function () {
                  return this.onChange$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onChange'));
                },
                set: function (onChange) {
                  this.onChange$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onChange'), onChange);
                }
              },
              onInput: {
                get: function () {
                  return this.onInput$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onInput'));
                },
                set: function (onInput) {
                  this.onInput$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onInput'), onInput);
                }
              },
              onSubmit: {
                get: function () {
                  return this.onSubmit$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onSubmit'));
                },
                set: function (onSubmit) {
                  this.onSubmit$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onSubmit'), onSubmit);
                }
              },
              onClick: {
                get: function () {
                  return this.onClick$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onClick'));
                },
                set: function (onClick) {
                  this.onClick$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onClick'), onClick);
                }
              },
              onDoubleClick: {
                get: function () {
                  return this.onDoubleClick$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDoubleClick'));
                },
                set: function (onDoubleClick) {
                  this.onDoubleClick$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDoubleClick'), onDoubleClick);
                }
              },
              onDrag: {
                get: function () {
                  return this.onDrag$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDrag'));
                },
                set: function (onDrag) {
                  this.onDrag$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDrag'), onDrag);
                }
              },
              onDragEnd: {
                get: function () {
                  return this.onDragEnd$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragEnd'));
                },
                set: function (onDragEnd) {
                  this.onDragEnd$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragEnd'), onDragEnd);
                }
              },
              onDragEnter: {
                get: function () {
                  return this.onDragEnter$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragEnter'));
                },
                set: function (onDragEnter) {
                  this.onDragEnter$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragEnter'), onDragEnter);
                }
              },
              onDragExit: {
                get: function () {
                  return this.onDragExit$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragExit'));
                },
                set: function (onDragExit) {
                  this.onDragExit$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragExit'), onDragExit);
                }
              },
              onDragLeave: {
                get: function () {
                  return this.onDragLeave$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragLeave'));
                },
                set: function (onDragLeave) {
                  this.onDragLeave$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragLeave'), onDragLeave);
                }
              },
              onDragOver: {
                get: function () {
                  return this.onDragOver$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragOver'));
                },
                set: function (onDragOver) {
                  this.onDragOver$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragOver'), onDragOver);
                }
              },
              onDragStart: {
                get: function () {
                  return this.onDragStart$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDragStart'));
                },
                set: function (onDragStart) {
                  this.onDragStart$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDragStart'), onDragStart);
                }
              },
              onDrop: {
                get: function () {
                  return this.onDrop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onDrop'));
                },
                set: function (onDrop) {
                  this.onDrop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onDrop'), onDrop);
                }
              },
              onMouseDown: {
                get: function () {
                  return this.onMouseDown$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onMouseDown'));
                },
                set: function (onMouseDown) {
                  this.onMouseDown$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onMouseDown'), onMouseDown);
                }
              },
              onMouseEnter: {
                get: function () {
                  return this.onMouseEnter$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onMouseEnter'));
                },
                set: function (onMouseEnter) {
                  this.onMouseEnter$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onMouseEnter'), onMouseEnter);
                }
              },
              onMouseLeave: {
                get: function () {
                  return this.onMouseLeave$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onMouseLeave'));
                },
                set: function (onMouseLeave) {
                  this.onMouseLeave$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onMouseLeave'), onMouseLeave);
                }
              },
              onMouseMove: {
                get: function () {
                  return this.onMouseMove$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onMouseMove'));
                },
                set: function (onMouseMove) {
                  this.onMouseMove$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onMouseMove'), onMouseMove);
                }
              },
              onMouseUp: {
                get: function () {
                  return this.onMouseUp$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onMouseUp'));
                },
                set: function (onMouseUp) {
                  this.onMouseUp$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onMouseUp'), onMouseUp);
                }
              },
              onTouchCancel: {
                get: function () {
                  return this.onTouchCancel$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onTouchCancel'));
                },
                set: function (onTouchCancel) {
                  this.onTouchCancel$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onTouchCancel'), onTouchCancel);
                }
              },
              onTouchEnd: {
                get: function () {
                  return this.onTouchEnd$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onTouchEnd'));
                },
                set: function (onTouchEnd) {
                  this.onTouchEnd$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onTouchEnd'), onTouchEnd);
                }
              },
              onTouchMove: {
                get: function () {
                  return this.onTouchMove$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onTouchMove'));
                },
                set: function (onTouchMove) {
                  this.onTouchMove$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onTouchMove'), onTouchMove);
                }
              },
              onTouchStart: {
                get: function () {
                  return this.onTouchStart$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onTouchStart'));
                },
                set: function (onTouchStart) {
                  this.onTouchStart$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onTouchStart'), onTouchStart);
                }
              },
              onScroll: {
                get: function () {
                  return this.onScroll$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onScroll'));
                },
                set: function (onScroll) {
                  this.onScroll$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onScroll'), onScroll);
                }
              },
              onWheel: {
                get: function () {
                  return this.onWheel$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('onWheel'));
                },
                set: function (onWheel) {
                  this.onWheel$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('onWheel'), onWheel);
                }
              }
            }),
            HTMLGlobalAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.ReactAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.key$delegate = new _.com.github.andrewoma.react.Attribute();
              this.accessKey$delegate = new _.com.github.andrewoma.react.Attribute();
              this.className$delegate = new _.com.github.andrewoma.react.Attribute();
              this.contentEditable$delegate = new _.com.github.andrewoma.react.Attribute();
              this.contextMenu$delegate = new _.com.github.andrewoma.react.Attribute();
              this.dir$delegate = new _.com.github.andrewoma.react.Attribute();
              this.draggable$delegate = new _.com.github.andrewoma.react.Attribute();
              this.hidden$delegate = new _.com.github.andrewoma.react.Attribute();
              this.id$delegate = new _.com.github.andrewoma.react.Attribute();
              this.lang$delegate = new _.com.github.andrewoma.react.Attribute();
              this.spellCheck$delegate = new _.com.github.andrewoma.react.Attribute();
              this.role$delegate = new _.com.github.andrewoma.react.Attribute();
              this.scrollLeft$delegate = new _.com.github.andrewoma.react.Attribute();
              this.scrollTop$delegate = new _.com.github.andrewoma.react.Attribute();
              this.style$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.HTMLGlobalAttributes.prototype */ {
              key: {
                get: function () {
                  return this.key$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('key'));
                },
                set: function (key) {
                  this.key$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('key'), key);
                }
              },
              accessKey: {
                get: function () {
                  return this.accessKey$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('accessKey'));
                },
                set: function (accessKey) {
                  this.accessKey$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('accessKey'), accessKey);
                }
              },
              className: {
                get: function () {
                  return this.className$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('className'));
                },
                set: function (className) {
                  this.className$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('className'), className);
                }
              },
              contentEditable: {
                get: function () {
                  return this.contentEditable$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('contentEditable'));
                },
                set: function (contentEditable) {
                  this.contentEditable$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('contentEditable'), contentEditable);
                }
              },
              contextMenu: {
                get: function () {
                  return this.contextMenu$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('contextMenu'));
                },
                set: function (contextMenu) {
                  this.contextMenu$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('contextMenu'), contextMenu);
                }
              },
              dir: {
                get: function () {
                  return this.dir$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('dir'));
                },
                set: function (dir) {
                  this.dir$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('dir'), dir);
                }
              },
              draggable: {
                get: function () {
                  return this.draggable$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('draggable'));
                },
                set: function (draggable) {
                  this.draggable$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('draggable'), draggable);
                }
              },
              hidden: {
                get: function () {
                  return this.hidden$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('hidden'));
                },
                set: function (hidden) {
                  this.hidden$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('hidden'), hidden);
                }
              },
              id: {
                get: function () {
                  return this.id$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('id'));
                },
                set: function (id) {
                  this.id$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('id'), id);
                }
              },
              lang: {
                get: function () {
                  return this.lang$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('lang'));
                },
                set: function (lang) {
                  this.lang$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('lang'), lang);
                }
              },
              spellCheck: {
                get: function () {
                  return this.spellCheck$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('spellCheck'));
                },
                set: function (spellCheck) {
                  this.spellCheck$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('spellCheck'), spellCheck);
                }
              },
              role: {
                get: function () {
                  return this.role$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('role'));
                },
                set: function (role) {
                  this.role$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('role'), role);
                }
              },
              scrollLeft: {
                get: function () {
                  return this.scrollLeft$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('scrollLeft'));
                },
                set: function (scrollLeft) {
                  this.scrollLeft$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('scrollLeft'), scrollLeft);
                }
              },
              scrollTop: {
                get: function () {
                  return this.scrollTop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('scrollTop'));
                },
                set: function (scrollTop) {
                  this.scrollTop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('scrollTop'), scrollTop);
                }
              },
              style: {
                get: function () {
                  return this.style$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('style'));
                },
                set: function (style) {
                  this.style$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('style'), style);
                }
              }
            }),
            FormAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.accept$delegate = new _.com.github.andrewoma.react.Attribute();
              this.action$delegate = new _.com.github.andrewoma.react.Attribute();
              this.autoCapitalize$delegate = new _.com.github.andrewoma.react.Attribute();
              this.autoComplete$delegate = new _.com.github.andrewoma.react.Attribute();
              this.encType$delegate = new _.com.github.andrewoma.react.Attribute();
              this.method$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.target$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.FormAttributes.prototype */ {
              accept: {
                get: function () {
                  return this.accept$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('accept'));
                },
                set: function (accept) {
                  this.accept$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('accept'), accept);
                }
              },
              action: {
                get: function () {
                  return this.action$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('action'));
                },
                set: function (action) {
                  this.action$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('action'), action);
                }
              },
              autoCapitalize: {
                get: function () {
                  return this.autoCapitalize$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoCapitalize'));
                },
                set: function (autoCapitalize) {
                  this.autoCapitalize$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoCapitalize'), autoCapitalize);
                }
              },
              autoComplete: {
                get: function () {
                  return this.autoComplete$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoComplete'));
                },
                set: function (autoComplete) {
                  this.autoComplete$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoComplete'), autoComplete);
                }
              },
              encType: {
                get: function () {
                  return this.encType$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('encType'));
                },
                set: function (encType) {
                  this.encType$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('encType'), encType);
                }
              },
              method: {
                get: function () {
                  return this.method$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('method'));
                },
                set: function (method) {
                  this.method$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('method'), method);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              target: {
                get: function () {
                  return this.target$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('target'));
                },
                set: function (target) {
                  this.target$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('target'), target);
                }
              }
            }),
            InputAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.accept$delegate = new _.com.github.andrewoma.react.Attribute();
              this.alt$delegate = new _.com.github.andrewoma.react.Attribute();
              this.autoCapitalize$delegate = new _.com.github.andrewoma.react.Attribute();
              this.autoComplete$delegate = new _.com.github.andrewoma.react.Attribute();
              this.autoFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.checked$delegate = new _.com.github.andrewoma.react.Attribute();
              this.defaultValue$delegate = new _.com.github.andrewoma.react.Attribute();
              this.disabled$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.list$delegate = new _.com.github.andrewoma.react.Attribute();
              this.max$delegate = new _.com.github.andrewoma.react.Attribute();
              this.maxLength$delegate = new _.com.github.andrewoma.react.Attribute();
              this.min$delegate = new _.com.github.andrewoma.react.Attribute();
              this.multiple$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.pattern$delegate = new _.com.github.andrewoma.react.Attribute();
              this.placeholder$delegate = new _.com.github.andrewoma.react.Attribute();
              this.readOnly$delegate = new _.com.github.andrewoma.react.Attribute();
              this.required$delegate = new _.com.github.andrewoma.react.Attribute();
              this.size$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.step$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.InputAttributes.prototype */ {
              accept: {
                get: function () {
                  return this.accept$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('accept'));
                },
                set: function (accept) {
                  this.accept$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('accept'), accept);
                }
              },
              alt: {
                get: function () {
                  return this.alt$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('alt'));
                },
                set: function (alt) {
                  this.alt$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('alt'), alt);
                }
              },
              autoCapitalize: {
                get: function () {
                  return this.autoCapitalize$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoCapitalize'));
                },
                set: function (autoCapitalize) {
                  this.autoCapitalize$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoCapitalize'), autoCapitalize);
                }
              },
              autoComplete: {
                get: function () {
                  return this.autoComplete$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoComplete'));
                },
                set: function (autoComplete) {
                  this.autoComplete$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoComplete'), autoComplete);
                }
              },
              autoFocus: {
                get: function () {
                  return this.autoFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoFocus'));
                },
                set: function (autoFocus) {
                  this.autoFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoFocus'), autoFocus);
                }
              },
              checked: {
                get: function () {
                  return this.checked$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('checked'));
                },
                set: function (checked) {
                  this.checked$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('checked'), checked);
                }
              },
              defaultValue: {
                get: function () {
                  return this.defaultValue$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('defaultValue'));
                },
                set: function (defaultValue) {
                  this.defaultValue$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('defaultValue'), defaultValue);
                }
              },
              disabled: {
                get: function () {
                  return this.disabled$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('disabled'));
                },
                set: function (disabled) {
                  this.disabled$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('disabled'), disabled);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              list: {
                get: function () {
                  return this.list$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('list'));
                },
                set: function (list) {
                  this.list$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('list'), list);
                }
              },
              max: {
                get: function () {
                  return this.max$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('max'));
                },
                set: function (max) {
                  this.max$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('max'), max);
                }
              },
              maxLength: {
                get: function () {
                  return this.maxLength$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('maxLength'));
                },
                set: function (maxLength) {
                  this.maxLength$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('maxLength'), maxLength);
                }
              },
              min: {
                get: function () {
                  return this.min$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('min'));
                },
                set: function (min) {
                  this.min$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('min'), min);
                }
              },
              multiple: {
                get: function () {
                  return this.multiple$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('multiple'));
                },
                set: function (multiple) {
                  this.multiple$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('multiple'), multiple);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              pattern: {
                get: function () {
                  return this.pattern$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('pattern'));
                },
                set: function (pattern) {
                  this.pattern$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('pattern'), pattern);
                }
              },
              placeholder: {
                get: function () {
                  return this.placeholder$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('placeholder'));
                },
                set: function (placeholder) {
                  this.placeholder$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('placeholder'), placeholder);
                }
              },
              readOnly: {
                get: function () {
                  return this.readOnly$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('readOnly'));
                },
                set: function (readOnly) {
                  this.readOnly$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('readOnly'), readOnly);
                }
              },
              required: {
                get: function () {
                  return this.required$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('required'));
                },
                set: function (required) {
                  this.required$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('required'), required);
                }
              },
              size: {
                get: function () {
                  return this.size$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('size'));
                },
                set: function (size) {
                  this.size$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('size'), size);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              step: {
                get: function () {
                  return this.step$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('step'));
                },
                set: function (step) {
                  this.step$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('step'), step);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            IframeAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.allowFullScreen$delegate = new _.com.github.andrewoma.react.Attribute();
              this.allowTransparency$delegate = new _.com.github.andrewoma.react.Attribute();
              this.frameBorder$delegate = new _.com.github.andrewoma.react.Attribute();
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.IframeAttributes.prototype */ {
              allowFullScreen: {
                get: function () {
                  return this.allowFullScreen$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('allowFullScreen'));
                },
                set: function (allowFullScreen) {
                  this.allowFullScreen$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('allowFullScreen'), allowFullScreen);
                }
              },
              allowTransparency: {
                get: function () {
                  return this.allowTransparency$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('allowTransparency'));
                },
                set: function (allowTransparency) {
                  this.allowTransparency$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('allowTransparency'), allowTransparency);
                }
              },
              frameBorder: {
                get: function () {
                  return this.frameBorder$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('frameBorder'));
                },
                set: function (frameBorder) {
                  this.frameBorder$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('frameBorder'), frameBorder);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            AppletAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.alt$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.AppletAttributes.prototype */ {
              alt: {
                get: function () {
                  return this.alt$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('alt'));
                },
                set: function (alt) {
                  this.alt$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('alt'), alt);
                }
              }
            }),
            AreaAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.alt$delegate = new _.com.github.andrewoma.react.Attribute();
              this.href$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rel$delegate = new _.com.github.andrewoma.react.Attribute();
              this.target$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.AreaAttributes.prototype */ {
              alt: {
                get: function () {
                  return this.alt$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('alt'));
                },
                set: function (alt) {
                  this.alt$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('alt'), alt);
                }
              },
              href: {
                get: function () {
                  return this.href$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('href'));
                },
                set: function (href) {
                  this.href$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('href'), href);
                }
              },
              rel: {
                get: function () {
                  return this.rel$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rel'));
                },
                set: function (rel) {
                  this.rel$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rel'), rel);
                }
              },
              target: {
                get: function () {
                  return this.target$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('target'));
                },
                set: function (target) {
                  this.target$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('target'), target);
                }
              }
            }),
            ImgAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.alt$delegate = new _.com.github.andrewoma.react.Attribute();
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ImgAttributes.prototype */ {
              alt: {
                get: function () {
                  return this.alt$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('alt'));
                },
                set: function (alt) {
                  this.alt$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('alt'), alt);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            ButtonAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.disabled$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ButtonAttributes.prototype */ {
              autoFocus: {
                get: function () {
                  return this.autoFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoFocus'));
                },
                set: function (autoFocus) {
                  this.autoFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoFocus'), autoFocus);
                }
              },
              disabled: {
                get: function () {
                  return this.disabled$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('disabled'));
                },
                set: function (disabled) {
                  this.disabled$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('disabled'), disabled);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            KeygenAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.KeygenAttributes.prototype */ {
              autoFocus: {
                get: function () {
                  return this.autoFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoFocus'));
                },
                set: function (autoFocus) {
                  this.autoFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoFocus'), autoFocus);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              }
            }),
            SelectAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.disabled$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.multiple$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.required$delegate = new _.com.github.andrewoma.react.Attribute();
              this.size$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.SelectAttributes.prototype */ {
              autoFocus: {
                get: function () {
                  return this.autoFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoFocus'));
                },
                set: function (autoFocus) {
                  this.autoFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoFocus'), autoFocus);
                }
              },
              disabled: {
                get: function () {
                  return this.disabled$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('disabled'));
                },
                set: function (disabled) {
                  this.disabled$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('disabled'), disabled);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              multiple: {
                get: function () {
                  return this.multiple$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('multiple'));
                },
                set: function (multiple) {
                  this.multiple$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('multiple'), multiple);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              required: {
                get: function () {
                  return this.required$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('required'));
                },
                set: function (required) {
                  this.required$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('required'), required);
                }
              },
              size: {
                get: function () {
                  return this.size$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('size'));
                },
                set: function (size) {
                  this.size$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('size'), size);
                }
              }
            }),
            TextareaAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoFocus$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.maxLength$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.placeholder$delegate = new _.com.github.andrewoma.react.Attribute();
              this.readOnly$delegate = new _.com.github.andrewoma.react.Attribute();
              this.required$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.TextareaAttributes.prototype */ {
              autoFocus: {
                get: function () {
                  return this.autoFocus$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoFocus'));
                },
                set: function (autoFocus) {
                  this.autoFocus$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoFocus'), autoFocus);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              maxLength: {
                get: function () {
                  return this.maxLength$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('maxLength'));
                },
                set: function (maxLength) {
                  this.maxLength$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('maxLength'), maxLength);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              placeholder: {
                get: function () {
                  return this.placeholder$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('placeholder'));
                },
                set: function (placeholder) {
                  this.placeholder$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('placeholder'), placeholder);
                }
              },
              readOnly: {
                get: function () {
                  return this.readOnly$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('readOnly'));
                },
                set: function (readOnly) {
                  this.readOnly$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('readOnly'), readOnly);
                }
              },
              required: {
                get: function () {
                  return this.required$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('required'));
                },
                set: function (required) {
                  this.required$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('required'), required);
                }
              }
            }),
            AudioAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoPlay$delegate = new _.com.github.andrewoma.react.Attribute();
              this.controls$delegate = new _.com.github.andrewoma.react.Attribute();
              this.loop$delegate = new _.com.github.andrewoma.react.Attribute();
              this.preload$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.AudioAttributes.prototype */ {
              autoPlay: {
                get: function () {
                  return this.autoPlay$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoPlay'));
                },
                set: function (autoPlay) {
                  this.autoPlay$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoPlay'), autoPlay);
                }
              },
              controls: {
                get: function () {
                  return this.controls$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('controls'));
                },
                set: function (controls) {
                  this.controls$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('controls'), controls);
                }
              },
              loop: {
                get: function () {
                  return this.loop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('loop'));
                },
                set: function (loop) {
                  this.loop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('loop'), loop);
                }
              },
              preload: {
                get: function () {
                  return this.preload$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('preload'));
                },
                set: function (preload) {
                  this.preload$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('preload'), preload);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              }
            }),
            VideoAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.autoPlay$delegate = new _.com.github.andrewoma.react.Attribute();
              this.controls$delegate = new _.com.github.andrewoma.react.Attribute();
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.loop$delegate = new _.com.github.andrewoma.react.Attribute();
              this.poster$delegate = new _.com.github.andrewoma.react.Attribute();
              this.preload$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.VideoAttributes.prototype */ {
              autoPlay: {
                get: function () {
                  return this.autoPlay$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('autoPlay'));
                },
                set: function (autoPlay) {
                  this.autoPlay$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('autoPlay'), autoPlay);
                }
              },
              controls: {
                get: function () {
                  return this.controls$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('controls'));
                },
                set: function (controls) {
                  this.controls$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('controls'), controls);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              loop: {
                get: function () {
                  return this.loop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('loop'));
                },
                set: function (loop) {
                  this.loop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('loop'), loop);
                }
              },
              poster: {
                get: function () {
                  return this.poster$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('poster'));
                },
                set: function (poster) {
                  this.poster$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('poster'), poster);
                }
              },
              preload: {
                get: function () {
                  return this.preload$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('preload'));
                },
                set: function (preload) {
                  this.preload$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('preload'), preload);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            TableAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.cellPadding$delegate = new _.com.github.andrewoma.react.Attribute();
              this.cellSpacing$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.TableAttributes.prototype */ {
              cellPadding: {
                get: function () {
                  return this.cellPadding$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('cellPadding'));
                },
                set: function (cellPadding) {
                  this.cellPadding$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('cellPadding'), cellPadding);
                }
              },
              cellSpacing: {
                get: function () {
                  return this.cellSpacing$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('cellSpacing'));
                },
                set: function (cellSpacing) {
                  this.cellSpacing$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('cellSpacing'), cellSpacing);
                }
              }
            }),
            MetaAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.charSet$delegate = new _.com.github.andrewoma.react.Attribute();
              this.content$delegate = new _.com.github.andrewoma.react.Attribute();
              this.httpEquiv$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.MetaAttributes.prototype */ {
              charSet: {
                get: function () {
                  return this.charSet$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('charSet'));
                },
                set: function (charSet) {
                  this.charSet$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('charSet'), charSet);
                }
              },
              content: {
                get: function () {
                  return this.content$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('content'));
                },
                set: function (content) {
                  this.content$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('content'), content);
                }
              },
              httpEquiv: {
                get: function () {
                  return this.httpEquiv$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('httpEquiv'));
                },
                set: function (httpEquiv) {
                  this.httpEquiv$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('httpEquiv'), httpEquiv);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              }
            }),
            ScriptAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.charSet$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ScriptAttributes.prototype */ {
              charSet: {
                get: function () {
                  return this.charSet$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('charSet'));
                },
                set: function (charSet) {
                  this.charSet$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('charSet'), charSet);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              }
            }),
            CommandAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.checked$delegate = new _.com.github.andrewoma.react.Attribute();
              this.icon$delegate = new _.com.github.andrewoma.react.Attribute();
              this.radioGroup$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.CommandAttributes.prototype */ {
              checked: {
                get: function () {
                  return this.checked$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('checked'));
                },
                set: function (checked) {
                  this.checked$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('checked'), checked);
                }
              },
              icon: {
                get: function () {
                  return this.icon$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('icon'));
                },
                set: function (icon) {
                  this.icon$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('icon'), icon);
                }
              },
              radioGroup: {
                get: function () {
                  return this.radioGroup$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('radioGroup'));
                },
                set: function (radioGroup) {
                  this.radioGroup$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('radioGroup'), radioGroup);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              }
            }),
            TdAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.colSpan$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rowSpan$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.TdAttributes.prototype */ {
              colSpan: {
                get: function () {
                  return this.colSpan$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('colSpan'));
                },
                set: function (colSpan) {
                  this.colSpan$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('colSpan'), colSpan);
                }
              },
              rowSpan: {
                get: function () {
                  return this.rowSpan$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rowSpan'));
                },
                set: function (rowSpan) {
                  this.rowSpan$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rowSpan'), rowSpan);
                }
              }
            }),
            ThAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.colSpan$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rowSpan$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ThAttributes.prototype */ {
              colSpan: {
                get: function () {
                  return this.colSpan$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('colSpan'));
                },
                set: function (colSpan) {
                  this.colSpan$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('colSpan'), colSpan);
                }
              },
              rowSpan: {
                get: function () {
                  return this.rowSpan$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rowSpan'));
                },
                set: function (rowSpan) {
                  this.rowSpan$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rowSpan'), rowSpan);
                }
              }
            }),
            ObjectAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.data$delegate = new _.com.github.andrewoma.react.Attribute();
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
              this.wmode$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ObjectAttributes.prototype */ {
              data: {
                get: function () {
                  return this.data$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('data'));
                },
                set: function (data) {
                  this.data$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('data'), data);
                }
              },
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              },
              wmode: {
                get: function () {
                  return this.wmode$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('wmode'));
                },
                set: function (wmode) {
                  this.wmode$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('wmode'), wmode);
                }
              }
            }),
            DelAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.dateTime$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.DelAttributes.prototype */ {
              dateTime: {
                get: function () {
                  return this.dateTime$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('dateTime'));
                },
                set: function (dateTime) {
                  this.dateTime$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('dateTime'), dateTime);
                }
              }
            }),
            InsAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.dateTime$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.InsAttributes.prototype */ {
              dateTime: {
                get: function () {
                  return this.dateTime$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('dateTime'));
                },
                set: function (dateTime) {
                  this.dateTime$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('dateTime'), dateTime);
                }
              }
            }),
            TimeAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.dateTime$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.TimeAttributes.prototype */ {
              dateTime: {
                get: function () {
                  return this.dateTime$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('dateTime'));
                },
                set: function (dateTime) {
                  this.dateTime$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('dateTime'), dateTime);
                }
              }
            }),
            FieldsetAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.FieldsetAttributes.prototype */ {
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              }
            }),
            LabelAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.htmlFor$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.LabelAttributes.prototype */ {
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              htmlFor: {
                get: function () {
                  return this.htmlFor$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('htmlFor'));
                },
                set: function (htmlFor) {
                  this.htmlFor$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('htmlFor'), htmlFor);
                }
              }
            }),
            MeterAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.max$delegate = new _.com.github.andrewoma.react.Attribute();
              this.min$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.MeterAttributes.prototype */ {
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              max: {
                get: function () {
                  return this.max$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('max'));
                },
                set: function (max) {
                  this.max$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('max'), max);
                }
              },
              min: {
                get: function () {
                  return this.min$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('min'));
                },
                set: function (min) {
                  this.min$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('min'), min);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            OutputAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.htmlFor$delegate = new _.com.github.andrewoma.react.Attribute();
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.OutputAttributes.prototype */ {
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              htmlFor: {
                get: function () {
                  return this.htmlFor$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('htmlFor'));
                },
                set: function (htmlFor) {
                  this.htmlFor$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('htmlFor'), htmlFor);
                }
              },
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              }
            }),
            ProgressAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.form$delegate = new _.com.github.andrewoma.react.Attribute();
              this.max$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ProgressAttributes.prototype */ {
              form: {
                get: function () {
                  return this.form$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('form'));
                },
                set: function (form) {
                  this.form$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('form'), form);
                }
              },
              max: {
                get: function () {
                  return this.max$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('max'));
                },
                set: function (max) {
                  this.max$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('max'), max);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            CanvasAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.CanvasAttributes.prototype */ {
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            EmbedAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.height$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
              this.width$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.EmbedAttributes.prototype */ {
              height: {
                get: function () {
                  return this.height$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('height'));
                },
                set: function (height) {
                  this.height$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('height'), height);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              },
              width: {
                get: function () {
                  return this.width$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('width'));
                },
                set: function (width) {
                  this.width$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('width'), width);
                }
              }
            }),
            AAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.href$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rel$delegate = new _.com.github.andrewoma.react.Attribute();
              this.target$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.AAttributes.prototype */ {
              href: {
                get: function () {
                  return this.href$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('href'));
                },
                set: function (href) {
                  this.href$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('href'), href);
                }
              },
              rel: {
                get: function () {
                  return this.rel$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rel'));
                },
                set: function (rel) {
                  this.rel$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rel'), rel);
                }
              },
              target: {
                get: function () {
                  return this.target$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('target'));
                },
                set: function (target) {
                  this.target$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('target'), target);
                }
              }
            }),
            BaseAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.href$delegate = new _.com.github.andrewoma.react.Attribute();
              this.target$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.BaseAttributes.prototype */ {
              href: {
                get: function () {
                  return this.href$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('href'));
                },
                set: function (href) {
                  this.href$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('href'), href);
                }
              },
              target: {
                get: function () {
                  return this.target$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('target'));
                },
                set: function (target) {
                  this.target$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('target'), target);
                }
              }
            }),
            LinkAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.href$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rel$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.LinkAttributes.prototype */ {
              href: {
                get: function () {
                  return this.href$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('href'));
                },
                set: function (href) {
                  this.href$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('href'), href);
                }
              },
              rel: {
                get: function () {
                  return this.rel$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rel'));
                },
                set: function (rel) {
                  this.rel$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rel'), rel);
                }
              }
            }),
            TrackAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.label$delegate = new _.com.github.andrewoma.react.Attribute();
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.TrackAttributes.prototype */ {
              label: {
                get: function () {
                  return this.label$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('label'));
                },
                set: function (label) {
                  this.label$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('label'), label);
                }
              },
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              }
            }),
            BgsoundAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.loop$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.BgsoundAttributes.prototype */ {
              loop: {
                get: function () {
                  return this.loop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('loop'));
                },
                set: function (loop) {
                  this.loop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('loop'), loop);
                }
              }
            }),
            MarqueeAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.loop$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.MarqueeAttributes.prototype */ {
              loop: {
                get: function () {
                  return this.loop$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('loop'));
                },
                set: function (loop) {
                  this.loop$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('loop'), loop);
                }
              }
            }),
            MapAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.MapAttributes.prototype */ {
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              }
            }),
            ParamAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.name$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.ParamAttributes.prototype */ {
              name: {
                get: function () {
                  return this.name$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('name'));
                },
                set: function (name) {
                  this.name$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('name'), name);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            OptionAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.selected$delegate = new _.com.github.andrewoma.react.Attribute();
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.OptionAttributes.prototype */ {
              selected: {
                get: function () {
                  return this.selected$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('selected'));
                },
                set: function (selected) {
                  this.selected$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('selected'), selected);
                }
              },
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            SourceAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.src$delegate = new _.com.github.andrewoma.react.Attribute();
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.SourceAttributes.prototype */ {
              src: {
                get: function () {
                  return this.src$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('src'));
                },
                set: function (src) {
                  this.src$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('src'), src);
                }
              },
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              }
            }),
            StyleAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.StyleAttributes.prototype */ {
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              }
            }),
            MenuAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.type$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.MenuAttributes.prototype */ {
              type: {
                get: function () {
                  return this.type$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('type'));
                },
                set: function (type) {
                  this.type$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('type'), type);
                }
              }
            }),
            LiAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.HTMLGlobalAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.value$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.LiAttributes.prototype */ {
              value: {
                get: function () {
                  return this.value$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('value'));
                },
                set: function (value) {
                  this.value$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('value'), value);
                }
              }
            }),
            SVGAttributes: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.ReactAttributes];
            }, function $fun() {
              $fun.baseInitializer.call(this);
              this.id$delegate = new _.com.github.andrewoma.react.Attribute();
              this.cx$delegate = new _.com.github.andrewoma.react.Attribute();
              this.cy$delegate = new _.com.github.andrewoma.react.Attribute();
              this.d$delegate = new _.com.github.andrewoma.react.Attribute();
              this.fill$delegate = new _.com.github.andrewoma.react.Attribute();
              this.fx$delegate = new _.com.github.andrewoma.react.Attribute();
              this.fy$delegate = new _.com.github.andrewoma.react.Attribute();
              this.gradientTransform$delegate = new _.com.github.andrewoma.react.Attribute();
              this.gradientUnits$delegate = new _.com.github.andrewoma.react.Attribute();
              this.offset$delegate = new _.com.github.andrewoma.react.Attribute();
              this.points$delegate = new _.com.github.andrewoma.react.Attribute();
              this.r$delegate = new _.com.github.andrewoma.react.Attribute();
              this.rx$delegate = new _.com.github.andrewoma.react.Attribute();
              this.ry$delegate = new _.com.github.andrewoma.react.Attribute();
              this.spreadMethod$delegate = new _.com.github.andrewoma.react.Attribute();
              this.stopColor$delegate = new _.com.github.andrewoma.react.Attribute();
              this.stopOpacity$delegate = new _.com.github.andrewoma.react.Attribute();
              this.stroke$delegate = new _.com.github.andrewoma.react.Attribute();
              this.strokeLinecap$delegate = new _.com.github.andrewoma.react.Attribute();
              this.strokeWidth$delegate = new _.com.github.andrewoma.react.Attribute();
              this.transform$delegate = new _.com.github.andrewoma.react.Attribute();
              this.version$delegate = new _.com.github.andrewoma.react.Attribute();
              this.viewBox$delegate = new _.com.github.andrewoma.react.Attribute();
              this.x1$delegate = new _.com.github.andrewoma.react.Attribute();
              this.x2$delegate = new _.com.github.andrewoma.react.Attribute();
              this.x$delegate = new _.com.github.andrewoma.react.Attribute();
              this.y1$delegate = new _.com.github.andrewoma.react.Attribute();
              this.y2$delegate = new _.com.github.andrewoma.react.Attribute();
              this.y$delegate = new _.com.github.andrewoma.react.Attribute();
            }, /** @lends _.com.github.andrewoma.react.SVGAttributes.prototype */ {
              id: {
                get: function () {
                  return this.id$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('id'));
                },
                set: function (id) {
                  this.id$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('id'), id);
                }
              },
              cx: {
                get: function () {
                  return this.cx$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('cx'));
                },
                set: function (cx) {
                  this.cx$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('cx'), cx);
                }
              },
              cy: {
                get: function () {
                  return this.cy$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('cy'));
                },
                set: function (cy) {
                  this.cy$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('cy'), cy);
                }
              },
              d: {
                get: function () {
                  return this.d$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('d'));
                },
                set: function (d) {
                  this.d$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('d'), d);
                }
              },
              fill: {
                get: function () {
                  return this.fill$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('fill'));
                },
                set: function (fill) {
                  this.fill$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('fill'), fill);
                }
              },
              fx: {
                get: function () {
                  return this.fx$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('fx'));
                },
                set: function (fx) {
                  this.fx$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('fx'), fx);
                }
              },
              fy: {
                get: function () {
                  return this.fy$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('fy'));
                },
                set: function (fy) {
                  this.fy$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('fy'), fy);
                }
              },
              gradientTransform: {
                get: function () {
                  return this.gradientTransform$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('gradientTransform'));
                },
                set: function (gradientTransform) {
                  this.gradientTransform$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('gradientTransform'), gradientTransform);
                }
              },
              gradientUnits: {
                get: function () {
                  return this.gradientUnits$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('gradientUnits'));
                },
                set: function (gradientUnits) {
                  this.gradientUnits$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('gradientUnits'), gradientUnits);
                }
              },
              offset: {
                get: function () {
                  return this.offset$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('offset'));
                },
                set: function (offset) {
                  this.offset$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('offset'), offset);
                }
              },
              points: {
                get: function () {
                  return this.points$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('points'));
                },
                set: function (points) {
                  this.points$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('points'), points);
                }
              },
              r: {
                get: function () {
                  return this.r$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('r'));
                },
                set: function (r) {
                  this.r$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('r'), r);
                }
              },
              rx: {
                get: function () {
                  return this.rx$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('rx'));
                },
                set: function (rx) {
                  this.rx$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('rx'), rx);
                }
              },
              ry: {
                get: function () {
                  return this.ry$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('ry'));
                },
                set: function (ry) {
                  this.ry$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('ry'), ry);
                }
              },
              spreadMethod: {
                get: function () {
                  return this.spreadMethod$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('spreadMethod'));
                },
                set: function (spreadMethod) {
                  this.spreadMethod$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('spreadMethod'), spreadMethod);
                }
              },
              stopColor: {
                get: function () {
                  return this.stopColor$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('stopColor'));
                },
                set: function (stopColor) {
                  this.stopColor$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('stopColor'), stopColor);
                }
              },
              stopOpacity: {
                get: function () {
                  return this.stopOpacity$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('stopOpacity'));
                },
                set: function (stopOpacity) {
                  this.stopOpacity$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('stopOpacity'), stopOpacity);
                }
              },
              stroke: {
                get: function () {
                  return this.stroke$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('stroke'));
                },
                set: function (stroke) {
                  this.stroke$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('stroke'), stroke);
                }
              },
              strokeLinecap: {
                get: function () {
                  return this.strokeLinecap$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('strokeLinecap'));
                },
                set: function (strokeLinecap) {
                  this.strokeLinecap$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('strokeLinecap'), strokeLinecap);
                }
              },
              strokeWidth: {
                get: function () {
                  return this.strokeWidth$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('strokeWidth'));
                },
                set: function (strokeWidth) {
                  this.strokeWidth$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('strokeWidth'), strokeWidth);
                }
              },
              transform: {
                get: function () {
                  return this.transform$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('transform'));
                },
                set: function (transform) {
                  this.transform$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('transform'), transform);
                }
              },
              version: {
                get: function () {
                  return this.version$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('version'));
                },
                set: function (version) {
                  this.version$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('version'), version);
                }
              },
              viewBox: {
                get: function () {
                  return this.viewBox$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('viewBox'));
                },
                set: function (viewBox) {
                  this.viewBox$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('viewBox'), viewBox);
                }
              },
              x1: {
                get: function () {
                  return this.x1$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('x1'));
                },
                set: function (x1) {
                  this.x1$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('x1'), x1);
                }
              },
              x2: {
                get: function () {
                  return this.x2$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('x2'));
                },
                set: function (x2) {
                  this.x2$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('x2'), x2);
                }
              },
              x: {
                get: function () {
                  return this.x$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('x'));
                },
                set: function (x) {
                  this.x$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('x'), x);
                }
              },
              y1: {
                get: function () {
                  return this.y1$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('y1'));
                },
                set: function (y1) {
                  this.y1$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('y1'), y1);
                }
              },
              y2: {
                get: function () {
                  return this.y2$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('y2'));
                },
                set: function (y2) {
                  this.y2$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('y2'), y2);
                }
              },
              y: {
                get: function () {
                  return this.y$delegate.get_1tsekc$(this, new Kotlin.PropertyMetadata('y'));
                },
                set: function (y) {
                  this.y$delegate.set_1z3uih$(this, new Kotlin.PropertyMetadata('y'), y);
                }
              }
            }),
            initProps: function (properties, init) {
              init.call(properties);
              return Reakt.flattenProperties(properties);
            },
            text_8z0lzh$f: function () {
            },
            text_8z0lzh$f_0: function (value) {
              return function (it) {
                return value;
              };
            },
            text_8z0lzh$: function ($receiver, value, init) {
              if (init === void 0)
                init = _.com.github.andrewoma.react.text_8z0lzh$f;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.text_8z0lzh$f_0(value)), init);
            },
            a_cntk9n$f: function () {
            },
            a_cntk9n$f_0: function () {
            },
            a_cntk9n$f_1: function (properties) {
              return function (it) {
                return React.DOM.a.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.AAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            a_cntk9n$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.a_cntk9n$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.a_cntk9n$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.a_cntk9n$f_1(properties)), init);
            },
            abbr_cnsq9w$f: function () {
            },
            abbr_cnsq9w$f_0: function () {
            },
            abbr_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.abbr.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            abbr_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.abbr_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.abbr_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.abbr_cnsq9w$f_1(properties)), init);
            },
            address_cnsq9w$f: function () {
            },
            address_cnsq9w$f_0: function () {
            },
            address_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.address.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            address_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.address_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.address_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.address_cnsq9w$f_1(properties)), init);
            },
            area_tevlel$f: function () {
            },
            area_tevlel$f_0: function () {
            },
            area_tevlel$f_1: function (properties) {
              return function (it) {
                return React.DOM.area.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.AreaAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            area_tevlel$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.area_tevlel$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.area_tevlel$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.area_tevlel$f_1(properties)), init);
            },
            article_cnsq9w$f: function () {
            },
            article_cnsq9w$f_0: function () {
            },
            article_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.article.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            article_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.article_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.article_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.article_cnsq9w$f_1(properties)), init);
            },
            aside_cnsq9w$f: function () {
            },
            aside_cnsq9w$f_0: function () {
            },
            aside_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.aside.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            aside_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.aside_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.aside_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.aside_cnsq9w$f_1(properties)), init);
            },
            audio_ureqdi$f: function () {
            },
            audio_ureqdi$f_0: function () {
            },
            audio_ureqdi$f_1: function (properties) {
              return function (it) {
                return React.DOM.audio.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.AudioAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            audio_ureqdi$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.audio_ureqdi$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.audio_ureqdi$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.audio_ureqdi$f_1(properties)), init);
            },
            b_cnsq9w$f: function () {
            },
            b_cnsq9w$f_0: function () {
            },
            b_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.b.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            b_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.b_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.b_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.b_cnsq9w$f_1(properties)), init);
            },
            base_z5yiqh$f: function () {
            },
            base_z5yiqh$f_0: function () {
            },
            base_z5yiqh$f_1: function (properties) {
              return function (it) {
                return React.DOM.base.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.BaseAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            base_z5yiqh$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.base_z5yiqh$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.base_z5yiqh$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.base_z5yiqh$f_1(properties)), init);
            },
            bdi_cnsq9w$f: function () {
            },
            bdi_cnsq9w$f_0: function () {
            },
            bdi_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.bdi.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            bdi_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.bdi_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.bdi_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.bdi_cnsq9w$f_1(properties)), init);
            },
            bdo_cnsq9w$f: function () {
            },
            bdo_cnsq9w$f_0: function () {
            },
            bdo_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.bdo.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            bdo_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.bdo_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.bdo_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.bdo_cnsq9w$f_1(properties)), init);
            },
            big_cnsq9w$f: function () {
            },
            big_cnsq9w$f_0: function () {
            },
            big_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.big.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            big_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.big_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.big_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.big_cnsq9w$f_1(properties)), init);
            },
            blockquote_cnsq9w$f: function () {
            },
            blockquote_cnsq9w$f_0: function () {
            },
            blockquote_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.blockquote.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            blockquote_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.blockquote_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.blockquote_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.blockquote_cnsq9w$f_1(properties)), init);
            },
            body_cnsq9w$f: function () {
            },
            body_cnsq9w$f_0: function () {
            },
            body_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.body.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            body_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.body_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.body_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.body_cnsq9w$f_1(properties)), init);
            },
            br_cnsq9w$f: function () {
            },
            br_cnsq9w$f_0: function () {
            },
            br_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.br.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            br_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.br_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.br_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.br_cnsq9w$f_1(properties)), init);
            },
            button_zacx7s$f: function () {
            },
            button_zacx7s$f_0: function () {
            },
            button_zacx7s$f_1: function (properties) {
              return function (it) {
                return React.DOM.button.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ButtonAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            button_zacx7s$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.button_zacx7s$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.button_zacx7s$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.button_zacx7s$f_1(properties)), init);
            },
            canvas_n7gpe6$f: function () {
            },
            canvas_n7gpe6$f_0: function () {
            },
            canvas_n7gpe6$f_1: function (properties) {
              return function (it) {
                return React.DOM.canvas.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.CanvasAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            canvas_n7gpe6$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.canvas_n7gpe6$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.canvas_n7gpe6$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.canvas_n7gpe6$f_1(properties)), init);
            },
            caption_cnsq9w$f: function () {
            },
            caption_cnsq9w$f_0: function () {
            },
            caption_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.caption.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            caption_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.caption_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.caption_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.caption_cnsq9w$f_1(properties)), init);
            },
            cite_cnsq9w$f: function () {
            },
            cite_cnsq9w$f_0: function () {
            },
            cite_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.cite.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            cite_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.cite_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.cite_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.cite_cnsq9w$f_1(properties)), init);
            },
            code_cnsq9w$f: function () {
            },
            code_cnsq9w$f_0: function () {
            },
            code_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.code.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            code_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.code_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.code_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.code_cnsq9w$f_1(properties)), init);
            },
            col_cnsq9w$f: function () {
            },
            col_cnsq9w$f_0: function () {
            },
            col_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.col.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            col_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.col_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.col_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.col_cnsq9w$f_1(properties)), init);
            },
            colgroup_cnsq9w$f: function () {
            },
            colgroup_cnsq9w$f_0: function () {
            },
            colgroup_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.colgroup.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            colgroup_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.colgroup_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.colgroup_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.colgroup_cnsq9w$f_1(properties)), init);
            },
            data_cnsq9w$f: function () {
            },
            data_cnsq9w$f_0: function () {
            },
            data_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.data.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            data_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.data_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.data_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.data_cnsq9w$f_1(properties)), init);
            },
            datalist_cnsq9w$f: function () {
            },
            datalist_cnsq9w$f_0: function () {
            },
            datalist_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.datalist.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            datalist_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.datalist_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.datalist_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.datalist_cnsq9w$f_1(properties)), init);
            },
            dd_cnsq9w$f: function () {
            },
            dd_cnsq9w$f_0: function () {
            },
            dd_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.dd.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            dd_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.dd_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.dd_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.dd_cnsq9w$f_1(properties)), init);
            },
            del_o5obw1$f: function () {
            },
            del_o5obw1$f_0: function () {
            },
            del_o5obw1$f_1: function (properties) {
              return function (it) {
                return React.DOM.del.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.DelAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            del_o5obw1$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.del_o5obw1$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.del_o5obw1$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.del_o5obw1$f_1(properties)), init);
            },
            details_cnsq9w$f: function () {
            },
            details_cnsq9w$f_0: function () {
            },
            details_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.details.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            details_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.details_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.details_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.details_cnsq9w$f_1(properties)), init);
            },
            dfn_cnsq9w$f: function () {
            },
            dfn_cnsq9w$f_0: function () {
            },
            dfn_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.dfn.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            dfn_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.dfn_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.dfn_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.dfn_cnsq9w$f_1(properties)), init);
            },
            div_cnsq9w$f: function () {
            },
            div_cnsq9w$f_0: function () {
            },
            div_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.div.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            div_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.div_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.div_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.div_cnsq9w$f_1(properties)), init);
            },
            dl_cnsq9w$f: function () {
            },
            dl_cnsq9w$f_0: function () {
            },
            dl_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.dl.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            dl_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.dl_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.dl_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.dl_cnsq9w$f_1(properties)), init);
            },
            dt_cnsq9w$f: function () {
            },
            dt_cnsq9w$f_0: function () {
            },
            dt_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.dt.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            dt_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.dt_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.dt_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.dt_cnsq9w$f_1(properties)), init);
            },
            em_cnsq9w$f: function () {
            },
            em_cnsq9w$f_0: function () {
            },
            em_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.em.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            em_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.em_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.em_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.em_cnsq9w$f_1(properties)), init);
            },
            embed_3al6n7$f: function () {
            },
            embed_3al6n7$f_0: function () {
            },
            embed_3al6n7$f_1: function (properties) {
              return function (it) {
                return React.DOM.embed.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.EmbedAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            embed_3al6n7$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.embed_3al6n7$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.embed_3al6n7$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.embed_3al6n7$f_1(properties)), init);
            },
            fieldset_a6m50i$f: function () {
            },
            fieldset_a6m50i$f_0: function () {
            },
            fieldset_a6m50i$f_1: function (properties) {
              return function (it) {
                return React.DOM.fieldset.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.FieldsetAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            fieldset_a6m50i$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.fieldset_a6m50i$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.fieldset_a6m50i$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.fieldset_a6m50i$f_1(properties)), init);
            },
            figcaption_cnsq9w$f: function () {
            },
            figcaption_cnsq9w$f_0: function () {
            },
            figcaption_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.figcaption.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            figcaption_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.figcaption_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.figcaption_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.figcaption_cnsq9w$f_1(properties)), init);
            },
            figure_cnsq9w$f: function () {
            },
            figure_cnsq9w$f_0: function () {
            },
            figure_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.figure.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            figure_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.figure_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.figure_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.figure_cnsq9w$f_1(properties)), init);
            },
            footer_cnsq9w$f: function () {
            },
            footer_cnsq9w$f_0: function () {
            },
            footer_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.footer.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            footer_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.footer_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.footer_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.footer_cnsq9w$f_1(properties)), init);
            },
            form_davfei$f: function () {
            },
            form_davfei$f_0: function () {
            },
            form_davfei$f_1: function (properties) {
              return function (it) {
                return React.DOM.form.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.FormAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            form_davfei$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.form_davfei$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.form_davfei$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.form_davfei$f_1(properties)), init);
            },
            h1_cnsq9w$f: function () {
            },
            h1_cnsq9w$f_0: function () {
            },
            h1_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h1.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h1_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h1_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h1_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h1_cnsq9w$f_1(properties)), init);
            },
            h2_cnsq9w$f: function () {
            },
            h2_cnsq9w$f_0: function () {
            },
            h2_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h2.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h2_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h2_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h2_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h2_cnsq9w$f_1(properties)), init);
            },
            h3_cnsq9w$f: function () {
            },
            h3_cnsq9w$f_0: function () {
            },
            h3_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h3.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h3_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h3_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h3_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h3_cnsq9w$f_1(properties)), init);
            },
            h4_cnsq9w$f: function () {
            },
            h4_cnsq9w$f_0: function () {
            },
            h4_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h4.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h4_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h4_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h4_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h4_cnsq9w$f_1(properties)), init);
            },
            h5_cnsq9w$f: function () {
            },
            h5_cnsq9w$f_0: function () {
            },
            h5_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h5.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h5_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h5_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h5_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h5_cnsq9w$f_1(properties)), init);
            },
            h6_cnsq9w$f: function () {
            },
            h6_cnsq9w$f_0: function () {
            },
            h6_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.h6.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            h6_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.h6_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.h6_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.h6_cnsq9w$f_1(properties)), init);
            },
            head_cnsq9w$f: function () {
            },
            head_cnsq9w$f_0: function () {
            },
            head_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.head.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            head_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.head_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.head_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.head_cnsq9w$f_1(properties)), init);
            },
            header_cnsq9w$f: function () {
            },
            header_cnsq9w$f_0: function () {
            },
            header_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.header.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            header_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.header_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.header_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.header_cnsq9w$f_1(properties)), init);
            },
            hr_cnsq9w$f: function () {
            },
            hr_cnsq9w$f_0: function () {
            },
            hr_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.hr.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            hr_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.hr_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.hr_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.hr_cnsq9w$f_1(properties)), init);
            },
            html_cnsq9w$f: function () {
            },
            html_cnsq9w$f_0: function () {
            },
            html_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.html.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            html_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.html_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.html_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.html_cnsq9w$f_1(properties)), init);
            },
            i_cnsq9w$f: function () {
            },
            i_cnsq9w$f_0: function () {
            },
            i_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.i.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            i_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.i_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.i_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.i_cnsq9w$f_1(properties)), init);
            },
            iframe_cf852e$f: function () {
            },
            iframe_cf852e$f_0: function () {
            },
            iframe_cf852e$f_1: function (properties) {
              return function (it) {
                return React.DOM.iframe.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.IframeAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            iframe_cf852e$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.iframe_cf852e$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.iframe_cf852e$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.iframe_cf852e$f_1(properties)), init);
            },
            img_o9i5q1$f: function () {
            },
            img_o9i5q1$f_0: function () {
            },
            img_o9i5q1$f_1: function (properties) {
              return function (it) {
                return React.DOM.img.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ImgAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            img_o9i5q1$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.img_o9i5q1$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.img_o9i5q1$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.img_o9i5q1$f_1(properties)), init);
            },
            input_gcvk32$f: function () {
            },
            input_gcvk32$f_0: function () {
            },
            input_gcvk32$f_1: function (properties) {
              return function (it) {
                return React.DOM.input.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.InputAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            input_gcvk32$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.input_gcvk32$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.input_gcvk32$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.input_gcvk32$f_1(properties)), init);
            },
            ins_7dbki$f: function () {
            },
            ins_7dbki$f_0: function () {
            },
            ins_7dbki$f_1: function (properties) {
              return function (it) {
                return React.DOM.ins.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.InsAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            ins_7dbki$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.ins_7dbki$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.ins_7dbki$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.ins_7dbki$f_1(properties)), init);
            },
            kbd_cnsq9w$f: function () {
            },
            kbd_cnsq9w$f_0: function () {
            },
            kbd_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.kbd.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            kbd_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.kbd_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.kbd_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.kbd_cnsq9w$f_1(properties)), init);
            },
            keygen_i0j17d$f: function () {
            },
            keygen_i0j17d$f_0: function () {
            },
            keygen_i0j17d$f_1: function (properties) {
              return function (it) {
                return React.DOM.keygen.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.KeygenAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            keygen_i0j17d$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.keygen_i0j17d$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.keygen_i0j17d$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.keygen_i0j17d$f_1(properties)), init);
            },
            label_9jwnu0$f: function () {
            },
            label_9jwnu0$f_0: function () {
            },
            label_9jwnu0$f_1: function (properties) {
              return function (it) {
                return React.DOM.label.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.LabelAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            label_9jwnu0$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.label_9jwnu0$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.label_9jwnu0$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.label_9jwnu0$f_1(properties)), init);
            },
            legend_cnsq9w$f: function () {
            },
            legend_cnsq9w$f_0: function () {
            },
            legend_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.legend.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            legend_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.legend_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.legend_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.legend_cnsq9w$f_1(properties)), init);
            },
            li_nvwzjh$f: function () {
            },
            li_nvwzjh$f_0: function () {
            },
            li_nvwzjh$f_1: function (properties) {
              return function (it) {
                return React.DOM.li.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.LiAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            li_nvwzjh$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.li_nvwzjh$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.li_nvwzjh$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.li_nvwzjh$f_1(properties)), init);
            },
            link_lrvnps$f: function () {
            },
            link_lrvnps$f_0: function () {
            },
            link_lrvnps$f_1: function (properties) {
              return function (it) {
                return React.DOM.link.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.LinkAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            link_lrvnps$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.link_lrvnps$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.link_lrvnps$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.link_lrvnps$f_1(properties)), init);
            },
            main_cnsq9w$f: function () {
            },
            main_cnsq9w$f_0: function () {
            },
            main_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.main.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            main_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.main_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.main_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.main_cnsq9w$f_1(properties)), init);
            },
            map_8zw800$f: function () {
            },
            map_8zw800$f_0: function () {
            },
            map_8zw800$f_1: function (properties) {
              return function (it) {
                return React.DOM.map.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.MapAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            map_8zw800$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.map_8zw800$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.map_8zw800$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.map_8zw800$f_1(properties)), init);
            },
            mark_cnsq9w$f: function () {
            },
            mark_cnsq9w$f_0: function () {
            },
            mark_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.mark.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            mark_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.mark_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.mark_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.mark_cnsq9w$f_1(properties)), init);
            },
            menu_zhvxpx$f: function () {
            },
            menu_zhvxpx$f_0: function () {
            },
            menu_zhvxpx$f_1: function (properties) {
              return function (it) {
                return React.DOM.menu.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.MenuAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            menu_zhvxpx$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.menu_zhvxpx$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.menu_zhvxpx$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.menu_zhvxpx$f_1(properties)), init);
            },
            menuitem_cnsq9w$f: function () {
            },
            menuitem_cnsq9w$f_0: function () {
            },
            menuitem_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.menuitem.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            menuitem_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.menuitem_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.menuitem_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.menuitem_cnsq9w$f_1(properties)), init);
            },
            meta_u9wbz9$f: function () {
            },
            meta_u9wbz9$f_0: function () {
            },
            meta_u9wbz9$f_1: function (properties) {
              return function (it) {
                return React.DOM.meta.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.MetaAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            meta_u9wbz9$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.meta_u9wbz9$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.meta_u9wbz9$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.meta_u9wbz9$f_1(properties)), init);
            },
            meter_fxwnjn$f: function () {
            },
            meter_fxwnjn$f_0: function () {
            },
            meter_fxwnjn$f_1: function (properties) {
              return function (it) {
                return React.DOM.meter.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.MeterAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            meter_fxwnjn$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.meter_fxwnjn$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.meter_fxwnjn$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.meter_fxwnjn$f_1(properties)), init);
            },
            nav_cnsq9w$f: function () {
            },
            nav_cnsq9w$f_0: function () {
            },
            nav_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.nav.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            nav_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.nav_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.nav_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.nav_cnsq9w$f_1(properties)), init);
            },
            noscript_cnsq9w$f: function () {
            },
            noscript_cnsq9w$f_0: function () {
            },
            noscript_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.noscript.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            noscript_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.noscript_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.noscript_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.noscript_cnsq9w$f_1(properties)), init);
            },
            obj_rh5onp$f: function () {
            },
            obj_rh5onp$f_0: function () {
            },
            obj_rh5onp$f_1: function (properties) {
              return function (it) {
                return React.DOM.object.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ObjectAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            obj_rh5onp$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.obj_rh5onp$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.obj_rh5onp$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.obj_rh5onp$f_1(properties)), init);
            },
            ol_cnsq9w$f: function () {
            },
            ol_cnsq9w$f_0: function () {
            },
            ol_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.ol.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            ol_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.ol_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.ol_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.ol_cnsq9w$f_1(properties)), init);
            },
            optgroup_cnsq9w$f: function () {
            },
            optgroup_cnsq9w$f_0: function () {
            },
            optgroup_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.optgroup.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            optgroup_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.optgroup_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.optgroup_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.optgroup_cnsq9w$f_1(properties)), init);
            },
            option_az9cwb$f: function () {
            },
            option_az9cwb$f_0: function () {
            },
            option_az9cwb$f_1: function (properties) {
              return function (it) {
                return React.DOM.option.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.OptionAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            option_az9cwb$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.option_az9cwb$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.option_az9cwb$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.option_az9cwb$f_1(properties)), init);
            },
            output_rqrq09$f: function () {
            },
            output_rqrq09$f_0: function () {
            },
            output_rqrq09$f_1: function (properties) {
              return function (it) {
                return React.DOM.output.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.OutputAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            output_rqrq09$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.output_rqrq09$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.output_rqrq09$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.output_rqrq09$f_1(properties)), init);
            },
            p_cnsq9w$f: function () {
            },
            p_cnsq9w$f_0: function () {
            },
            p_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.p.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            p_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.p_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.p_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.p_cnsq9w$f_1(properties)), init);
            },
            param_bh5tin$f: function () {
            },
            param_bh5tin$f_0: function () {
            },
            param_bh5tin$f_1: function (properties) {
              return function (it) {
                return React.DOM.param.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ParamAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            param_bh5tin$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.param_bh5tin$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.param_bh5tin$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.param_bh5tin$f_1(properties)), init);
            },
            pre_cnsq9w$f: function () {
            },
            pre_cnsq9w$f_0: function () {
            },
            pre_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.pre.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            pre_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.pre_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.pre_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.pre_cnsq9w$f_1(properties)), init);
            },
            progress_4um9dp$f: function () {
            },
            progress_4um9dp$f_0: function () {
            },
            progress_4um9dp$f_1: function (properties) {
              return function (it) {
                return React.DOM.progress.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ProgressAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            progress_4um9dp$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.progress_4um9dp$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.progress_4um9dp$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.progress_4um9dp$f_1(properties)), init);
            },
            q_cnsq9w$f: function () {
            },
            q_cnsq9w$f_0: function () {
            },
            q_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.q.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            q_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.q_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.q_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.q_cnsq9w$f_1(properties)), init);
            },
            rp_cnsq9w$f: function () {
            },
            rp_cnsq9w$f_0: function () {
            },
            rp_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.rp.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            rp_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.rp_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.rp_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.rp_cnsq9w$f_1(properties)), init);
            },
            rt_cnsq9w$f: function () {
            },
            rt_cnsq9w$f_0: function () {
            },
            rt_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.rt.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            rt_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.rt_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.rt_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.rt_cnsq9w$f_1(properties)), init);
            },
            ruby_cnsq9w$f: function () {
            },
            ruby_cnsq9w$f_0: function () {
            },
            ruby_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.ruby.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            ruby_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.ruby_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.ruby_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.ruby_cnsq9w$f_1(properties)), init);
            },
            s_cnsq9w$f: function () {
            },
            s_cnsq9w$f_0: function () {
            },
            s_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.s.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            s_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.s_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.s_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.s_cnsq9w$f_1(properties)), init);
            },
            samp_cnsq9w$f: function () {
            },
            samp_cnsq9w$f_0: function () {
            },
            samp_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.samp.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            samp_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.samp_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.samp_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.samp_cnsq9w$f_1(properties)), init);
            },
            script_fulpzz$f: function () {
            },
            script_fulpzz$f_0: function () {
            },
            script_fulpzz$f_1: function (properties) {
              return function (it) {
                return React.DOM.script.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ScriptAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            script_fulpzz$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.script_fulpzz$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.script_fulpzz$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.script_fulpzz$f_1(properties)), init);
            },
            section_cnsq9w$f: function () {
            },
            section_cnsq9w$f_0: function () {
            },
            section_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.section.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            section_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.section_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.section_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.section_cnsq9w$f_1(properties)), init);
            },
            select_5a0mnm$f: function () {
            },
            select_5a0mnm$f_0: function () {
            },
            select_5a0mnm$f_1: function (properties) {
              return function (it) {
                return React.DOM.select.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SelectAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            select_5a0mnm$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.select_5a0mnm$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.select_5a0mnm$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.select_5a0mnm$f_1(properties)), init);
            },
            small_cnsq9w$f: function () {
            },
            small_cnsq9w$f_0: function () {
            },
            small_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.small.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            small_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.small_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.small_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.small_cnsq9w$f_1(properties)), init);
            },
            source_m9s775$f: function () {
            },
            source_m9s775$f_0: function () {
            },
            source_m9s775$f_1: function (properties) {
              return function (it) {
                return React.DOM.source.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SourceAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            source_m9s775$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.source_m9s775$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.source_m9s775$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.source_m9s775$f_1(properties)), init);
            },
            span_cnsq9w$f: function () {
            },
            span_cnsq9w$f_0: function () {
            },
            span_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.span.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            span_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.span_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.span_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.span_cnsq9w$f_1(properties)), init);
            },
            strong_cnsq9w$f: function () {
            },
            strong_cnsq9w$f_0: function () {
            },
            strong_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.strong.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            strong_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.strong_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.strong_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.strong_cnsq9w$f_1(properties)), init);
            },
            style_xkk93f$f: function () {
            },
            style_xkk93f$f_0: function () {
            },
            style_xkk93f$f_1: function (properties) {
              return function (it) {
                return React.DOM.style.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.StyleAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            style_xkk93f$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.style_xkk93f$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.style_xkk93f$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.style_xkk93f$f_1(properties)), init);
            },
            sub_cnsq9w$f: function () {
            },
            sub_cnsq9w$f_0: function () {
            },
            sub_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.sub.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            sub_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.sub_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.sub_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.sub_cnsq9w$f_1(properties)), init);
            },
            summary_cnsq9w$f: function () {
            },
            summary_cnsq9w$f_0: function () {
            },
            summary_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.summary.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            summary_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.summary_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.summary_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.summary_cnsq9w$f_1(properties)), init);
            },
            sup_cnsq9w$f: function () {
            },
            sup_cnsq9w$f_0: function () {
            },
            sup_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.sup.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            sup_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.sup_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.sup_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.sup_cnsq9w$f_1(properties)), init);
            },
            table_5t7x82$f: function () {
            },
            table_5t7x82$f_0: function () {
            },
            table_5t7x82$f_1: function (properties) {
              return function (it) {
                return React.DOM.table.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.TableAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            table_5t7x82$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.table_5t7x82$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.table_5t7x82$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.table_5t7x82$f_1(properties)), init);
            },
            tbody_cnsq9w$f: function () {
            },
            tbody_cnsq9w$f_0: function () {
            },
            tbody_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.tbody.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            tbody_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.tbody_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.tbody_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.tbody_cnsq9w$f_1(properties)), init);
            },
            td_xg4nxi$f: function () {
            },
            td_xg4nxi$f_0: function () {
            },
            td_xg4nxi$f_1: function (properties) {
              return function (it) {
                return React.DOM.td.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.TdAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            td_xg4nxi$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.td_xg4nxi$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.td_xg4nxi$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.td_xg4nxi$f_1(properties)), init);
            },
            textarea_xwjpxs$f: function () {
            },
            textarea_xwjpxs$f_0: function () {
            },
            textarea_xwjpxs$f_1: function (properties) {
              return function (it) {
                return React.DOM.textarea.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.TextareaAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            textarea_xwjpxs$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.textarea_xwjpxs$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.textarea_xwjpxs$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.textarea_xwjpxs$f_1(properties)), init);
            },
            tfoot_cnsq9w$f: function () {
            },
            tfoot_cnsq9w$f_0: function () {
            },
            tfoot_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.tfoot.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            tfoot_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.tfoot_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.tfoot_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.tfoot_cnsq9w$f_1(properties)), init);
            },
            th_o5sp7u$f: function () {
            },
            th_o5sp7u$f_0: function () {
            },
            th_o5sp7u$f_1: function (properties) {
              return function (it) {
                return React.DOM.th.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.ThAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            th_o5sp7u$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.th_o5sp7u$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.th_o5sp7u$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.th_o5sp7u$f_1(properties)), init);
            },
            thead_cnsq9w$f: function () {
            },
            thead_cnsq9w$f_0: function () {
            },
            thead_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.thead.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            thead_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.thead_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.thead_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.thead_cnsq9w$f_1(properties)), init);
            },
            time_whri71$f: function () {
            },
            time_whri71$f_0: function () {
            },
            time_whri71$f_1: function (properties) {
              return function (it) {
                return React.DOM.time.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.TimeAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            time_whri71$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.time_whri71$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.time_whri71$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.time_whri71$f_1(properties)), init);
            },
            title_cnsq9w$f: function () {
            },
            title_cnsq9w$f_0: function () {
            },
            title_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.title.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            title_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.title_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.title_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.title_cnsq9w$f_1(properties)), init);
            },
            tr_cnsq9w$f: function () {
            },
            tr_cnsq9w$f_0: function () {
            },
            tr_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.tr.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            tr_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.tr_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.tr_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.tr_cnsq9w$f_1(properties)), init);
            },
            track_mjpj1t$f: function () {
            },
            track_mjpj1t$f_0: function () {
            },
            track_mjpj1t$f_1: function (properties) {
              return function (it) {
                return React.DOM.track.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.TrackAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            track_mjpj1t$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.track_mjpj1t$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.track_mjpj1t$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.track_mjpj1t$f_1(properties)), init);
            },
            u_cnsq9w$f: function () {
            },
            u_cnsq9w$f_0: function () {
            },
            u_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.u.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            u_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.u_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.u_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.u_cnsq9w$f_1(properties)), init);
            },
            ul_cnsq9w$f: function () {
            },
            ul_cnsq9w$f_0: function () {
            },
            ul_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.ul.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            ul_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.ul_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.ul_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.ul_cnsq9w$f_1(properties)), init);
            },
            variable_cnsq9w$f: function () {
            },
            variable_cnsq9w$f_0: function () {
            },
            variable_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.var.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            variable_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.variable_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.variable_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.variable_cnsq9w$f_1(properties)), init);
            },
            video_djq1s1$f: function () {
            },
            video_djq1s1$f_0: function () {
            },
            video_djq1s1$f_1: function (properties) {
              return function (it) {
                return React.DOM.video.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.VideoAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            video_djq1s1$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.video_djq1s1$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.video_djq1s1$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.video_djq1s1$f_1(properties)), init);
            },
            wbr_cnsq9w$f: function () {
            },
            wbr_cnsq9w$f_0: function () {
            },
            wbr_cnsq9w$f_1: function (properties) {
              return function (it) {
                return React.DOM.wbr.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.HTMLGlobalAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            wbr_cnsq9w$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.wbr_cnsq9w$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.wbr_cnsq9w$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.wbr_cnsq9w$f_1(properties)), init);
            },
            circle_a4e008$f: function () {
            },
            circle_a4e008$f_0: function () {
            },
            circle_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.circle.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            circle_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.circle_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.circle_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.circle_a4e008$f_1(properties)), init);
            },
            g_a4e008$f: function () {
            },
            g_a4e008$f_0: function () {
            },
            g_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.g.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            g_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.g_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.g_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.g_a4e008$f_1(properties)), init);
            },
            line_a4e008$f: function () {
            },
            line_a4e008$f_0: function () {
            },
            line_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.line.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            line_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.line_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.line_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.line_a4e008$f_1(properties)), init);
            },
            path_a4e008$f: function () {
            },
            path_a4e008$f_0: function () {
            },
            path_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.path.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            path_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.path_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.path_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.path_a4e008$f_1(properties)), init);
            },
            polygon_a4e008$f: function () {
            },
            polygon_a4e008$f_0: function () {
            },
            polygon_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.polygon.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            polygon_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.polygon_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.polygon_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.polygon_a4e008$f_1(properties)), init);
            },
            polyline_a4e008$f: function () {
            },
            polyline_a4e008$f_0: function () {
            },
            polyline_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.polyline.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            polyline_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.polyline_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.polyline_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.polyline_a4e008$f_1(properties)), init);
            },
            rect_a4e008$f: function () {
            },
            rect_a4e008$f_0: function () {
            },
            rect_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.rect.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            rect_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.rect_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.rect_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.rect_a4e008$f_1(properties)), init);
            },
            svg_a4e008$f: function () {
            },
            svg_a4e008$f_0: function () {
            },
            svg_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.svg.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            svg_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.svg_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.svg_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.svg_a4e008$f_1(properties)), init);
            },
            text_a4e008$f: function () {
            },
            text_a4e008$f_0: function () {
            },
            text_a4e008$f_1: function (properties) {
              return function (it) {
                return React.DOM.text.apply(null, [_.com.github.andrewoma.react.initProps(new _.com.github.andrewoma.react.SVGAttributes(), properties)].concat(it.transformChildren()));
              };
            },
            text_a4e008$: function ($receiver, properties, init) {
              if (properties === void 0)
                properties = _.com.github.andrewoma.react.text_a4e008$f;
              if (init === void 0)
                init = _.com.github.andrewoma.react.text_a4e008$f_0;
              return $receiver.construct_jol6v7$(new _.com.github.andrewoma.react.Component(_.com.github.andrewoma.react.text_a4e008$f_1(properties)), init);
            },
            classSet: function (classes) {
              var tmp$0, tmp$1, tmp$2;
              var sb = new Kotlin.StringBuilder();
              tmp$0 = classes, tmp$1 = tmp$0.length;
              for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
                var pair = tmp$0[tmp$2];
                if (pair.second)
                  sb.append(pair.first);
              }
              return sb.toString();
            },
            LogLevel: Kotlin.createClass(null, function (ordinal) {
              this.ordinal = ordinal;
            }, null, /** @lends _.com.github.andrewoma.react.LogLevel */ {
              object_initializer$: function () {
                return Kotlin.createObject(null, function () {
                  this.debug = new _.com.github.andrewoma.react.LogLevel(1);
                  this.info = new _.com.github.andrewoma.react.LogLevel(2);
                  this.warn = new _.com.github.andrewoma.react.LogLevel(3);
                  this.error = new _.com.github.andrewoma.react.LogLevel(4);
                  this.none = new _.com.github.andrewoma.react.LogLevel(5);
                }, {
                  parse: function (value) {
                    var tmp$0;
                    if (value === 'debug')
                      tmp$0 = this.debug;
                    else if (value === 'info')
                      tmp$0 = this.info;
                    else if (value === 'warn')
                      tmp$0 = this.warn;
                    else if (value === 'error')
                      tmp$0 = this.error;
                    else if (value === 'none')
                      tmp$0 = this.none;
                    else
                      throw new Error("Unknown log level: '" + value + "'");
                    return tmp$0;
                  }
                });
              }
            }),
            Log: Kotlin.createClass(null, function (logLevel) {
              this.logLevel = logLevel;
            }, /** @lends _.com.github.andrewoma.react.Log.prototype */ {
              debug_9mqe4v$: function (objects) {
                var tmp$0;
                var $this = this;
                if (_.com.github.andrewoma.react.LogLevel.object.debug.ordinal >= $this.logLevel.ordinal) {
                  var tmp$0_0;
                  (tmp$0_0 = console).info.apply(tmp$0_0, objects);
                }
                tmp$0 = undefined;
                tmp$0;
              },
              info_9mqe4v$: function (objects) {
                var tmp$0;
                var $this = this;
                if (_.com.github.andrewoma.react.LogLevel.object.info.ordinal >= $this.logLevel.ordinal) {
                  var tmp$0_0;
                  (tmp$0_0 = console).info.apply(tmp$0_0, objects);
                }
                tmp$0 = undefined;
                tmp$0;
              },
              warn_9mqe4v$: function (objects) {
                var tmp$0;
                var $this = this;
                if (_.com.github.andrewoma.react.LogLevel.object.warn.ordinal >= $this.logLevel.ordinal) {
                  var tmp$0_0;
                  (tmp$0_0 = console).warn.apply(tmp$0_0, objects);
                }
                tmp$0 = undefined;
                tmp$0;
              },
              error_9mqe4v$: function (objects) {
                var tmp$0;
                var $this = this;
                if (_.com.github.andrewoma.react.LogLevel.object.error.ordinal >= $this.logLevel.ordinal) {
                  var tmp$0_0;
                  (tmp$0_0 = console).error.apply(tmp$0_0, objects);
                }
                tmp$0 = undefined;
                tmp$0;
              },
              logIfEnabled: function (level, f) {
                if (level.ordinal >= this.logLevel.ordinal)
                  f();
              }
            }, /** @lends _.com.github.andrewoma.react.Log */ {
            }),
            logLevelFromLocation: function (location) {
              var tmp$0, tmp$1, tmp$2;
              var prefix = 'log-level=';
              tmp$0 = Kotlin.splitString(location, '[?&]'), tmp$1 = tmp$0.length;
              for (var tmp$2 = 0; tmp$2 !== tmp$1; ++tmp$2) {
                var token = tmp$0[tmp$2];
                if (token.startsWith(prefix))
                  return _.com.github.andrewoma.react.LogLevel.object.parse(token.substring(prefix.length));
              }
              return _.com.github.andrewoma.react.LogLevel.object.none;
            },
            React: Kotlin.createClass(null, null, /** @lends _.com.github.andrewoma.react.React.prototype */ {
              createFactory_oqkx6a$: function (spec) {
                return Reakt.createClass(spec);
              },
              renderComponent_vbpb6g$: function (component, container, callback) {
                if (callback === void 0)
                  callback = _.com.github.andrewoma.react.React.renderComponent_vbpb6g$f;
                return React.renderComponent(component, container, callback);
              }
            }, /** @lends _.com.github.andrewoma.react.React */ {
              renderComponent_vbpb6g$f: function () {
              }
            }),
            ReactMixin: Kotlin.createTrait(null, /** @lends _.com.github.andrewoma.react.ReactMixin.prototype */ {
              componentWillMount: function () {
              },
              componentDidMount: function () {
              },
              componentWillReceiveProps_za3rmp$: function (nextProps) {
              },
              shouldComponentUpdate_wn2jw4$: function (nextProps, nextState) {
                return true;
              },
              componentWillUpdate_wn2jw4$: function (nextProps, nextState) {
              },
              componentDidUpdate_wn2jw4$: function (nextProps, nextState) {
              },
              componentWillUnmount: function () {
              }
            }),
            Ref: Kotlin.createClass(null, function (value) {
              this.value = value;
            }),
            ReactComponentSpec: Kotlin.createClass(function () {
              return [_.com.github.andrewoma.react.ReactMixin];
            }, function () {
              this.component = null;
              this.mixins = [];
              this.displayName = '';
            }, /** @lends _.com.github.andrewoma.react.ReactComponentSpec.prototype */ {
              state: {
                get: function () {
                  var tmp$0, tmp$1;
                  return (tmp$1 = ((tmp$0 = this.component) != null ? tmp$0 : Kotlin.throwNPE()).state.value) != null ? tmp$1 : Kotlin.throwNPE();
                },
                set: function (value) {
                  var tmp$0;
                  ((tmp$0 = this.component) != null ? tmp$0 : Kotlin.throwNPE()).setState(new _.com.github.andrewoma.react.Ref(value));
                }
              },
              props: {
                get: function () {
                  var tmp$0, tmp$1;
                  return (tmp$1 = ((tmp$0 = this.component) != null ? tmp$0 : Kotlin.throwNPE()).props.value) != null ? tmp$1 : Kotlin.throwNPE();
                },
                set: function (value) {
                  var tmp$0;
                  ((tmp$0 = this.component) != null ? tmp$0 : Kotlin.throwNPE()).setProps(new _.com.github.andrewoma.react.Ref(value), null);
                }
              },
              getInitialState: function () {
                var state = this.initialState();
                return state == null ? null : new _.com.github.andrewoma.react.Ref(state);
              },
              initialState: function () {
                return null;
              },
              getDefaultProps: function () {
                return null;
              }
            }),
            check: function (condition, message) {
              if (message === void 0)
                message = 'Assertion failed';
              if (!condition) {
                throw new Error(message);
              }
            }
          })
        })
      })
    })
  });
  Kotlin.defineModule('reakt', _);
  _.todo.main([]);
}(Kotlin));

//@ sourceMappingURL=reakt.js.map
