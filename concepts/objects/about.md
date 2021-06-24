# About

## Explanation

Besides primitive data types like `number` and `string`, there is another important data type in JavaScript called `object`.
Objects are collections of key-value pairs.
As such, they can be used as what is often referred to as maps or dictionaries in other languages.

In other languages, all values in a map often need to have the same data type.
In JavaScript, only the type of the key is restricted: it has to be a string.
The values inside one object can have different types.
They can be primitive types like numbers but also arrays, other objects or even functions.
This makes objects very versatile so that they are also key entities for [object-oriented programming][oop] (OOP) in JavaScript.

In the following we will focus on objects as collections or maps. Other use cases of objects will be covered in other concepts, see e.g., [Classes][concept-classes].

## Creating an Object

You create an object [literal][literal] using curly brackets.
You can also directly include some entries (key-value pairs).
For that, state the key first, followed by a colon and the value.

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
You can read about the advantages of using it [here][mdn-trailing-commas].

You might wonder why the keys are not wrapped in quotation marks although they are supposed to be strings.
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

Often you will want to add existing variables when declaring an object.
This would often lead to key-value pairs like `name: name`.
JavaScript has a short-hand notation that allows just writing `name` instead.
There is also a short-hand notation for defining a function in an object.
There you can omit the colon and the `function` keyword.

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

If you want to create an object literal with a key name that is stored in a variable or derived via an expression, you need to wrap the variable or expression in square brackets.

```javascript
const key = 'greeting';

const obj = {
  [key]: 'hello world',
};
console.log(obj);
// => { greeting: 'hello world' }
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

If you try to retrieve a key that does not exist in the object, JavaScript returns `undefined`.
See [Null and Undefined][concept-null-undefined] for more details on this.

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

// Notations can also be mixed.
obj.address['city'];
// => 'Batticaloa'
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

const key = 'new key 3';
obj[key] = 'new value 3';
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

Note that although `undefined` is returned for non-existing keys, setting a key to `undefined` does not remove the entry.
Always use `delete` instead.

## Checking Whether a Key Exists

You can check whether a certain key exists in an object with the `hasOwnProperty` method.

```javascript
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

`hasOwnProperty` returns `false` for [inherited keys][concept-inheritance]. This is usually the desired behavior.
If you want include inherited keys in the existence check you can use the [`in` operator][mdn-in-operator] instead.

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

It might seem like `for...in` always visits the keys in the order in which they appear or were added to the object (insertion order).
Nevertheless you should not rely on this because there are special cases where the order will differ from the insertion order.
Always write your code as if the order would be arbitrary.
If you need a reliable order, use a [`Map`][jsinfo-map] or a nested [array][concept-arrays] instead of an object.

The `for…in` loop has a pitfall in case the object has [inherited keys][concept-inheritance].
Those will also be visited by the `for…in` loop.
You usually want to avoid this so you need to skip over them like shown below.

```javascript
for (let key in obj) {
  if (!obj.hasOwnProperty(key)) {
    continue;
  }
  // ...
}
```

JavaScript also has a `for...of` loop, for example to iterate over arrays.
It is important to note that `for...in` and `for...of` are not interchangeable, see [MDN documentation][mdn-for-in-for-of] for details on this.

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

You might have noticed that an empty object in JavaScript is not completely empty.
For example, it contains the `hasOwnProperty` method and other methods like `toString`.
Usually that does not cause any problems but if you ever need to create a truly empty object use a [null object][mdn-null-object] that can be created via `Object.create(null)`.

[oop]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
[concept-classes]: /tracks/javascript/concepts/classes
[literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#literals
[mdn-trailing-commas]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Trailing_commas
[mdn-identifier]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier
[jsinfo-map]: https://javascript.info/map-set#map
[concept-inheritance]: /tracks/javascript/concepts/inheritance
[mdn-in-operator]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/in
[mdn-null-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#custom_and_null_objects
[mdn-for-in-for-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of#difference_between_for...of_and_for...in
[concept-null-undefined]: /tracks/javascript/concepts/null-undefined
