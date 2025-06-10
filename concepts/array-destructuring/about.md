# About

Array [destructuring assignment][mdn-array-destructuring] is a concise way of extracting values from an array. Its syntax is similar to an [array literal][mdn-array-literal] expression, but on the left-hand side of the assignment instead of the right.

```javascript
const frenchNumbers = ['quatre-vingts', 'quatre-vingt-dix', 'cent'];
const [french80, french90, french100] = frenchNumbers;

french80;
// => 'quatre-vingts'
french90;
// => 'quatre-vingt-dix'
french100;
// => 'cent'
```

## Re-assignment

Because variables are mapped to values in the array by position, destructuring syntax can be used to assign or re-assign multiple variables in a single expression.

```javascript
let [a, b] = ['world', 'hello'];
[b, a] = [a, b];

a;
// => 'hello'
b;
// => 'world'
```

This works for nested arrays too.

```javascript
let [a, b, c] = ['orange', 'purple', 'green'];
[[a, b], c] = [[c, a], b];

a;
// => 'green'
b;
// => 'orange'
c;
// => 'purple'
```

## Skipping assignment

The syntax allows skipping values when mapping, for example to ignore specific positions in the array.
In the example below, imagine we have a `getUserInfo` function that returns an array containing a user's first name, last name, and street address.

```javascript
getUserInfo();
// => ["Valerie", "Noir", "Sunny Lane 523"]

const [, , streetAddress] = getUserInfo();

streetAddress;
// => "Sunny Lane 523"
```

## Dropping values

The assignment is also not required to use all the values.

```javascript
const [firstName, lastName] = getUserInfo();

firstName;
// => "Valerie"

lastName;
// => "Noir"
```

## Taking more values than available

It's even possible to extract _more_ values than the array contains; the leftover variables will be assigned `undefined`. This may be useful when the amount of values isn't known ahead of time.

```javascript
const pickAtLeastOne = ['first choice', 'second choice'];
const [first, second, third, fourth] = pickAtLeastOne;

first;
// => "first choice"

second;
// => "second choice"

third;
// => undefined

fourth;
// => undefined
```

## Default values

The array destructuring assignment can provide _default values_ in case there is none in the source array.

```javascript
const [first, second, third = 'none selected', fourth] = pickAtLeastOne;

third;
// => 'none selected'

fourth;
// => undefined
```

## Related concepts

[concept:javascript/object-destructuring]()
[concept:javascript/rest-and-spread]()

[mdn-array-destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
[mdn-array-literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Creating_an_array
