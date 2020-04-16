# `instanceof`

The `instanceof` operator tests whether the prototype property of a [_constructor_][info-prototype-constructor] appears anywhere in the [prototype chain][info-prototype-inheritance] of an _object_.

```javascript
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const mycar = new Car("Honda", "Accord", 1998);

mycar instanceof Car;
// => true
mycar instanceof Object;
// => true
```

[info-prototype-constructor]: ../info/constructor.md
[info-prototype-inheritance]: ../info/prototype_inheritance.md
