//
// This is only a SKELETON file for the 'Robot Simulator' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class InvalidInputError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Invalid Input';
  }
}

export class Robot {
  get bearing() {
    throw new Error('Remove this line and implement the function');
  }

  get coordinates() {
    throw new Error('Remove this line and implement the function');
  }

  place({ x, y, direction }) {
    throw new Error('Remove this line and implement the function');
  }

  evaluate(instructions) {
    throw new Error('Remove this line and implement the function');
  }
}
