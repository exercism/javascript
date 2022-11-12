# Instructions

Your friend is a train driver and has to drive cargo trains between cities.
Although your friend isn't amazing with handling the computers and would like some help with it.
Your friend would like your help organizing the train and correcting mistakes in the data.

```exercism/note
To practice, use the rest or spread operator to solve each of the tasks below.
```

## 1. Create a list of all wagons

Your friend has been keeping track of each wagon identifier. Although they are not sure how many wagons and would like the data to be returned as an array.

Implement a function `getListOfWagons` that accepts an unknown amount of positive integers that contains the id of each wagon.
It should return an array of all the wagon ids.

```javascript
getListOfWagons(1, 7, 12, 3, 14, 8, 5);
// => [1, 7, 12, 3, 14, 8, 3]
```

## 2. Move the first two elements to the end of the array

Now that you got a general feel for handling your friend's data.
The train id system works by the locomotive having id number one and the rest of the wagons having a random id.
Your friend had to connect two new wagons to the train and forgot to update the id system.
Now the first two wagons in the array have to be moved to the back of the train.
Your friend would like you to move the first two wagons to the end of the array.

Implement a function `fixListOfWagons` that accepts an array of the id of each wagon.
It returns an array where the 2 first elements are moved to the end of the array.

```javascript
eachWagonsWieght = [2, 5, 1, 7, 4, 12, 6, 3, 13];
fixListOfWagons(eachWagonsWieght);
// => [1, 7, 4,  12, 6, 3, 13, 2, 5]
```

## 3. Add missing values

Your friend realized that all data wasn't added and found another array which contains the missing wagons. 
Your friend would like you to add the missing values to the array. 
All they can remember is that the missing values should be placed after the locomotive in the array.

Given this new information, write a function called `CorrectListOfWagons` that takes two arrays which have the id of each wagon as an argument. 
The second array should be added after the first element of the first array.

```javascript
eachWagonsWieght = [1, 5, 20, 7, 4, 8];
missingWagons = [3, 17, 6, 15];
CorrectListOfWagons(eachWagonsWieght, missingWagons);
// => [1, 3, 17, 6, 15, 5, 20, 7, 4, 8]
```

## 4. Extend routing information

Now that the wagon data is correct, your friend would like you to update the routing information. 
Your friend has an object with the routing information and would like you to add more routing information to the object. 
Every route requires a bit different information so your friend would prefer a generic solution.

Implement a function `extendRouteInformation` that accepts two objects.
The first object contains which city the train should go between and the second object contains more routing information.
The function should return an object with the updated routing information.

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
The function should return two objects.

```javascript
routeInformation= {
  from: "Berlin",
  to: "Hamburg",
  length: "100",
  timeOfArrival: "10:10"
};
separateTimeOfArrival(routeInformation);
// => {timeOfArrival: "10:10"}, {from: "Berlin", to: "Hamburg", length: "100"}
```
