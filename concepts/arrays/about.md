# About

In Javascript, an array is a list-like structure with no fixed length which can hold any type of primitives or objects, even mixed types. It includes the `length` property and also lots of [useful methods][array-docs] for traversing and mutating the array.

To create an array, add elements between square brackets `[]`. To read from the array, put the index in square brackets `[]` after the identifier. The indices of an array start at zero.

For example:

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names[1];
// => Laura
```

Arrays can also be created using the constructor syntax, but for most uses, the array literal syntax is recommended.

```javascript
const names = new Array();
names.push('Jack', 'Laura', 'Paul', 'Megan');

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

// Properties can be set on arrays using bracket ['property'] or
// dot .property notation, and this will affect the length, as
// shown below.

names.magician = 'Elyse';
names.length;
// => 4

// The property shows up when logging the array, making it seem
// that the property is somehow incorporated in the array.

names;
// => ["Jack", "Laura", "Paul", "Megan", magician: "Elyse"]

// However, be aware. Properties added via non-numeric keys are
// NOT part of the array's internal list, and are not traversed
// or mutated when using one of the traversal or mutation
// operations.

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

If there should be no holes, and if the `length` should reflect the amount of items that will be traversed or mutated, use `splice` instead.

> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.<sup>5</sup>

For example:

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

## Array Methods

Some of the [methods][array_methods] that are available on `Array.prototype` can be used to add or remove from the array. Here are a few of them:

### push

> The `push()` method adds one or more elements to the end of an array and returns the new length of the array.<sup>1</sup>

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.push('Jill'); // => 5
names;
// => ['Jack', 'Laura', 'Paul', 'Megan', 'Jill']
```

### pop

> The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.<sup>2</sup>

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.pop(); // => 'Megan'
names;
// => ['Jack', 'Laura', 'Paul']
```

### shift

> The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.<sup>3</sup>

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.shift(); // => 'Jack'
names;
// => ['two', 3, 'four']
```

### unshift

> The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.<sup>4</sup>

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.unshift('Jill'); // => 5
names;
// => ['Jill', 'Jack', 'Laura', 'Paul', 'Megan']
```

### splice

> The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.<sup>5</sup>

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan'];
names.splice(2, 1, 'Jill');
names;
// => ['Jack', 'Laura', 'Jill', 'Megan']
```

[1] push, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push (referenced September 29, 2021)

[2] pop, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop (referenced September 29, 2021)

[3] shift, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift (referenced September 29, 2021)

[4] unshift, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift (referenced September 29, 2021)

[5] splice, MDN. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice (referenced September 29, 2021)

[array-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
[concept-numbers]: /tracks/javascript/concepts/numbers
[instanceof-vs-array-is-array]: https://web.mit.edu/jwalden/www/isArray.html
[array_methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
