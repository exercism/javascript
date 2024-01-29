export const parallelLetterFrequency = (texts) => {
  let result = {}
  let formatedTexts = texts.map(x => x.toLowerCase().match(/\p{Letter}+/gu) ?? []).flat()
  let _ = Promise.all(formatedTexts.map(t => processText(t, result)))
  return result
};

const processText = (text, result) => {
  let res = [...text].reduce((acc, cur) => {
    acc[cur] = (acc[cur] || 0) + 1
    return acc
  }, result)

  return new Promise((resolve, _) => resolve(res))
}