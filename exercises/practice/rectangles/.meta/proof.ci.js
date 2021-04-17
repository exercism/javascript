export function count(diagram) {
  const rows = diagram.length;
  const cols = rows ? diagram[0].length : 0;

  let rectangles = 0;

  // All possible topleft corners
  for (let y = 0; y < rows - 1; y += 1) {
    for (let x = 0; x < cols - 1; x += 1) {
      if (diagram[y].charAt(x) === '+') {
        // All possible bottomright corners
        for (let j = y + 1; j < rows; j += 1) {
          for (let i = x + 1; i < cols; i += 1) {
            // Check if all corners are valid
            if (
              diagram[j].charAt(i) === '+' &&
              diagram[y].charAt(i) === '+' &&
              diagram[j].charAt(x) === '+'
            ) {
              let validRectangle = true;

              // Check if all sides are valid
              for (let s = x + 1; s < i; s += 1)
                if (!'+-'.includes(diagram[y].charAt(s)))
                  validRectangle = false;
              for (let s = x + 1; s < i; s += 1)
                if (!'+-'.includes(diagram[j].charAt(s)))
                  validRectangle = false;
              for (let t = y + 1; t < j; t += 1)
                if (!'+|'.includes(diagram[t].charAt(x)))
                  validRectangle = false;
              for (let t = y + 1; t < j; t += 1)
                if (!'+|'.includes(diagram[t].charAt(i)))
                  validRectangle = false;

              if (validRectangle) rectangles += 1;
            }
          }
        }
      }
    }
  }
  return rectangles;
}
