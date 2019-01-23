export class Triangle {
  constructor(rows) {
    this.rows = this.fillRows(rows);
    this.lastRow = this.rows[this.rows.length - 1];
  }

  sumElements(element, index, array) {
    this.push(element + (array[index + 1] || 0));
  }

  fillRows(rows) {
    const result = [[1]];
    for (let x = 1; x < rows; x += 1) {
      const newRow = [1];
      result[x - 1].forEach(this.sumElements, newRow);
      result.push(newRow);
    }
    return result;
  }
}
