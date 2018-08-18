/**
 * "Player O" plays from top to bottom, "Player X" plays from left to right.
 * @param {string[]} initBoard - The starting state of the board
 * @returns {Object} - The board business object
 */
var Board = function (initBoard) {
  this.board = initBoard.slice();
};

Board.prototype.winner = function () {
  var players = ['X', 'O'];
  for (var i = 0; i < players.length; i++) {
    if (this.checkWin(players[i])) {
      return players[i];
    }
  }
  return '';
};

Board.prototype.checkWin = function (player) {
  var positions = this.startPositions(player);
  for (var i = 0; i < positions.length; i++) {
    if (this.search(positions[i], player, [])) {
      return true;
    }
  }
  return false;
};

Board.prototype.search = function (pos, XorO, isChecked) {
  var self = this;
  if (!this.containsPiece(pos, XorO)) {
    return false;
  }
  if (this.winningSpot(pos, XorO)) {
    return true;
  }
  var checked = isChecked.slice(0);
  checked.push(pos);

  var matches = this.neighbors(pos)
    .filter(function (cell) {
      return self.containsPiece(cell, XorO) &&
        checked.filter(
          function (spot) {
            return locationMatch(spot, cell);
          }
        ).length === 0;
    });

  function locationMatch(spot, cell) {
    return spot.x === cell.x && spot.y === cell.y;
  }

  if (matches.length === 0) {
    return false;
  }

  return matches
    .filter(
      function (spot) {
        return self.search(spot, XorO, checked);
      }
    ).length > 0;
};

Board.prototype.neighbors = function (cell) {
  return [
    {x: cell.x, y: cell.y + 2},
    {x: cell.x, y: cell.y - 2},

    {x: cell.x + 1, y: cell.y + 1},
    {x: cell.x - 1, y: cell.y + 1},

    {x: cell.x + 1, y: cell.y - 1},
    {x: cell.x - 1, y: cell.y - 1}
  ];
};

Board.prototype.startPositions = function (XorO) {
  var self = this;
  return XorO === 'X' ?
    this.board
      .map(function (pos, i) {
        return {x: i, y: i};
      }) :
    Array.prototype
      .map
      .call(self.board[0], function (pos, i) {
        return {x: 0, y: i};
      });
};

Board.prototype.winningSpot = function (cell, XorO) {
  return XorO === 'X' ?
    cell.y === this.board[0].length - 1 + cell.x :
    cell.x === this.board.length - 1;
};

Board.prototype.containsPiece = function (cell, XorO) {
  return this.board[cell.x] && this.board[cell.x][cell.y] === XorO;
};


module.exports = Board;
