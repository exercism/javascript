# Introduction

Inheritance is a concept that comes from [object oriented programming][object-oriented]. It is a way to create
parent-child relationships between classes where the child class (sometimes referred to as a _subclass_) has access to 
the behavior and data defined by the parent class (sometimes referred to as a _superclass_).

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
// => 'This is my pet, Otis.'
```

The `extends` keyword is used by the child class to establish a relationship with the parent through the 
[prototype chain][prototype-chain]. Objects created with `new Dog()` will have in their prototype chain the
`Pet.prototype` providing access to the `introduce` method.

```javascript
let dog = new Dog('Otis');

Dog.prototype.isPrototypeOf(dog);           // => true
Pet.prototype.isPrototypeOf(dog);           // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce');  // => true
Dog.prototype.hasOwnProperty('introduce');  // => false
dog.hasOwnProperty('introduce');            // => false
```

[object-oriented]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
[prototype-chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
