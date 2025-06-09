# Hints

## 1. Create an appointment

- You need to create a new date. The introduction elaborates on the different ways.
- `Date.now()` gives you current time in milliseconds
- A day consist of 24 hour. An hour consist of 60 minutes. A minute consist of 60 seconds. A second consist of 1000 milliseconds. In order to get timestamp of `n` days later from current date, you can sum current timestamp and `n * 24 * 60 * 60 * 1000`.

## 2. Convert a date into a timestamp

- The introduction lists the various ways how to convert a date to different types. Can you use one of those methods?

## 3. Get the details of an appointment

- The introduction has all the required information to extract the information from a date.

## 4. Update an appointment with the given options

- The introduction has all the required information to extract the information from a date.
- You can reuse `getAppointmentDetails`

## 5. Get available times between two appointments

- General subtraction between two dates will give you the timestamp between the two dates.
- You probably want to convert to a number first, and not rely on type-coercion.

## 6. Check if an appointment is now valid or not

- Conditional operators will help you to decide which date is bigger or smaller between two dates.
