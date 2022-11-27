import {
  createAppointment,
  getAppointment,
  isValid,
  updateAppointment,
  availableTimes,
} from './appointment-time';

describe('createAppointment', () => {
  test('creates appointment of 4 days later', () => {
    const currentTime = Date.now();
    expect(createAppointment(4)).toEqual(
      new Date(currentTime + 4 * 24 * 3600 * 1000)
    );
  });

  test('creates appointment of 124 days later', () => {
    const currentTime = Date.now();
    expect(createAppointment(124)).toEqual(
      new Date(currentTime + 124 * 24 * 3600 * 1000)
    );
  });
});

describe('getAppointment', () => {
  test('get appointment detail', () => {
    expect(getAppointment('24 April 2022 10:15 AM')).toEqual({
      year: 2022,
      month: 3,
      date: 24,
      hour: 10,
      minute: 15,
    });
  });
});

describe('updateAppointment', () => {
  test('should update with one option', () => {
    expect(
      updateAppointment('09 February 2022 10:20 am', { month: 6 })
    ).toEqual({ year: 2022, month: 6, date: 9, hour: 10, minute: 20 });
  });

  test('should update with multiple options', () => {
    expect(
      updateAppointment('21 November 2022 10:20 pm', {
        year: 2023,
        month: 1,
        date: 12,
        hour: 1,
        minute: 29,
      })
    ).toEqual({ year: 2023, month: 1, date: 12, hour: 1, minute: 29 });
  });

  test('should update with option with zero as value', () => {
    expect(
      updateAppointment('17 December 2022 8:10 am', { minute: 0 })
    ).toEqual({ year: 2022, month: 11, date: 17, hour: 8, minute: 0 });
  });
});

describe('availableTimes', () => {
  test('get available times between two appointments', () => {
    expect(
      availableTimes('12 December 2022 10:20 am', '18 December 2022 9:30 am')
    ).toBe(515400000);
  });
});

describe('isValid', () => {
  test('appointmentTime is greater than currentTime', () => {
    expect(isValid('12 February 2022', '9 February 2022')).toEqual(
      'The appointment is valid.'
    );
  });

  test('appointmentTime is less than currentTime', () => {
    expect(isValid('20 May 2022', '21 May 2022')).toEqual(
      'The appointment is not valid anymore.'
    );
  });
});
