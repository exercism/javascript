# Instructions

While working for a factory, a need arises to create the printed message on employee badges. You decide to implement this function in JavaScript.

A badge requires the `id` of the employee, the `name` of the employee, as well as the department in which they are working.

## 1. Create the badge text

Implement a function named `printBadge` that returns the text to print on the badge.

The employee's name is always provided, but the employee `id` number and department name may be `null`. The employee `id` number, if provided, should be between square brackets (e.g. `[20]`).

An owner's badge should not have an `id` or `department`.

```javascript
printBadge(20, 'Bob', 'Marketing');
// => '[20] Bob - MARKETING'
```
