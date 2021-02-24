const W = 8;
const H = 8;
const STARTING = { black: [0, 3], white: [7, 3] };

function invalidPosition({ white, black }) {
  if (white[0] < 0 || white[0] >= H || white[1] < 0 || white[1] >= W) {
    return true;
  }

  if (black[0] < 0 || black[0] >= H || black[1] < 0 || black[1] >= W) {
    return true;
  }

  return false;
}

function samePosition({ white, black }) {
  return white[0] === black[0] && white[1] === black[1];
}

function constructBoard() {
  return new Array(W * H).fill('_');
}

function placePieces(self) {
  const board = self.board;
  const [blackRow, blackColumn] = self.black;
  const [whiteRow, whiteColumn] = self.white;

  board[blackRow * W + blackColumn] = 'B';
  board[whiteRow * W + whiteColumn] = 'W';
}

export class QueenAttack {
  constructor(params = {}) {
    params = { ...STARTING, ...params };
    if (invalidPosition(params)) {
      throw new Error('Queen must be placed on the board');
    }

    if (samePosition(params)) {
      throw new Error('Queens cannot share the same space');
    }

    this.black = params.black;
    this.white = params.white;
    this.board = constructBoard();

    placePieces(this);

    return this;
  }

  get canAttack() {
    // Same row or column
    if (this.black[0] === this.white[0] || this.black[1] === this.white[1]) {
      return true;
    }

    // Diagonally
    return (
      Math.abs(this.black[0] - this.white[0]) ===
      Math.abs(this.black[1] - this.white[1])
    );
  }

  toString() {
    return Array.from({ length: H }, (_, row) =>
      this.board.slice(row * H, row * H + W).join(' ')
    ).join('\n');
  }
}
