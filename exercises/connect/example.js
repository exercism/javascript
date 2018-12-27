/**
 * "Player O" plays from top to bottom, "Player X" plays from left to right.
 * @param board
 */
export default class {
  constructor(board) {
    this.board = board.map(b => [...b]);
  }

  winner() {
    const players = ['X', 'O'];
    for (let i = 0; i < players.length; i += 1) {
      if (this.checkWin(players[i])) {
        return players[i];
      }
    }
    return '';
  }

  checkWin(player) {
    const positions = this.startPositions(player);
    for (let i = 0; i < positions.length; i += 1) {
      if (this.search(positions[i], player, [])) {
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

    const tempChecked = checked.slice(0);
    tempChecked.push(pos);
    const matches = this.neighbors(pos).filter(({ x, y }) => this.matches({ x, y }, XorO)
      && tempChecked.filter(spot => spot.x === x && spot.y === y).length === 0);
    if (matches.length === 0) {
      return false;
    }

    return matches.filter(spot => this.search(spot, XorO, tempChecked)).length > 0;
  }

  static neighbors({ x, y }) {
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
