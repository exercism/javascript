# Implementation

Define a single function, zebraPuzzle, which returns an object
containing two strings, whose values are the answers to the
zebra-puzzle questions "Who drinks water?" and "Who owns the Zebra?".
Each answer will be one of the resident's nationalities:
Englishman, Spaniard, Ukrainian, Norwegian, or Japanese.

For the zebraPuzzle function result's object, use the following signature:

```
{
	waterDriker: "string"
	zebraOwner: "string"
}
```

Obviously, you could simply write a one-liner function
if you peek at the test program to see the expected solution.
But the goal is to develop an algorithm which uses
the given facts and constraints for the puzzle
and determines the two correct answers.