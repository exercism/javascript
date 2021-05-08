# About

## Explanation

Besides the primitive data types like `number` and `string`, there is another important data type in JavaScript called `object`.
Objects are collections of key-value pairs.
In other languages they are referred to as maps or dictionaries and often times values need to have the same data type.
In JavaScript only the type of the key is restricted, it has to be a string.
The values inside one object can have different types.
They can be primitive types like numbers but also arrays, other objects or even functions.

## Creating an Object

You create an object (literal) with curly brackets.
You can also directly include some entries (key-value pairs).
For that, write the key first followed by a colon and the value.

```javascript
const emptyObject = {};

const obj = {
  favoriteNumber: 42,
  greeting: 'Hello World',
  useGreeting: true,
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
  fruits: ['melon', 'papaya'],
  addNumbers: function (a, b) {
    return a + b;
  },
};
```

The trailing comma after the last entry is optional in JavaScript.

You might wonder why the keys are not wrapped in quotation marks since they are supposed to be strings.
This is a short-hand notation.
If the key follows the naming rules for a JavaScript [identifier][mdn-identifier], you can omit the quotation marks.
For keys with special characters in the name, you need to apply the usual string notation.

```javascript
const obj = {
  '1keyStartsWithNumber': '...',
  'key/with/slashes': '...',
  'key-with-dashes': '...',
  'key with spaces': '...',
  '#&()[]{}èä樹keyWithSpecialChars': '...',
};
```

Often times you want to combine existing variables into an object. This would lead to key-value pairs like `name: name`. JavaScript has a short-hand notation that allows to just write `name` instead. There is also a short-hand notation for defining a function in an object. There you can omit the colon and the `function` keyword.

```javascript
const x = 1;
const y = 2;

const obj = {
  x: x,
  y: y,
  calcSum: function (a, b) {
    return a + b;
  },
};

// Can be shortened to ...
const obj = {
  x,
  y,
  calcSum(a, b) {
    return a + b;
  },
};
```

## Retrieving a Value

There are two ways to retrieve the value for a given key, dot notation and bracket notation.

```javascript
const obj = { greeting: 'hello world' };

obj.greeting;
// => hello world

obj['greeting'];
// => hello world

// Bracket notation also works with variables.
const key = 'greeting';
obj[key];
// => hello world
```

Using the dot notation as a short-hand has the same restriction as omitting the quotation marks.
It only works if the key follows the identifier naming rules.

You can chain the keys if you want to retrieve a value from a nested object.

```javascript
const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.address.city;
// => 'Batticaloa'

obj['address']['city'];
// => 'Batticaloa'
```

If you try to retrieve a key that does not exist, JavaScript does not throw an error. [`undefined`] is returned instead. However if you were trying to retrieve a nested value and the parent key does not exist, the evaluation of the nested key is performed on `undefined` and leads to `TypeError: Cannot read property ... of undefined`. Theoretically you would always need to check the parent key exists before you can try to retrieve the nested key. To solve this problem, [optional chaining][mdn-optional-chaining] was added to the language in 2020. With the `?.` operator you can ensure that JavaScript only tries to access the nested key if the parent was not `null` or `undefined`.

```javascript
const obj = {
  address: {
    street: 'Trincomalee Highway',
    city: 'Batticaloa',
  },
};

obj.residence;
// => undefined

obj.address.zipCode;
// => undefined

obj.residence.street;
// => TypeError: Cannot read property 'street' of undefined

obj.residence?.street;
// => undefined
```

## Adding or Changing a Value

You can add or change a value using the assignment operator `=`.
Again, there is dot and bracket notation available.

```javascript
const obj = { greeting: 'hello world' };

obj.greeting = 'Hi there!';
obj['greeting'] = 'Welcome.';

obj.newKey1 = 'new value 1';
obj['new key 2'] = 'new value 2';
```

## Deleting an Entry

You can delete a key-value pair from an object using the `delete` keyword.

```javascript
const obj = {
  key1: 'value1',
  key2: 'value2',
};

delete obj.key1;
delete obj['key2'];
```

Note that although `undefined` is returned for non-existing keys, setting a key to `undefined` does not remove the entry. Always use `delete` instead.

You can check whether a certain key exists in an object with the `hasOwnProperty` method.

```javascript
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

`hasOwnProperty` returns `false` for [inherited keys][concept-inheritance]. This is usually the desired behavior. If you want include inherited keys in the existence check you can use the [`in` operator][mdn-in-operator] instead.

## Looping Through an Object

There is a special `for...in` loop to iterate over all keys of an object.

```javascript
const obj = {
  name: 'Ali',
  age: 65,
};

for (let key in obj) {
  console.log(key, obj[key]);
}
// name Ali
// age 65
```

It might seem like `for...in` always visits the keys in the order in which they appear or were added to the object (insertion order). Still you should not rely on this because there are special cases where the order will differ from the insertion order. Always write your code as if the order would be arbitrary. If you need a reliable order, use a [`Map`][jsinfo-map] or a nested [array][concept-arrays] instead of an object.

The for-in loop has a pitfall in case the object has [inherited keys][concept-inheritance].
Those will also be visited by the for-in loop.
You can avoid this by skipping over them like shown below.

```javascript
for (let key in obj) {
  if (!obj.hasOwnProperty(key)) {
    continue;
  }
  // ...
}
```

## Keys, Values and Entries

The built-in object `Object` provides helper methods to retrieve all the keys, values or entries of a given object as arrays.

```javascript
const obj = {
  name: 'Ali',
  age: 65,
};

Object.keys(obj);
// => [ 'name', 'age' ]

Object.values(obj);
// => [ 'Ali', 65 ]

Object.entries(obj);
// => [ [ 'name', 'Ali' ], [ 'age', 65 ] ]
```

## Truly Empty Object

You might have noticed that an empty object in JavaScript is not completely empty. For example it contains the `hasOwnProperty` method and other methods like `toString`. Usually that does not cause any problems but if you ever need to create a truly empty object use a [null object][mdn-null-object] that can be created via `Object.create(null)`.

[mdn-identifier]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier
[mdn-shorthand-notation]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#new_notations_in_ecmascript_2015
[jsinfo-map]: https://javascript.info/map-set#map
[concept-inheritance]: /tracks/javascript/concepts/inheritance
[mdn-optional-chaining]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining
[mdn-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[mdn-null-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects
