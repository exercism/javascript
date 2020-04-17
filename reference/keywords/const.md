# `const`

The `const` keyword is used to create a read-only reference to a value.

```javascript
const NAME = 'Bob'
```

The value it holds is still [mutable][concept-immutability], but the variable identifier cannot be reassigned:

```javascript
const NAME = 'Bob'

NAME = 'Steve'
// TypeError: Assignment to constant variable
```

or redeclared:

```javascript
const NAME = 'Bob'

const NAME = 'Sally'
// SyntaxError: Identifier 'NAME' has already been declared
```

Variables declared using the `const` keyword are [block-scoped][concept-scope], meaning they are only accessible within the current block, and any contained sub-blocks.

The value that a variable declared using `const` holds can only be referenced _after_ it has been defined. This is known as the [Temporal Dead Zone][concept-temporal-dead-zone].

[concept-temporal-dead-zone]: ../info/scope.md#temporal-dead-zone
[concept-immutability]: ../info/immutability.md
[concept-scope]: ../info/scope.md
