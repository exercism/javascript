Null is a primitive value, used to represent an intentional absence of an object value. It's _falsy_, and its `typeof` is `object`.

```javascript
var person = null

if (person) {
  console.log('person is not null')
} else {
  console.log('person is null')
}
```

You can find more about nullability in the [MDN docs][mdn docs].

## Null vs. Undefined

The `null` value has to be differentiated from the variable `undefined`. The distinction being that `undefined` is the
value of an uninitialized variable or type, while `null` represents a missing object.

```javascript
typeof null // => "object"
typeof undefined // => "undefined"
null === undefined // => evaluates to false by identity comparison
null == undefined // => evaluates to true by truthy comparison
```

## Nullish coalescing operator (??)

The nullish coalescing operator returns its right-hand side operand if and only if its left-hand side operand is `null`
or `undefined`.

```javascript
const foo = null ?? 'left-hand side operand is null'
foo // => "left-hand side operand is null"
```

You can find more about the nullish coalescing operator in the [MDN docs][nullish coalescing].

## Optional Chaining (?.)

The optional chaining operator is similar to the chaining operator, except that instead of returning and error if a
reference is `null`, it will return the `undefined` value.

```javascript
const person = {
  name: 'Bob',
  nationality: 'Belgian',
}

person.gender // => error
person?.gender // => "undefined"
```

You can find more about the optional chaining in the [MDN docs][optional chaining].

[optional chaining]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
[nullish coalescing]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator
[mdn docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
