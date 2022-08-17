# Instructions

In this exercise you will be writing code to help a freelancer communicate with their clients about the prices of certain projects. You will write a few utility functions to quickly calculate the costs for the clients.

## 1. Calculate the day rate given an hourly rate

A client contacts the freelancer to enquire about their rates.
The freelancer explains that he **_works 8 hours a day._**
However, the freelancer knows only their hourly rates for the project.
Help them estimate a day rate given an hourly rate.

```javascript
dayRate(89);
// => 712
```

The day rate does not need to be rounded or changed to a "fixed" precision.

## 2. Calculate the number of workdays given a fixed budget

Another day, a project manager offers the freelancer to work on a project with a fixed budget.
Given the fixed budget and the freelancer's hourly rate, help them calculate the number of days he would work until the budget is exhausted.
The result _must_ be **rounded down** to the nearest whole number.

```javascript
daysInBudget(20000, 89);
// => 28
```

## 3. Calculate the discounted rate for large projects

Often, the freelancer's clients hire them for projects spanning over multiple months.
In these cases, the freelancer decides to offer a discount for every full month, and the remaining days are billed at day rate.
**_Every month has 22 billable days._**
Help them estimate their cost for such projects, given an hourly rate, the number of days the project spans, and a monthly discount rate.
The discount is always passed as a number, where `42%` becomes `0.42`. The result _must_ be **rounded up** to the nearest whole number.

```javascript
priceWithMonthlyDiscount(89, 230, 0.42);
// => 97972
```
