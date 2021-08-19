# Instructions

Your friend Kojo is a big fan of numbers.
He has a small website for playing around with numbers: www.fun-with-numbers.com.
Kojo is not that good at programming so he asked you for help.

You will build two helper functions for new number games on Kojos' website and a third one for validation of the user input.

## 1. Calculate the sum for the numbers on the slot machine

One of the games on Kojos website looks like a slot machine that shows three digits on the wheels to the left and another three digits to the right.
For the game mechanics, Kojo needs to know the sum of the two numbers made up by those digits.

Write a function `twoSum` that accepts two arrays as arguments.
Each array contains three numbers between 0 and 9.
The function should interpret each array as a number and return the sum of those two numbers.

```javascript
twoSum([1, 2, 3], [0, 0, 7]);
//=> 130

// [1, 2, 3] represents 123 and [0, 0, 7] represents 7.
// 123 + 7 = 130
```

## 2. Determine if a number is a palindrome

Another game on the website is a little quiz called "Lucky Numbers".
A user can enter a number and is shown whether the number belongs to some secret sequence or pattern.
The sequence or pattern of the "lucky numbers" changes each month and each user only has a limited number of tries to guess it.

This months' lucky numbers should be numbers that are palindromes.
Palindromic numbers remain the same when the digits are reversed.

Implement the new `luckyNumber` function that accepts a number as argument.
The function should return `true` if the number is a palindrome and `false` otherwise.
The input number will always a positive integer.

```javascript
luckyNumber(1441);
//=>  true

luckyNumber(123);
//=> false
```

// TODO remove 3, add one for bool instead, "error message for input field"
