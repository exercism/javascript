# About

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

## Constructors
If no constructor function is defined by the child class, the parent constructor function is used.

```javascript
class Dog extends Pet {}

// 'new Dog()' invokes the constructor function defined by Pet
let dog = new Dog('Otis');
```

If the child class defines a constructor function of its own, the parent constructor must be called too. To invoke 
the parent constructor, the keyword `super` is used. `super` is a reference to the parent constructor and requires the 
same function arguments.

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

Because the parent constructor is responsible for initializing a new object and assigning it to `this`, it must be 
called before the keyword `this` can be used by the child constructor.

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
A child class can have behavior of its own in addition to the behavior derived from the parent class. This is one of the 
key reasons for using inheritance &mdash; having a parent class with common behavior accessible to two or more child 
classes while each child class defines specialized behavior unique to its role in the application.

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
A child class can also override the behavior of a method defined by the parent and replace or extend the parent 
method with behavior defined by the child class.

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

let cat = new Cat('Milo')
cat.introduce();
// => 'This is my cat, Milo.'

let dog = new Dog('Otis', 'Pug');
dog.introduce();
// => This is my pet, Otis.
// => Otis is a Pug.
```

To call the `introduce` method defined by the `Pet` class from within the `introduce` method on the `Dog` class, 
the keyword `super` is used to reference the methods on the parent class.

[object-oriented]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
[prototype-chain]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain
