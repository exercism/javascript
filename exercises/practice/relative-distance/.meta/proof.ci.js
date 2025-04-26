export const degreesOfSeparation = (familyTree, personA, personB) => {
  const neighbors = new Map();

  for (const [parent, children] of Object.entries(familyTree)) {
    if (!neighbors.has(parent)) {
      neighbors.set(parent, new Set());
    }

    for (const child of children) {
      if (!neighbors.has(child)) {
        neighbors.set(child, new Set());
      }

      neighbors.get(parent).add(child);
      neighbors.get(child).add(parent);
    }

    //
    for (const childA of children) {
      for (const childB of children) {
        if (childA !== childB) {
          neighbors.get(childA).add(childB);
          neighbors.get(childB).add(childA);
        }
      }
    }
  }

  if (!neighbors.has(personA) || !neighbors.has(personB)) {
    return -1;
  }

  const queue = [[personA, 0]];
  const visited = new Set([personA]);

  while (queue.length > 0) {
    const [current, degree] = queue.shift();

    if (current === personB) {
      return degree;
    }

    for (const neighbor of neighbors.get(current)) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([neighbor, degree + 1]);
      }
    }
  }

  return -1;
};
