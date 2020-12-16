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
  return false;
}

function flipCoordinates(coords) {
  if (!coords) {
    return undefined;
  }
  return {
    start: coords.start.reverse(),
    end: coords.end.reverse(),
  };
}

function flipGrid(grid) {
  return [...grid[0]]
    .map((col, c) => grid.map((row, r) => grid[r][c]))
    .map((row) => row.join(''));
}

function diagonalFind(r, c, word, grid, rIncrement, outOfRange, buildCoords) {
  let currentRow = r;
  let currentColumn = c;
  let foundLetters = '';
  const startR = r + 1;
  const startC = c + 1;
  let result;
  word.split('').forEach((letter) => {
    if (
      !outOfRange(
        currentRow,
        currentColumn,
        word.length,
        grid[currentRow].length,
        foundLetters.length
      )
    ) {
      const currLetterInGrid = grid[currentRow].charAt(currentColumn);
      currentColumn += 1;
      if (currLetterInGrid === letter) {
        foundLetters += currLetterInGrid;
        if (foundLetters === word) {
          result = buildCoords(startR, startC, currentRow, currentColumn);
        }
        currentRow += rIncrement;
      }
    }
  });
  return result;
}

function findAWordDiagonallyTopDown(r, c, word, grid) {
  function outOfRange(row, column, words, columns, letters) {
    return (
      row > columns - words + letters || column > columns - words + letters
    );
  }

  function buildCoords(startR, startC, row, column) {
    return {
      start: [startR, startC],
      end: [row + 1, column],
    };
  }

  return diagonalFind(r, c, word, grid, 1, outOfRange, buildCoords);
}

function findAWordDiagonallyBottomUp(r, c, word, grid) {
  function outOfRange(row, column, words, columns, letters) {
    return row < words - letters - 1 || column > columns - words + letters;
  }

  function buildCoords(startR, startC, row, column) {
    return {
      start: [startR, startC],
      end: [row + 1, column],
    };
  }

  return diagonalFind(r, c, word, grid, -1, outOfRange, buildCoords);
}

function formatCoordinates(coords, isReversed) {
  return {
    true: {
      start: coords.end,
      end: coords.start,
    },
    false: coords,
  }[isReversed];
}

function searchDiagonally({ word, grid, isReversed = false, fromTop = true }) {
  const rIncrement = fromTop ? 1 : -1;
  const startRow = fromTop ? 0 : grid.length - 1;
  const endRow = fromTop ? (r) => r < grid.length : (r) => r > 0;
  const findDirection = fromTop
    ? findAWordDiagonallyTopDown
    : findAWordDiagonallyBottomUp;

  for (let r = startRow; endRow(r); r += rIncrement) {
    for (let c = 0; c < grid[r].length; c += 1) {
      const possibleCoords = findDirection(r, c, word, grid);
      if (possibleCoords) {
        return formatCoordinates(possibleCoords, isReversed);
      }
    }
  }

  if (!isReversed) {
    // now find the reversed version
    const reversedWord = [...word].reverse().join('');
    return searchDiagonally({
      word: reversedWord,
      grid,
      isReversed: true,
      fromTop,
    });
  }
  return undefined;
}

function findWordInAnyDirection(word, grid) {
  return (
    searchHorizontally({ word, grid }) ||
    flipCoordinates(searchHorizontally({ word, grid: flipGrid(grid) })) ||
    searchDiagonally({ word, grid }) ||
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
