## Instructions

You have been hired by a recycling center.
Due to lack of space, all the products are put on the same conveyor belt, but this has lead to different materials mixing together, making them unusable.
To fix this, you have been tasked with making functions to identify the type of a product.

### 1. Check if a value is a boolean

Implement the `isBoolean` function, that checks if a value is a boolean.

```javascript
isBoolean(true);
// => true

isBoolean(null);
// => false
```

### 2. Check if a value is a number.

Implement the `isNumber` function, that checks if a value is a _finite_ `number` or `bigint`, ie. not `NaN` or `Infinity`.

Sometimes, the device for reading IDs fails and reads a non-numeric value as `NaN` (Not a Number) or `Infinity`.
Your function should be able to correctly handle this as well.

```javascript
isNumber(42);
// => true

isNumber('Hello, World!');
// => false

isNumber(42n);
// => true

isNumber(NaN);
// => false
```

### 3. Check if a value is an object

Implement the `isObject` function, that should check if the value is an object.
On the conveyor, `null` is nothing and not considered an object.

```javascript
isObject({ greeting: 'Hello' });
// => true

isObject(25n);
// => false
```

### 4. Check if a string is numeric

Implement the `isNumericString` function, that should check if the value is a string but only consists of numbers.

```javascript
isNumericString(42);
// => false

isNumericString('42');
// => true

isNumericString('Hi!');
// => false
```

### 5. Check if an object is electronic

Implement the `isElectronic` function, that checks if an object is an instance of the provided ElectronicDevice class or one of its child classes.

```javascript
class Duck {
  //...
}
class WashingMachine extends ElectronicDevice {
  //...
}
isElectronic(new Duck());
// => false

isElectronic(new WashingMachine());
// => false
```

### 6. Check if a value is a non empty array

Implement the `isNonEmptyArray` function, that checks if an object is a non empty array.

```javascript
isNonEmptyArray([1, 2, 3]);
// => true

isNonEmptyArray([]);
// => false
```

### 7. Check if a value is an empty array

Implement the `isEmptyArray` function, that checks if an object is an empty array.

```javascript
isEmptyArray([1, 2, 3]);
// => false

isEmptyArray([]);
// => true
```

### 8. Throw an error if an object does not have an `id` property or method

Implement the `assertHasId` function, that will throw an `Error` if an object is missing the `id` property.

If an object does have the `id` property, it should not return anything.

```javascript
assertHasId({ id: 42, color: 'red' });
// => undefined

assertHasId({ color: 'green' });
// Error: "Object is missing the 'id' property"
```

### 9. Check if an object has a `type` property or method

Implement the `hasType` function, that checks whether an object has a `type` property or method.

```javascript
class Keyboard(){
  type(){
    // ...
  }
}
hasType({type:"car",color:"red"})
// => true

hasType({color:"green"})
// => false

hasType(new Keyboard())
// => true
```

### 10. Check if an object has an `id` property

Implement the `hasIdProperty` function, that checks whether an object has an `id` property.

```javascript
class MyClass {
  constructor() {
    this.number = '42';
    this.id = 'BC269327FE1D9B95';
  }
}
class MyNewClass {
  constructor() {
    this.number = '42';
    this._id = 'BC269327FE1D9B95';
  }
  get id() {
    return this._id;
  }
}
hasIdProperty(new MyClass());
// => true

hasIdProperty(new MyNewClass());
// => false
```

### 11. Check if an object has a defined `type` property

Implement the `hasDefinedType` function, that checks if an object has a `type` property that is not `undefined`.

```javascript
hasDefinedType({ type: undefined, color: 'red' });
// => false

hasDefinedType({ type: 'car', color: 'green' });
// => true
```
