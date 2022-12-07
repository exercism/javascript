import { GoCounting } from './go-counting';

describe('Go Counting', () => {
  describe('getTerritory', () => {
    test('Black corner territory on 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = {
        owner: 'BLACK',
        territory: [
          [0, 0],
          [0, 1],
          [1, 0],
        ],
      };
      expect(goCounting.getTerritory(0, 1)).toEqual(expectedTerritory);
    });

    xtest('White center territory on 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { owner: 'WHITE', territory: [[2, 3]] };
      expect(goCounting.getTerritory(2, 3)).toEqual(expectedTerritory);
    });

    xtest('Open corner territory on 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = {
        owner: 'NONE',
        territory: [
          [0, 3],
          [0, 4],
          [1, 4],
        ],
      };
      expect(goCounting.getTerritory(1, 4)).toEqual(expectedTerritory);
    });

    xtest('A stone and not a territory on 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { owner: 'NONE', territory: [] };
      expect(goCounting.getTerritory(1, 1)).toEqual(expectedTerritory);
    });

    xtest('Invalid because X is too low for 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { error: 'Invalid coordinate' };
      expect(goCounting.getTerritory(-1, 1)).toEqual(expectedTerritory);
    });

    xtest('Invalid because X is too high for 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { error: 'Invalid coordinate' };
      expect(goCounting.getTerritory(5, 1)).toEqual(expectedTerritory);
    });

    xtest('Invalid because Y is too low for 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { error: 'Invalid coordinate' };
      expect(goCounting.getTerritory(1, -1)).toEqual(expectedTerritory);
    });

    xtest('Invalid because Y is too high for 5x5 board', () => {
      const board = ['  B  ', ' B B ', 'B W B', ' W W ', '  W  '];
      const goCounting = new GoCounting(board);
      const expectedTerritory = { error: 'Invalid coordinate' };
      expect(goCounting.getTerritory(1, 5)).toEqual(expectedTerritory);
    });
  });

  describe('getTerritories', () => {
    xtest('One territory is the whole board', () => {
      const board = [' '];
      const goCounting = new GoCounting(board);
      const expectedTerritories = {
        territoryBlack: [],
        territoryWhite: [],
        territoryNone: [[0, 0]],
      };
      expect(goCounting.getTerritories()).toEqual(expectedTerritories);
    });

    xtest('Two territory rectangular board', () => {
      const board = [' BW ', ' BW '];
      const goCounting = new GoCounting(board);
      const expectedTerritories = {
        territoryBlack: [
          [0, 0],
          [0, 1],
        ],
        territoryWhite: [
          [3, 0],
          [3, 1],
        ],
        territoryNone: [],
      };
      expect(goCounting.getTerritories()).toEqual(expectedTerritories);
    });

    xtest('Two region rectangular board', () => {
      const board = [' B '];
      const goCounting = new GoCounting(board);
      const expectedTerritories = {
        territoryBlack: [
          [0, 0],
          [2, 0],
        ],
        territoryWhite: [],
        territoryNone: [],
      };
      expect(goCounting.getTerritories()).toEqual(expectedTerritories);
    });
  });
});
