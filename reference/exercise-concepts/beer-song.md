# Concepts of beer-song

[Example of implementation](https://exercism.io/tracks/javascript/exercises/beer-song/solutions/cadb9ae2421342efa83f9d512bf9d6a1)

## General

- **functions**: used as the main entry point for the exercise
- **function arguments**: the number of starting bottles and the take down bottles count are passed as arguments
- **function return value**:  Beer Song's verses and other small parts of verses
- **arrow-function**: used as a default in the skeleton file and also used for splitting the logic of building the song in small and manageable units
- **modules**: used for exporting the main function in order to be imported and called from unit tests
- **scoping**: using { } to define scope (for functions, looping and for conditionals)
- **variables**: used for declaring verses and parts of verses, and also for declaring the arrow functions
- **looping**: used an indexed for-loop for building the required array of verses
- **ternary operator**: used as a shortcut for if-else statement
- **strings**: used for building the song's verses. Also using string template literals for interpolating values inside verses.
  Using '+' operator for concatenating strings. Using toLowerCase method from the String object.
- **sameness**: used '===' to check how many bottles are left or to check the current verse number
- **arrays**: the required output of the exercise is an array of verses (also used methods and properties of the Array object: push, concat, length)
- **conditionals**: if-else (used for returning a certain part of a verse based on the current verse number or based on the number of bottles left)
- **duck typing**: using duck typing whenever methods or properties of String or Array objects are called
- **arithmetic operators**: using '-' operator for computing number of verses/bottles in different contexts.
  Using '--' operator inside the for statement
- **comparision operators**: using '>' operator to test if the number of verses inside the array is larger than 0

## Using a switch statement

[Example of implementation](https://exercism.io/tracks/javascript/exercises/beer-song/solutions/0312dfd0df224103af59e74c77491ee9)

- **switch statement**: used as an alternative to the _if-else_ statement (for returning a certain part of a verse based on the current verse number or based on the number of bottles left)

## Using a while statement

[Example of implementation](https://exercism.io/tracks/javascript/exercises/beer-song/solutions/2d6047008b934a10b1855304264fca88)

- **while statement**: used as an alternative to an _indexed for_ looping statement (for building the required array of verses)

## Using anonymous functions

[Example of implementation](https://exercism.io/tracks/javascript/exercises/beer-song/solutions/29cd3f49aaee446791275d13430f5725)

- **anonymous functions**: used for defining methods on exported object
