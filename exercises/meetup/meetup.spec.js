import { meetupDay } from './meetup';

describe('meetupDay()', () => {
  test('test monteenth of may 2013', () => {
    expect(meetupDay(2013, 4, 'Monday', 'teenth')).toEqual(new Date(2013, 4, 13));
  });

  xtest('test saturteenth of february 2013', () => {
    expect(meetupDay(2013, 1, 'Saturday', 'teenth')).toEqual(new Date(2013, 1, 16));
  });

  xtest('test first tuesday of may 2013', () => {
    expect(meetupDay(2013, 4, 'Tuesday', '1st')).toEqual(new Date(2013, 4, 7));
  });

  xtest('test second monday of april 2013', () => {
    expect(meetupDay(2013, 3, 'Monday', '2nd')).toEqual(new Date(2013, 3, 8));
  });

  xtest('test third thursday of september 2013', () => {
    expect(meetupDay(2013, 8, 'Thursday', '3rd')).toEqual(new Date(2013, 8, 19));
  });

  xtest('test fourth sunday of march 2013', () => {
    expect(meetupDay(2013, 2, 'Sunday', '4th')).toEqual(new Date(2013, 2, 24));
  });

  xtest('test last thursday of october 2013', () => {
    expect(meetupDay(2013, 9, 'Thursday', 'last')).toEqual(new Date(2013, 9, 31));
  });

  xtest('test last wednesday of february 2012', () => {
    expect(meetupDay(2012, 1, 'Wednesday', 'last')).toEqual(new Date(2012, 1, 29));
  });

  xtest('test last wednesday of december 2014', () => {
    expect(meetupDay(2014, 11, 'Wednesday', 'last')).toEqual(new Date(2014, 11, 31));
  });

  xtest('test last sunday of only four week february 2015', () => {
    expect(meetupDay(2015, 1, 'Sunday', 'last')).toEqual(new Date(2015, 1, 22));
  });

  xtest('test first friday of december 2012', () => {
    expect(meetupDay(2012, 11, 'Friday', '1st')).toEqual(new Date(2012, 11, 7));
  });

  xtest('test fifth monday of march 2015', () => {
    expect(meetupDay(2015, 2, 'Monday', '5th')).toEqual(new Date(2015, 2, 30));
  });

  xtest('test nonexistent fifth monday of february 2015', () => {
    expect(() => {
      meetupDay(2015, 1, 'Monday', '5th');
    }).toThrow();
  });
});
