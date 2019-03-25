const W = 8;
const H = 8;
const STARTING = { black: [7, 3], white: [0, 3] };

function samePosition({ white, black }) {
  return white[0] === black[0] && white[1] === black[1];
}

function buildRow(cell, colCount) {
  return Array(...Array(colCount)).map(() => cell);
}

function concatRows(row, rowCount) {
  return [...Array.prototype.concat.apply(buildRow(row, rowCount)).join('')];
}

function constructBoard() {
  let row = buildRow('_ ', W).join('');
  row = `${row.substring(0, row.length - 1)}\n`;
  return concatRows(row, H);
}

function placePieces(self) {
  const board = self.board;
  board[(self.black[0] * W * 2) + (self.black[1] * 2)] = 'B';
  board[(self.white[0] * W * 2) + (self.white[1] * 2)] = 'W';
}

export class QueenAttack {
  constructor(params = STARTING) {
    if (samePosition(params)) {
      throw new Error('Queens cannot share the same space');
    }

    this.black = params.black;
    this.white = params.white;
    this.board = constructBoard();
    placePieces(this);

    this.canAttack = () => {
      if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
        return true;
      }
      return Math.abs(this.black[0] - this.white[0]) === Math.abs(this.black[1] - this.white[1]);
    };

    this.toString = () => this.board.join('');

    return this;
  }
}
