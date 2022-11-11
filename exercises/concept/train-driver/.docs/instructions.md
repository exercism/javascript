# Instructions

Your friend is a train driver and has to drive cargo trains between cities.
Although your friend isn't amazing with handling the computers and would like some help with it.
Your friend would like your help organizing the train and correcting the mistakes in the data.


```exercism/note
To practice, use a for the rest or spread to solve each of the tasks below.
```

## 1. Convert the data to an array

Your friend has been keeping track of how much each wagon weighs. Although they are not sure how many wagons and would like the data to be returned as an array.

```exercism/note

Implement a function `getListOfWagons` that accepts an unknown amount of whole numbers that contains the weight of each wagon.
It should return an array of all the wagon weights.

```

```javascript
getListOfWagons(5, 7, 12, 3, 14, 8, 3);
// => [5, 7, 12, 3, 14, 8, 3]
```

## 2. Move the first two elements to the end of the array

Now that you got a general feel for handling your friend's data. Your friend has noticed that the first two days' values are not in the correct place. 
Your friend would like you to move the first two days' value to the end of the array.

```exercism/note

Implement a function `fixListOfWagons` that accepts an array of the weight of each wagon.
It returns an array where the 2 first elements are moved to the end of the array.

```

```javascript
eachWagonsWieght = [2, 5, 0, 7, 4,  0, 1, 3, 1];
fixListOfWagons(eachWagonsWieght);
// => [0, 7, 4,  0, 1, 3, 1, 2, 5]
```

## 3. Add missing values

Your friend realized that all data wasn't added and found another array which contains the missing values. 
Your friend would like you to add the missing values to the array. 
All they can remember is that the missing values should be placed after the first element in the array.


```exercism/note

Given this new information, write a function called `CorrectListOfWagons` that takes two arrays which have the values of the weight of each wagon as an argument. 
The second array should be added after the first element of the first array.

```


```javascript
eachWagonsWieght = [2, 5, 0, 7, 4, 1];
missingWagons = [3, 0, 6, 1];
CorrectListOfWagons(eachWagonsWieght, missingWagons);
// => [2, 3, 0, 6, 1, 5, 0, 7, 4, 1]
```

## 4. Update routing information

Now that the wagon data is correct, your friend would like you to update the routing information. 
Your friend has an object with the routing information and would like you to add more routing information to the object. 
Every route requires a bit different information so your friend would prefer a generic solution.


```exercism/note

Implement a function `updateRoutingInformation` that accepts two objects.
The first object contains which city the train should go between and the second object contains more routing information.
The function should return an object with the updated routing information.

```

```javascript
route  = {from: "Berlin", to: "Hamburg"};
moreRouteInformation = {length: 100, speed: 50};
updateRoutingInformation(route, moreRouteInformation);
// => {from: "Berlin", to: "Hamburg", length: 100, speed: 50}
```

## 5. Remove arrival time from routing information

Your friend has noticed that they don't need the arrival time in the routing information.
Therefore your friend would like you to remove the arrival time from the routing information.

```exercism/note

Implement a function `removeArrivalTime` that accepts an object with the routing information.
The function should return an object

``` 

```javascript
routeInformation= {
  from: "Berlin",
  to: "Hamburg",
  length: 100,
  timeOfArrival: "10:10"
};
removeTimeOfArrival(routeInformation);
// => {from: "Berlin", to: "Hamburg", length: 100}
```
