# Falsy and falsyness

A falsy value is a value that is considered `false` when encountered in a [Boolean][type-boolean] context.

[JavaScript][language-javascript] uses [Type Conversion][concept-type-coercion] to coerce any value to a [Boolean][type-boolean] in contexts that require it, such as [conditionals][concept-conditionals] and [loops][concept-loops].

> There are 7 falsy values in JavaScript.
>
> This means that when JavaScript is expecting a boolean and it is given one of the values below, it will always evaluate to "falsy".

|             |                                                                                                                                                                                |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `false`     | The keyword `false`                                                                                                                                                            |
| `0`         | The number zero                                                                                                                                                                |
| `0n`        | [`BigInt`][type-bigint], when used as a boolean, follows the same rule as a Number. 0n is falsy.                                                                               |
| `""`, `''`  | This is an empty string (the length of the string is zero). [Strings][type-string] in JavaScript can be defined with double quotes "", single quotes '', or Template literals. |
| `null`      | [`null`][type-null] - the absence of any value                                                                                                                                 |
| `undefined` | `undefined` - the primitive value                                                                                                                                              |
| `NaN`       | `NaN` - not a number                                                                                                                                                           |

[concept-conditionals]: https://github.com/exercism/v3/blob/main/reference/concepts/conditionals.md
[concept-loops]: https://github.com/exercism/v3/blob/main/reference/concepts/loops.md
[concept-type-coercion]: https://github.com/exercism/v3/blob/main/reference/concepts/type_casting.md
[language-javascript]: ../../README.md
[type-bigint]: https://github.com/exercism/v3/blob/main/reference/types/big_integer.md
[type-boolean]: https://github.com/exercism/v3/blob/main/reference/types/boolean.md
[type-null]: https://github.com/exercism/v3/blob/main/reference/types/null.md
[type-string]: https://github.com/exercism/v3/blob/main/reference/types/string.md
