# Hints


## 1. Check if a value is a boolean

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.

## 2. Check if a value is a number.

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You need to check for `Infinity` and `NaN`.
- `NaN` is never equal to itself, but there is a [built in function][isNaN] to check if a value is NaN.

## 3. Check if a value is an object

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You will need to check for `null`.

## 4. Check if a string is numeric

- You can use `typeof` to find the type of a value.
- `typeof` returns a string.
- You can iterate over a string to check if all characters are digits.

## 5. Check if an object is electronic

- You can use `instanceof` to check if an object is an instance of a class or one of its children.

## 6. Check if a value is a non empty array

Implement the `isNonEmptyArray` function, that checks if an object is a non empty array.

```javascript
isNonEmptyArray([1,2,3])
// => true

isNonEmptyArray([])
// => false
```

## 7. Check if a value is an empty array

Implement the `isEmptyArray` function, that checks if an object is an empty array.
```javascript
isEmptyArray([1,2,3])
// => false

isEmptyArray([])
// => true
```

## 8. Throw an error if an object does not have the `id` property

Implement the `assertHasId` function, that will throw an `Error` if an object is missing the `id` property.

If an object does have the `id` property, it should not return anything.

```javascript
assertHasId({id:42,color:"red"})
// => undefined

assertHasId({color:"green"})
// Error: "Object is missing the 'id' property"
```

## 9. Check if an object has a `type` property

Implement the `hasType` function, that checks whether an object has a `type` property.

```javascript
hasType({type:"car",color:"red"})
// => true

hasType({color:"green"})
// => false
```

## 10. Check if an object has a `constructor` property

Implement the `hasConstructorProperty` function, that checks whether an object has a `constructor` property.

```javascript
class MyClass {
  constructor() {
    this.number = "42"
  }
}
class MyNewClass {
  constructor() {
    this.number = "42"
    this.constructor = "A constructor"
  }
}
hasConstructorProperty(MyClass)
// => false

hasConstructorProperty(MyNewClass)
// => true
```
## 11. Check if an object has a defined `type` property

Implement the `hasDefinedType` function, that checks if an object has a `type` property that is not `undefined`.

```javascript
hasDefinedType({type:undefined,color:"red"})
// => false

hasDefinedType({type:"car",color:"green"})
// => true
```

[isNaN]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/isNaN
