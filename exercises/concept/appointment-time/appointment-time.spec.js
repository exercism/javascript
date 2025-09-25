import { describe, test, expect } from '@jest/globals';

import {
  createAppointment,
  getAppointmentTimestamp,
  getAppointmentDetails,
  isValid,
  updateAppointment,
  timeBetween,
} from './appointment-time';

describe('createAppointment', () => {
  test('uses the passed in current time', () => {
    const currentTime = Date.UTC(2000, 6, 16, 12, 0, 0, 0);
    const result = createAppointment(0, currentTime);

    expect(result).toEqual(new Date(currentTime));
  });

  test('uses the actual current time when it is not passed in', () => {
    const currentTime = Date.now();
    const result = createAppointment(0);

    expect(result).toEqual(new Date(currentTime));
  });

  test('creates appointment without DST change', () => {
    const offset = 4; // days

    const currentTime = Date.UTC(2000, 6, 1, 12, 0, 0, 0);
    const expectedTime = currentTime + offset * 24 * 60 * 60 * 1000;

    expect(createAppointment(offset, currentTime)).toEqual(
      new Date(expectedTime),
    );
  });

  test('creates appointment with potential DST change', () => {
    const offset = 180; // days

    const currentTime = Date.UTC(2000, 6, 1, 12, 0, 0, 0);
    let expectedTime = currentTime + offset * 24 * 60 * 60 * 1000;
    // Manually adjust for DST timezone offset:
    expectedTime +=
      (new Date(expectedTime).getTimezoneOffset() -
        new Date(currentTime).getTimezoneOffset()) *
      60 *
      1000;

    expect(createAppointment(offset, currentTime)).toEqual(
      new Date(expectedTime),
    );
  });

  test('rolls over days, months, and years', () => {
    const currentTime = Date.UTC(1991, 16, 6, 2, 12, 0, 0);
    const result = createAppointment(720, currentTime);

    expect(result.getTime()).toStrictEqual(767326320000);
  });
});

describe('getAppointmentTimestamp', () => {
  test('returns the correct timestamp', () => {
    const currentTime = new Date(Date.UTC(2000, 6, 16, 12, 0, 0, 0));

    expect(getAppointmentTimestamp(currentTime)).toEqual(
      '2000-07-16T12:00:00.000Z',
    );
  });
});

describe('getAppointment', () => {
  test('extracts appointment details', () => {
    expect(getAppointmentDetails('2022-04-24T08:15:00.000')).toStrictEqual({
      year: 2022,
      month: 3,
      date: 24,
      hour: 8,
      minute: 15,
    });
  });
});

describe('updateAppointment', () => {
  test('updates a field', () => {
    expect(
      updateAppointment('2022-02-09T09:20:00.000', { month: 6 }),
    ).toStrictEqual({ year: 2022, month: 6, date: 9, hour: 9, minute: 20 });
  });

  test('update multiple fields', () => {
    expect(
      updateAppointment('2022-11-21T21:20:00.000', {
        year: 2023,
        month: 1,
        date: 12,
        hour: 1,
        minute: 29,
      }),
    ).toStrictEqual({ year: 2023, month: 1, date: 12, hour: 1, minute: 29 });
  });

  test('updates even if option is 0', () => {
    expect(
      updateAppointment('2022-12-17T07:10:00.000', { minute: 0 }),
    ).toStrictEqual({ year: 2022, month: 11, date: 17, hour: 7, minute: 0 });
  });

  test('rolls over values', () => {
    expect(
      updateAppointment('2029-02-28T23:59:00.000', { hour: 24, minute: 60 }),
    ).toStrictEqual({ year: 2029, month: 2, date: 1, hour: 1, minute: 0 });
  });
});

describe('availableTimes', () => {
  test('retrieves number of seconds between two appointments', () => {
    expect(
      timeBetween('2022-12-12T09:20:00.000', '2022-12-18T08:30:00.000'),
    ).toBe(515400);
  });

  test('rounds to seconds', () => {
    expect(
      timeBetween('2024-03-06T09:12:15.180', '2024-03-06T18:15:12.090'),
    ).toBe(32577);
  });
});

describe('isValid', () => {
  test('is true when appointment datetime is in the future', () => {
    expect(isValid('2022-02-11T23:00:00.000', '2022-02-08T23:00:00.000')).toBe(
      true,
    );
  });

  test('is true when appointment date is in the future', () => {
    expect(isValid('2022-02-11', '2022-02-08')).toBe(true);
  });

  test('is false when appointment datetime is in the past', () => {
    expect(isValid('2022-05-20T23:00:00.000', '2023-02-08T23:00:00.000')).toBe(
      false,
    );
  });

  test('is false when appointment date is in the past', () => {
    expect(isValid('2022-05-21', '2022-05-22')).toBe(false);
  });
});
