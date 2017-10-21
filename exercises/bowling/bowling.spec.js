import Bowling from './bowling.js';

describe('Bowling', () => {
  let game;

  const playGame = (rolls) => {
    rolls.map(pins => game.roll(pins));
  };

  beforeEach(() => {
    game = new Bowling();
  });

  test('Calculate score for a game with all zeros', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(0);
  });

  xtest('Calculate score for a game with no strikes or spares', () => {
    const rolls = [3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6, 3, 6];
    playGame(rolls);
    expect(game.score()).toBe(90);
  });

  xtest('A game with a spare followed by zeros is worth ten points', () => {
    const rolls = [6, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(10);
  });

  xtest('Points scored after spare are counted twice', () => {
    const rolls = [6, 4, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(16);
  });

  xtest('Consicutive spares get one round bonus each', () => {
    const rolls = [5, 5, 3, 7, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(31);
  });

  xtest('A spare in the last frame gets a bonus roll that is counted ones', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 7];
    playGame(rolls);
    expect(game.score()).toBe(17);
  });

  xtest('A strike earns ten points in a frame with a single roll', () => {
    const rolls = [10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(10);
  });

  xtest('Points scored in the two rolls after a strike are counted twice as bonus', () => {
    const rolls = [10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(26);
  });

  xtest('Consicutive strikes each get the two roll bonus', () => {
    const rolls = [10, 10, 10, 5, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    expect(game.score()).toBe(81);
  });

  xtest('A strike in the last frame earns a two roll bonus that is counted ones', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 1];
    playGame(rolls);
    expect(game.score()).toBe(18);
  });

  xtest('Rolling a spare in the bonus roll does not reward further bonus rolls', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 7, 3];
    playGame(rolls);
    expect(game.score()).toBe(20);
  });

  xtest('Strikes in the bonus roll does not reward further bonus rolls', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10];
    playGame(rolls);
    expect(game.score()).toBe(30);
  });

  xtest('A strike followed by a spare in the last frame does not reward bonus rolls', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3, 10];
    playGame(rolls);
    expect(game.score()).toBe(20);
  });

  xtest('All perfect strikes is a perfect game', () => {
    const rolls = [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10];
    playGame(rolls);
    expect(game.score()).toBe(300);
  });

  xtest('A roll cannot score negetive points', () => {
    const rolls = [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    const IllegalStateException = new Error('Negative roll is invalid');
    playGame(rolls);
    expect(() => game.score()).toThrowError(IllegalStateException);
  });

  xtest('A roll cannot be more than ten points', () => {
    const rolls = [11, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    const IllegalStateException = new Error('Pin count exceeds pins on the lane');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Pin count exceeds pins on the lane');
  });

  xtest('Two roll in a frame cannot score more than ten points', () => {
    const rolls = [5, 6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    const IllegalStateException = new Error('Pin count exceeds pins on the lane');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Pin count exceeds pins on the lane');
  });

  xtest('Two bonus rolls after a strike in the last frame cannot score more than ten points', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 5, 6];
    playGame(rolls);
    const IllegalStateException = new Error('Pin count exceeds pins on the lane');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Pin count exceeds pins on the lane');
  });

  xtest('Two bonus rolls after a strike can score more than ten points if one is a strike', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 6];
    playGame(rolls);
    expect(game.score()).toBe(26);
  });

  xtest('The score of an unstared game cannot be calculated', () => {
    const rolls = [];
    playGame(rolls);
    const IllegalStateException = new Error('Score cannot be taken until the end of the game');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Score cannot be taken until the end of the game');
  });

  xtest('The score of an incomplete game cannot be calculated', () => {
    const rolls = [0, 0];
    playGame(rolls);
    const IllegalStateException = new Error('Score cannot be taken until the end of the game');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Score cannot be taken until the end of the game');
  });

  xtest('The score of an game with more than ten frames cannot be calculated', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    playGame(rolls);
    const IllegalStateException = new Error('Cannot roll after game is over');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Cannot roll after game is over');
  });

  xtest('Bonus rolls in the last frame for a strike must be rolled before score can be calculated', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10];
    playGame(rolls);
    const IllegalStateException = new Error('Score cannot be taken until the end of the game');
    console.log(game.chanceInCurrentFrame);
    console.log(game.isBonus);
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Score cannot be taken until the end of the game');
  });

  xtest('Both bonus rolls in the last frame for a strike must be rolled before score can be calculated', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10];
    playGame(rolls);
    const IllegalStateException = new Error('Score cannot be taken until the end of the game');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Score cannot be taken until the end of the game');
  });

  xtest('Bonus rolls in the last frame for a spare must be rolled before score can be calculated', () => {
    const rolls = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 3];
    playGame(rolls);
    const IllegalStateException = new Error('Score cannot be taken until the end of the game');
    expect(() => game.score()).toThrowError(IllegalStateException);
    expect(() => game.score()).toThrowError('Score cannot be taken until the end of the game');
  });
});
