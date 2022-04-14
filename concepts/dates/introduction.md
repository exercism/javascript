# About

JavaScript has a built in object: `Date`, which stores date and time, and provides methods for their management.

## Creation

A `Date` object in an instance of the `Date` class. It can be created without passing any arguments to the constructor function. This results in a `Date` object that represents the current date and time:

```javascript
let now = new Date(); // => Thu Apr 14 2022 11:46:08 GMT+0530 (India Standard Time)

// shows current day, date and time in your time zone.
```

However, different types of arguments can also be used to create date object, as follows:

### Timestamp value

> A timestamp is an integer number representing the number of **milliseconds** that has passed since **Jan 1st of 1970 [UTC][utc-defn]+0**, however, _with reference to your local time zone._
This can be used as an argumect for the Date object. [^1]

```javascript
const Jan01_1970 = new Date(0);
// 0 means 01.01.1970 UTC+0

const Jan02_1970 = new Date(24 * 3600 * 1000);
// adding 24 hours, we get 02.01.1970 UTC+0

// Note that the objects created here would show the corresponding time in your time zone.
```

TODO: change to tidles after formatting

```exercism/note
January 1st, 1970 at 00:00:00 UTC is referred to as the Unix epoch.
Unix is an operating system originally developed in the 1960s.
Early Unix engineers picked that date arbitrarily because they needed to set a uniform date for the start of time, and New Year's Day, 1970, seemed most convenient. 
```

[^2]

### Timestamp string

You can pass a string value representing a date to the `Date` constructor.
The string needs to follow a format that is recognized by the `Date.parse()` method.
You will learn more about this below.

### Date object

An existing date object can also be used as an argument.
This makes a copy of the existing `Date` object with the same date and time.
For example:

```javascript
const t1 = new Date();
const t2 = new Date(t1);

// Values of t1 and t2 will be the same.
```

### Individual date and time component values

> Given at least a year and month, this form of `Date()` returns a `Date` object whose component values _(year, month, day, hour, minute, second, and millisecond)_ all come from the following parameters.
Any missing fields are given the lowest possible value (1 for day and 0 for every other component).
> The parameter values are all evaluated against the _local time zone, rather than UTC_.
> - `year`: Integer values from 0 to 99 map to the years 1900 to 1999.
All other values are the actual year.
> - `monthIndex`: Integer value representing the month, beginning with _0 for January to 11 for December_.
If a value greater than 11 is passed in, then those months will be added to the date.
For example, new Date(1990, 12, 1) will return January 1st, 1991.
> - `day` (Optional): Integer value representing the day of the month.
The default is 1.
> - `hours` (Optional): Integer value between 0 and 23 representing the hour of the day.
Defaults to 0.
> - `minutes` (Optional): Integer value representing the minute segment of a time.
The default is 0 minutes past the hour.
> - `seconds` (Optional): Integer value representing the second segment of a time.
The default is 0 seconds past the minute.
> - `milliseconds` (Optional): Integer value representing the millisecond segment of a time.
The default is 0 milliseconds past the second. [^3]

```javascript
const date1 = new Date(95, 11, 17); // Creates Date for Dec 17 1995
const date2 = new Date(2013, 12, 5, 13, 24, 0); // Creates Date for Jan 5 2014 13:24
```

## `Date.parse()`

`Date.parse()` takes **string as a input and returns a timestamp** (number of milliseconds from 1 Jan 1970 UTC+0), provided the string is in the format YYYY-MM-DDTHH:mm:ss.sssZ, where:

> - `YYYY-MM-DD` - is the date: year-month-day.
> - `T` - The character "T" is used as the delimiter
> - `HH:mm:ss.sss` - is the time: hours, minutes, seconds and milliseconds.
> - `Z` - This _optional_ part denotes the time zone.
If `Z` is present, the `Date` will be set to UTC.
If `Z` is not present, it will be Local Time.  
> _If the format is invalid, `NaN` is returned_ [^4]

Shorter variants are also possible, like `YYYY-MM-DD` or `YYYY-MM` or even `YYYY`. However not that these variants **set the `Date` to UTC**, even though `Z` not mentioned. To understand what exactly happens check out [this section][mdn-diff-assumed-timezone] of a MDN page.

```javascript
const d1 = Date.parse('2019-01-01');
const d2 = Date.parse('2019-01-01T00:00:00.000Z');

// Both d1 and d2 are of value 1546300800000, as times are set to UTC

const d3 = Date.parse('2019-01-01T00:00:00.000'); // This would have a different value (unless you live in GMT) as it is set to your local time zone
```

