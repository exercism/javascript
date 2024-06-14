# Instructions

Your friend who works at a library in your city has asked you to extend her library software to automatically calculate late fees.

## 1. Determine if a book was checked out before noon

If a book was checked out before noon, the reader has 29 days to return it. If it was checked out at or after noon, it's 30 days.

```javascript
beforeNoon("2022-03-18T11:00:00")
// => false
```

## 2. Calculate the return date

Based on the checkout datetime, calculate the return date.

The fuction should return a `Date` object, either 29 or 30 days later.

```javascript
returnDate("2022-03-18T11:00:00")
// => Sun Apr 17 2022 11:00:00 GMT+0530 (India Standard Time)
```

_You need not worry about the time zone._

## 3. Determine how late the return of the book was

The library has a flat rate for late returns. To be able to calculate the fee, we need to know how many days after the return date the book was actually returned.

The library tracks both the date and time of the actual return of the book for statistical purposes, but doesn't use the time when calculating late fees.

```javascript
lateByDays("2022-04-17T11:00:00", "2022-03-24T11:00:00")
// => 7
```

## 4. Determine if the book was returned on a Monday

The library has a special offer for returning books on Mondays.

```javascript
returnOnMonday("2022-03-24T11:00:00")
// => false
```

## 5. Calculate the late fee

The library charges $0.50 per day if the book is returned late.

Your function should return the total late fee.

Include the special Monday offer. If you return the book on Monday, your late fee is off by 50%, rounded down.
 
```javascript
// TODO: Add Example
```