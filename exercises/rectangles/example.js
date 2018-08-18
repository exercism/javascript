var GLYPH = { corner: '+', edgeV: '|', edgeH: '-' };

var Vertex = function () {
  this.right = [];
  this.down = [];
};

// number of rectangles with given top left corner
Vertex.prototype.findRectangles = function () {
  var corners = [];
  var rectangles = 0;

  this.right.forEach(function (topLeft) {
    topLeft.down.forEach(function (bottomRight) {
      corners.push(bottomRight);
    });
  });
  this.down.forEach(function (bottomLeft) {
    bottomLeft.right.forEach(function (bottomRight) {
      if (corners.indexOf(bottomRight) >= 0) {
        rectangles++;
      }
    });
  });
  return rectangles;
};

// finds connected corners right and down from every corner
var toVertices = function (grid) {
  var vertices = [];
  grid.forEach(function (row, y) {
    row.forEach(function (cell, x) {
      if (cell === GLYPH.corner) {
        var newVert = new Vertex();
        var side;

        vertices.push(newVert);
        grid[y][x] = newVert; // replace glyph with the vertex
        for (var u = y - 1; u >= 0; u--) { // search *up* along the side
          side = grid[u][x];
          if (side instanceof Vertex) side.down.push(newVert);
          else if (side !== GLYPH.edgeV) break;
        }
        for (var l = x - 1; l >= 0; l--) { // search *left* along the side
          side = grid[y][l];
          if (side instanceof Vertex) side.right.push(newVert);
          else if (side !== GLYPH.edgeH) break;
        }
      }
    });
  });
  return vertices;
};

var rectangles = function (input) {
  var grid;
  var corners;

  grid = input.map(function (row) { return row.split(''); });
  corners = toVertices(grid);
  return corners.reduce(function (total, vert) {
    return total + vert.findRectangles();
  }, 0);
};

module.exports = rectangles;
