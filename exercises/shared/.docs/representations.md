## JavaScript representations

The JavaScript representer works with the `@typescript-eslint/parser`, a packager that generates an [ESTree](https://github.com/estree/estree).

This abstract syntax tree output is then traversed and the following normalisation steps are performed:

- All comments are ignored / removed
- All whitespace is ignored
- All _identifiers_ are renamed, using a "key lookup"

## BEFORE YOU SUBMIT

Before you submit your representation feedback, please check the following things:

1. You don't duplicate analyzer feedback
2. You check the "examples" tab in the submit dialog and see if the feedback makes sense for _all_ tabs.
3. You check that you have not referred to whitespace or comments
4. You check that you don't refer to function names, or variable names as they appear in the solution, but rather use the mapping provided (or leave names out).
   Only _exported_ names (required by the tests) you can safely refer to because these are always the same for everyone.

## Example

```javascript
// Clock constants

const MINUTES_PER_HOUR = 60;
const HOURS_ON_THE_CLOCK = 24;

const MINUTES_PER_CLOCK = MINUTES_PER_HOUR * HOURS_ON_THE_CLOCK;
```

Given the snippet above, each declaration is transformed in the following way:

```javascript
const MINUTES_PER_HOUR = 60;
```

Becomes

```json
{
  "type": "VariableDeclaration",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "IDENTIFIER_0"
      },
      "init": {
        "type": "Literal",
        "value": 60,
        "raw": "60"
      }
    }
  ],
  "kind": "const"
},
```

And keeps track of the mapping:

```json
{ "IDENTIFIER_0": "MINUTES_PER_HOUR" }
```

The second declaration:

```javascript
const HOURS_ON_THE_CLOCK = 24;
```

Becomes

```json
{
  "type": "VariableDeclaration",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "IDENTIFIER_1"
      },
      "init": {
        "type": "Literal",
        "value": 24,
        "raw": "24"
      }
    }
  ],
  "kind": "const"
},
```

And keeps track of the mapping:

```json
{
  "IDENTIFIER_0": "MINUTES_PER_HOUR",
  "IDENTIFIER_1": "HOURS_ON_THE_CLOCK"
}
```

And finally the third declaration:

```javascript
const MINUTES_PER_CLOCK = MINUTES_PER_HOUR * HOURS_ON_THE_CLOCK;
```

will use the tracked mapping to replace its "variables".

```json
{
  "type": "VariableDeclaration",
  "declarations": [
    {
      "type": "VariableDeclarator",
      "id": {
        "type": "Identifier",
        "name": "IDENTIFIER_2"
      },
      "init": {
        "type": "BinaryExpression",
        "operator": "*",
        "left": {
          "type": "Identifier",
          "name": "IDENTIFIER_0"
        },
        "right": {
          "type": "Identifier",
          "name": "IDENTIFIER_1"
        }
      }
    }
  ],
  "kind": "const"
}
```

## What is an identifier?

In JavaScript, anything that _identifiers_ a variable, property, or function is an _identifier_.

```javascript
const FOO = 42;
// => FOO is an identifier (variable)

function bar() {}
// => bar is an identifier (function)

class Baz {}
// => Baz is an identifier (function)

object.pew = {};
// => pew is an identifier (property)
// => object is an identifier (variable)
```

You can drop any code into [AST explorer](https://astexplorer.net/) and configure it for `@typescript-eslint/parser`.

## What is equivalent?

Given all things just said, the following code snippets are equivalent:

```javascript
const SECONDS_TO_RELOAD = 3;

function bang_time() {
  return SECONDS_TO_RELOAD + 1;
}
```

and

```javascript
const PewPower = 3;
function pewpewpew() {
  return PewPower + 1;
}
```

## What is not equivalent?

- Re-ordering declarations.
  Unfortunately in JavaScript declaration order _can_ matter and thus it's not normalised away
- Different ways of declarating a variable.
  `const`, `var`, and `let` are _purposefully_ not normalised away, because each has its own use cases.
- Different ways of declaring a function.
  `const foo = () => {}`, `const foo = function() {}` and `function foo() {}` are all completely different, at the moment.
  We may normalise this down the line.
