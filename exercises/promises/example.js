export const promisify = fn => (...args) => new Promise((resolve, reject) =>
  fn(...args, (err, result) => err
    ? reject(err)
    : resolve(result)));

export const all = promises => promises
  .reduce(async (acc, promise) => (await acc).concat(await promise), Promise.resolve([]));