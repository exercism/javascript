import { HighScores } from './high-scores';

describe('High Scores Test Suite', () => {
  test('List of scores', () => {
    const input = [30, 50, 20, 70];
    expect(new HighScores(input).scores).toEqual([30, 50, 20, 70]);
  });

  xtest('Latest score', () => {
    const input = [100, 0, 90, 30];
    expect(new HighScores(input).latest).toEqual(30);
  });

  xtest('Highest score', () => {
    const input = [40, 100, 70];
    expect(new HighScores(input).highest).toEqual(100);
  });

  xtest('Personal bests', () => {
    const input = [50, 30, 10];
    expect(new HighScores(input).top).toEqual([50, 30, 10]);
  });

  xtest('Personal bests highest to lowest', () => {
    const input = [20, 10, 30];
    expect(new HighScores(input).top).toEqual([30, 20, 10]);
  });

  xtest('Personal bests when there is a tie', () => {
    const input = [40, 20, 40, 30];
    expect(new HighScores(input).top).toEqual([40, 40, 30]);
  });

  xtest('Personal bests when there are less than 3', () => {
    const input = [30, 70];
    expect(new HighScores(input).top).toEqual([70, 30]);
  });

  xtest('Personal bests when there is only one', () => {
    const input = [40];
    expect(new HighScores(input).top).toEqual([40]);
  });

  xtest('Personal bests from a long list', () => {
    const input = [10, 30, 90, 30, 100, 20, 10, 0, 30, 40, 40, 70, 70];
    expect(new HighScores(input).top).toEqual([100, 90, 70]);
  });

  xtest('Message for new personal best', () => {
    const input = [20, 40, 0, 30, 70];
    expect(new HighScores(input).report).toEqual("Your latest score was 70. That's your personal best!");
  });

  xtest('Message when latest score is not the highest score', () => {
    const input = [20, 100, 0, 30, 70];
    expect(new HighScores(input).report).toEqual("Your latest score was 70. That's 30 short of your personal best!");
  });

  xtest('Message for repeated personal best', () => {
    const input = [20, 70, 50, 70, 30];
    expect(new HighScores(input).report).toEqual("Your latest score was 30. That's 40 short of your personal best!");
  });
});
