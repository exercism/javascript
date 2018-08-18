var Queens = require('./queen-attack');

describe('Queens', function () {
  it('has the correct default positions', function () {
    var queens = new Queens();
    expect(queens.white).toEqual([0, 3]);
    expect(queens.black).toEqual([7, 3]);
  });

  xit('initialized with specific placement', function () {
    var queens = new Queens({white: [3, 7], black: [6, 1]});
    expect(queens.white).toEqual([3, 7]);
    expect(queens.black).toEqual([6, 1]);
  });

  xit('cannot occupy the same space', function () {
    var positioning = {white: [2, 4], black: [2, 4]};

    try {
      var queens = new Queens(positioning);
      expect(queens.white).toEqual([2, 4]);
      expect(queens.black).toEqual([2, 4]);
    } catch (error) {
      expect(error).toEqual('Queens cannot share the same space');
    }
  });

  xit('toString representation', function () {
    var positioning = {white: [2, 4], black: [6, 6]};
    var queens = new Queens(positioning);
    var board = '_ _ _ _ _ _ _ _\n' +
'_ _ _ _ _ _ _ _\n' +
'_ _ _ _ W _ _ _\n' +
'_ _ _ _ _ _ _ _\n' +
'_ _ _ _ _ _ _ _\n' +
'_ _ _ _ _ _ _ _\n' +
'_ _ _ _ _ _ B _\n' +
'_ _ _ _ _ _ _ _\n'
;
    expect(queens.toString()).toEqual(board);
  });

  xit('queens cannot attack', function () {
    var queens = new Queens({ white: [2, 3], black: [4, 7] });
    expect(queens.canAttack()).toEqual(false);
  });

  xit('queens can attack when they are on the same row', function () {
    var queens = new Queens({ white: [2, 4], black: [2, 7] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack when they are on the same column', function () {
    var queens = new Queens({ white: [5, 4], black: [2, 4] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack diagonally', function () {
    var queens = new Queens({ white: [1, 1], black: [6, 6] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack another diagonally', function () {
    var queens = new Queens({ white: [0, 6], black: [1, 7] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack yet another diagonally', function () {
    var queens = new Queens({ white: [4, 1], black: [6, 3] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack on a north-east/south-west diagonal', function () {
    var queens = new Queens({ white: [7, 0], black: [0, 7] });
    expect(queens.canAttack()).toEqual(true);
  });

  xit('queens can attack on another ne/sw diagonal', function () {
    var queens = new Queens({ white: [2, 6], black: [5, 3] });
    expect(queens.canAttack()).toEqual(true);
  });
});
