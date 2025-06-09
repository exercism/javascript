# Introduction

JavaScript's object destructuring syntax is a concise way to extract properties from an object and assign them to distinct variables.

In this example, each value in the `numberOfMoons` array is assigned to its corresponding planet:

```javascript
const numberOfMoons = { venus: 0, mars: 2, neptune: 14 };

const { venus, mars, neptune } = numberOfMoons;

neptune;
// => 14
```
