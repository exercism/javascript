import { describe, expect, test, xtest } from '@jest/globals';
import { SplitSecondStopwatch } from './split-second-stopwatch';

describe('SplitSecondStopwatch', () => {
  test('new stopwatch starts in ready state', () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(stopwatch.state).toBe('ready');
  });

  xtest("new stopwatch's current lap has no elapsed time", () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(stopwatch.currentLap).toBe('00:00:00');
  });

  xtest("new stopwatch's total has no elapsed time", () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(stopwatch.total).toBe('00:00:00');
  });

  xtest('new stopwatch does not have previous laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(stopwatch.previousLaps).toEqual([]);
  });

  xtest('start from ready state changes state to running', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    expect(stopwatch.state).toBe('running');
  });

  xtest('start does not change previous laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    expect(stopwatch.previousLaps).toEqual([]);
  });

  xtest('start initiates time tracking for current lap', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:05');
    expect(stopwatch.currentLap).toBe('00:00:05');
  });

  xtest('start initiates time tracking for total', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:23');
    expect(stopwatch.total).toBe('00:00:23');
  });

  xtest('start cannot be called from running state', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    expect(() => stopwatch.start()).toThrow(
      'cannot start an already running stopwatch',
    );
  });

  xtest('stop from running state changes state to stopped', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.stop();
    expect(stopwatch.state).toBe('stopped');
  });

  xtest('stop pauses time tracking for current lap', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:05');
    stopwatch.stop();
    stopwatch.advanceTime('00:00:08');
    expect(stopwatch.currentLap).toBe('00:00:05');
  });

  xtest('stop pauses time tracking for total', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:13');
    stopwatch.stop();
    stopwatch.advanceTime('00:00:44');
    expect(stopwatch.total).toBe('00:00:13');
  });

  xtest('stop cannot be called from ready state', () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(() => stopwatch.stop()).toThrow(
      'cannot stop a stopwatch that is not running',
    );
  });

  xtest('stop cannot be called from stopped state', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.stop();
    expect(() => stopwatch.stop()).toThrow(
      'cannot stop a stopwatch that is not running',
    );
  });

  xtest('start from stopped state changes state to running', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.stop();
    stopwatch.start();
    expect(stopwatch.state).toBe('running');
  });

  xtest('start from stopped state resumes time tracking for current lap', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:01:20');
    stopwatch.stop();
    stopwatch.advanceTime('00:00:20');
    stopwatch.start();
    stopwatch.advanceTime('00:00:08');
    expect(stopwatch.currentLap).toBe('00:01:28');
  });

  xtest('start from stopped state resumes time tracking for total', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:23');
    stopwatch.stop();
    stopwatch.advanceTime('00:00:44');
    stopwatch.start();
    stopwatch.advanceTime('00:00:09');
    expect(stopwatch.total).toBe('00:00:32');
  });

  xtest('lap adds current lap to previous laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:01:38');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['00:01:38']);
    stopwatch.advanceTime('00:00:44');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['00:01:38', '00:00:44']);
  });

  xtest('lap resets current lap and resumes time tracking', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:08:22');
    stopwatch.lap();
    expect(stopwatch.currentLap).toBe('00:00:00');
    stopwatch.advanceTime('00:00:15');
    expect(stopwatch.currentLap).toBe('00:00:15');
  });

  xtest('lap continues time tracking for total', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:22');
    stopwatch.lap();
    stopwatch.advanceTime('00:00:33');
    expect(stopwatch.total).toBe('00:00:55');
  });

  xtest('lap cannot be called from ready state', () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(() => stopwatch.lap()).toThrow(
      'cannot lap a stopwatch that is not running',
    );
  });

  xtest('lap cannot be called from stopped state', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.stop();
    expect(() => stopwatch.lap()).toThrow(
      'cannot lap a stopwatch that is not running',
    );
  });

  xtest('stop does not change previous laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:11:22');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['00:11:22']);
    stopwatch.stop();
    expect(stopwatch.previousLaps).toEqual(['00:11:22']);
  });

  xtest('reset from stopped state changes state to ready', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.stop();
    stopwatch.reset();
    expect(stopwatch.state).toBe('ready');
  });

  xtest('reset resets current lap', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:10');
    stopwatch.stop();
    stopwatch.reset();
    expect(stopwatch.currentLap).toBe('00:00:00');
  });

  xtest('reset clears previous laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('00:00:10');
    stopwatch.lap();
    stopwatch.advanceTime('00:00:20');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['00:00:10', '00:00:20']);
    stopwatch.stop();
    stopwatch.reset();
    expect(stopwatch.previousLaps).toEqual([]);
  });

  xtest('reset cannot be called from ready state', () => {
    const stopwatch = new SplitSecondStopwatch();
    expect(() => stopwatch.reset()).toThrow(
      'cannot reset a stopwatch that is not stopped',
    );
  });

  xtest('reset cannot be called from running state', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    expect(() => stopwatch.reset()).toThrow(
      'cannot reset a stopwatch that is not stopped',
    );
  });

  xtest('supports very long laps', () => {
    const stopwatch = new SplitSecondStopwatch();
    stopwatch.start();
    stopwatch.advanceTime('01:23:45');
    expect(stopwatch.currentLap).toBe('01:23:45');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['01:23:45']);
    stopwatch.advanceTime('04:01:40');
    expect(stopwatch.currentLap).toBe('04:01:40');
    expect(stopwatch.total).toBe('05:25:25');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual(['01:23:45', '04:01:40']);
    stopwatch.advanceTime('08:43:05');
    expect(stopwatch.currentLap).toBe('08:43:05');
    expect(stopwatch.total).toBe('14:08:30');
    stopwatch.lap();
    expect(stopwatch.previousLaps).toEqual([
      '01:23:45',
      '04:01:40',
      '08:43:05',
    ]);
  });
});
