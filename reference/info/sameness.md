# Sameness

See the general [Sameness concept][concept-sameness],

There are four equality algorithms in ES2015:

- Abstract Equality Comparison (`==`)
- Strict Equality Comparison (`===`): used by `Array.prototype.indexOf`, `Array.prototype.lastIndexOf`, and `case`-matching
- SameValueZero: used by `TypedArray` and `ArrayBuffer` constructors, as well as `Map` and `Set` operations, and also `String.prototype.includes` and `Array.prototype.includes` since ES2016
- SameValue: used in all other places

[JavaScript][language-javascript] provides three different value-comparison operations:

- `===`: Strict Equality Comparison ("strict equality", "identity", "triple equals")
- `==`: Abstract Equality Comparison ("loose equality", "double equals")
- `Object.is` provides SameValue (new in ES2015).

## Strict equality

Strict equality compares two values for equality. Neither value is [implicitly converted][concept-type-casting] to some other value before being compared. If the values have different types, the values are considered unequal. If the values have the same type, are not numbers, and have the same value, they're considered equal. Finally, if both values are numbers, they're considered equal if they're both not `NaN` and are the same value, or if one is `+0` and one is `-0`.

## Loose equality

Loose equality compares two values for equality, _after_ [converting][concept-type-casting] both values to a common type. After conversions (one or both sides may undergo conversions), the final equality comparison is performed exactly as `===` performs it. Loose equality is symmetric: `A == B` always has identical semantics to `B == A` for any values of `A` and `B` (except for the order of applied conversions).

## Same-value equality

Same-value equality addresses a final use case: determining whether two values are functionally identical in all contexts. (This use case demonstrates an instance of the [Liskov substitution principle][wiki-liskov].)

## Same-value-zero equality

Similar to same-value equality, but `+0` and `-0` are considered equal.

[concept-sameness]: ../../../../reference/concepts/sameness.md
[concept-type-casting]: ../../../../reference/concepts/type_casting.md
[language-javascript]: ../../README.md
[wiki-liskov]: http://en.wikipedia.org/wiki/Liskov_substitution_principle
