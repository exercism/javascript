export const rows = (size) => {
  if (size === 0) {
    return [];
  } else if (size === 1) {
    return [[1]];
  }

  let triangleRows = [[1]];

  const getNextRow = (row) => {
    let nextRow = [];
    nextRow.push(1);
    for (let i = 0; i <= row.length - 2; i++) {
      nextRow.push(row[i] + row[i + 1]);
    }
    nextRow.push(1);
    return nextRow;
  };

  while (size-- > 1) {
    triangleRows.push(getNextRow(triangleRows[triangleRows.length - 1]));
  }

  return triangleRows;
};
