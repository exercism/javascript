const Strain = {
  strain: (array, filter, keepMatches) => {
    const results = [];
    for (let i = 0; i < array.length; i += 1) {
      const item = array[i];
      if (filter(item) === keepMatches) {
        results.push(item);
      }
    }
    return results;
  },

  keep: (array, filter) => Strain.strain(array, filter, true),
  discard: (array, filter) => Strain.strain(array, filter, false),

};

export default Strain;
