# Instructions

Your friend Li Mei runs a juice bar where she sells delicious mixed fruit juices.
You are a frequent customer in her shop and realized you could make your friend's life easier.
You decide to use your coding skills to help Li Mei with her job.

## 1. Determine how long it takes to mix a juice

Li Mei likes to tell her customers in advance how long they have to wait for a juice from the menu that they ordered.
She has a hard time remembering the exact numbers because the time it takes to mix the juices varies.
`'Pure Strawberry Joy'` takes 0.5 minutes, `'Energizer'` and `'Green Garden'` take 1.5 minutes each, `'Tropical Island'` takes 3 minutes and `'All or Nothing'` takes 5 minutes.
For all other drinks (e.g., special offers) you can assume a preparation time of 2.5 minutes.

To help your friend, write a function `timeToMixJuice` that takes a juice from the menu as an argument and returns the number of minutes it takes to mix that drink.

```javascript
timeToMixJuice('Tropical Island');
// => 3

timeToMixJuice('Berries & Lime');
// => 2.5
```

## 2. Replenish the lime wedge supply

A lot of Li Mei's creations include lime wedges, either as an ingredient or as part of the decoration.
So when she starts her shift in the morning she needs to make sure the bin of lime wedges is full for the day ahead.

Implement the function `limesToCut` which takes the number of lime wedges Li Mei needs to cut and an array representing the supply of whole limes she has at hand.
She can get 6 wedges from a `'small'` lime, 8 wedges from a `'medium'` lime and 10 from a `'large'` lime.
She always cuts the limes in the order in which they appear in the list, starting with the first item.
She keeps going until she reached the number of wedges that she needs or until she runs out of limes.

Li Mei would like to know in advance how many limes she needs to cut.
The `limesToCut` function should return the number of limes to cut.

```javascript
limesToCut(25, ['small', 'small', 'large', 'medium', 'small']);
// => 4
```

## 3. Finish up the shift

Li Mei always works until 3pm.
Then her employee Dmitry takes over.
There are often drinks that have been ordered but are not prepared yet when Li Mei's shift ends.
Dmitry will then prepare the remaining juices.

To make the hand-over easier, implement a function `remainingOrders` which takes the number of minutes left in Li Mei's shift and an array of juices that have been ordered but not prepared yet.
The function should return the orders that Li Mei cannot start preparing before the end of her workday.

The time left in the shift will always be greater than 0.
Furthermore, the orders are prepared in the order in which they appear in the array.
If Li Mei starts to mix a certain juice, she will always finish it even if she has to work a bit longer.
If there are no remaining orders left that Dmitry needs to take care of, an empty array should be returned.

```javascript
remainingOrders(5, ['Energizer', 'All or Nothing', 'Green Garden']);
// => ['Green Garden']
```
