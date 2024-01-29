export const parallelLetterFrequency = (texts) => {
  let result = {};
  let formatedTexts = texts
    .map((x) => x.toLowerCase().match(/\p{Letter}+/gu) ?? [])
    .flat();
  Promise.all(formatedTexts.map((t) => processSingleText(t, result)));
  return result;
};

const processSingleText = (text, result) => {
  let res = [...text].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1;
    return acc;
  }, result);

  return new Promise((resolve) => {
    resolve(res);
  });
};
