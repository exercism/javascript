# About

In Javascript, an array is actually a regular `object` where the elements are properties of that object.
It includes the `length` property and also lots of [useful methods][array-docs] for traversing and mutating the array.

Declaring an array and accessing an element:

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names[1];
// => Laura
```

Arrays cannot use `strings` as element indexes, but must use integers ([`number`][concept-numbers]).
Setting or accessing via non-integers using bracket notation (or dot notation) will not set or retrieve an element from the array list itself, but will set or access a variable associated with that array's object property collection.
The array's object properties and list of array elements are separate, and the array's traversal and mutation operations cannot be applied to these named properties.

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.length;
// => 3

// Properties can be set on arrays using bracket ['property'] or dot .property
// notation, and this will affect the length, as shown below.

names.magician = 'Elyse';
names.length;
// => 4

// The property shows up when logging the array, making it seem that the
// property is somehow incorporated in the array.

names;
// => ["Jack", "Laura", "Paul", "Megan", magician: "Elyse"]

// However, be aware. Properties added via non-numeric keys are NOT part of the
// array's internal list, and are not traversed or mutated when using one of
// the traversal or mutation operations.

names.forEach((name) => console.log(name));
// => Jack
// => Laura
// => Paul
// => Megan
```

## Deleting items from an array

Arrays in JavaScript are regular `objects`, and items can be deleted using the `delete` keyword.
However, this does not change the _length_ of the array, and leaves a hole of `empty`.
In other languages this is similar to a sparse array.
The `empty` holes are skipped when using traversal or mutation operations.

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
delete names[1];

names;
// =>  ["Jack", empty, "Paul", "Megan"]

names.length;
// => 4

names.forEach((name) => console.log(name));
// => Jack
// => Paul
// => Megan
```

If there should be no holes, and if the `length` should reflect the amount of items that will be traversed or mutated, use `splice` instead:

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.splice(1, 1);

names;
// =>  ["Jack", "Paul", "Megan"]

names.length;
// => 3

names.forEach((name) => console.log(name));
// => Jack
// => Paul
// => Megan
```

## Array length can be mutated

The `length` property of an array is connected to the list of items the array holds.
It can be mutated.
When the length is increased, it creates `empty` holes, that are not considered when traversing or mutating the array.
When the length is decreased, it _removes_ the elements at the end of the array.

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.length = 6;

names;
// => ["Jack", "Laura", "Paul", "Megan", empty × 2]

names.length = 2;
// =>  ["Jack", "Laura"]
```

## Checking if something is an Array

Because arrays are `objects`, `typeof names` gives `"object"`.
To check if something is an Array, use `Array.isArray`:

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];

typeof names;
// => "object"

Array.isArray(names);
// => true

const object = {};
Array.isArray(object);
// => false
```

You might be tempted to use `names instanceof Array`, and that can work, but not under all circumstances.
Read [this article][instanceof-vs-array-is-array] for more information.

[array-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
[concept-numbers]: /tracks/javascript/concepts/numbers
[instanceof-vs-array-is-array]: https://web.mit.edu/jwalden/www/isArray.html
