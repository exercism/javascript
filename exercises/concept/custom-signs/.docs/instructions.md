# Instructions

In this exercise you'll be writing code to help a sign company create custom messages for their signs.

## 1. Create a set of useful strings

Define the following constant strings which will be used to create signs:

- `BIRTHDAY`: This holds the string "Birthday"
- `ANNIVERSARY`: This holds the string "Anniversary"

## 2. Create a set of useful characters

Define the following constant characters which will be used to create signs:

- `EXCLAMATION`: This holds the value "!"

## 3. Combine phrases to build up messages

Implement the function `buildSign(occasion, name)`. This function takes one of the two strings you defined in the first task as the `occasion` parameter and a string holding someone's name as the `name` parameter and uses a combination of template string and the ternary operator, as well as the characters defined in task #2 to build up a phrase for a sign.

```javascript
buildSign(BIRTHDAY, 'Rob');
// => "Happy Birthday Rob!"

buildSign(ANNIVERSARY, 'Jen');
// => "Happy Anniversary Jen!"
```

## 4. Build a graduation sign

Implement the function `graduationFor(name, year)` which takes a name as a string parameter and a year as a number parameter and uses string interpolation to create a phrase for a sign that uses a newline to separate the two lines of the message.

```javascript
graduationFor('Hannah', 2022);
// => "Congratulations Hannah!\nClass of 2022"
```

## 5. Compute the cost of a sign

Implement the function `costOf(sign, currency)` which takes a string that holds the contents of the sign and a string that represents the currency and returns a phrase that includes the cost to create the sign, formatted with a fixed point notation set to 2 points, followed by the currency string.

```javascript
costOf('Congratulations Rob Class of 2021', 'dollars');
// => "Your sign costs 90.00 dollars."
```
