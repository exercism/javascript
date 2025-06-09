# Instructions

In this exercise you will work on some functions in order to manage appointments.
The system stores everything in ISO 8601 formatted strings, but that's not how people use the calendar.
Various functions are necessary to convert between the various formats.

## 1. Create an appointment

Create an appointment `n` days from now at current time.
The function takes `n` days and return the appointment time of `n` days from now.

```javascript
createAppointment(4, now);
// Given now is Sun Oct 05 2022 23:28:43 GMT+0600 (Bangladesh Standard Time)
// => Sun Oct 09 2022 23:28:43 GMT+0600 (Bangladesh Standard Time)
```

If the second parameter `now` is unused, the current time should be used instead.

## 2. Convert a date into a timestamp

Various tools only work with the internationally standardized ISO 8601 format.
Write the function `getAppointmentTimestamp` to take a date and return a string in that format.

```javascript
const appointment = new Date(Date.UTC(2010, 6, 16, 12, 42, 0, 0));

getAppointmentTimestamp(appointment);
// => '2010-07-16T12:42:00.000Z'
```

## 3. Get the details of an appointment

Timestamps are hard to read; a function to get the appointment details should help with that.
The function `getAppointmentDetails` takes a timestamp in the ISO 8601 format, and returns the year, month, date, hour, and minute.

```javascript
getAppointmentDetails('2022-04-24T08:15:00.000');
// => { year: 2022, month: 3, date: 24, hour: 8, minute: 15 }
```

## 4. Update an appointment with the given options

The function will receive first argument as appointment time and second argument of object of some options.
You have to update the appointment according to the options in the object and return the new appointment date.
The options object could have multiple options.

```javascript
updateAppointment('2022-02-09T09:20:00.000', { month: 6 });
// => { year: 2022, month: 6, date: 9, hour: 10, minute: 20 }
```

## 5. Get the available time between two appointments

The function will receive two appointments (timestamps) as arguments.
You have to return the difference between those two times in seconds.

Because half a second is almost meaningless, round the number before returning it.

```javascript
timeBetween('2022-12-12T09:20:00.000', '2022-12-18T08:30:00.000');
// => 515400
```

## 6. Check if an appointment is now valid or not

Finally, when the appointment is made, the system needs to check if it's valid.
In other words, the appointment must be in the future, and not the past.

Write the function `isValid` which takes two arguments, an appointment timestamp (string), and the current time as a timestamp (string) and returns `true` if the appointment is in the future, given the current time.

```javascript
isValid('2022-02-11T23:00:00.000', '2022-02-08T23:00:00.000');
// => true
```
