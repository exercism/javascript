export class ComplexNumber {
  constructor(real, imag) {
    this.real = real;
    this.imag = imag;
  }

  add(other) {
    return new ComplexNumber(this.real + other.real, this.imag + other.imag);
  }

  sub(other) {
    return new ComplexNumber(this.real - other.real, this.imag - other.imag);
  }

  mul(other) {
    return new ComplexNumber(
      this.real * other.real - this.imag * other.imag,
      this.imag * other.real + this.real * other.imag
    );
  }

  div(other) {
    return new ComplexNumber(
      (this.real * other.real + this.imag * other.imag) /
        (other.real * other.real + other.imag * other.imag),
      (this.imag * other.real - this.real * other.imag) /
        (other.real * other.real + other.imag * other.imag)
    );
  }

  get abs() {
    return Math.sqrt(this.real * this.real + this.imag * this.imag);
  }

  get conj() {
    return new ComplexNumber(this.real, this.imag !== 0 ? -this.imag : 0);
  }

  get exp() {
    return new ComplexNumber(
      Math.exp(this.real) * Math.cos(this.imag),
      Math.exp(this.real) * Math.sin(this.imag)
    );
  }
}
