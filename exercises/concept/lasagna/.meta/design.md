# Design

## Learning objectives

- Know what a variable is.
- Know what a constant variable is.
- Know how to define a variable.
- Know how to export a variable
- Know how to return a value from a function (explicit return).
- Know how to define an number.
- Know how to use mathematical operators on numbers.

## Out of scope

## Concepts

- `basics`

## Prerequisites

There are no prerequisites.

## Analyzer

This exercise could benefit from the following rules added to the the [analyzer][analyzer]:

- Verify that the `remainingMinutesInOven` function uses the `EXPECTED_MINUTES_IN_OVEN` constant.
- Verify that the `preparationTimeInMinutes` function uses the `PREPARATION_MINUTES_PER_LAYER` constant.
- Verify that the `totalTimeInMinutes` function calls the `preparationTimeInMinutes` function.
- Verify that no extra _bookkeeping_ or _intermediate_ variables are declared

[analyzer]: https://github.com/exercism/javascript-analyzer
