export const isIsogram = (string) => {
  const stringNoSpaceOrHyphen = string.replace(/ |-/g, '');
  const uniqueLetters = stringNoSpaceOrHyphen
    .toLowerCase()
    .split('')
    .filter((element, index, self) => self.indexOf(element) === index);
  return uniqueLetters.length === stringNoSpaceOrHyphen.length;
};
