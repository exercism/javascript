# About

JavaScript includes the capabilities for object-oriented programming ([OOP][wiki-oop]). Usually languages realize those features by providing classes and objects as instances of those classes.

JavaScript on the other hand did not have classes at all before they were added to the language specification in 2015. And even though a `class` keyword is available nowadays, JavaScript is still a _prototype-based_ language.

To understand what that means and how JavaScript actually works, we will go back to the time without classes.

## Prototype Syntax

In OOP, you want to create objects from "templates" so that they include certain data and functionality. The data (keys in the object) are called _properties_ in the OOP context, the functionality (functions included in the object) are called _methods_.

### Constructor Function

In JavaScript, the template is facilitated by a regular function. Used in this context, it is called a _constructor function_ and the function name should start with a capital letter. Instances (objects) are derived from the template using the `new` keyword when invoking the constructor function.

```javascript
function Car() {
  // ...
}

const myCar = new Car();
const yourCar = new Car();
```

### Instance Properties

Often, you want all the derived objects to include some properties and pass some initial values when the object is constructed. This is facilitated via the `this` keyword. Inside the constructor function, `this` references the new object that will be created via `new` and it is automatically returned from the function.

That means we can add properties to the new instance by adding them to `this` in the constructor function.

```javascript
function Car(color, weight) {
  this.color = color;
  this.weight = weight;
  this.canDrive = true;
  // implicit "return this" happens here
}

const myCar = new Car('red', '2mt');
myCar.color;
// => 'red'
myCar.canDrive;
// => true
```

### Instance Methods

TODO continue here

- can be added via this or via prototype
- instance holds reference to prototype
- prototype can change dynamically

## Class Syntax

- same as above in new syntax
- public/private

Other

- class properties/methods

[wiki-oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
