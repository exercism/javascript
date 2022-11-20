# Instructions

Your friend is a Locomotive Engineer who drives cargo trains between cities.
Although your friend is great handling the trains, they aren't amazing handling the logistics computers and would like your programming help organizing the train and correcting mistakes in the data.

```exercism/note
To practice, use the rest or spread operator to solve each of the tasks below.
```

## 1. Create a list of all wagons

Your friend has been keeping track of each wagon identifier, but they're never sure how many wagons they are going to have to process at any given time. It would be much easier for the rest of the logistics program to have the data to be returned as an array.

Implement a function `getListOfWagons` that accepts an unknown amount of positive integers which are the IDs of each wagon.

```javascript
getListOfWagons(1, 7, 12, 3, 14, 8, 5);
// => [1, 7, 12, 3, 14, 8, 3]
```

## 2. Move the first two elements to the end of the array

At this point, you are starting to get a feel for your friend's data and how it's used in the logistics program.
The train ID system works by assigning the locomotive an ID of `1` and then assigning the remainder of the wagons a randomly chosen ID greater than `1`.

But then your friend had to connect two new wagons to the train and forgot to update the system!
Now the first two wagons in the `array` have to be moved to the back of the train, or everything will be out of order.
Your friend would be really grateful to you for fixing their mistake.

Implement a function `fixListOfWagons` that accepts an array of the id of each wagon.
It `return` an `array` where the 2 first elements repositioned to the end of the `array`.

```javascript
eachWagonsWieght = [2, 5, 1, 7, 4, 12, 6, 3, 13];
fixListOfWagons(eachWagonsWieght);
// => [1, 7, 4,  12, 6, 3, 13, 2, 5]
```

## 3. Add missing values

Uh-oh. some wagons seem to have gone missing.

Fortunately, your friend just found another `array` which appears to contain the missing wagon IDs, and would like you to add them into the main wagon ID `array`.
All they can remember is that the missing values should be placed directly after the designated locomotive.

Given this new information, write a function called `CorrectListOfWagons` that takes two arrays which have the IDs of each wagon as the arguments. 
The wagon IDs of the second `array` should be added into the first `array` directly after the locomotive (ID 1).

```javascript
eachWagonsWieght = [1, 5, 20, 7, 4, 8];
missingWagons = [3, 17, 6, 15];
correctListOfWagons(eachWagonsWieght, missingWagons);
// => [1, 3, 17, 6, 15, 5, 20, 7, 4, 8]
```

## 4. Extend routing information

Now that all the wagon data is correct, your friend would like you to update the systems routing information.
Initial routing information has been constructed as an `object`, and you friend would like you to update it with the additions provided.
Every route requires slightly different information, so your friend would really prefer a generic solution.

Implement a function extendRouteInformation that accepts two `objects`.
The first `object` contains which cities the train route moves between.

The second `object` contains other routing details such as train speed or length.
The function should return a consolidated `object` with all routing information.

```exercism/note
The variable `moreRouteInformation` can contain different properties.
```

```javascript
route  = {from: "Berlin", to: "Hamburg"};
moreRouteInformation = {length: "100", speed: "50"};
extendRouteInformation(route, moreRouteInformation);
// => {from: "Berlin", to: "Hamburg", length: "100", speed: "50"}
```

## 5. Separate arrival time from routing information

Your friend has noticed that they don't need the arrival time in the routing information.
Therefore your friend would like you to separate the arrival time from the routing information.

Implement a function `separateArrivalTime` that accepts an object with the routing information.
The function should return an array there the first element of the array is the arrival time and the second element is an object with the routing information without arrival time.

```javascript
routeInformation= {
  from: "Berlin",
  to: "Hamburg",
  length: "100",
  timeOfArrival: "10:10"
};
separateTimeOfArrival(routeInformation);
// => ["10:10", {from: "Berlin", to: "Hamburg", length: "100"}]
```
