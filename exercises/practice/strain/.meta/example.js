const strain = (array, filter, keepMatches) => {
  const results = [];
  for (let i = 0; i < array.length; i += 1) {
    const item = array[i];
    if (filter(item) === keepMatches) {
      results.push(item);
    }
  }
  return results;
};

export const keep = (array, filter) => strain(array, filter, true);
export const discard = (array, filter) => strain(array, filter, false);
