# Introduction

SGF (Smart Game Format) is a popular, text-based file format used for storing records of board games. While it can be used for many different games like Chess, Othello, and Backgammon, it is most widely known and used for the game of Go.

An SGF file is structured as a tree of nodes. This tree structure is particularly useful because it allows game records to branch out, meaning you can store the main sequence of moves as well as alternative variations, analyses, and commentary all in the same file. 

Each node in the tree contains a set of properties, and each property has one or more values. These properties encode everything from the players' names and ranks, to the game result, board size, and individual moves placed on the board.
