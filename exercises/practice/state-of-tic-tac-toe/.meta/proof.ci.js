export const gamestate = (board) => {
  let gridSize = board.length;
  let numberOfX = board.join('').match(/X/g)?.length ?? 0;
  let numberOfO = board.join('').match(/O/g)?.length ?? 0;
  let scorringArray = Array(gridSize * 2 + 2).fill(null);
  let boardAsNumbers = board
    .map((row) =>
      row
        .split('')
        .map((element) =>
          element.replaceAll('X', 1).replaceAll('O', -1).replaceAll(/\s/g, 0),
        ),
    )
    .flat();

  boardAsNumbers.forEach((element, index) => {
    let [row, col] = [Math.floor(index / gridSize), index % gridSize];
    scorringArray[row] += Number(element);
    scorringArray[gridSize + col] += Number(element);
    row === col && (scorringArray[2 * gridSize] += Number(element));
    gridSize - 1 - col === row &&
      (scorringArray[2 * gridSize + 1] += Number(element));
  });

  switch (true) {
    case numberOfX - numberOfO > 1:
      throw new Error('Wrong turn order: X went twice');
    case numberOfX - numberOfO < 0:
      throw new Error('Wrong turn order: O started');
    case scorringArray.includes(gridSize) && scorringArray.includes(-gridSize):
      throw new Error(
        'Impossible board: game should have ended after the game was won',
      );
    case scorringArray.includes(gridSize) || scorringArray.includes(-gridSize):
      return 'win';
    case boardAsNumbers.includes('0'):
      return 'ongoing';
    default:
      return 'draw';
  }
};
