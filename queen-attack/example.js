const W = 8,
  H = 8,
  STARTING = { black : [7,3], white: [0,3] };

const QueenAttack = ( params = STARTING )  => {
  const self = this instanceof QueenAttack ? this : Object.getPrototypeOf(QueenAttack);
  if (params && params.white === params.black){
    throw new Error("Queens cannot share the same space");
  }

  self.black=params.black;
  self.white=params.white;
  self.board = constructBoard();
  placePieces(self);

  self.canAttack = () => {
    if (self.black[0] === self.white[0] || self.black[1] === self.white[1]){
      return true;
    }
    return Math.abs(self.black[0]-self.white[0]) === Math.abs(self.black[1]-self.white[1]);
  };

  self.toString = () => self.board.join('');

  return self;
};

function constructBoard(){
  let row = buildRow("_ ", W).join('');
  row = row.substring(0, row.length-1)+"\n";
  return concatRows(row, H);
}

function placePieces(self){
  self.board[self.black[0]*W*2+self.black[1]*2]='B';
  self.board[self.white[0]*W*2+self.white[1]*2]='W';
}

function buildRow(cell, colCount){
  return Array.apply(null, Array(colCount)).map(() => cell);
}

function concatRows(row, rowCount){
  return [...Array.prototype.concat.apply(buildRow(row, rowCount)).join('')];
}

export default QueenAttack;
