# Introduction

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

[prototype-chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
