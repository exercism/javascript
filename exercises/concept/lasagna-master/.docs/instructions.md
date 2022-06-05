# Instructions

In this exercise, you are going to write some more code related to preparing and cooking your brilliant lasagna from your favorite cookbook.

You have five tasks.
The first one is related to the cooking itself, the other four are about the perfect preparation.

## 1. Determine whether the lasagna is done

When you have lasagna in the oven, you want to know whether you can already take it out or not.
To make sure the lasagna does not burn in the oven, you usually set a timer.
But sometimes you forget about that.

Write a function `cookingStatus` that accepts the remaining time on the timer in minutes as a parameter.
The function has three possible results.

- If the timer shows `0`, it should return `'Lasagna is done.'`.
- If the timer shows any other number, the result should be `'Not done, please wait.'`.
- If the function is called without a timer value, the result should be `'You forgot to set the timer.'`.

The timer will never show a value below 0.

```javascript
cookingStatus(12);
// => 'Not done, please wait.'

cookingStatus();
// => 'You forgot to set the timer.'
```

## 2. Estimate the preparation time

For the next lasagna that you will prepare, you want to make sure you have enough time reserved so you can enjoy the cooking.
You already made a plan with all the layers your lasagna will have.
Now you want to estimate how long the preparation will take based on that.

Implement a function `preparationTime` that accepts an array of layers and the average preparation time per layer in minutes.
The function should return the estimate for the total preparation time based on the number of layers.
If the function is called without providing the average preparation time, `2` minutes should be assumed instead.

```javascript
const layers = ['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles'];
preparationTime(layers, 3);
// => 18

preparationTime(layers);
// => 12
```

## 3. Compute the amounts of noodles and sauce needed

Besides reserving the time, you also want to make sure you have enough sauce and noodles to cook the lasagna of your dreams.
For each noodle layer in your lasagna, you will need 50 grams of noodles.
For each sauce layer in your lasagna, you will need 0.2 liters of sauce.

Define the function `quantities` that takes an array of layers as a parameter.
The function will then determine the quantity of noodles and sauce needed to make your meal.
The result should be returned as an object with keys `noodles` and `sauce`.

```javascript
quantities(['sauce', 'noodles', 'sauce', 'meat', 'mozzarella', 'noodles']);
// => { noodles: 100, sauce: 0.4 }
```

## 4. Add the secret ingredient

A while ago you visited a friend and ate lasagna there.
It was amazing and had something special to it.
The friend sent you the list of ingredients and told you the last item on the list is the "secret ingredient" that made the meal so special.
Now you want to add that secret ingredient to your recipe as well.

Write a function `addSecretIngredient` that accepts two arrays of ingredients as parameters.
The first parameter is the list your friend sent you and the second is the ingredient list for your own recipe.
The function should add the last item from your friend's list to the end of your list.
The array that represents your recipe should be modified directly and the function should not return anything.
However, the first argument should not be modified.

```javascript
const friendsList = ['noodles', 'sauce', 'mozzarella', 'kampot pepper'];
const myList = ['noodles', 'meat', 'sauce', 'mozzarella'];

addSecretIngredient(friendsList, myList);
// => undefined

console.log(myList);
// => ['noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper']
```

## 5. Scale the recipe

The amounts listed in your cookbook only yield enough lasagna for two portions.
Since you want to cook for more people next time, you want to calculate the amounts for different numbers of portions.

Implement a function `scaleRecipe` that takes two parameters.

- A recipe object that holds the amounts needed for 2 portions.
  The format of the object can be seen in the example below.
- The number of portions you want to cook.

The function should return a recipe object with the amounts needed for the desired number of portions.
You want to keep the original recipe though.
This means, in this task the recipe argument should not be modified.

```javascript
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

scaleRecipe(recipe, 4);
// =>
// {
//   noodles: 400,
//   sauce: 1,
//   mozzarella: 2,
//   meat: 200,
// };

console.log(recipe);
// =>
// {
//   noodles: 200,
//   sauce: 0.5,
//   mozzarella: 1,
//   meat: 100,
// };
```
