# Instructions

In this exercise, you're implementing a way to keep track of the high scores for the most popular game in your local arcade hall.

You have 7 functions to implement, all related to returning and manipulating a dictionary of high score data.

## 1. Define a new high score dictionary

Create a function `newScoreBoard()` that takes no parameters and returns a new high score dictionary which uses values of type `String` for the keys and values of type `Int` as the values.

## 2. Add players to the high score dictionary

To add a player to the high score dictionary, define `addPlayer`, which is a function which takes 3 parameters:

- The first parameter is the dictionary of scores. This should be an in-out parameter.
- The second parameter is the name of a player as a string.
- The third parameter is the score as an integer. The parameter is optional, implement the third parameter with a default value of 0.

```swift
addPlayer(&highScores, "Dave Thomas")
// Adds "Dave Thomas" to the dictionary with a high score of 0.
addPlayer(&highScores, "José Valim", 486_373)
// Adds "José Valim" to the dictionary with a high score of 486_373.
```

## 3. Remove players from the score dictionary

To remove a player from the high score dictionary, define `removePlayer`, which takes 2 parameters:

- The first parameter is the dictionary of scores. This should be an in-out parameter.
- The second parameter is the name of the player as a string.

This function should remove the player from the dictionary if they are in it and do nothing otherwise.

```swift
removePlayer(&highScores, "Dave Thomas")
// Removes "Dave Thomas" from thee dictionary
removePlayer(&highScores, "Rose Fanaras")
// Doesn't alter the dictionary as "Rose Fanaras" is not in the dictionary.
```

## 4. Reset a player's score

To reset a player's score, define `resetPlayer`, which takes 2 parameters:

- The first parameter is the dictionary of scores. This should be an in-out parameter.
- The second parameter is the name of the player as a string, whose score you wish to reset.

The function will set the score of the player to 0. If the player is not in the dictionary, then nothing should happen.

```swift
resetScore(&highScores, "Dave Thomas")
// High score for "Dave Thomas" set to 0
```

## 5. Update a player's score

To update a players score by adding to the previous score, define `updatePlayer`, which takes 3 parameters:

- The first parameter is the dictionary of scores. This should be an in-out parameter.
- The second parameter is the name of the player as a string, whose score you wish to update.
- The third parameter is the score that you wish to **add** to the stored high score.

```swift
addPlayer(&highScores, "Freyja Ćirić", 12_771_008)
updateScore(&highscores, "Freyja Ćirić", 73)
// Score for "Freyja Ćirić" updated to 12_771_091
```

## 6. Get a list of players with scores ordered by player name

Define the function `orderByPlayers`, which takes 1 parameter:

- The first parameter is the dictionary of scores.

The function will return an array of `(String, Int)` tuples that are the players and their high scores sorted in ascending order by the player's name.

```swift
orderByPlayers(highScores)
// => [("Dave Thomas", 0), ("Freyja Ćirić", 12_771_091), ("José Valim", 486_373)]
```

## 7. Get a list of players ordered by player score in decreasing order

To get a list of players ordered by scores in decreasing order, define `orderByScores`, which takes 1 parameter:

- The first parameter is the dictionary of scores.

The function will return an array of `(String, Int)` tuples that are the players and their high scores sorted in descending order by the player's score.

```swift
orderByScores(highScores)
# => [("Freyja Ćirić", 12_771_091), ("José Valim", 486_373), ("Dave Thomas", 0)]
```
