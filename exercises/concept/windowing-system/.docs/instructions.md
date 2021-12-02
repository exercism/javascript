# Instructions

FIXME

In this exercise, you will be simulating a windowing based computer system. You will create some windows that can be moved and resized and display their contents. The following image is representative of the values you will be working with below.

```
                  <--------------------- screenSize.width --------------------->

       ^          ╔════════════════════════════════════════════════════════════╗
       |          ║                                                            ║
       |          ║          position.x,_                                      ║
       |          ║          position.y  \                                     ║
       |          ║                       \<----- size.width ----->            ║
       |          ║                 ^      *──────────────────────┐            ║
       |          ║                 |      │        title         │            ║
       |          ║                 |      ├──────────────────────┤            ║
screenSize.height ║                 |      │                      │            ║
       |          ║            size.height │                      │            ║
       |          ║                 |      │       contents       │            ║
       |          ║                 |      │                      │            ║
       |          ║                 |      │                      │            ║
       |          ║                 v      └──────────────────────┘            ║
       |          ║                                                            ║
       |          ║                                                            ║
       v          ╚════════════════════════════════════════════════════════════╝
```

## 1. Define a Size struct

Define a struct named `Size` with two `Int` properties, `width` and `height` that store the window's current width and height, respectively. The initial width and height should be 80 and 60, respectively. Include a method `resize(newWidth:newHeight:)` that takes new width and height parameters and changes the properties to reflect the new size.

```swift
let size1080x764 = Size(width: 1080, height: 764)
// => Size
var size1200x800 = size1080x764
// => Size
size1200x800.resize(newWidth: 1200, newHeight: 800)
size1200x800.height
// => 800
```

## 2. Define a Position struct

Define a struct named `Position` with two `Int` properties, `x` and `y` that store the current horizontal and vertical position, respectively, of the window's upper left corner. The initial values of x and y should each be 0. The position (0, 0) is the upper left corner of the screen with `x` values getting larger as you move right and `y` values getting larger as you move down.

Include a method `moveTo(newX:newY:)` that takes new x and y parameters and changes the properties to reflect the new position.

```swift
var point = Position(x: 10, y: 20)
// => Position
point.moveTo(newX: 100, newY: -100)
point.y
// => -100
```

## 3. Define a Window class

Define a window class with the following properties:

- `title` : `String`, Initial value is "New Window"
- `screenSize` : `Size`, constant value with `width` = 800 and `height` = 600
- `size` : `Size`, initial value is the default value of the `Size` struct
- `position` : `Position`, initial value is the default value of the `Position` struct
- `contents` : `String?`, initial value is `nil`

## 4. Add a method to resize windows

- `resize(to:)` : `(Size) -> ()` - This method takes a `Size` struct as input and attempts to resize the window to the specified size. However, the new size cannot exceed certain bounds. - The minimum allowed height or width is 1. Requested heights or widths less than 1 will be clipped to 1. - The maximum height and width depends on the current position of the window, the edges of the window cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's position is at `x` = 400, `y` = 300 and a resize to `height` = 400, `width` = 300 is requested, then the window would be resized to `height` = 300, `width` = 300 as the screen is not large enough in the `y` direction to fully accommodate the request.

## 5. Add a method to move windows

- `move(to:)` : `(Position) -> ()` - This is similar to `resize(to:)`, however, this method adjusts the _position_ of the window to the requested value, rather than the size. As with `resize` the new position cannot exceed certain limits. - The smallest position is 0 for both `x` and `y`. - The maximum position in either direction depends on the current size of the window; the edges cannot move past the edges of the screen. Values larger than these bounds will be clipped to the largest size they can take. E.g. if the window's size is at `x` = 250, `y` = 100 and a move to `x` = 600, `y` = 200 is requested, then the window would be moved to `x` = 550, `y` = 200 as the screen is not large enough in the `x` direction to fully accommodate the request.

## 6. Add methods to update the window text and display window information

- `update(title:)` : `(String) -> ()` - This method sets the `title` property to the value of the string that was passed in.
- `update(text:)` : `(String?) -> ()` - This method sets the `contents` property to the value of the optional string that was passed in.
- `display()` : `() -> String` - This method returns a string describing the current state of the window. For example, if the window has the `title` "My First Window" with position: x = 10, y = 100; size: width = 200, height = 150; and contents: "I 😍 my window", it should return the string: `"My First Window\nPosition: (10, 100), Size: (200 x 150)\nI 😍 my window\n"` - If `contents` is nil, the last line should read "[This window intentionally left blank]"

## 7. Create a new Window

Create an instances of the Window class and modify it via their methods as follows:

- The window should be given the title "Main Window", with a width of 400, a height of 300 and positioned at x = 100, y = 100. Its contents should be "This is the main window". Assign this instance to the name `mainWindow`.
