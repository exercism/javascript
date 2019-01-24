// classy solution, eh?

export class Binary {
  constructor(binary) {
    this.binary = binary.match(/^[01]*$/) ? parseInt(binary, 2) : 0;
  }

  toDecimal() {
    const out = Number(this.binary.toString(10));
    return Number.isNaN(out) ? 0 : out;
  }
}
