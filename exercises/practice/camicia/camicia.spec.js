import { describe, expect, test, xtest } from '@jest/globals';
import { simulateGame } from './camicia';

describe('Camicia', () => {
  test('two cards, one trick', () => {
    const playerA = ['2'];
    const playerB = ['3'];
    const expected = { status: 'finished', cards: 2, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('three cards, one trick', () => {
    const playerA = ['2', '4'];
    const playerB = ['3'];
    const expected = { status: 'finished', cards: 3, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('four cards, one trick', () => {
    const playerA = ['2', '4'];
    const playerB = ['3', '5', '6'];
    const expected = { status: 'finished', cards: 4, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('the ace reigns supreme', () => {
    const playerA = ['2', 'A'];
    const playerB = ['3', '4', '5', '6', '7'];
    const expected = { status: 'finished', cards: 7, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('the king beats ace', () => {
    const playerA = ['2', 'A'];
    const playerB = ['3', '4', '5', '6', 'K'];
    const expected = { status: 'finished', cards: 7, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('the queen seduces the king', () => {
    const playerA = ['2', 'A', '7', '8', 'Q'];
    const playerB = ['3', '4', '5', '6', 'K'];
    const expected = { status: 'finished', cards: 10, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('the jack betrays the queen', () => {
    const playerA = ['2', 'A', '7', '8', 'Q'];
    const playerB = ['3', '4', '5', '6', 'K', '9', 'J'];
    const expected = { status: 'finished', cards: 12, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('the 10 just wants to put on a show', () => {
    const playerA = ['2', 'A', '7', '8', 'Q', '10'];
    const playerB = ['3', '4', '5', '6', 'K', '9', 'J'];
    const expected = { status: 'finished', cards: 13, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('simple loop with decks of 3 cards', () => {
    const playerA = ['J', '2', '3'];
    const playerB = ['4', 'J', '5'];
    const expected = { status: 'loop', cards: 8, tricks: 3 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('the story is starting to get a bit complicated', () => {
    const playerA = [
      '2', '6', '6', 'J', '4', 'K', 'Q', '10', 'K', 'J',
      'Q', '2', '3', 'K', '5', '6', 'Q', 'Q', 'A', 'A',
      '6', '9', 'K', 'A', '8', 'K', '2', 'A', '9', 'A',
      'Q', '4', 'K', 'K', 'K', '3', '5', 'K', '8', 'Q',
      '3', 'Q', '7', 'J', 'K', 'J', '9', 'J', '3', '3',
      'K', 'K', 'Q', 'A', 'K', '7', '10', 'A', 'Q', '7',
      '10', 'J', '4', '5', 'J', '9', '10', 'Q', 'J', 'J',
      'K', '6', '10', 'J', '6', 'Q', 'J', '5', 'J', 'Q',
      'Q', '8', '3', '8', 'A', '2', '6', '9', 'K', '7',
      'J', 'K', 'K', '8', 'K', 'Q', '6', '10', 'J', '10',
      'J', 'Q', 'J', '10', '3', '8', 'K', 'A', '6', '9',
      'K', '2', 'A', 'A', '10', 'J', '6', 'A', '4', 'J',
      'A', 'J', 'J', '6', '2', 'J', '3', 'K', '2', '5',
      '9', 'J', '9', '6', 'K', 'A', '5', 'Q', 'J', '2',
      'Q', 'K', 'A', '3', 'K', 'J', 'K', '2', '5', '6',
      'Q', 'J', 'Q', 'Q', 'J', '2', 'J', '9', 'Q', '7',
      '7', 'A', 'Q', '7', 'Q', 'J', 'K', 'J', 'A', '7',
      '7', '8', 'Q', '10', 'J', '10', 'J', 'J', '9', '2',
      'A', '2',
    ];
    const playerB = [
      '7', '2', '10', 'K', '8', '2', 'J', '9', 'A', '5',
      '6', 'J', 'Q', '6', 'K', '6', '5', 'A', '4', 'Q',
      '7', 'J', '7', '10', '2', 'Q', '8', '2', '2', 'K',
      'J', 'A', '5', '5', 'A', '4', 'Q', '6', 'Q', 'K',
      '10', '8', 'Q', '2', '10', 'J', 'A', 'Q', '8', 'Q',
      'Q', 'J', 'J', 'A', 'A', '9', '10', 'J', 'K', '4',
      'Q', '10', '10', 'J', 'K', '10', '2', 'J', '7', 'A',
      'K', 'K', 'J', 'A', 'J', '10', '8', 'K', 'A', '7',
      'Q', 'Q', 'J', '3', 'Q', '4', 'A', '3', 'A', 'Q',
      'Q', 'Q', '5', '4', 'K', 'J', '10', 'A', 'Q', 'J',
      '6', 'J', 'A', '10', 'A', '5', '8', '3', 'K', '5',
      '9', 'Q', '8', '7', '7', 'J', '7', 'Q', 'Q', 'Q',
      'A', '7', '8', '9', 'A', 'Q', 'A', 'K', '8', 'A',
      'A', 'J', '8', '4', '8', 'K', 'J', 'A', '10', 'Q',
      '8', 'J', '8', '6', '10', 'Q', 'J', 'J', 'A', 'A',
      'J', '5', 'Q', '6', 'J', 'K', 'Q', '8', 'K', '4',
      'Q', 'Q', '6', 'J', 'K', '4', '7', 'J', 'J', '9',
      '9', 'A', 'Q', 'Q', 'K', 'A', '6', '5', 'K',
    ];
    const expected = { status: 'finished', cards: 361, tricks: 1 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('two tricks', () => {
    const playerA = ['J'];
    const playerB = ['3', 'J'];
    const expected = { status: 'finished', cards: 5, tricks: 2 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('more tricks', () => {
    const playerA = ['J', '2', '4'];
    const playerB = ['3', 'J', 'A'];
    const expected = { status: 'finished', cards: 12, tricks: 4 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  xtest('simple loop with decks of 4 cards', () => {
    const playerA = ['2', '3', 'J', '6'];
    const playerB = ['K', '5', 'J', '7'];
    const expected = { status: 'loop', cards: 16, tricks: 4 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('easy card combination', () => {
    const playerA = [
      '4', '8', '7', '5', '4', '10', '3', '9', '7', '3',
      '10', '10', '6', '8', '2', '8', '5', '4', '5', '9',
      '6', '5', '2', '8', '10', '9',
    ];
    const playerB = [
      '6', '9', '4', '7', '2', '2', '3', '6', '7', '3',
      'A', 'A', 'A', 'A', 'K', 'K', 'K', 'K', 'Q', 'Q',
      'Q', 'Q', 'J', 'J', 'J', 'J',
    ];
    const expected = { status: 'finished', cards: 40, tricks: 4 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('easy card combination, inverted decks', () => {
    const playerA = [
      '3', '3', '5', '7', '3', '2', '10', '7', '6', '7',
      'A', 'A', 'A', 'A', 'K', 'K', 'K', 'K', 'Q', 'Q',
      'Q', 'Q', 'J', 'J', 'J', 'J',
    ];
    const playerB = [
      '5', '10', '8', '2', '6', '7', '2', '4', '9', '2',
      '6', '10', '10', '5', '4', '8', '4', '8', '6', '9',
      '8', '5', '9', '3', '4', '9',
    ];
    const expected = { status: 'finished', cards: 40, tricks: 4 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('mirrored decks', () => {
    const playerA = [
      '2', 'A', '3', 'A', '3', 'K', '4', 'K', '2', 'Q',
      '2', 'Q', '10', 'J', '5', 'J', '6', '10', '2', '9',
      '10', '7', '3', '9', '6', '9',
    ];
    const playerB = [
      '6', 'A', '4', 'A', '7', 'K', '4', 'K', '7', 'Q',
      '7', 'Q', '5', 'J', '8', 'J', '4', '5', '8', '9',
      '10', '6', '8', '3', '8', '5',
    ];
    const expected = { status: 'finished', cards: 59, tricks: 4 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('opposite decks', () => {
    const playerA = [
      '4', 'A', '9', 'A', '4', 'K', '9', 'K', '6', 'Q',
      '8', 'Q', '8', 'J', '10', 'J', '9', '8', '4', '6',
      '3', '6', '5', '2', '4', '3',
    ];
    const playerB = [
      '10', '7', '3', '2', '9', '2', '7', '8', '7', '5',
      'J', '7', 'J', '10', 'Q', '10', 'Q', '3', 'K', '5',
      'K', '6', 'A', '2', 'A', '5',
    ];
    const expected = { status: 'finished', cards: 151, tricks: 21 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('random decks #1', () => {
    const playerA = [
      'K', '10', '9', '8', 'J', '8', '6', '9', '7', 'A',
      'K', '5', '4', '4', 'J', '5', 'J', '4', '3', '5',
      '8', '6', '7', '7', '4', '9',
    ];
    const playerB = [
      '6', '3', 'K', 'A', 'Q', '10', 'A', '2', 'Q', '8',
      '2', '10', '10', '2', 'Q', '3', 'K', '9', '7', 'A',
      '3', 'Q', '5', 'J', '2', '6',
    ];
    const expected = { status: 'finished', cards: 542, tricks: 76 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('random decks #2', () => {
    const playerA = [
      '8', 'A', '4', '8', '5', 'Q', 'J', '2', '6', '2',
      '9', '7', 'K', 'A', '8', '10', 'K', '8', '10', '9',
      'K', '6', '7', '3', 'K', '9',
    ];
    const playerB = [
      '10', '5', '2', '6', 'Q', 'J', 'A', '9', '5', '5',
      '3', '7', '3', 'J', 'A', '2', 'Q', '3', 'J', 'Q',
      '4', '10', '4', '7', '4', '6',
    ];
    const expected = { status: 'finished', cards: 327, tricks: 42 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Kleber 1999', () => {
    const playerA = [
      '4', '8', '9', 'J', 'Q', '8', '5', '5', 'K', '2',
      'A', '9', '8', '5', '10', 'A', '4', 'J', '3', 'K',
      '6', '9', '2', 'Q', 'K', '7',
    ];
    const playerB = [
      '10', 'J', '3', '2', '4', '10', '4', '7', '5', '3',
      '6', '6', '7', 'A', 'J', 'Q', 'A', '7', '2', '10',
      '3', 'K', '9', '6', '8', 'Q',
    ];
    const expected = { status: 'finished', cards: 5790, tricks: 805 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Collins 2006', () => {
    const playerA = [
      'A', '8', 'Q', 'K', '9', '10', '3', '7', '4', '2',
      'Q', '3', '2', '10', '9', 'K', 'A', '8', '7', '7',
      '4', '5', 'J', '9', '2', '10',
    ];
    const playerB = [
      '4', 'J', 'A', 'K', '8', '5', '6', '6', 'A', '6',
      '5', 'Q', '4', '6', '10', '8', 'J', '2', '5', '7',
      'Q', 'J', '3', '3', 'K', '9',
    ];
    const expected = { status: 'finished', cards: 6913, tricks: 960 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Mann and Wu 2007', () => {
    const playerA = [
      'K', '2', 'K', 'K', '3', '3', '6', '10', 'K', '6',
      'A', '2', '5', '5', '7', '9', 'J', 'A', 'A', '3',
      '4', 'Q', '4', '8', 'J', '6',
    ];
    const playerB = [
      '4', '5', '2', 'Q', '7', '9', '9', 'Q', '7', 'J',
      '9', '8', '10', '3', '10', 'J', '4', '10', '8', '6',
      '8', '7', 'A', 'Q', '5', '2',
    ];
    const expected = { status: 'finished', cards: 7157, tricks: 1007 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Nessler 2012', () => {
    const playerA = [
      '10', '3', '6', '7', 'Q', '2', '9', '8', '2', '8',
      '4', 'A', '10', '6', 'K', '2', '10', 'A', '5', 'A',
      '2', '4', 'Q', 'J', 'K', '4',
    ];
    const playerB = [
      '10', 'Q', '4', '6', 'J', '9', '3', 'J', '9', '3',
      '3', 'Q', 'K', '5', '9', '5', 'K', '6', '5', '7',
      '8', 'J', 'A', '7', '8', '7',
    ];
    const expected = { status: 'finished', cards: 7207, tricks: 1015 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Anderson 2013', () => {
    const playerA = [
      '6', '7', 'A', '3', 'Q', '3', '5', 'J', '3', '2',
      'J', '7', '4', '5', 'Q', '10', '5', 'A', 'J', '2',
      'K', '8', '9', '9', 'K', '3',
    ];
    const playerB = [
      '4', 'J', '6', '9', '8', '5', '10', '7', '9', 'Q',
      '2', '7', '10', '8', '4', '10', 'A', '6', '4', 'A',
      '6', '8', 'Q', 'K', 'K', '2',
    ];
    const expected = { status: 'finished', cards: 7225, tricks: 1016 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Rucklidge 2014', () => {
    const playerA = [
      '8', 'J', '2', '9', '4', '4', '5', '8', 'Q', '3',
      '9', '3', '6', '2', '8', 'A', 'A', 'A', '9', '4',
      '7', '2', '5', 'Q', 'Q', '3',
    ];
    const playerB = [
      'K', '7', '10', '6', '3', 'J', 'A', '7', '6', '5',
      '5', '8', '10', '9', '10', '4', '2', '7', 'K', 'Q',
      '10', 'K', '6', 'J', 'J', 'K',
    ];
    const expected = { status: 'finished', cards: 7959, tricks: 1122 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Nessler 2021', () => {
    const playerA = [
      '7', '2', '3', '4', 'K', '9', '6', '10', 'A', '8',
      '9', 'Q', '7', 'A', '4', '8', 'J', 'J', 'A', '4',
      '3', '2', '5', '6', '6', 'J',
    ];
    const playerB = [
      '3', '10', '8', '9', '8', 'K', 'K', '2', '5', '5',
      '7', '6', '4', '3', '5', '7', 'A', '9', 'J', 'K',
      '2', 'Q', '10', 'Q', '10', 'Q',
    ];
    const expected = { status: 'finished', cards: 7972, tricks: 1106 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Nessler 2022', () => {
    const playerA = [
      '2', '10', '10', 'A', 'J', '3', '8', 'Q', '2', '5',
      '5', '5', '9', '2', '4', '3', '10', 'Q', 'A', 'K',
      'Q', 'J', 'J', '9', 'Q', 'K',
    ];
    const playerB = [
      '10', '7', '6', '3', '6', 'A', '8', '9', '4', '3',
      'K', 'J', '6', 'K', '4', '9', '7', '8', '5', '7',
      '8', '2', 'A', '7', '4', '6',
    ];
    const expected = { status: 'finished', cards: 8344, tricks: 1164 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });

  // prettier-ignore
  xtest('Casella 2024, first infinite game found', () => {
    const playerA = [
      '2', '8', '4', 'K', '5', '2', '3', 'Q', '6', 'K',
      'Q', 'A', 'J', '3', '5', '9', '8', '3', 'A', 'A',
      'J', '4', '4', 'J', '7', '5',
    ];
    const playerB = [
      '7', '7', '8', '6', '10', '10', '6', '10', '7', '2',
      'Q', '6', '3', '2', '4', 'K', 'Q', '10', 'J', '5',
      '9', '8', '9', '9', 'K', 'A',
    ];
    const expected = { status: 'loop', cards: 474, tricks: 66 };
    expect(simulateGame(playerA, playerB)).toEqual(expected);
  });
});
