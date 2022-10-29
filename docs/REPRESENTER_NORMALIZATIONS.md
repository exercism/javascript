# Representer normalizations

The [JavaScript representer][github-javascript-representer] applies the following normalizations:

## Remove comments

All comments are removed.
The following examples are equivalent:

### Example with comments

```javascript
/**
 * Returns the string literal 'hi there' just to say hello
 * @return [String]
 */
function hello(/* nothing*/) {
  // just return it
  return 'hi there'
}
```

### Example without comments

```javascript
function hello() {
  return 'hi there'
}
```

## Normalize whitespace

When the code is represented, it's _order_ is significant, but its physical location is not.
This means that whitespace is normalized.
The following examples are equivalent:


### Example with two-space indentation

```javascript
function hello() {
  return 'hello world'
}
```

### Example with four-space indentation

```javascript
function hello() {
    return 'hello world'
}
```

### Example with interesting indentation

```javascript
function   hello() {

return 'hello world'


    }
```

## Normalize identifiers

Identifiers are normalized to a placeholder value.

### Before

```javascript
const MY_CONSTANT = 42

function answer(multiplier, addition = 1) {
  return MY_CONSTANT * multiplier + addition
}
```

### After

```javascript
const PLACEHOLDER_1 = 42

function PLACEHOLDER_2(PLACEHOLDER_3, PLACEHOLDER_4 = 1) {
  return PLACEHOLDER_1 * PLACEHOLDER_3 + PLACEHOLDER_4
}
```

[github-javascript-representer]: https://github.com/exercism/javascript-representer