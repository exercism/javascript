function findSaddlePoints(rows, rowMaxs, colMins) {
  return rows.reduce((saddlePoints, row, rowIndex) => {
    row.forEach((cell, colIndex) => {
      if (cell === rowMaxs[rowIndex] && cell === colMins[colIndex]) {
        saddlePoints.push([rowIndex, colIndex]);
      }
    });
    return saddlePoints;
  }, []);
}

export class Matrix {
  constructor(data) {
    this.rows = [];
    this.columns = [];
    data.split(/\n/).map((row) => {
      this.rows.push(row.trim().split(/\s/).map((cell, jj) => {
        this.columns[jj] ? this.columns[jj].push(+cell) : this.columns[jj] = [+cell];
        return +cell;
      }));
    });

    const rowMaxs = this.rows.map(row => Math.max.apply(null, row));
    const colMins = this.columns.map(col => Math.min.apply(null, col));
    this.saddlePoints = findSaddlePoints(this.rows, rowMaxs, colMins);
  }
}
