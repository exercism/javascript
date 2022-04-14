# Introduction

## Errors

Errors are useful to report when something is wrong or unexpected in a program or a piece of code.

They are javascript objects.

The main property of this object is `message`:

```javascript
const error = new Error('Oops, something went wrong');

console.log(error.message);
// => "Oops, something went wrong"
```

Using the `throw` syntax, you can throw an Error.

```javascript
throw new Error('Oops');
```

When an error is thrown, the current execution is stopped and resumes in the first catch block of the call stack.

```javascript
try {
  throw new Error('Oops');
} catch (error) {
  console.log(error.message);
  // => "Oops"
}
```

## Inheritance

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

const dog = new Dog('Otis');
dog.introduce();
// => This is my pet, Otis.
```

The `extends` keyword in the child class declaration establishes a relationship with the parent class through the [prototype chain][prototype-chain].

Objects created by the child's constructor will have the parent class's prototype in their prototype chain, providing access to any methods or data defined by the parent.

```javascript
const dog = new Dog('Otis');

Dog.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(dog); // => true
Pet.prototype.isPrototypeOf(Dog.prototype); // => true

Pet.prototype.hasOwnProperty('introduce'); // => true
Dog.prototype.hasOwnProperty('introduce'); // => false
dog.hasOwnProperty('introduce'); // => false
```

As with any class in JavaScript, subclasses can inherit from `Error` to create Custom errors by using the `extends` keyword.
The `instanceof` syntax will check if the error caught is an instance of a particular subclass of `Error`.

```javascript
class CustomError extends Error {}

try {
  // ... Code that may throw an error
} catch (error) {
  if (error instanceof CustomError) {
    console.log('The error thrown is an instance of the CustomError');
  }
}
```

[prototype-chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
