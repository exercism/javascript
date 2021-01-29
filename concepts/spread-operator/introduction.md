TODO: the content below is copied from the exercise introduction and probably needs rewriting to a proper concept introduction

Javascript's array destructuring syntax is a concise way to extract values from an array and assign them to distinct variables.

In this example, each value in the `numberOfMoons` array is assigned to its corresponding planet:

```javascript
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;
// => 14
```
