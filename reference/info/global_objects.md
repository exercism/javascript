# Global objects

The term "global objects" (or **standard built-in objects**) here is not to be confused with the **global object**. Here, _global objects_ refer to objects in the [global scope][concept-scope]. The global object itself can be accessed using the `this` operator in the global scope (but only if ECMAScript 5 [strict mode][concept-strict-mode] is not used; in that case it returns [`undefined`][type-undefined]). In fact, the global scope consists of the properties of the global object, including inherited properties, if any.

These are called **global objects** and not **standard library types**, because in JavaScript they are _not_ types. See [prototype-based inheritance][concept-prototype-inheritance].

## Standard objects by category

### Value properties

These global properties return a simple value; they have no properties or methods.

- `Infinity`
- `NaN`
- [`undefined`][type-undefined]
- [`null`][type-null] literal
- `globalThis`

### Function properties

These global functions — functions which are called globally rather than on an object — directly return their results to the caller.

- `eval()`
- `isFinite()`
- `isNaN()`
- `parseFloat()`
- `parseInt()`
- `decodeURI()`
- `decodeURIComponent()`
- `encodeURI()`
- `encodeURIComponent()`

### Fundamental objects

These are the fundamental, basic objects upon which all other objects are based. This includes objects that represent general objects, functions, and errors.

- [`Object`][global-object-object]
- [`Function`][global-object-function]
- [`Boolean`][global-object-boolean]
- [`Symbol`][global-object-symbol]
- [`Error`][global-object-error]
- `EvalError`
- `RangeError`
- `ReferenceError`
- `SyntaxError`
- `TypeError`
- `URIError`

### Numbers and dates

These are the base objects representing numbers, dates, and mathematical calculations.

- [`Number`][global-object-number]
- [`BigInt`][global-object-bigint]
- [`Math`][global-object-math]
- [`Date`][global-object-date]

### Text processing

These objects represent strings and support manipulating them.

- [`String`][global-object-string]
- [`RegExp`][global-object-regexp]

### Indexed collections

These objects represent collections of data which are ordered by an index value. This includes (typed) arrays and array-like constructs.

- [`Array`][global-object-array]
- [Typed arrays][global-object-typed-array]:
  - `Int8Array`
  - `Uint8Array`
  - `Uint8ClampedArray`
  - `Int16Array`
  - `Uint16Array`
  - `Int32Array`
  - `Uint32Array`
  - `Float32Array`
  - `Float64Array`
  - `BigInt64Array`
  - `BigUint64Array`

### Keyed collections

These objects represent collections which use keys; the iterable ones such as `Map` and `Set` contain elements which are iterable in the order of insertion.

- [`Map`][global-object-map]
- [`Set`][global-object-set]
- [`WeakMap`][global-object-weakmap]
- [`WeakSet`][global-object-weakset]

### Structured data

These objects represent and interact with structured data buffers and data coded using JavaScript Object Notation (`JSON`).

- `ArrayBuffer`
- `DataView`
- [`JSON`][global-object-json]

### Control abstraction objects

- [`Promise`][global-object-promise]
- `Generator`
- `GeneratorFunction`
- `AsyncFunction`

### Reflection

- `Reflect`
- `Proxy`

[concept-prototype-inheritance]: ./prototype_inheritance.md
[concept-scope]: https://github.com/exercism/v3/blob/main/reference/concepts/scope.md
[concept-strict-mode]: ./strict_mode.md
[global-object-array]: ../objects/array.md
[global-object-boolean]: ../objects/boolean.md
[global-object-bigint]: ../objects/bigint.md
[global-object-date]: ../objects/date.md
[global-object-error]: ../objects/error.md
[global-object-function]: ../objects/function.md
[global-object-json]: ../objects/json.md
[global-object-map]: ../objects/map.md
[global-object-math]: ../objects/math.md
[global-object-number]: ../objects/number.md
[global-object-object]: ../objects/object.md
[global-object-promise]: ../objects/promise.md
[global-object-regexp]: ../objects/regexp.md
[global-object-set]: ../objects/set.md
[global-object-string]: ../objects/string.md
[global-object-symbol]: ../objects/symbol.md
[global-object-typed-array]: ../objects/typed-array.md
[global-object-weakmap]: ../objects/weakmap.md
[global-object-weakset]: ../objects/weakset.md
[type-null]: https://github.com/exercism/v3/blob/main/reference/types/null.md
[type-undefined]: ./undefined.md
