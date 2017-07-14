const GIGASECOND_IN_MILIS = 1e9 * 1e3;

export default class Gigasecond {

  constructor(dateOfBirth) {
    this.dateOfBirth = dateOfBirth;
  }

  date() {
    const birthTime = this.dateOfBirth.getTime();
    return new Date(birthTime + GIGASECOND_IN_MILIS);
  }

}
