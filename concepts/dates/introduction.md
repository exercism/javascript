# Introduction

JavaScript has a built-in object `Date` which stores date and time, and provides methods for their management.

<!-- prettier-ignore -->
~~~exercism/caution
It was based on Java's `java.util.Date` class, which was replaced in the early 2010s, but for backwards compatibility, JavaScript's `Date` sticks around.

Because of how hard it is to work with Dates in general and because of how bad or non-existing timezone handling is, many libraries exist such as `moment.js`, `day.js`, `date-fns` and `luxon`.
None of these are available on Exercism.

In your own projects, do not use a deprecated / unmaintained package such as `moment.js` but rely on more modern alternatives like `luxon`, or the not yet widely available [Temporal][mdn-temporal].
This exercise focusses on `Date`, which will remain relevant until the end of JavaScript.
~~~

## Creation

A `Date` object in an instance of the `Date` class.
It can be created without passing any arguments to the constructor function.
This results in a `Date` object that represents the current date and time:

```javascript
const now = new Date();
// => Thu Apr 14 2022 11:46:08 GMT+0530 (India Standard Time)
// Shows current day, date and time (in your time zone).
```

### Unix timestamp (number)

If a number is passed in, this will be interpreted as a `timestamp`.
A timestamp is an integer number representing the number of **milliseconds** that has passed since **1 January 1970 [UTC][defn-utc]+0**.

```javascript
const epoch = new Date(0);
// Thu Jan 01 1970 01:00:00 GMT+0100 (Central European Standard Time)

const another = new Date(1749508766627);
// Tue Jun 10 2025 00:39:26 GMT+0200 (Central European Summer Time)
```

One may expect `new Date(0)` to generate the "earliest" date object, but JavaScript will convert the date to your local timezone, which means that only those around [GMT / with an UTC+0][defn-gmt] timezone will actually get the [Unix epoch][defn-unix-epoch] value.

### ISO 8601 timestamp (string)

You can pass a string value representing a date to the `Date` constructor.
The **only** format that is consistent across implementations is the [simplified version][mdn-date-string-format] of the internationally recognized and standardized so-called [ISO 8601 timestamp strings][defn-iso8601].

A moment in time at [UTC][defn-gmt] looks like this:

```text
YYYY-MM-DDTHH:MM:SSZ
YYYYMMDDTHHMMSSZ
```

Where the following substitutions take place:

| Key  | Description                                 |
| ---- | ------------------------------------------- |
| YYYY | The calendar year, represented in 4 digits  |
| MM   | The calendar month, represented in 2 digits |
| DD   | The calendar day, represented in 2 digits   |
| HH   | The hours in a 24-hour clock, 2 digits      |
| MM   | The minutes, 2 digits                       |
| SS   | The seconds, 2 digits                       |

The letter `T` separates the date from the time.
The letter `Z` indicates UTC (no timezone, no Day Light Savings).

<!-- prettier-ignore -->
~~~exercism/caution
Other formats that are accepted by `Date.parse` may or may not work.
When working with Dates in JavaScript, _always_ use an ISO 8601 timestamp when converting from a `string` to a `Date`.

Date-only forms are allowed, but not all ISO 8601 formats are supported.
Consult the [simplified version explanation page on MDN][mdn-date-string-format].
~~~

If the timestamp does not end in `Z`, and it does not end with `+HH:MM` or `-HH:MM`, indicating a timezone offset, because of historical reasons, the following applies:

> When the time zone offset is absent, date-only forms are interpreted as a UTC time and date-time forms are interpreted as a local time.
> The interpretation as a UTC time is due to a historical spec error that was not consistent with ISO 8601 but could not be changed due to web compatibility.
> See [Broken Parser – A Web Reality Issue][ref-broken-parser].

### Date object

An existing date object can also be used as a constructor argument.
This makes a copy of the existing `Date` object with the same date and time.

```javascript
const t1 = new Date();
const t2 = new Date(t1);
// Values of t1 and t2 will be the same.
```

### Supplying individual date and time component values

A date representing a date can be created by passing three numbers.
A date representing a date and time can be created by passing in 6 numbers.

```javascript
const date1 = new Date(95, 11, 17);
// Creates Date for Dec 17 1995 00:00 if your local timezone is equivalent to UTC.

const date2 = new Date(2013, 12, 5, 13, 24, 0);
// Creates Date for Jan 5 2014 13:24 if your local timezone is equivalent to UTC.
```

The second value is the `month`, which starts at `0` for January, up to `11` for December.

## `Date.parse()`

You may find mentions of or references to a date parsing function `Date.parse`.
Because there are only a few invariants (truths) for this function and because the rest of the implementation is not specified (and thus not standard), one should not use it.

## Accessing `Date` components

There are various methods on date objects that return the components of the date:

```javascript
getFullYear(); // Get the year (4 digits)
getMonth(); // Get the month, from 0 to 11.
getDate(); // Get the day of month, from 1 to 31.
getHours(); // Get the hour in a 24 clock, from 0 to 23
getMinutes(); // Get the minutes, from 0 to 59
getSeconds(); // Get the seconds, from 0 to 59
getMilliseconds(); // Get the milliseconds, from 0 and 999
getDay(); // Get the day of week, from 0 (Sunday) to 6 (Saturday).
```

Each of these has an applicable `set` variant (e.g. `setFullYear`) to update the value.
Any overflowing value rolls over to the next component:

```javascript
const date = new Date('2025-02-28T12:42:00Z');
// => Fri Feb 28 2025 13:42:00 GMT+0100 (Central European Standard Time)

date.setDate(29);
// there was no February 29th in 2025.

date.getDate();
// => 1

date.toString();
// => Sat Mar 01 2025 13:42:00 GMT+0100 (Central European Standard Time)
```

There are UTC variants for all the methods that disregard the local timezone.

## Converting from date

Date objects have a method `getTime()` that returns the UNIX timestamp in milliseconds, ie. amount of milliseconds the midnight at the beginning of January 1, 1970, UTC.
Additionally, a method `toISOString()` is available to convert from a date object to a ISO 8601 timestamp string.

## Comparing Dates

Greater than (`>`) and greater than or equals (`>=`) as well as less than (`<`) and less than or equals (`<=`) can be used directly between two dates or a date and a number.
This works because JavaScript will try to coerce the date to a primitive.

<!-- prettier-ignore -->
~~~@exercism/advanced
When doing a comparison between two dates or date and a number, JavaScript calls [`[Symbol.toPrimitive]("number")`][mdn-to-primitive] which internally calls [`date.valueOf()`][mdn-date-value-of].
The latter is the same as calling [`date.getTime()`][mdn-date-get-time].

If you do not want to rely on this behaviour, convert to a number using `getTime()` first.
~~~

Dates cannot be compared using equality (`==`, and `===`), but the result of `.getTime()` can.

[defn-utc]: https://simple.wikipedia.org/wiki/Coordinated_Universal_Time
[defn-gmt]: https://simple.wikipedia.org/wiki/Greenwich_Mean_Time
[defn-unix-epoch]: https://en.wikipedia.org/wiki/Epoch_%28computing%29
[defn-iso8601]: https://en.wikipedia.org/wiki/ISO_8601
[mdn-temporal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal
[mdn-date-string-format]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date#date_time_string_format
[mdn-to-primitive]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Symbol.toPrimitive
[mdn-date-value-of]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/valueOf
[mdn-date-get-time]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getTime
[ref-broken-parser]: https://maggiepint.com/2017/04/11/fixing-javascript-date-web-compatibility-and-reality/
