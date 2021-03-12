# Introduction

Many programming languages have specific numeric types to represent different types of numbers, but JavaScript only has two:

- `number`: a numeric data type in the double-precision 64-bit floating point format (IEEE 754).
  Examples are `-6`, `-2.4`, `0`, `0.1`, `1`, `3.14`, `16.984025`, `25`, `976`, `1024.0` and `500000`.
- `bigint`: a numeric data type that can represent _integers_ in the arbitrary precision format.
  Examples are `-12n`, `0n`, `4n`, and `9007199254740991n`.

If you require arbitrary precision or work with extremely large numbers, use the `bigint` type.
Otherwise, the `number` type is likely the better option.