TODO: aaa

```exercism/caution
The use of `Date.parse()` (and the timestamp string method which works similarly) is strongly discouraged due to browser differences and inconsistencies.
```

[^5]

## Accesing `Date` components

The following are the methods to access the year, month and so on from the Date object:

> - `getFullYear()`- Get the year (4 digits)

```exercism/caution
Many JavaScript engines implement a non-standard method `getYear()`.
**This method is deprecated.**
It returns 2-digit year sometimes.
Hence, `getFullYear()` must always be used instead
```

> - `getMonth()`- Get the month, from 0 to 11.
> - `getDate()`- Get the day of month, from 1 to 31.
> - `getHours()`, `getMinutes()`, `getSeconds()`, `getMilliseconds()`- Get the corresponding time components.
> - `getDay()`- Get the day of week, from 0 (Sunday) to 6 (Saturday).
> - `getTime()`- Get the number of milliseconds passed since 01.01.1970 UTC. [^6]

```javascript
const date0 = new Date(0); //Jan 1 1970 00:00:00
let month = date0.getMonth()); // => 0; as Jan is the month
let date = date0.getDay(); // Find out which day the new year of 1970 was!

const date1 = new Date(2020, 11, 13, 5); // Dec 13 2020 5:00:00
let millsecs = date1.getTime(); // find out how many have milliseconds passed since Jan 1 1890!
```

## Modifying `Date` components

The following methods allow to modify date/time components :

> - `setFullYear(year, [month], [date])`
> - `setMonth(month, [date])`
> - `setDate(date)`
> - `setHours(hour, [min], [sec], [ms])`
> - `setMinutes(min, [sec], [ms])`
> - `setSeconds(sec, [ms])`
> - `setMilliseconds(ms)`
> - `setTime(timestamp)` (sets the whole date by milliseconds since 01.01.1970 UTC)
> Paremeters in `[]` above are _optional_. If not mentioned, the components are not modified
> Every one of them except `setTime()` has a UTC-variant, for instance: `setUTCHours()`. [^7]

```javascript
let today = new Date();

today.setHours(0); // still today, but only the hour is changed to 0

today.setHours(0, 0, 0, 0); // still today, now sharply 00:00:00
```

## Calculating Time Difference and `Date.now()`

To measure the time elapsed between two given dates, we can use the `Date.getTime()` method.

```javascript
const d1 = new Date(2021, 12, 11, 5, 13, 32, 21);
const d2 = new Date(2021, 12, 23, 4, 12, 55);

let timeElapsed = d2.getTime() - d1.getTime(); // => 1033162979
```

Moreover, if we wish to measure the time taken on a live basis, for example the time taken for execution for program, we could use `Date.now()` which provides the timestamp of current time.

> As you might notice, this is semantically equivalent to `new Date().getTime()`, but it doesn’t create an intermediate `Date` object.
Hence, it makes the code more efficient. [^8]

```javascript
const start = Date.now(); // milliseconds count from 1 Jan 1970

// execute a task
for (let i = 0; i < 100000; i++) {
  let task = i * i * i * i;
}

const end = Date.now(); // done

let timeTaken = end - start; //time taken by the loop in 1 second
```

## Comparing Dates

We can use `<` and `>` operators to compare two `Date` objects, the date occuring _later being treated as greater_.

The `==` or `===` do not work with `Date`, and output `false` in any case, even if dates are equal.
However, we could use the `Date.getTime()` method to obtain the timestamps(which is of the data type: number) and compare them using equality operators.

```javascript
const d1 = new Date(2021, 12, 11);
const d2 = new Date(1990, 11, 23);

d1 > d2; // true

const d1Copy = new Date(d1); // d1Copy will be same as d1

d1Copy === d1; // false, even though they are same
d1Copy.getTime() === d1.getTime(); //true
```

Few passages have been taken from the sources below and slightly modified

[^1]: https://javascript.info/date
[^2]: https://kb.narrative.io/what-is-unix-time
[^3]: https://javascript.info/date#setting-date-components
[^4]: https://javascript.info/date#date-parse-from-a-string
[^5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#several_ways_to_create_a_date_object
[^6]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date#several_ways_to_create_a_date_object
[^7]: https://javascript.info/date#access-date-components
[^8]: https://javascript.info/date#date-now

[utc-defn]: https://simple.wikipedia.org/wiki/Coordinated_Universal_Time
[mdn-diff-assumed-timezone]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#differences_in_assumed_time_zone
