import { Board } from './connect';

describe('Judging a game of connect', () => {
  test('an empty board has no winner', () => {
    const board = [
      '. . . . .',
      ' . . . . .',
      '  . . . . .',
      '   . . . . .',
      '    . . . . .',
    ];
    expect(new Board(board).winner()).toEqual('');
  });

  xtest('X can win on a 1x1 board', () => {
    const board = ['X'];
    expect(new Board(board).winner()).toEqual('X');
  });

  xtest('O can win on a 1x1 board', () => {
    const board = ['O'];
    expect(new Board(board).winner()).toEqual('O');
  });

  xtest('only edges does not make a winner', () => {
    const board = ['O O O X', ' X . . X', '  X . . X', '   X O O O'];
    expect(new Board(board).winner()).toEqual('');
  });

  xtest('illegal diagonal does not make a winner', () => {
    const board = [
      'X O . .',
      ' O X X X',
      '  O X O .',
      '   . O X .',
      '    X X O O',
    ];
    expect(new Board(board).winner()).toEqual('');
  });

  xtest('nobody wins crossing adjacent angles', () => {
    const board = [
      'X . . .',
      ' . X O .',
      '  O . X O',
      '   . O . X',
      '    . . O .',
    ];
    expect(new Board(board).winner()).toEqual('');
  });

  xtest('X wins crossing from left to right', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O X O .',
      '   X X O X',
      '    . O X .',
    ];
    expect(new Board(board).winner()).toEqual('X');
  });

  xtest('O wins crossing from top to bottom', () => {
    const board = [
      '. O . .',
      ' O X X X',
      '  O O O .',
      '   X X O X',
      '    . O X .',
    ];
    expect(new Board(board).winner()).toEqual('O');
  });

  xtest('X wins using a convoluted path', () => {
    const board = [
      '. X X . .',
      ' X . X . X',
      '  . X . X .',
      '   . X X . .',
      '    O O O O O',
    ];
    expect(new Board(board).winner()).toEqual('X');
  });

  xtest('X wins using a spiral path', () => {
    const board = [
      'O X X X X X X X X',
      ' O X O O O O O O O',
      '  O X O X X X X X O',
      '   O X O X O O O X O',
      '    O X O X X X O X O',
      '     O X O O O X O X O',
      '      O X X X X X O X O',
      '       O O O O O O O X O',
      '        X X X X X X X X O',
    ];
    expect(new Board(board).winner()).toEqual('X');
  });
});
