export const saddlePoints = (matrix) => {
  const maximumRowValues = [];
  const minimumColumnValues = [];

  for (let i = 0; i <= matrix.length - 1; i++) {
    const maximumRowValue = Math.max(...matrix[i]);
    maximumRowValues.push(maximumRowValue);
  }

  for (let i = 0; i <= matrix[0].length - 1; i++) {
    let minimumColumnValue = Number.MAX_VALUE;
    for (let j = 0; j <= matrix.length - 1; j++) {
      minimumColumnValue = Math.min(minimumColumnValue, matrix[j][i]);
    }
    minimumColumnValues.push(minimumColumnValue);
  }

  const resultPoints = [];
  for (let i = 0; i < maximumRowValues.length; i++) {
    for (let j = 0; j < minimumColumnValues.length; j++) {
      if (maximumRowValues[i] === minimumColumnValues[j]) {
        resultPoints.push({ row: i + 1, column: j + 1 });
      }
    }
  }

  return resultPoints;
};
