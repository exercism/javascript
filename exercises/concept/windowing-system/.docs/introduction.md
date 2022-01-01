# Introduction

JavaScript includes the capabilities for object-oriented programming ([OOP][wiki-oop]).
In OOP, you want to create objects (_instances_) from "templates" (_classes_) so that they include certain data and functionality.
The data properties are called _fields_ in the OOP context, function properties are called _methods_.

JavaScript did not have classes at all before they were added to the language specification in 2015 but allowed for object-oriented programming using prototype-based inheritance.
And even though a `class` keyword is available nowadays, JavaScript is still a _prototype-based_ language.

To understand what it means to be a prototype-based language and how JavaScript works, we will go back to the time when there were no classes.

## Prototype Syntax

### Constructor Function

In JavaScript, the template (class) is facilitated by a regular function.
When a function is supposed to be used as such a template, it is called a _constructor function_ and the convention is that the function name should start with a capital letter.
Instances (objects) are derived from the template using the `new` keyword when invoking the constructor function.

```javascript
function Car() {
  // ...
}

const myCar = new Car();
const yourCar = new Car();
```

It is important to note that in JavaScript, the instances and the constructor function keep a relationship to each other even after the instances were created.
Every instance object includes a hidden, internal property referred to as `[[prototype]]` in the language specification.
It holds a reference to the value of the `prototype` key of the constructor function.
Yes, you read that correctly, a JavaScript function can have key/value pairs because it is also an object behind the scenes.

```exercism/note
To summarize:

- Constructors in JavaScript are regular functions.
- Constructing a new instance creates an object with a relation to its constructor called its _prototype_.
- Functions are objects (callable objects) and therefore they can have properties.
- The constructor's (function) `prototype` property will become the instance's _prototype_.
```

### Instance Fields

Often, you want all the derived objects (instances) to include some fields and pass some initial values for those when the object is constructed.
This can be facilitated via the [`this` keyword][mdn-this].
Inside the constructor function, `this` represents the new object that will be created via `new`.
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
Inside a method, you can access the fields of the instance via `this`.
This works because of the following general rule.

> When a function is called as a method of an object, its `this` is set to the object the method is called on. [^1]

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

`myCar` in the example above is a regular JavaScript object and if we would inspect it (e.g. in the browser console), we would not find a property `startEngine` with a function as a value directly inside the `myCar` object.
So how does the code above even work then?

The secret here is called the _prototype chain_.
When you try to access any property (field or method) of an object, JavaScript first checks whether the respective key can be found directly in the object itself.
If not, it continues to look for the key in the object referenced by the `[[prototype]]` property of the original object.
As mentioned before, in our example `[[prototype]]` points to the `prototype` property of the constructor function.
That is where JavaScript would find the `startEngine` function because we added it there.

```javascript
function Car() {
  // ...
}

Car.prototype.startEngine = function () {
  // ...
};
```

And the chain does not end there.
The `[[prototype]]` property of `Car.prototype` (`myCar.[[prototype]].[[prototype]]`) references `Object.prototype` (the `prototype` property of the `Object` constructor function).
It contains general methods that are available for all JavaScript objects, e.g. `toString()`.
In conclusion, you can call `myCar.toString()` and that method will exist because JavaScript searches for that method throughout the whole prototype chain.

```exercism/caution
Note that the prototype chain is only travelled when retrieving a value.
Setting a property directly or deleting a property of an instance object only targets that specific instance.
This might not be what you would expect when you are used to a language with class-based inheritance.
```

## Class Syntax

Nowadays, JavaScript supports defining classes with a `class` keyword.
This was added to the language specification in 2015.
On the one hand, this provides syntactic sugar that makes classes easier to read and write.
The new syntax is more similar to how classes are written in languages like C++ or Java.
Developers switching over from those languages have an easier time adapting.
On the other hand, class syntax paves the way for new language features that are not available in the prototype syntax.

### Class Declarations

With the new syntax, classes are defined with the `class` keyword, followed by the name of the class and the class body in curly brackets.
The body contains the definition of the constructor function, i.e. a special method with the name `constructor`.
This function works just like the constructor function in the prototype syntax.
The class body also contains all method definitions.
The syntax for the methods is similar to the shorthand notation we have seen for adding functions as values inside an object, see [Concept Objects][concept-objects].

```javascript
class Car {
  constructor(color, weight) {
    this.color = color;
    this.weight = weight;
    this.engineRunning = false;
  }

  startEngine() {
    this.engineRunning = true;
  }

  addGas(litre) {
    // ...
  }
}

const myCar = new Car();
myCar.startEngine();
myCar.engineRunning;
// => true
```

Keep in mind that behind the scenes, JavaScript is still a prototype-based language.
All the mechanisms we learned about in the "Prototype Syntax" section above still apply.

### Private Fields, Getters and Setters

By default, all instance fields are public in JavaScript.
They can be directly accessed and assigned to.

However, there is an established convention that fields and methods that start with an underscore should be treated as private.
They should never be accessed directly from outside the class.

Private fields are sometimes accompanied by [getters][mdn-get] and [setters][mdn-set].
With the keywords `get` and `set` you can define functions that are executed when a property with the same name as the function is accessed or assigned to.

```javascript
class Car {
  constructor() {
    this._milage = 0;
  }

  get milage() {
    return this._milage;
  }

  set milage(value) {
    throw new Error(`Milage cannot be manipulated, ${value} is ignored.`);
    // Just an example, usually you would not provide a setter in this case.
  }
}

const myCar = new Car();
myCar.milage;
// => 0
myCar.milage = 100;
// => Error: Milage cannot be manipulated, 100 is ignored.
```

---

[^1]: `this` Examples - As an object method, MDN. <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method> (referenced December 03, 2021)

[wiki-oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[mdn-get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[mdn-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[mdn-this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[concept-objects]: /tracks/javascript/concepts/objects
