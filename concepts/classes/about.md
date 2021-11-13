# About

JavaScript includes the capabilities for object-oriented programming ([OOP][wiki-oop]). Usually languages realize those features by providing classes and objects as instances of those classes.

JavaScript on the other hand did not have classes at all before they were added to the language specification in 2015. And even though a `class` keyword is available nowadays, JavaScript is still a _prototype-based_ language.

To understand what that means and how JavaScript actually works, we will go back to the time without classes.

## Prototype Syntax

In OOP, you want to create objects from "templates" so that they include certain data and functionality. The data (keys in the object) are called _fields_ in the OOP context, the functionality (functions in the object) are called _methods_.

### Constructor Function

In JavaScript, the template is facilitated by a regular function. Used in this context, it is called a _constructor function_ and the function name should start with a capital letter. Instances (objects) are derived from the template using the `new` keyword when invoking the constructor function.

```javascript
function Car() {
  // ...
}

const myCar = new Car();
const yourCar = new Car();
```

It is important to note that in JavaScript, the instances and the constructor function keep a relationship to each other even after the instances were created.
Every object instance includes a hidden, internal object referred to as `[[prototype]]` in the language specification. It holds a reference to the value of the `prototype` key of the constructor function. Yes, you read that correctly, a JavaScript function can have key/value pairs because it is also an object behind the scenes. Nowadays `[[prototype]]` can be accessed via the key `__proto__` in many environments. It is important to not confuse the prototype of an instance (`[[prototype]]`/`__proto__`) with the `prototype` property of the constructor function.

### Instance Fields

Often, you want all the derived objects to include some fields and pass some initial values when the object is constructed. This is facilitated via the `this` keyword. Inside the constructor function, `this` represents the new object that will be created via `new`.
`this` is automatically returned from the constructor function when it is called with `new`.

That means we can add fields to the new instance by adding them to `this` in the constructor function.

```javascript
function Car(color, weight) {
  this.color = color;
  this.weight = weight;
  this.engineRunning = false;
}

const myCar = new Car('red', '2mt');
myCar.color;
// => 'red'
myCar.engineRunning;
// => false
```

### Instance Methods

Methods are added via the `prototype` property of the constructor function.
When defining the methods, you can access the fields of the instance via `this`.

```javascript
function Car() {
  this.engineRunning = false;
  // ...
}

Car.prototype.startEngine = function () {
  this.engineRunning = true;
};

Car.prototype.addGas = function (litre) {
  // ...
};

const myCar = new Car();
myCar.startEngine();
myCar.engineRunning;
// => true
```

### The Prototype Chain

`myCar` in the example above is a regular JavaScript object and if we would inspect it (e.g. in the browser console) we would not find a property `startEngine` with a function as value directly inside the `myCar` object. So how does the code above even work?

The secret ingredient here is called the _prototype chain_.

own property first

TODO continue here

- prototype can change dynamically

## Class Syntax

- same as above in new syntax
- public/private

Other

- class fields/methods

[wiki-oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
