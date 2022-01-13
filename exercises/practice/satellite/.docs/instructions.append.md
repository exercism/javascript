# Instructions append

## Output formats

The `treeFromTraversals` function is expected to return an object with 3 properties:

- `value` The value of the current node
- `left` An object containing the left child of the node
- `right` An object containing the right child of the node

```javascript
{
    value: 'a',
    left: { value: 'i', left: {}, right: {} },
    right: { value: 'x', left: {}, right: {} },
}
```

If the tree is empty, an empty object should be returned.
