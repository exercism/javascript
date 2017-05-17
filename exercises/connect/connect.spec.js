import Board from './connect';

describe('Judging a game of connect', () => {

  it("an empty board has no winner", () => {
    let board = [
      ". . . . .",
      " . . . . .",
      "  . . . . .",
      "   . . . . .",
      "    . . . . ."
    ];
    expect(new Board(board).winner()).toEqual("");
  });

  xit("X can win on a 1x1 board", () => {
    let board =  [
      "X"
    ];
    expect(new Board(board).winner()).toEqual("X");
  });

  xit("O can win on a 1x1 board", () => {
    let board =  [
      "O"
    ];
    expect(new Board(board).winner()).toEqual("O");
  });

  xit( "only edges does not make a winner", () => {
    let board =   [
      "O O O X",
      " X . . X",
      "  X . . X",
      "   X O O O"
    ];
    expect(new Board(board).winner()).toEqual("");
  });

  xit("illegal diagonal does not make a winner", () => {
    let board =  [
      "X O . .",
      " O X X X",
      "  O X O .",
      "   . O X .",
      "    X X O O"
    ];
    expect(new Board(board).winner()).toEqual("");
  });

  xit("nobody wins crossing adjacent angles", () => {
    let board =  [
      "X . . .",
      " . X O .",
      "  O . X O",
      "   . O . X",
      "    . . O ."
    ];
    expect(new Board(board).winner()).toEqual("");
  });

  xit("X wins crossing from left to right", () => {
    let board =  [
      ". O . .",
      " O X X X",
      "  O X O .",
      "   X X O X",
      "    . O X ."
    ];
    expect(new Board(board).winner()).toEqual("X");
  });

  xit("O wins crossing from top to bottom", () => {
    let board =  [
      ". O . .",
      " O X X X",
      "  O O O .",
      "   X X O X",
      "    . O X ."
    ];
    expect(new Board(board).winner()).toEqual("O");
  });

  xit("X wins using a convoluted path", () => {
    let board =  [
      ". X X . .",
      " X . X . X",
      "  . X . X .",
      "   . X X . .",
      "    O O O O O"
    ];
    expect(new Board(board).winner()).toEqual("X");
  });

  xit("X wins using a spiral path", () => {
    let board =   [
      "O X X X X X X X X",
      " O X O O O O O O O",
      "  O X O X X X X X O",
      "   O X O X O O O X O",
      "    O X O X X X O X O",
      "     O X O O O X O X O",
      "      O X X X X X O X O",
      "       O O O O O O O X O",
      "        X X X X X X X X O"
    ];
    expect(new Board(board).winner()).toEqual("X");
  });

});
