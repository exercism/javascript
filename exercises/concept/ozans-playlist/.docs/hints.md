# Hints

## 1. Remove duplicate tracks

- You can see an example of creating a set from an array in the [MDN docs][mdn-relation-to-arrays].
- Make sure to convert your set back into an array before returning it.
- Refer back to the [array destructuring concept][concept-array-destructuring] to recap how to use the spread operator.

## 2. Check whether a track has already been added

- There is a [built-in method][mdn-set-has] for checking whether an element is in a set.

## 3. Add a track

- There is a [built-in method][mdn-set-add] for adding an element to a set.
- Make sure you're not manually calling `Set.has()` to check for the presence of the element before adding it; `Set.add()` takes care of that for you!

## 4. Delete a track

- There is a [built-in method][mdn-set-delete] for removing an element from a set.
- Make sure you're not manually calling `Set.has()` to check for the presence of the element before deleting it; `Set.delete()` takes care of that for you!

## 5. List unique artists

- There are [a few different ways][mdn-set-iteration] to iterate over a set.
- There is a [built-in method][mdn-string-split] for dividing a string into substrings.
- Refer back to the [array destructuring concept][concept-array-destructuring] to recap how to skip an element when destructuring an array.

[mdn-relation-to-arrays]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#relation_with_array_objects
[mdn-set-add]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/add
[mdn-set-delete]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/delete
[mdn-set-has]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set/has
[mdn-set-iteration]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#iterating_sets
[mdn-string-split]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
[concept-array-destructuring]: /tracks/javascript/concepts/array-destructuring
