export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length !== inorder.length) {
    throw new Error('traversals must have the same length');
  }
  if (
    new Set(preorder).size !== preorder.length ||
    new Set(inorder).size !== inorder.length
  ) {
    throw new Error('traversals must contain unique items');
  }
  if ([...preorder].sort().join(',') !== [...inorder].sort().join(',')) {
    throw new Error('traversals must have the same elements');
  }
  if (preorder.length === 0) {
    return {};
  }

  const head = preorder.shift();
  const inorderIndex = inorder.indexOf(head);

  const leftInorder = inorder.slice(0, inorderIndex);
  const rightInorder = inorder.slice(inorderIndex + 1, inorder.length);

  const leftPreorder = preorder.filter((node) => leftInorder.includes(node));
  const rightPreorder = preorder.filter((node) => rightInorder.includes(node));

  return {
    value: head,
    left: treeFromTraversals(leftPreorder, leftInorder),
    right: treeFromTraversals(rightPreorder, rightInorder),
  };
};
