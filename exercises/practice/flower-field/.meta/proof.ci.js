const FLOWER = '*';

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

function adjacentSquareHasFlower(board, x, y, d) {
  return board[x + d[0]][y + d[1]] === FLOWER;
}

function countAdjacentFlowers(board, x, y) {
  return DELTAS.filter((d) => adjacentSquareIsOnBoard(board, x, d)).filter(
    (d) => adjacentSquareHasFlower(board, x, y, d),
  ).length;
}

function cellToFlowerOrCount(cell, inputBoard, x, y) {
  if (cell === FLOWER) {
    return FLOWER;
  }

  return countAdjacentFlowers(inputBoard, x, y) || ' ';
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
      [...row].map((cell, y) => cellToFlowerOrCount(cell, inputBoard, x, y)),
    ),
  );
}
