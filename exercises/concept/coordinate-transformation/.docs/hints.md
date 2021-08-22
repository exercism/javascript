# Hints

## General

- For each task, each function should return a function closure, using the supplied arguments.

## 1. Translate the coordinates

- The supplied arguments provide the amount to translate the coordinate pair along the _x_ and _y_ axis.

## 2. Scale the coordinates

- The supplied arguments provide the amount to scale the coordinate pair for the _x_ and _y_ axis.

## 3. Compose transformation functions

- The result of the first transformation is an array, but the transformation functions take two number arguments. You will have to get the values from the array.
- Remember that the order in which the functions are performed matters.

## 4. Save the results of functions

- For this function, you only have to memoize the result of the last transformation.
- In order to send back the result of the last transformation, you will have to check if the input arguments are the same.
