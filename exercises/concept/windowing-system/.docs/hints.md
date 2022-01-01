# Hints

## General

- Revisit the [Objects Concept][concept-objects] if needed to fresh up on the basics.

## 1. Define Size for storing the dimensions of the window

- Remember to use [prototype syntax][mdn-prototype] for this task.
- Start by defining a function with the name `Size` and make sure to [export][mdn-export] it.
- The arguments passed to the constructor function need to be added to the `this` object.
- Default values can be applied by making use of [default parameters][mdn-default-params].
- You can add a method via the `prototype` property of the constructor function.

## 2. Define Position to store a window position

- Remember to use [prototype syntax][mdn-prototype] for this task.
- Start by defining a function with the name `Position` and make sure to [export][mdn-export] it.
- The arguments passed to the constructor function need to be added to the `this` object.
- Default values can be applied by making use of [default parameters][mdn-default-params].
- You can add a method via the `prototype` property of the constructor function.

## 3. Define a ProgramWindow class

- Remember to use [class syntax][mdn-class] for this task.
- Make sure to [export][mdn-export] the class.
- Define fields by adding them to the `this` object.
- Make use of the classes you defined in the previous tasks.
- Check that your constructor function does not accept any arguments.

## 4. Add a method to resize the window

- Remember to use [class syntax][mdn-class] for this task.
  That means you add the method definition directly in the class body.
- To find the correct values for the resizing, first think about the desired width you want to reach, taking the lower bound (`1`) into account.
- Then calculate the maximum width that is allowed considering the screen size and current `x` position of the window.
- With those two values, you can then decide what to apply and use an analogous logic for the height.
- Make use of the `resize` method of the `Size` object to apply the change.

## 5. Add a method to move the window

- Remember to use [class syntax][mdn-class] for this task.
  That means you add the method definition directly in the class body.
- To find the correct values for the moving, first think about the desired `x` position you want to reach, taking the lower bound (`0`) into account.
- Then, calculate the maximum allowed `x` value.
  Consider the screen size and the current width of the window.
- With those two values, you can then decide what to apply and use an analogous logic for the height.
- Make use of the `move` method of the `Position` object to apply the change.

## 6. Change a program window

- First, define a `changeWindow` function and make sure to [export][mdn-export] it.
- Create an instance of the `Size` class using the `new` keyword and provide the desired dimensions as arguments. (Similar for the needed position object.)
- Use the methods defined in tasks 4 and 5. For example, you call a method `a` of an object `obj` with `obj.a()`.
- Make sure to return the `Window` instance received as input.

[concept-objects]: /tracks/javascript/concepts/objects
[mdn-export]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/export
[mdn-default-params]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Default_parameters
[mdn-prototype]: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes#understanding_prototype_objects
[mdn-class]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
