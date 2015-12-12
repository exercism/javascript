import meetupDay from './meetup';

function MeetupDayException(message) {
   this.message = message;
   this.name = 'MeetupDayException';
}

describe('meetupDay()', () => {
  it('test_monteenth_of_may_2013', () => {
    expect(meetupDay(2013, 4, 'Monday', 'teenth')).toEqual(new Date(2013, 4, 13));
  });

  xit('test_saturteenth_of_february_2013', () => {
    expect(meetupDay(2013, 1, 'Saturday', 'teenth')).toEqual(new Date(2013, 1, 16));
  });

  xit('test_first_tuesday_of_may_2013', () => {
    expect(meetupDay(2013, 4, 'Tuesday', '1st')).toEqual(new Date(2013, 4, 7));
  });

  xit('test_second_monday_of_april_2013', () => {
    expect(meetupDay(2013, 3, 'Monday', '2nd')).toEqual(new Date(2013, 3, 8));
  });

  xit('test_third_thursday_of_september_2013', () => {
    expect(meetupDay(2013, 8, 'Thursday', '3rd')).toEqual(new Date(2013, 8, 19));
  });

  xit('test_fourth_sunday_of_march_2013', () => {
    expect(meetupDay(2013, 2, 'Sunday', '4th')).toEqual(new Date(2013, 2, 24));
  });

  xit('test_last_thursday_of_october_2013', () => {
    expect(meetupDay(2013, 9, 'Thursday', 'last')).toEqual(new Date(2013, 9, 31));
  });

  xit('test_last_wednesday_of_february_2012', () => {
    expect(meetupDay(2012, 1, 'Wednesday', 'last')).toEqual(new Date(2012, 1, 29));
  });

  xit('test_last_wednesday_of_december_2014', () => {
    expect(meetupDay(2014, 11, 'Wednesday', 'last')).toEqual(new Date(2014, 11, 31));
  });

  xit('test_last_sunday_of_only_four_week_february_2015', () => {
    expect(meetupDay(2015, 1, 'Sunday', 'last')).toEqual(new Date(2015, 1, 22));
  });

  xit('test_first_friday_of_december_2012', () => {
    expect(meetupDay(2012, 11, 'Friday', '1st')).toEqual(new Date(2012, 11, 7));
  });

  xit('test_fifth_monday_of_march_2015', () => {
    expect(meetupDay(2015, 2, 'Monday', '5th')).toEqual(new Date(2015, 2, 30));
  });

  xit('test_nonexistent_fifth_monday_of_february_2015', () => {
    expect( () => { meetupDay(2015, 1, 'Monday', '5th'); }).toThrow();
  });
});
