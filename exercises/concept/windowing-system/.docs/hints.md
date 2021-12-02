# Hints

FIXME

## General

- [Structs and classes][structs-and-classes] share similar definition syntax.

## 1. Define a Size struct

- Properties must be defined as `var`s if they can be changed.
- Methods in a struct must be marked `mutating` if they change properties of the struct.

## 2. Define a Position struct

- Properties must be defined as `var`s if they can be changed.
- Methods in a struct must be marked `mutating` if they change properties of the struct.

## 3. Define a Window class

- Structs can be initialized with different property values using [memberwise initializers][memberwise-initializers].
- Constant properties should be defined using `let`.
- Properties can be changed using their own methods, where available.

## 4. Create some Windows

- This will require the class to be both initialized and modified.
- Initialization and modification is often done [using a closure][initializing-via-closure]
