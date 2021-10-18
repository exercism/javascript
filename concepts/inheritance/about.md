# About

Inheritance is a way to create parent-child relationships between classes.
The child class (sometimes referred to as a _subclass_) has access to the behavior and data defined by the parent class (sometimes referred to as a _superclass_).

```javascript
class Pet {
  constructor(name) {
    this.name = name;
  }

  introduce() {
    console.log(`This is my pet, ${this.name}.`);
  }
}

class Dog extends Pet {}

let dog = new Dog('Otis');
dog.introduce();
// => This is my pet, Otis.
```

The `extends` keyword in the child class declaration establishes a relationship with the parent class through the [prototype chain][prototype-chain].

Objects created by the child's constructor will have the parent class's prototype in their prototype chain, providing access to any methods or data defined by the parent.

```javascript
let dog = new Dog('Otis');

Dog.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce'); // => true
Dog.prototype.hasOwnProperty('introduce'); // => false
dog.hasOwnProperty('introduce'); // => false
```

## Constructors

If no constructor function is defined by the child class, the parent constructor function is used.
However, if the child class defines a constructor function of its own, the parent constructor must be explicitly called.
To invoke the parent constructor from within the child constructor's scope, the keyword `super` is used.

```javascript
class Pet {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}

let dog = new Dog('Otis', 'Pug');
```

Because the parent constructor is responsible for initializing a new object and assigning it to `this`, it must be called before `this` is used by the child constructor.

```javascript
class Dog extends Pet {
  constructor(name, breed) {
    // using 'this' before calling the parent constructor with 'super'
    this.breed = breed;
    super(name);
  }
}

let dog = new Dog('Otis', 'Pug');
// => ReferenceError: Must call super constructor in derived class before accessing 'this'...
```

## Defining Methods on the Child Class

A child class may define behavior of its own in addition to the behavior inherited from the parent.

This is one of the key reasons for using inheritance; to have specialized child classes with their own unique data and methods that are related through shared methods and data supplied by the parent class.

```javascript
class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  describe() {
    console.log(`${this.name} is a ${this.breed}.`);
  }
}

let dog = new Dog('Otis', 'Pug');
dog.introduce();
dog.describe();
// => 'This is my pet, Otis.'
// => 'Otis is a Pug.'
```

## Overriding Methods Inherited From the Parent Class

A child class can also override the behavior of a method defined by the parent and replace or extend it with behavior defined by the child class.

```javascript
class Cat extends Pet {
  // replacing parent class behavior
  introduce() {
    console.log(`This is my cat, ${this.name}.`);
  }
}

class Dog extends Pet {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  describe() {
    console.log(`${this.name} is a ${this.breed}.`);
  }

  // extending parent class behavior
  introduce() {
    super.introduce();
    this.describe();
  }
}

let cat = new Cat('Milo');
cat.introduce();
// => 'This is my cat, Milo.'

let dog = new Dog('Otis', 'Pug');
dog.introduce();
// => This is my pet, Otis.
// => Otis is a Pug.
```

To call a method defined on the parent class from the body of a method with the same name on the child class, the keyword `super` must be used to reference the parent.

[prototype-chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
