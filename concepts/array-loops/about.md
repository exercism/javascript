In JavaScript, looping over `Array`s is extremely common, seeing as they are some of the most widely-used and efficient structures to store data.

Looping over an array doesn't need to be accomplished using a `for` loop. JavaScript provides various methods that handle some of the more common use cases for array looping in a more idiomatic way, such as `Set`s, `Array.prototype.some`, and `Array.prototype.every`, as well as some immutable state prototypal functions.

## JavaScript Sets

Like in mathematics, a `Set` is a collection of unique values. Typecasting to a Set to get a list of unique items is possible:

```js
const numbers = [1, 1, 2, 3, 4, 5, 5, 7]

// Goal: a function that changes the above array into an array of unique values (i.e. removes duplicates)

// This is a function that uses a for .. of loop
const makeNumbersUniqueLoop = (arr) => {
  var temp = []

  for (const v of arr) {
    if (arr.indexOf(v) === -1 && v !== '') {
      temp.push(v)
    }
  }

  return temp
}

// This is a function that uses array-transformations
const makeNumbersUniqueTransform = (arr) => {
  return arr.filter((item, index, self) => self.indexOf(item) === index))
}
// The equivalent function using Sets and spread syntax
const makeNumbersUniqueSet = (a) => [...new Set(a)]
```

Using a different data structures can lead to cleaner and _intentional_ code. The upside of using a `Set` is that new elements are also considered for uniqueness, unlike the one-off loop variants.

## `for .. of` and Iterators

Although `for .. of` has been introduced as a method for iterating over an `Array`, it can also be used for other classes that extend the `Iterator` class, like generator functions, `Set`s, and so on.

## Interesting Links

- [MDN Documentation for Array and its prototype](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Array functions cheatsheet](https://dmitripavlutin.com/operations-on-arrays-javascript/)
