# Instructions

In this exercise you are going to write some more code to help you cook your brilliant lasagna from your favorite cooking book.

You have FIXME tasks, all related to the time spent cooking the lasagna.

## 1. Determine whether the lasagna is done

To make sure you do not forget about your lasagna in the oven, you usually set a timer.
Sometimes you forget about it though.

Write a function `cookingStatus` with that accepts the remaining time on the timer in minutes as parameter.
The function has three possible results.

- If the timer shows `0`, it should return `'Lasagna is done.'`.
- If the timer shows any other number, the result should be `'Not done, please wait.'`.
- If the function is called without a timer value, the result should be `'You forgot to set the timer.'`.

```javascript
cookingStatus(12);
// => 'Not done, please wait.'

cookingStatus();
// => 'You forgot to set the timer.'
```

## 2. Estimate the preparation time

For the next lasagna that you will prepare, you want to make sure you have enough time reserved so you can enjoy the cooking.
You want to estimate how long the preparation time will take.
This depends on the number of layers you want to have in your lasagna.

Implement a function `preparationTime` that accepts an array of layers ... and an average preparation time per layer.
// TODO continue here

Ideas:

- multiple return values
- function with input and output object but no return, e.g. "transfer secret ingredient from input to output"
- do not modify input object passed by reference (calculate amounts for more portions)
