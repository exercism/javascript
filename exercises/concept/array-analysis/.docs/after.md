In JavaScript, instances of an `Array` are regular objects, decorated with lots of [useful methods][array-docs] from the `Array.prototype`. It includes the `length` property and also methods for traversing and mutating the array. Its elements are indexed properties of that object.
Instead of manually iterating over those indexed properties, use array analysis.

```javascript
const values = [1, 2, 5, 8, 8, 10]
const areSomeOdd = values.some((item) => item % 2 === 1)
// => true
const areAllPositive = values.every((item) => item >= 0)
// => true
const indexOfFirstDuplicate = values.findIndex(
  (item, index, self) => self.indexOf(item) !== index
)
// => 4
const hasValue42 = values.includes(42)
// => false
```

[array-docs]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Instance_methods
