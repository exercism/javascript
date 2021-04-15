# About

Besides the primitive data types like `number` and `string`, there is another important data type in JavaScript called `object`.
Objects are collections of key-value pairs.
In other languages they are referred to as maps or dictionaries and often times values need to have the same data type.
In JavaScript only the type of the key is restricted, it has to be a string.
The values inside one object can have different types.
They can be primitive types like numbers but also arrays, other objects or even functions.

You create an object with curly brackets.
You can also directly include some entries.
For that state the key first, followed by a colon and the value.

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

TODO retrieve props from nested object

You can add or change a value using the assignment operator `=`.
Again, there is dot and bracket notation available.

```javascript
const obj = { greeting: 'hello world' };

obj.greeting = 'Hi there!';
obj['greeting'] = 'Welcome.';

obj.newKey1 = 'new value 1';
obj['new key 2'] = 'new value 2';
```

You can delete a key-value pair from an object using the `delete` keyword.

```javascript
const obj = {
  key1: 'value1',
  key2: 'value2',
};

delete obj.key1;
delete obj['key2'];
```

You can check whether a certain key exists in an object with the `hasOwnProperty` method.

```javascript
const obj = { greeting: 'hello world' };

obj.hasOwnProperty('greeting');
// => true

obj.hasOwnProperty('age');
// => false
```

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

It might seem like `for...in` always visits the keys in the order in which they appear or were added to the object (insertion order). Still you should not rely on this because there are special cases where the order will differ from the insertion order. Always write your code as if the order would be arbitrary. If you need reliable insertion order, use a [`Map`][jsinfo-map] or a nested [array][concept-arrays] instead of an object.

TODO property value shorthand

pitfall 1,2,3 as key

empty is not empty

[mdn-identifier]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier
[jsinfo-map]: https://javascript.info/map-set#map
