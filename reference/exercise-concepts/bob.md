# Concepts of bob

[Example of implementation](https://exercism.io/tracks/javascript/exercises/bob/solutions/cadb9ae2421342efa83f9d512bf9d6a1)

## General

- **functions**: used as the main entry point for the exercise
- **function arguments**: input message is passed as an argument
- **function return value**:  Bob's response
- **arrow-function**: used as a default in the skeleton file and also used for deciding if a message is of a certain type
- **modules**: used for exporting the main function in order to be imported and called from unit tests
- **scoping**: using { } to define scope (for functions and for conditionals)
- **variables**: used for declaring a trimmed message, and also for declaring the arrow functions
- **strings**: used as input and output of the function (escaped single-quote character inside string literal and also using methods and properties of String e.g. length, trim, endsWith, toUpperCase)
- **regular expressions**: used for pattern matching (also using the test method of RegExp object)
- **sameness**: used '===' to check the length of a string and also to check if a string is uppercase
- **boolean logic**: used '&&' operator for checking that two conditions are fulfilled at the same time
- **conditionals**: if-else - used for checking which type of message did Bob received and also to decide Bob's response
- **duck typing**: using duck typing whenever methods or properties of String object are called

## Using a switch

[Example of implementation](https://exercism.io/tracks/javascript/exercises/bob/solutions/375313effb6346879203533e78484002)

- **switch statement**: used as an alternative to if-else statements for identifying the type of message

## Using anonymous functions

[Example of implementation](https://exercism.io/tracks/javascript/exercises/bob/solutions/66b08d3495679799d872caf8)

- **anonymous functions**: used for defining methods on exported object
