# Hints

## 1. Create an appointment

- `new Date()` can be used to create new date. You can pass timestamp to create specific date.
- `Date.now()` gives you current timestamp.
- A day consist of 24 hour. An hour consist of 60 minutes. A minute consist of 60 seconds. A second consist of 1000 milliseconds. In order to get timestamp of `n` days later from current date, you can sum current timestamp and `n * 24 * 60 * 60 * 1000`.

## 2. Get details of an appointment

- Date object has [built-in methods][mdn-date-methods] to get different parts of the date.

## 3. Update an appointment with given options

- Date object has [built-in methods][mdn-date-methods] to modify date.

## 4. Get available times between two appointment

- General subtraction between two dates will give you the timestamp between the two dates.

## 5. Check if an appointment is now valid or not

- Conditional operators will help you to decide which date is bigger or smaller between two dates.

[mdn-date-methods]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#instance_methods
