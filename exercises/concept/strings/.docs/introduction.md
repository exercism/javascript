Strings are useful for holding data that can be represented in text form.
There are two ways to access an individual character in a string.

The first is the `charAt()` method:

```javascript
'cat'.charAt(1)
// => "a"
```

The other way is to treat a `string` as a list of characters, where individual characters correspond to a numerical index (starts at zero):

```javascript
'cat'[1]
// => "a"
```

Some of the most-used operations on strings are to check their `length` and to concatenate them using the `+` string operators.

```javascript
'cat'.length
// => 3

'I like' + ' ' + 'cats'
// => "I like cats"
```
