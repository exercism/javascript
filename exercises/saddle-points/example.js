'use strict';

module.exports = function Matrix(matrix) {
  this.rows = matrix.split('\n').map(function (row) {
    return row.split(' ').map(function (val) { return parseInt(val, 10); });
  });

  this.columns = this.rows[0].map(function () {
    return [];
  }).map(function (column, index) {
    return this.rows.map(function (row) { return row[index]; });
  }, this);

  this.indexesOfMaxValues = function (array) {
    var maxValue = array.reduce(function (acc, curr) {
      return Math.max(acc, curr);
    });

    return this.indexsOf(array, maxValue);
  };

  this.indexesOfMinValues = function (array) {
    var minValue = array.reduce(function (acc, curr) {
      return Math.min(acc, curr);
    });

    return this.indexsOf(array, minValue);
  };

  this.indexsOf = function (array, value) {
    return array.map(function (val, index) {
      return val === value ? index : null;
    }).filter(function (val) {
      return val !== null;
    });
  };

  this.calculateSaddlePoints = function (rows, columns) {
    var maxIndexes;
    var minIndexes;
    var saddlePoints = [];

    rows.forEach(function (row, i) {
      maxIndexes = this.indexesOfMaxValues(row);

      maxIndexes.forEach(function (currentMaxIndex) {
        minIndexes = this.indexesOfMinValues(columns[currentMaxIndex]);

        if (minIndexes.indexOf(i) >= 0) {
          saddlePoints.push([i, currentMaxIndex]);
        }
      }, this);
    }, this);

    return saddlePoints;
  };

  this.saddlePoints = this.calculateSaddlePoints(this.rows, this.columns);
};
