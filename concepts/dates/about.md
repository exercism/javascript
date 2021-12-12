# About

JavaScript has a built in object: `Date`, which stores date, time and provides methods for their management.

## Creation

A Date object can be created without arguments to obtain the current date and time:

```javascript
let now = new Date
console.log(now) 
//logs current day, date and time in your time zone
```

However, different types of arguments can be used to create date object, as follows:

### Timestamp value

A timestamp is an integer number representing the number of milliseconds that has passed since Jan 1st of 1970 [UTC][UTC-defn]+0.
This can be used as an argumect for the Date object.

```javascript
// 0 means 01.01.1970 UTC+0
const Jan01_1970 = new Date(0);
alert( Jan01_1970 );

// adding 24 hours, we get 02.01.1970 UTC+0
const Jan02_1970 = new Date(24 * 3600 * 1000);
alert( Jan02_1970 );
```

~~~~exercism/note
January 1st, 1970 at 00:00:00 UTC is referred to as the Unix epoch.
Unix is an operating system originally developed in the 1960s.
Early Unix engineers picked that date arbitrarily because they needed to set a uniform date for the start of time, and New Year's Day, 1970, seemed most convenient.
~~~~

### Timestamp string
A string value representing a date is used, specified in a format recognized by `Date.parse()` method, about which you will learn soon in this article.

### Date object
An existing date object can also be used as an argument.
This effectively makes a copy of the existing `Date` object with the same date and time.
For example:

```javascript
const time1 = new Date();

const time2 = new Date(time1)
console.log(time2)
```

### Individual date and time component values 

Given at least a year and month, this form of Date() returns a Date object whose component values (year, month, day, hour, minute, second, and millisecond) all come from the following parameters. Any missing fields are given the lowest possible value (1 for day and 0 for every other component). The parameter values are all evaluated against the local time zone, rather than UTC.

`year`

Integer values from 0 to 99 map to the years 1900 to 1999. All other values are the actual year. See the example.

`monthIndex`

Integer value representing the month, beginning with 0 for January to 11 for December. If a value greater than 11 is passed in, then those months will be added to the date; for example, new Date(1990, 12, 1) will return January 1st, 1991

`day`(Optional)
Integer value representing the day of the month. The default is 1.

`hours` (Optional)
Integer value between 0 and 23 representing the hour of the day. Defaults to 0.

minutes Optional
Integer value representing the minute segment of a time. The default is 0 minutes past the hour.

seconds Optional
Integer value representing the second segment of a time. The default is 0 seconds past the minute.

`milliseconds` (Optional)
Integer value representing the millisecond segment of a time. The default is 0 milliseconds past the second.


[UTC-defn]: https://simple.wikipedia.org/wiki/Coordinated_Universal_Time