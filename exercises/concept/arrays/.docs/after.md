In Javascript, an array is actually just a regular object where the elements are properties of that object. It includes the `length` property and also lots of [useful methods][array-docs] for traversing and mutating the array.

Declaring an array and accessing an element:

```javascript
const names = ['Jack', 'Laura', 'Paul', 'Megan']
names[1]
// => Laura
```

[array-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
