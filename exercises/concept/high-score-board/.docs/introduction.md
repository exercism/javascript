# Introduction

Besides primitive data types like `number` and `string`, there is another important data type in JavaScript called `object`.
Objects are collections of key-value pairs.
In other languages they are referred to as maps or dictionaries and often times values need to have the same data type.
In JavaScript, only the type of the key is restricted, it has to be a string.
The values inside one object can have different types.
They can be primitive types like numbers but also arrays, other objects or even functions.

You create an object with curly brackets.
You can also directly include some entries.
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

You might wonder why the keys are not wrapped in quotation marks although they are supposed to be strings.
This is a short-hand notation.
If the key follows the naming rules for a JavaScript [identifier][mdn-identifier], you can omit the quotation marks.
For keys with special characters in the name, you need to use the usual string notation.

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

To avoid subtle errors you should always assume the for-in loop visits the keys in an arbitrary order.
Also be aware that `for...in` includes [inherited keys][concept-inheritance] in its iteration.

[mdn-identifier]: https://developer.mozilla.org/en-US/docs/Glossary/Identifier
[jsinfo-map]: https://javascript.info/map-set#map
[concept-inheritance]: /tracks/javascript/concepts/inheritance
