import { describe, expect, test } from '@jest/globals';
import { birdsInWeek, fixBirdCountLog, totalBirdCount } from './bird-watcher';

const customInspectSymbol = Symbol.for('nodejs.util.inspect.custom');
const customLogSymbol = Symbol.for('exercism.javascript.util.log');

// Follow the instructions in case you are stuck on "list.method is not a function"
class CountingReport {
  constructor(counts) {
    // Enables array[index]
    counts.forEach((count, index) => {
      this[index] = count;
    });

    // Enables .length
    this.length = counts.length;
  }

  // Log value in non-upgraded environments
  toString() {
    return arrayOf(this).toString();
  }

  // Overrides logging in node (ie. students working locally)
  [customInspectSymbol]() {
    return `Seen birds per day: ${arrayOf(this)}`;
  }

  // Overrides log overrides in web environment (ie. students working in editor)
  [customLogSymbol]() {
    return `Seen birds per day: ${arrayOf(this)}`;
  }
}

function report(...values) {
  return new CountingReport(values);
}

function arrayOf(countingReport) {
  return Array.from(
    { length: countingReport.length },
    (_, i) => countingReport[i],
  );
}

function randomArray(length) {
  return Array.from({ length }, () => Math.floor(Math.random() * 8));
}

describe('totalBirdCount', () => {
  test('calculates the correct total number of birds', () => {
    const birdsPerDay = report(9, 0, 8, 4, 5, 1, 3);
    expect(totalBirdCount(birdsPerDay)).toBe(30);
  });

  test('works for a short bird count list', () => {
    const birdsPerDay = report(2);
    expect(totalBirdCount(birdsPerDay)).toBe(2);
  });

  test('works for a long bird count list', () => {
    // prettier-ignore
    const birdsPerDay = report(
      2, 8, 4, 1, 3, 5, 0, 4, 1, 6, 0, 3, 0, 1, 5, 4, 1, 1, 2, 6
    );

    expect(totalBirdCount(birdsPerDay)).toBe(57);
  });
});

describe('birdsInWeek', () => {
  test('calculates the number of birds in the first week', () => {
    const birdsPerDay = report(3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0, 8, 0);
    expect(birdsInWeek(birdsPerDay, 1)).toBe(14);
  });

  test('calculates the number of birds for a week in the middle of the log', () => {
    // prettier-ignore
    const birdsPerDay = report(4, 7, 3, 2, 1, 1, 2, 0, 2, 3, 2, 7, 1, 3, 0, 6, 5, 3, 7, 2, 3);
    expect(birdsInWeek(birdsPerDay, 2)).toBe(18);
  });

  test('works when there is only one week', () => {
    const birdsPerDay = report(3, 0, 3, 3, 2, 1, 0);
    expect(birdsInWeek(birdsPerDay, 1)).toBe(12);
  });

  test('works for a long bird count list', () => {
    const week21 = report(2, 0, 1, 4, 1, 3, 0);
    const birdsPerDay = report(
      ...randomArray(20 * 7)
        .concat(arrayOf(week21))
        .concat(randomArray(10 * 7)),
    );

    expect(birdsInWeek(birdsPerDay, 21)).toBe(11);
  });
});

describe('fixBirdCountLog', () => {
  test('returns a bird count list with the corrected values', () => {
    const birdsPerDay = report(3, 0, 5, 1, 0, 4, 1, 0, 3, 4, 3, 0);
    const expected = [4, 0, 6, 1, 1, 4, 2, 0, 4, 4, 4, 0];
    fixBirdCountLog(birdsPerDay);

    expect(arrayOf(birdsPerDay)).toEqual(expected);
  });

  test('works for a short bird count list', () => {
    const birdsPerDay = report(4, 2);
    fixBirdCountLog(birdsPerDay);

    expect(arrayOf(birdsPerDay)).toEqual([5, 2]);
  });

  test('works for a long bird count list', () => {
    // prettier-ignore
    const birdsPerDay = report(
      2, 8, 4, 1, 3, 5, 0, 4, 1, 6, 0, 3, 0, 1, 5, 4, 1, 1, 2, 6
    );

    // prettier-ignore
    const expected = [
      3, 8, 5, 1, 4, 5, 1, 4, 2, 6, 1, 3, 1, 1, 6, 4, 2, 1, 3, 6
    ]

    fixBirdCountLog(birdsPerDay);
    expect(arrayOf(birdsPerDay)).toEqual(expected);
  });
});
