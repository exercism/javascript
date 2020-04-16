# Prototype-based inheritance

> Source is MDN. Should change this to be more exercism-related (what to teach, what to forego).

[JavaScript][language-javascript] is a bit confusing for developers experienced in `class`-based languages (like Java or C++), as it is dynamic and does not provide a `class` implementation per se (the `class` keyword is introduced in ES2015, but is syntactical sugar, JavaScript remains prototype-based).

When it comes to [inheritance][concept-inheritance], JavaScript only has one construct: [objects][type-object]. Each object has a private [property][concept-property] which holds a link to another object called its prototype. That prototype object has a prototype of its own, and so on until an object is reached with [`null`][type-null] as its prototype. By definition, `null` has no prototype, and acts as the final link in this prototype chain.

Nearly all objects in JavaScript are [instances of][keyword-instanceof] [`Object`][global-objects-object] which sits on the top of a prototype chain.

## Inheritance

JavaScript objects are dynamic "bags" of properties (referred to as "own properties"). JavaScript objects have a link to a prototype object. When trying to access a property of an object, the property will not only be sought on the object but on the prototype of the object, the prototype of the prototype, and so on until either a property with a matching name is found or the end of the prototype chain is reached.

JavaScript does **not** have "methods" in the form that [class][concept-class]-based languages define them. In JavaScript, any [function][type-function] can be added to an object in the form of a property. An inherited function acts just as any other property, including _property shadowing_.

[concept-class]: ../../../../reference/concepts/classes.md
[concept-inheritance]: ../../../../reference/concepts/inheritance.md
[concept-property]: ../../../../reference/concepts/state.md
[keyword-instanceof]: ../keywords/instanceof.md
[language-javascript]: ../../README.md
[global-objects-object]: ../objects/object.md
[type-object]: ../../../../reference/types/object.md
[type-null]: ../../../../reference/types/null.md
[type-function]: ../../../../reference/types/function.md
