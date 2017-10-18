class WordSearch {
  constructor(grid) {
    this.grid = grid;
  }

  find(words) {
    return words
      .map(word => ({[word]: findWordInAnyDirection(word, this.grid)}))
      .reduce((acc, oneWord) => Object.assign(acc, oneWord), {});
  }
}

function findWordInAnyDirection(word, grid) {
  return searchHorizontally({word, grid})
    || flipCoordinates(searchHorizontally({word, grid: flipGrid(grid)}))
    || searchDiagonally({word, grid})
    || searchDiagonally({word, grid, fromTop: false});
}

function searchHorizontally({word, grid}) {
  let rowIndex = 0;
  let startCol;
  let start;
  let end;

  const getCoords = () => [[rowIndex + 1, startCol], [rowIndex + 1, startCol + word.length - 1]];

  const getStartCol = (word) => 1 + grid[rowIndex].indexOf(word);

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
      return {start, end};
    }
    rowIndex++;
  }
}

function flipCoordinates(coords) {
  if (!coords) {
    return undefined;
  }
  return {
    start: coords.start.reverse(),
    end:   coords.end.reverse()
  };
}

function flipGrid(grid) {
  return [...grid[0]]
    .map((col, c) => grid.map((row, r) => grid[r][c]))
    .map(row => row.join(''))
}

function searchDiagonally({word, grid, isReversed = false, fromTop = true}) {
  let rIncrement = fromTop ? 1 : -1;
  let startRow = fromTop ? 0 : grid.length - 1;
  let endRow = fromTop ? (r) => r < grid.length : (r) => r > 0;
  let diagonalFind = fromTop ? findAWordDiagonallyTopDown : findAWordDiagonallyBottomUp;

  for (let r = startRow; (endRow)(r); r += rIncrement) {
    for (let c = 0; c < grid[r].length; c++) {
      const possibleCoords = diagonalFind(r, c, word, grid);
      if (possibleCoords) {
        return formatCoordinates(possibleCoords, isReversed);
      }
    }
  }

  if (!isReversed) {
    //now find the reversed version
    const reversedWord = [...word].reverse().join('');
    return searchDiagonally({word: reversedWord, grid, isReversed: true, fromTop});
  }
}

function formatCoordinates(coords, isReversed) {
  return {
    true:  {
      start: coords.end,
      end:   coords.start
    },
    false: coords
  }[isReversed];
}

function findAWordDiagonallyTopDown(r, c, word, grid) {
  function outOfRange(r, c, words, columns, letters) {
    return r > columns - words + letters || c > columns - words + letters;
  }

  function buildCoords(startR, startC, r, c) {
    return {
      start: [startR, startC],
      end:   [r + 1, c]
    }
  }

  return diagonalFind(r, c, word, grid, 1, outOfRange, buildCoords);
}

function findAWordDiagonallyBottomUp(r, c, word, grid) {
  function outOfRange(r, c, words, columns, letters) {
    return r < words - letters - 1 || c > columns - words + letters;
  }

  function buildCoords(startR, startC, r, c) {
    return {
      start: [startR, startC],
      end:   [r + 1, c]
    };
  }

  return diagonalFind(r, c, word, grid, -1, outOfRange, buildCoords);
}

function diagonalFind(r, c, word, grid, rIncrement, outOfRange, buildCoords) {
  let foundLetters = "";
  let startR = r + 1;
  let startC = c + 1;
  for (let letter of word) {
    if (outOfRange(r, c, word.length, grid[r].length, foundLetters.length)) {
      return undefined;
    }
    let foundLetter = grid[r].charAt(c++);
    if (foundLetter !== letter) {
      return undefined;
    }
    foundLetters += foundLetter;
    if (foundLetters === word) {
      return buildCoords(startR, startC, r, c);
    }
    r += rIncrement;
  }
}


module.exports = WordSearch;
