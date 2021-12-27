export const knapsack = (maximumWeight, items) => {
  const table = Array(items.length + 1)
    .fill()
    .map(() => Array(maximumWeight + 1).fill(0));

  for (let i = 0; i < items.length; i++) {
    for (let capacity = 1; capacity < maximumWeight + 1; capacity++) {
      const { value, weight } = items[i];
      if (weight > capacity) {
        table[i + 1][capacity] = table[i][capacity];
      } else {
        table[i + 1][capacity] = Math.max(
          table[i][capacity],
          value + table[i][capacity - weight]
        );
      }
    }
  }

  return table[items.length][maximumWeight];
};
