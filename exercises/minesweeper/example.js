var Minesweeper = function () {
  this.distanceXdistanceYs = [
    [-1, -1],
    [-1, 0],
    [-1, 1],

    [1, 1],
    [1, 0],
    [1, -1],

    [0, 1],
    [0, -1]

  ];
};


Minesweeper.prototype.annotate = function (rows) {
  if (rows.length === 0 || rows[0].length === 0) {
    return rows;
  }
  var board = rows.map(function (row) { return row.split(''); });
  var outBoard = [];
  board.forEach(function (memberX, x)  {
    outBoard[x] = [];
    memberX.forEach(function (memberXY, y) {
      var spot = memberXY;
      if (spot === '*') {
        outBoard[x][y] = spot;
      } else {
        var bombCount = this.distanceXdistanceYs.map(function (dxdy) {
          if (typeof board[x + dxdy[0]] === 'undefined') {
            return 0;
          }
          return board[x + dxdy[0]][y + dxdy[1]] === '*' ? 1 : 0;
        }).reduce(function (total, num) {
          return total + num;
        });
        outBoard[x][y] = bombCount > 0 ? bombCount : ' ';
      }
    }, this);
  }, this);
  return outBoard.map(function (row) {
    return row.join('');
  });
};

module.exports = Minesweeper;
