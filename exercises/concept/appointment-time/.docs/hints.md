# Hints

## 1. Create an appointment

- You need to create a new date. The introduction elaborates on the different ways.
- `Date.now()` gives you current time in milliseconds
- `Date` has several getter methods to get date components - months, hours, etc. - for a given date. `getMinutes`, for instance, returns the minutes component. 
- Likewise, `Date` has several setter methods to set those components, rolling over into "higher" components if needed. `setMinutes(80)`, for example, will increase the hours component by one and set the minutes component to 20.

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
