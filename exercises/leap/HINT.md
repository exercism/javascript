This is the first test for this exercise:

```javascript
  it('is not very common', function() {
    var year = new Year(2015);
    expect(year.isLeap()).toBe(false);
  });
```

Each test in the exercise follows the same pattern: 

  1. A new Year is instantiated with a value and stored in a variable: year.
  2. The test calls an instance method, isLeap(), from the variable `year`.

The `Year` function is a constructor, which means that it is specifically designed to provide a template for new objects.

When a new `Year` object is created:

```javascript
  var year = new Year(2015);
```

We expect `year` to, at the very least, have a specific value (in this case 2015) assigned to it.  Otherwise it would not represent an actual year.

This means that we must store the value passed as a parameter when the new `Year` is created (2015), so that the new `Year` can access it.

The way a constructor stores these fundamental values (instance variables) is like this:

```javascript
  var Constructor = function(input) {
    this.value = input;
  };
```

The `this` in the constructor refers to the newly created instance of the `Constructor`.

Once the input (parameter) is stored in an instance variable, any instance methods, such as:

```javascript
  Constructor.prototype.instanceMethod = function() {
    // this method can now access the input by calling `this.value`
  };
```

The instance method accesses the input using `this.value` (in this example).

This is why code needs to be written in two separate functions:

  1. The first function, `Year`, is a constructor that serves as a template for year objects that are created with their value (such as 2015).
     This function needs to store the input when a new `Year` is created.
  2. The second function, isLeap(), is an instance method that is called from a new `year`. 
     This function (method) should contain the logic to determine if the given year is a leap year.