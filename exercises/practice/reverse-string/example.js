export const reverseString = (string) => {
  let revString = '';
  for (let i = string.length - 1; i >= 0; i -= 1) {
    revString += string[i];
  }
  return revString;
};
