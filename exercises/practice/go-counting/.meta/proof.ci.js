export class GoCounting {
  constructor(board) {
    this.board = board;
    this.visited = Array(this.board[0].length)
      .fill()
      .map(() => Array(this.board.length).fill(false));

    this.OPEN = ' ';
    this.BLACK = 'BLACK';
    this.WHITE = 'WHITE';
    this.NONE = 'NONE';
  }

  getTerritory(x, y) {
    const cellValue = this.getCellValue(x, y);
    if (!cellValue) {
      return { error: 'Invalid coordinate' };
    }
    if (cellValue === this.BLACK || cellValue === this.WHITE) {
      return { owner: this.NONE, territory: [] };
    }
    return this.buildTerritory(x, y);
  }

  getTerritories() {
    const territories = {
      territoryBlack: [],
      territoryWhite: [],
      territoryNone: [],
    };
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        if (!this.visited[x][y] && this.getCellValue(x, y) === this.OPEN) {
          const territory = this.buildTerritory(x, y);
          switch (territory.owner) {
            case this.BLACK:
              territories.territoryBlack.push(...territory.territory);
              break;
            case this.WHITE:
              territories.territoryWhite.push(...territory.territory);
              break;
            default:
              territories.territoryNone.push(...territory.territory);
              break;
          }
        }
      }
    }

    return territories;
  }

  getCellValue(x, y) {
    try {
      const value = this.board[y][x];
      switch (value) {
        case 'B':
          return this.BLACK;
        case 'W':
          return this.WHITE;
        default:
          return value;
      }
    } catch (err) {
      return undefined;
    }
  }

  buildTerritory(x, y) {
    const ownersList = [];
    const territory = [[x, y]];

    let adjacentCells = this.getAdjacentCells(x, y);
    while (
      adjacentCells.filter((cell) => {
        return this.getCellValue(cell.x, cell.y) === this.OPEN;
      }).length > 0
    ) {
      let newAdjacentCells = [];

      adjacentCells.forEach((cell) => {
        const cellValue = this.getCellValue(cell.x, cell.y);
        switch (cellValue) {
          case this.OPEN:
            if (
              !territory.some(
                (value) => value[0] === cell.x && value[1] === cell.y
              )
            ) {
              territory.push([cell.x, cell.y]);
              newAdjacentCells.push(...this.getAdjacentCells(cell.x, cell.y));
            }
            break;
          case this.WHITE:
          case this.BLACK:
            if (!ownersList.includes(cellValue)) {
              ownersList.push(cellValue);
            }
            break;
          default:
            break;
        }
      });

      adjacentCells = [...newAdjacentCells];
    }

    adjacentCells.forEach((cell) => {
      const cellValue = this.getCellValue(cell.x, cell.y);
      if (
        (cellValue === this.BLACK || cellValue === this.WHITE) &&
        !ownersList.includes(cellValue)
      ) {
        ownersList.push(cellValue);
      }
    });

    return {
      owner: ownersList.length !== 1 ? this.NONE : ownersList[0],
      territory: territory.sort(),
    };
  }

  getAdjacentCells(x, y) {
    this.visited[x][y] = true;

    const result = [];
    if (this.getCellValue(x - 1, y) && !this.visited[x - 1][y]) {
      result.push({ x: x - 1, y });
    }
    if (this.getCellValue(x + 1, y) && !this.visited[x + 1][y]) {
      result.push({ x: x + 1, y });
    }
    if (this.getCellValue(x, y - 1) && !this.visited[x][y - 1]) {
      result.push({ x, y: y - 1 });
    }
    if (this.getCellValue(x, y + 1) && !this.visited[x][y + 1]) {
      result.push({ x, y: y + 1 });
    }

    return result;
  }
}
