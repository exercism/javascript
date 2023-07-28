/**
 * "Player O" plays from top to bottom, "Player X" plays from left to right.
 * @param board
 */
export class Board {
  constructor(board) {
    this.board = board.map((b) => [...b]);
  }
  winner() {
    const players = ['X', 'O'];
    for (const player of players) {
      if (this.checkWin(player)) {
        return player;
      }
    }
    return '';
  }
  checkWin(player) {
    const positions = this.startPositions(player);
    for (const position of positions) {
      if (this.search(position, player, [])) {
        return true;
      }
    }
    return false;
  }
  search(pos, XorO, checked) {
    if (!this.matches(pos, XorO)) {
      return false;
    }
    if (this.winningSpot(pos, XorO)) {
      return true;
    }
    checked = checked.slice(0);
    checked.push(pos);
    const matches = this.neighbors(pos).filter(
      ({ x, y }) =>
        this.matches({ x, y }, XorO) &&
        checked.filter((spot) => spot.x === x && spot.y === y).length === 0,
    );
    if (matches.length === 0) {
      return false;
    }

    return (
      matches.filter((spot) => this.search(spot, XorO, checked)).length > 0
    );
  }
  neighbors({ x, y }) {
    return [
      { x, y: y + 2 },
      { x, y: y - 2 },

      { x: x + 1, y: y + 1 },
      { x: x - 1, y: y + 1 },

      { x: x + 1, y: y - 1 },
      { x: x - 1, y: y - 1 },
    ];
  }
  startPositions(XorO) {
    return XorO === 'X'
      ? this.board.map((pos, i) => ({ x: i, y: i }))
      : this.board[0].map((pos, i) => ({ x: 0, y: i }));
  }
  winningSpot({ x, y }, XorO) {
    return XorO === 'X'
      ? y === this.board[0].length - 1 + x
      : x === this.board.length - 1;
  }
  matches({ x, y }, XorO) {
    return this.board[x] !== undefined && this.board[x][y] === XorO;
  }
}
