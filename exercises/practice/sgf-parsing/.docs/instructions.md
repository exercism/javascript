# Instructions

Your task is to parse a Smart Game Format (SGF) string and return a tree data structure representing the game.

An SGF string represents a tree of nodes. The entire tree is enclosed in parentheses `()`.
Each node in the tree is denoted by a semicolon `;`, followed by a sequence of properties.
A property consists of an uppercase identifier (e.g., `AB`), followed by one or more values enclosed in brackets `[]`.

For example, the string `(;FF[4]C[root])` represents a tree with a single root node. That node has two properties:
- Property `FF` with a value of `4`
- Property `C` with a value of `root`

**Variations (Trees and Branches)**
SGF supports game variations by nesting trees. A tree can have multiple child trees, which are also enclosed in parentheses.
For example, `(;A[B](;C[D])(;E[F]))` represents a root node with property `A`, which has two child branches:
1. A node with property `C` and value `D`
2. A node with property `E` and value `F`

**Formatting & Escaping**
Values within brackets can contain escaped characters. A backslash `\` followed by any character represents that literal character (e.g., `\]` should be parsed as a literal `]`). Additionally, if a newline is preceded by a backslash, it acts as a line continuation and should be removed from the value. All other newlines within a value should be preserved.

**Error Handling**
You must throw an error for invalid SGF strings. The following are examples of invalid SGF:
- A tree that does not start with parentheses `()`.
- A node that does not start with a semicolon `;`.
- Property identifiers that are not entirely uppercase letters.
- Missing brackets or mismatched parentheses.

### Data Structure

Your parsing function should return a representation of the tree. A common approach is to represent each tree as an object with two fields:
- `properties`: An object (or Map) where the keys are the property identifiers (strings) and the values are arrays of strings (since a property can have multiple values).
- `children`: An array containing the child trees.


Example:

Input: `(;FF[4]C[root])`
Output: `{
  properties: {
    FF: ['4'],
    C: ['root']
  },
  children: []
}`

Input: `(;A[B](;C[D])(;E[F]))`
Output: `{
  properties: {
    A: ['B']
  },
  children: [
    {
      properties: {
        C: ['D']
      },
      children: []
    },
    {
      properties: {
        E: ['F']
      },
      children: []
    }
  ]
}`
