export const reverseString = (string) => {
  let revString = '';
  let characters = Array.from(
    new Intl.Segmenter().segment(String(string)),
    (x) => x.segment,
  );
  for (let i = characters.length - 1; i >= 0; i--) {
    revString += characters[i];
  }
  return revString;
};
