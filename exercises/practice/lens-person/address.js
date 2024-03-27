export class Address {
  /**
   *
   * @param {number} houseNumber
   * @param {string} street
   * @param {string} place
   * @param {string} country
   */
  constructor(houseNumber, street, place, country) {
    this.houseNumber = houseNumber;
    this.street = street;
    this.place = place;
    this.country = country;
  }
}
