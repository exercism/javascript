# Instructions

Mary is a big fan of the TV series Star Trek: The Next Generation.
She often plays pen-and-paper role playing games, where she and her friends pretend to be the crew of the Starship Enterprise.
Mary's character is Captain Picard, which means she has to keep the captain's log.
She loves the creative part of the game, but doesn't like to generate random data on the spot.

Help Mary by creating random generators for data commonly appearing in the captain's log.

## 1. Generate a random starship registry number

Enterprise (registry number NCC-1701) is not the only starship flying around!
When it rendezvous with another starship, Mary needs to log the registry number of that starship.

Registry numbers start with the prefix "NCC-" and then use a number from 1000 to 9999 (both inclusive).

Implement the `randomShipRegistryNumber()` function that returns a random starship registry number.

```javascript
randomShipRegistryNumber();
// => "NCC-1947"
```

## 2. Generate a random stardate

What's the use of a log if it doesn't include dates?

A stardate is a floating point number.
The adventures of the Starship Enterprise from the first season of The Next Generation take place between the stardates 41000.0 and 42000.0.
The "4" stands for the 24th century, the "1" for the first season.

Implement the function `randomStardate` that returns a floating point number between 41000.0 (inclusive) and 42000.0 (exclusive).

```javascript
randomStardate();
// => 41458.15721310934
```

<!-- prettier-ignore -->
~~~exercism/caution
It is expected that the smallest random number (0) results in the smallest random stardate (41000.0) and
the largest random number (just under 1) results in the largest random stardate (41999.999...).
~~~

## 3. Generate a random planet

The Starship Enterprise encounters many planets in its travels.
Planets in the Star Trek universe are split into categories based on their properties.
For example, Earth is a class M planet.
All possible planetary classes are: D, H, J, K, L, M, N, R, T, and Y.

Implement the `randomPlanetClass()` function.
It should return one of the planetary classes at random.

```javascript
randomPlanetClass();
// => "K"
```
