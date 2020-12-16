export const countWords = (phrase) => {
  let map = {};
  phrase
    .trim()
    .toLowerCase()
    .split(/[ ,\n]+/g)
    .forEach((element) => {
      element = element.replace(/[.,!:"&@$%^]|^'|'$/g, '');
      if (element) {
        if (Object.prototype.hasOwnProperty.call(map, element)) {
          map[element]++;
        } else {
          map[element] = 1;
        }
      }
    });
  return map;
};
