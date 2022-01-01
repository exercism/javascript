# Introduction

In contrast to many other languages, there are two different entities in JavaScript that represent the absence of a (meaningful) value.
There is `null` and `undefined`.

## Null

The primitive value `null` is used as an intentional "empty value" for variables of any type.

```javascript
let name = null;
// name is intentionally set to "empty" because it is not
// available
```

You can check whether a variable is null by using the [strict equality operator][mdn-strict-equality] `===`.

```javascript
let name = null;

name === null;
// => true
```

## Undefined

> A variable that has not been assigned a value is of type `undefined`.<sup>1</sup>

That means while `null` represents an empty value (but still a value), `undefined` represents the total absence of a value. 🤯

`undefined` appears in different contexts.

- If a variable is declared without a value (initialization), it is `undefined`.
- If you try to access a value for a non-existing key in an object, you get `undefined`.
- If a function does not return a value, the result is `undefined`.
- If an argument is not passed to a function, it is `undefined`, unless that argument has a default value.

```javascript
let name;
console.log(name);
// => undefined
```

You can check whether a variable is undefined using the strict equality operator `===`.

```javascript
let name;

name === undefined;
// => true
```

## Optional Chaining

If you try to retrieve a nested value in an object but the parent key does not exist, JavaScript will throw an error.
To easily avoid this, optional chaining was added to the language specification in 2020.
With the optional chaining operator `?.` you can ensure that JavaScript only tries to access the nested key if the parent was not `null` or `undefined`.
Otherwise, `undefined` is returned.

```javascript
const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.address.zipCode;
// => undefined

obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street;
// => undefined
```

## Nullish Coalescing

There are situations where you want to apply a default value in case a variable is null or undefined (but only then).
To address this, the nullish coalescing operator `??` was introduced in 2020.
It returns the right-hand side operand only when the left-hand side operand is `null` or `undefined`.
Otherwise, the left-hand side operand is returned.

```javascript
let amount = null;
amount = amount ?? 1;
// => 1

amount = 0;
amount = amount ?? 1;
// => 0
```

---

[1] Undefined, MDN. (2021). https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined (accessed June 4, 2021).

[mdn-strict-equality]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Strict_equality
