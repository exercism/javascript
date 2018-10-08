class ArgumentError extends Error {
  constructor() {
    super();
    this.name = 'argument error';
    this.message = 'oops';
  }
}

const re = new RegExp(/(plus|minus|divided by|multiplied by)+/g);

class Wordy {
  constructor(question) {
    this.numbers = question.match(/[-]{0,1}\d+/g);
    this.operands = question.match(re);
  }

  answer() {
    if (!this.numbers || !this.operands) {
      throw new ArgumentError();
    }
    let result = +this.numbers[0];

    this.operands.forEach((operand, index) => {
      const nextNumber = +this.numbers[index + 1] || null;

      switch (operand) {
        case 'plus':
          result += nextNumber;
          break;
        case 'minus':
          result -= nextNumber;
          break;
        case 'multiplied by':
          result *= nextNumber;
          break;
        case 'divided by':
          result /= nextNumber;
          break;
        default:
          break;
      }
    });
    return result;
  }
}

export { Wordy as WordProblem, ArgumentError };
