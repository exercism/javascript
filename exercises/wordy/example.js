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
    let ii = 1,
      jj = 0,
      result = +this.numbers[0];

    while (ii < this.numbers.length + 1) {
      const op = this.operands[jj++],
        b = +this.numbers[ii++] || null;
      switch (op) {
        case 'plus' :
          result += b;
          break;
        case 'minus' :
          result -= b;
          break;
        case 'multiplied by' :
          result *= b;
          break;
        case 'divided by' :
          result /= b;
          break;
      }
    }
    return result;
  }
}

String.prototype.combine = function(x){
  return x;
}

let f = new String('abc');
let g = f.combine('xyz');


export { Wordy as WordProblem, ArgumentError };
