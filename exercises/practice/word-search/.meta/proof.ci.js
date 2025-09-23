function searchHorizontally({ word, grid }) {
  let rowIndex = 0;
  let startCol;
  let start;
  let end;

  const getCoords = () => [
    [rowIndex + 1, startCol],
    [rowIndex + 1, startCol + word.length - 1],
  ];

  const getStartCol = (currentWord) => 1 + grid[rowIndex].indexOf(currentWord);

  while (rowIndex < grid.length) {
    startCol = getStartCol(word);
    if (startCol) {
      [start, end] = getCoords();
    } else {
      startCol = getStartCol([...word].reverse().join(''));
      if (startCol) {
        [end, start] = getCoords();
      }
    }
    if (start && end) {
      return { start, end };
    }
    rowIndex += 1;
  }
  return undefined;
}

function flipCoordinates(coords) {
  if (!coords) return undefined;
  return {
    start: coords.start.reverse(),
    end: coords.end.reverse(),
  };
}

function flipGrid(grid) {
  return [...grid[0]]
    .map((_, c) => grid.map((row) => row[c]))
    .map((row) => row.join(''));
}

function diagonalFind(r, c, word, grid, rIncrement, cIncrement) {
  let currentRow = r;
  let currentColumn = c;
  let foundLetters = '';
  const startR = r + 1;
  const startC = c + 1;

  for (const letter of word) {
    // Bounds check
    if (
      currentRow < 0 ||
      currentRow >= grid.length ||
      currentColumn < 0 ||
      currentColumn >= grid[currentRow].length
    ) {
      return undefined;
    }

    const currLetterInGrid = grid[currentRow].charAt(currentColumn);
    if (currLetterInGrid === letter) {
      foundLetters += currLetterInGrid;
      if (foundLetters === word) {
        return {
          start: [startR, startC],
          end: [currentRow + 1, currentColumn + 1],
        };
      }
    } else {
      return undefined;
    }

    currentRow += rIncrement;
    currentColumn += cIncrement;
  }

  return undefined;
}

function searchDiagonally({ word, grid, fromTop = true, reversed = false }) {
  const rIncrement = fromTop ? 1 : -1;
  const startRow = fromTop ? 0 : grid.length - 1;
  const endRow = fromTop ? (r) => r < grid.length : (r) => r >= 0;

  for (let r = startRow; endRow(r); r += rIncrement) {
    for (let c = 0; c < grid[r].length; c += 1) {
      const dirs = [
        [1, 1], // top-left to bottom-right
        [1, -1], // top-right to bottom-left
        [-1, 1], // bottom-left to top-right
        [-1, -1], // bottom-right to top-left
      ];

      for (const [dr, dc] of dirs) {
        const possible = diagonalFind(r, c, word, grid, dr, dc);
        if (possible) {
          if (reversed) {
            return { start: possible.end, end: possible.start };
          }
          return possible;
        }
      }
    }
  }

  // Try reversed word
  if (!reversed) {
    const reversedWord = [...word].reverse().join('');
    return searchDiagonally({
      word: reversedWord,
      grid,
      fromTop,
      reversed: true,
    });
  }

  return undefined;
}

function findWordInAnyDirection(word, grid) {
  return (
    searchHorizontally({ word, grid }) ||
    flipCoordinates(searchHorizontally({ word, grid: flipGrid(grid) })) ||
    searchDiagonally({ word, grid, fromTop: true }) ||
    searchDiagonally({ word, grid, fromTop: false })
  );
}

class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    return words
      .map((word) => ({ [word]: findWordInAnyDirection(word, this.grid) }))
      .reduce((acc, oneWord) => Object.assign(acc, oneWord), {});
  }
}

module.exports = WordSearch;
