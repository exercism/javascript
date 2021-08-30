const MINE = '*';

const DELTAS = [
  [-1, -1],
  [-1, 0],
  [-1, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, 1],
  [0, -1],
];

function adjacentSquareIsOnBoard(board, x, d) {
  return board[x + d[0]];
}

function adjacentSquareHasMine(board, x, y, d) {
  return board[x + d[0]][y + d[1]] === MINE;
}

function countAdjacentMines(board, x, y) {
  return DELTAS.filter((d) => adjacentSquareIsOnBoard(board, x, d)).filter(
    (d) => adjacentSquareHasMine(board, x, y, d)
  ).length;
}

function cellToMineOrCount(cell, inputBoard, x, y) {
  if (cell === MINE) {
    return MINE;
  }

  return countAdjacentMines(inputBoard, x, y) || ' ';
}

function stringify(board) {
  return board.map((row) => row.join(''));
}

function noDataPresent(rows) {
  return rows.length === 0 || rows[0].length === 0;
}

export function annotate(rows) {
  if (noDataPresent(rows)) {
    return rows;
  }

  const inputBoard = rows.map((row) => [...row]);

  return stringify(
    inputBoard.map((row, x) =>
      [...row].map((cell, y) => cellToMineOrCount(cell, inputBoard, x, y))
    )
  );
}
