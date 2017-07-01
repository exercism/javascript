export default class Flattener {
  flatten(arr) {
    return arr
      .reduce((acc, el) =>
        Array.isArray(el)
          ? acc.concat(this.flatten(el))
          : acc.concat(el),
        [])
      .filter(el => el !== null && el !== undefined)
  }
}
