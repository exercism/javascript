# Instructions

In this exercise you will be writing code to help a freelancer communicate with his clients by providing a few utility functions to quickly calculate his hiring costs for projects.

## 1. Calculate the day rate given an hourly rate

A client contacts the freelancer to enquire about his rates.
The freelancer explains that he _works 8 hours a day._
However, the freelancer knows only his hourly rates for the project.
Help him estimate a day rate given an hourly rate.

```javascript
dayRate(89);
// => 712
```

The day rate does not need to be rounded or changed to a "fixed" precision.

## 2. Calculate the number of workdays given a fixed budget and hourly rate

Another day, a project manager offers the freelancer to work on a project with a fixed budget.
Given the fixed budget and the freelancer's hourly rate, help him calculate the number of days the project would take to complete

```javascript
CHANGE THIS EXAMPLE>>>>
daysInBudget(20000, 89, 0.2002);    
// => 35
```

The result _must_ be rounded down to the nearest whole number.

## 3. Calculate the discounted rate, given a day rate, the number of workdays, and a monthly discount rate

Many a time, the freelancer's clients hire him for projects spanning over months.
In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
_Every month has 22 billable days._
Help him estimate his cost for such projects, given a day rate, the number of days the project spans, and a monthly discount rate.

```javascript
rateWithDiscount(89, 0.42); CHANGE THIS EXAMPLE>>>>
// => 9086
```

The discount is always passed as a number, where `42%` becomes `0.42`. The result _must_ be rounded up to the nearest whole number.
