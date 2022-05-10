# About

JavaScript includes the capabilities for object-oriented programming ([OOP][wiki-oop]).
In OOP, you want to create objects (_instances_) from "templates" (_classes_) so that they include certain data and functionality.
The data properties are called _fields_ in the OOP context, the function properties are called _methods_.

JavaScript did not have classes at all before they were added to the language specification in 2015 but allowed for object-oriented programming using prototype-based inheritance.
And even though a `class` keyword is available nowadays, JavaScript is still a _prototype-based_ language.

To understand what it means to be a prototype-based language and how JavaScript actually works, we will go back to the time when there were no classes.

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

Since 2015, `[[prototype]]` can be accessed via `Object.getPrototypeOf()`.
Before that, it was accessible via the key `__proto__` in many environments.

Do not confuse the prototype of an object (`[[prototype]]`) with the `prototype` property of the constructor function.

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
The `[[prototype]]` of `Object` is usually `null` so the prototype chain ends there.
In conclusion, you can call `myCar.toString()` and that method will exist because JavaScript searches for that method throughout the whole prototype chain.
You can find a detailed example in the [MDN article "Inheritance and the prototype chain"][mdn-prototype-chain-example].

```exercism/caution
Note that the prototype chain is only travelled when retrieving a value.
Setting a property directly or deleting a property of an instance object only targets that specific instance.
This might not be what you would expect when you are used to a language with class-based inheritance.
```

### Dynamic Methods (Adding Methods to All Existing Instances)

JavaScript allows you to add methods to all existing instances even after they were created.

We learned that every instance keeps a reference to the `prototype` property of the constructor function.
That means if you add an entry to that `prototype` object, that new entry (e.g. a new method) is immediately available to all instances created from that constructor function.

```javascript
function Car() {
  this.engineRunning = false;
}

const myCar = new Car();
// Calling myCar.startEngine() here would result in "TypeError:
// myCar.startEngine is not a function".

Car.prototype.startEngine = function () {
  this.engineRunning = true;
};

myCar.startEngine();
// This works, even though myCar was created before the method
// was added.
```

In theory, dynamic methods can even be used to extend the functionality of built-in objects like `Object` or `Array` by modifying their prototype.
This is called _monkey patching_.
Because this change affects the whole application, it should be avoided to prevent unintended side effects.
The only reasonable use case is to provide a [polyfill][wiki-polyfill] for a missing method in older environments.

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

Similar to function declarations and function expressions, JavaScript also supports [class expressions][mdn-class-expression] in addition to the _class declaration_ shown above.

Keep in mind that behind the scenes, JavaScript is still a prototype-based language.
All the mechanisms we learned about in the "Prototype Syntax" section above still apply.

### Private Fields, Getters and Setters

By default, all instance fields are public in JavaScript.
They can be directly accessed and assigned to.

Adding actual private fields to the language specification is a work in progress, see the [proposal document][proposal-private-fields] for details.

In the meantime, you can make use of the established convention that fields and methods that start with an underscore should be treated as private.
They should never be accessed directly from outside the class.

Private fields are sometimes accompanied by [getters][mdn-get] and [setters][mdn-set].
With the keywords `get` and `set` you can define functions that are executed when a property with the same name as the function is accessed or assigned to.

```javascript
class Car {
  constructor() {
    this._mileage = 0;
  }

  get mileage() {
    return this._mileage;
  }

  set milage(value) {
    throw new Error(`Mileage cannot be manipulated, ${value} is ignored.`);
    // Just an example, usually you would not provide a setter in this case.
  }
}

const myCar = new Car();
myCar.mileage;
// => 0
myCar.mileage = 100;
// => Error: Mileage cannot be manipulated, 100 is ignored.
```

### Class Fields and Class Methods

In OOP, you sometimes want to provide utility fields or methods that do not depend on the specific instance.
Instead, they are defined for the class itself.
This can be achieved with the `static` keyword.

```javascript
class Car {
  static type = 'vehicle';

  static isType(targetType) {
    return targetType === 'vehicle';
  }
}

Car.type;
// => 'vehicle'

Car.isType('road sign');
// => false
```

### Class-Based Inheritance

Besides the type of [inheritance][wiki-inheritance] along the prototype chain we saw earlier, you can also represent inheritance between classes in JavaScript.
This is covered in the [Concept Inheritance][concept-inheritance].

---

[^1]: `this` Examples - As an object method, MDN. <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this#as_an_object_method> (referenced December 03, 2021)

[wiki-oop]: https://en.wikipedia.org/wiki/Object-oriented_programming
[mdn-prototype-chain-example]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain#inheritance_with_the_prototype_chain
[concept-inheritance]: /tracks/javascript/concepts/inheritance
[mdn-class-expression]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes#Class_expressions
[wiki-inheritance]: https://en.wikipedia.org/wiki/Inheritance_(object-oriented_programming)
[proposal-private-fields]: https://github.com/tc39/proposal-private-methods#private-methods-and-fields
[mdn-get]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/get
[mdn-set]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/set
[wiki-polyfill]: https://en.wikipedia.org/wiki/Polyfill_(programming)
[mdn-this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
[concept-objects]: /tracks/javascript/concepts/objects
