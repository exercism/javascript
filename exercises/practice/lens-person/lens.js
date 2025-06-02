export class Lens {
  /**
   *
   * @param {Function} getter - Function to get the value using a lens
   * @param {Function} setter - Function to set the value using a lens
   */
  constructor(getter, setter) {
    this.get = getter;
    this.set = setter;
  }
}
