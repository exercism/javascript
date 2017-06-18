
const flattenArray = (input) => {
  return input
    .filter(i => i !== null)
    .reduce((acc, i) =>{
      return acc.concat(Array.isArray(i) ? flattenArray(i) : i);
    },[]);
};

export default flattenArray;