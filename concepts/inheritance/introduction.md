# Introduction

Inheritance is a concept that comes from [object oriented programming][object-oriented]. It is a way to create
parent-child relationships between classes where the child class (sometimes called a _subclass_) has access to the
behavior and data defined by the parent class (sometimes called a _superclass_).

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

The `extends` keyword is used by the child class to establish a relationship with the parent. In the example above
the `Dog` class extends `Pet` giving objects created by `Dog` access to the `introduce` method defined by `Pet`.

If no constructor function is defined by the child class then the parent constructor function is used.

```javascript
class Dog extends Pet {}

// 'new Dog()' invokes the constructor function defined by Pet
let dog = new Dog('Otis');
```

If the child class defines a constructor function of its own, the parent constructor must be called as well. To invoke
the parent constructor, the keyword `super` is used. `super` is a reference to the parent constructor and therefore
requires the same function arguments.

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

A child class can also override the behavior of a function defined by the parent and replace or extend the parent
function with behavior defined by the child class.

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

The class `Cat` overrides the `introduce` function from the `Pet` class by replacing it with a function of its own. By
contrast the `Dog` class still calls the `introduce` function defined by the `Pet` class before extending its
functionality. To call the `introduce` method as defined by the `Pet` class from within the `
introduce` function on the `Dog` class, the keyword `super` is used again as a way to reference the parent.

[object-oriented]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_JS
