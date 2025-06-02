# Hints

## 1. Calculate the price of a pizza

- Set up a recursive function that returns the price of one extra option added to the price of the pizza without that extra topping.
- If `Maximum call stack size exceeded` error is raised, check if you've missed out on the base case.
- If you're getting a `Memory Allocation Error`, check if you're duplicating the input array of toppings instead of mutating it.

## 2. Calculate the total price of an order

- Using `pizzaPrice`, calculate the price of each pizza in the array, and add it to a sum.
- If `Maximum call stack size exceeded` error is raised, and more than one test is failing, check if you've missed out on the base case. If only one test is failing, try implementing this with a loop!
- If you're getting a `Memory Allocation Error`, check if you're duplicating the input array instead of mutating it.
