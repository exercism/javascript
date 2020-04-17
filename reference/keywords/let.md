# `let`

The `let` keyword declares a block scoped local [variable][concept-variable], optionally initializing it to a value.

```javascript
let arrow
arrow = '->'

// or

let arrow = '->'
```

Variables declared using the `let` keyword have [scope][concept-scope] in the block in which they are defined, and any contained sub-blocks. The main difference between `let` and [`var`][keyword-var] is that the scope of `var` is the entire function in which it was declared.

```javascript
function bob() {
  {
    let name = 'Bob'
  }
  console.log(name) // Variable name is undefined
}
```

```javascript
function steve() {
  {
    var name = 'Steve'
  }
  console.log(name) // Variable name is defined, as "Steve"
}
```

The value held by a variable declared using `let` can only be referenced _after_ it has been defined. This is known as the [Temporal Dead Zone][concept-temporal-dead-zone].

[keyword-var]: ./var.md
[concept-scope]: ../info/scope.md
[concept-temporal-dead-zone]: ../info/scope.md#temporal-dead-zone
[concept-variable]: ../../../../reference/concepts/variables.md
