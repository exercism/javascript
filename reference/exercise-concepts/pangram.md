# Concepts for Pangram

## Approaches

There are two approaches for solving Pangram so I divided concepts into common parts and solution unique parts.

## Common Concepts

- String#toLowerCase(or String#toUpperCase) used for normalising the iput

## Concepts for Using Array#every

```javascript
const ALPHABET = [...'qwertyuiopasdfghjklzxcvbnm']

export function isPangram(input) {
  const normalised = input.toLowerCase()
  return ALPHABET.every((letter) => normalised.includes(letter))
}
```

- **Array#every** used for checking wether all alphabet letters satisfied the given conditional
- **String#includes** used for checking wether an alphabet letter exists in the normalised string
- **spread syntax** used for creating the alphabet array
- **String#split** an alternative for spread syntax

## Concepts for Using Set

```javascript
const ALPHABET_SIZE = 26
const ALPHABET_TEST = /[a-z]/g

export function isPangram(input) {
  const normalised = input.toLowerCase()
  return new Set(normalised.match(ALPHABET_TEST)).size >= ALPHABET_SIZE
}
```

- **Set** used for storing unique values
- **regular expressions** used for check pattern matching
