const PATTERNS = {
  0: [' _ ',
    '| |',
    '|_|',
    '   '],
  1: ['   ',
    '  |',
    '  |',
    '   '],
  2: [' _ ',
    ' _|',
    '|_ ',
    '   '],
  3: [' _ ',
    ' _|',
    ' _|',
    '   '],
  4: ['   ',
    '|_|',
    '  |',
    '   '],
  5: [' _ ',
    '|_ ',
    ' _|',
    '   '],
  6: [' _ ',
    '|_ ',
    '|_|',
    '   '],
  7: [' _ ',
    '  |',
    '  |',
    '   '],
  8: [' _ ',
    '|_|',
    '|_|',
    '   '],
  9: [' _ ',
    '|_|',
    ' _|',
    '   '],
};
export default class Parser {
  convert(text) {
    return Parser.splitIntoRows(text).map(Parser.valuesInRow).join(',');
  }

  static valuesInRow(row) {
    return Parser.splitIntoDigits(row).map(Parser.getDigit).join('');
  }

  static splitIntoRows(text) {
    const rows = [];
    const lines = text.split('\n');
    for (let rowNumber = 0; rowNumber < lines.length; rowNumber += 4) {
      let row = '';
      for (let rowLine = 0; rowLine < 4; rowLine++) {
        row += `${lines[rowNumber + rowLine]}\n`;
      }
      rows.push(row.slice(0, -1));
    }
    return rows;
  }

  static splitIntoDigits(row) {
    const digits = [],
      rows = row.split('\n');
    for (let digitNumber = 0; digitNumber < rows[0].length; digitNumber += 3) {
      let digit = '';
      for (let rowNumber = 0; rowNumber < rows.length; rowNumber++) {
        digit += rows[rowNumber].substr(digitNumber, 3);
      }
      digits.push(digit);
    }
    return digits;
  }

  static getDigit(text) {
    for (const digit in PATTERNS) {
      if (PATTERNS.hasOwnProperty(digit)) {
        if (PATTERNS[digit].join('') === text) {
          return digit;
        }
      }
    }
    return '?';
  }
}
