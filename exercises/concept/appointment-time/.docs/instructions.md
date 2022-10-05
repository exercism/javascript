# Instructions

In this exercise you will code some functions in order to manage appointments.

## 1. Create an appointment

Create an appointment `x` days from now at current time.
The function takes `x` as parameter and return the appointment time of `x` days from now.

```javascript
createAppointment(4);
// If current time is Sun Oct 05 2022 23:28:43 GMT+0600 (Bangladesh Standard Time) then the function will return  Sun Oct 09 2022 23:28:43 GMT+0600 (Bangladesh Standard Time)
```

## 2. Get details of an appointment

The function takes an appointment time as argument and return a string containing information like below.

```javascript
getAppointment('24 April 2022 10:15 AM');
// => { year: 2022, month: 3, date: 24, hour: 10, minute: 15 }
```

## 3. Update an appointment with given options

The function will receive first argument as appointment time and second argument of object of some options.
You have to update the appointment according to the options in the object and return the new appointment date.
The options object could have multiple options.

```javascript
updateAppointment('09 February 2022 10:20 am', { month: 6 });
// => { year: 2022, month: 6, date: 9, hour: 10, minute: 20 }
```

## 4. Get available times between two appointment

The function will receive two appointment times as parameter.
You have to return the difference between those two times in `ms`.

```javascript
availableTimes('12 December 2022 10:20 am', '18 December 2022 9:30 am');
// => 515400000
```

## 5. Check if an appointment is now valid or not

The function receives two arguments - appointment time and current time.
If the appointment time is less than the current time then the appointment is not valid anymore, and you should return `The appointment is not valid anymore.`
If not, the appointment is valid, and you should return `The appointment is valid.`

```javascript
isValid('12 February 2022', '9 February 2022');
// => The appointment is valid.
```
