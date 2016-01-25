function columnsFromRows(rows) {
  let columns = [];

  rows.forEach((row) => {
    row.forEach((n, index) => {
      columns[index] = columns[index] || [];
      columns[index].push(n);
    });
  });

  return columns;
}

function parseRows(description) {
  return description.split('\n').map((row) => {
    return row.split(' ').map((char) => parseInt(char, 10));
  });
}

class Matrix {
  constructor(description) {
    this.rows = parseRows(description);
    this.columns = columnsFromRows(this.rows);
  }
}

export default Matrix;

