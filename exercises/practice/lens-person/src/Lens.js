export class Lens {
  /**
   *
   * @param {Function} getter
   * @param {Function} setter
   */
  constructor(getter, setter) {
    this.get = getter;
    this.set = setter;
  }

  /**
   * Function to get the value from a lens
   * @param {Person} person
   * @returns {Person}
   */
  get(person) {
    return this.get(person);
  }

  /**
   * Function to set the value using a lens
   * @param {Person} person
   * @param {any} value
   * @returns {Person}
   */
  set(person, value) {
    return this.set(value, person);
  }
}
