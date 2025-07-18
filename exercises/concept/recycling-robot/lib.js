const certification = Symbol('Certification');

export class ElectronicDevice {
  // This class will be used in the exercise.

  static [Symbol.hasInstance](instance) {
    return instance && instance.__certification === certification;
  }

  constructor() {
    Object.defineProperty(this, '__certification', {
      enumerable: false,
      writable: false,
      configurable: false,
      value: certification,
    });
  }
}
