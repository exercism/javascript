# About

JavaScript includes the capabilities for object-oriented programming ([OOP][wiki-oop]). Usually languages realize those features by providing classes and objects as instances of those classes.

JavaScript on the other hand did not have classes at all before they were added to the language specification in 2015. And even though a `class` keyword is available nowadays, JavaScript is still a _prototype-based_ language.

To understand what that means and how JavaScript actually works, we will go back to the time when there were no classes.

## Prototype Syntax

In OOP, you want to create objects from "templates" (_classes_) so that they include certain data and functionality. The data properties are called _fields_ in the OOP context, the function properties are called _methods_.

Note that in JavaScript, a "method" is not a special entity, it is a key in an object that has a function as a value.

### Constructor Function

In JavaScript, the template (class) is facilitated by a regular function. Used in this context, it is called a _constructor function_ and the convention is that the function name should start with a capital letter. Instances (objects) are derived from the template using the `new` keyword when invoking the constructor function.

```javascript
function Car() {
  // ...
}

const myCar = new Car();
const yourCar = new Car();
```

It is important to note that in JavaScript, the instances and the constructor function keep a relationship to each other even after the instances were created.
Every instance object includes a hidden, internal property referred to as `[[prototype]]` in the language specification. It holds a reference to the value of the `prototype` key of the constructor function. Yes, you read that correctly, a JavaScript function can have key/value pairs because it is also an object behind the scenes.

Since 2015, `[[prototype]]` can be accessed via `Object.getPrototypeOf()`. Before that, it was accessible via the key `__proto__` in many environments. It is important to not confuse the prototype of an object (`[[prototype]]`) with the `prototype` property of the constructor function.

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

`myCar` in the example above is a regular JavaScript object and if we would inspect it (e.g. in the browser console) we would not find a property `startEngine` with a function as value directly inside the `myCar` object. So how does the code above even work then?

The secret here is called the _prototype chain_. When you try to access any property (field or method) of an object, JavaScript first checks whether the respective key can be found directly in the object itself. If not, it continues looking for the key in the object referenced by the `[[prototype]]` property of the original object. As mentioned before, in our example `[[prototype]]` points to the `prototype` property of the constructor function. That is where JavaScript would find the `startEngine` definition because we added it there.

The chain does not end there. The `[[prototype]]` property of `Car.prototype` (`myCar.[[prototype]].[[prototype]]`) references `Object.prototype` (the `prototype` property of the `Object` constructor function). It contains general methods for all JavaScript objects, e.g. `toString()`. In conclusion, you can call `myCar.toString()` and that will work because JavaScript searches for that method throughout the whole prototype chain. You can find a detailed example in the [MDN article "Inheritance and the prototype chain"][mdn-prototype-chain-example]

Note that the prototype chain is only travelled when retrieving a value. Setting or deleting a property of an instance object only targets that instance.

Besides this type of _inheritance_ along the prototype chain, JavaScript also supports inheritance between classes. This is covered in the [Concept Inheritance][concept-inheritance].

### Dynamic Methods

We learned that every instance keeps a reference to the `prototype` property of the constructor function. That means if you add an entry to that `prototype` object, that new entry (e.g. a new method) is immediately available to all instances.

TODO continue here

- Do not monkey patch
- Only polyfill

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#summary_of_methods_for_extending_the_prototype_chain

## Class Syntax

- same as above in new syntax
- public/private

Other

- class fields/methods

[wiki-oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[mdn-prototype-chain-example]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheritance_with_the_prototype_chain
[concept-inheritance]: /tracks/javascript/concepts/inheritance
