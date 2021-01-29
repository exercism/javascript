import { meetup } from './meetup';

describe('Meetup', () => {
  test('monteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Monday')).toEqual(new Date(2013, 4, 13));
  });

  xtest('monteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Monday')).toEqual(new Date(2013, 7, 19));
  });

  xtest('monteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Monday')).toEqual(new Date(2013, 8, 16));
  });

  xtest('tuesteenth of March 2013', () => {
    expect(meetup(2013, 3, 'teenth', 'Tuesday')).toEqual(new Date(2013, 2, 19));
  });

  xtest('tuesteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Tuesday')).toEqual(new Date(2013, 3, 16));
  });

  xtest('tuesteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Tuesday')).toEqual(new Date(2013, 7, 13));
  });

  xtest('wednesteenth of January 2013', () => {
    expect(meetup(2013, 1, 'teenth', 'Wednesday')).toEqual(
      new Date(2013, 0, 16)
    );
  });

  xtest('wednesteenth of February 2013', () => {
    expect(meetup(2013, 2, 'teenth', 'Wednesday')).toEqual(
      new Date(2013, 1, 13)
    );
  });

  xtest('wednesteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Wednesday')).toEqual(
      new Date(2013, 5, 19)
    );
  });

  xtest('thursteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Thursday')).toEqual(
      new Date(2013, 4, 16)
    );
  });

  xtest('thursteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Thursday')).toEqual(
      new Date(2013, 5, 13)
    );
  });

  xtest('thursteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Thursday')).toEqual(
      new Date(2013, 8, 19)
    );
  });

  xtest('friteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Friday')).toEqual(new Date(2013, 3, 19));
  });

  xtest('friteenth of August 2013', () => {
    expect(meetup(2013, 8, 'teenth', 'Friday')).toEqual(new Date(2013, 7, 16));
  });

  xtest('friteenth of September 2013', () => {
    expect(meetup(2013, 9, 'teenth', 'Friday')).toEqual(new Date(2013, 8, 13));
  });

  xtest('saturteenth of February 2013', () => {
    expect(meetup(2013, 2, 'teenth', 'Saturday')).toEqual(
      new Date(2013, 1, 16)
    );
  });

  xtest('saturteenth of April 2013', () => {
    expect(meetup(2013, 4, 'teenth', 'Saturday')).toEqual(
      new Date(2013, 3, 13)
    );
  });

  xtest('saturteenth of October 2013', () => {
    expect(meetup(2013, 10, 'teenth', 'Saturday')).toEqual(
      new Date(2013, 9, 19)
    );
  });

  xtest('sunteenth of May 2013', () => {
    expect(meetup(2013, 5, 'teenth', 'Sunday')).toEqual(new Date(2013, 4, 19));
  });

  xtest('sunteenth of June 2013', () => {
    expect(meetup(2013, 6, 'teenth', 'Sunday')).toEqual(new Date(2013, 5, 16));
  });

  xtest('sunteenth of October 2013', () => {
    expect(meetup(2013, 10, 'teenth', 'Sunday')).toEqual(new Date(2013, 9, 13));
  });

  xtest('first Monday of March 2013', () => {
    expect(meetup(2013, 3, 'first', 'Monday')).toEqual(new Date(2013, 2, 4));
  });

  xtest('first Monday of April 2013', () => {
    expect(meetup(2013, 4, 'first', 'Monday')).toEqual(new Date(2013, 3, 1));
  });

  xtest('first Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'first', 'Tuesday')).toEqual(new Date(2013, 4, 7));
  });

  xtest('first Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'first', 'Tuesday')).toEqual(new Date(2013, 5, 4));
  });

  xtest('first Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'first', 'Wednesday')).toEqual(new Date(2013, 6, 3));
  });

  xtest('first Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'first', 'Wednesday')).toEqual(new Date(2013, 7, 7));
  });

  xtest('first Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'first', 'Thursday')).toEqual(new Date(2013, 8, 5));
  });

  xtest('first Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'first', 'Thursday')).toEqual(new Date(2013, 9, 3));
  });

  xtest('first Friday of November 2013', () => {
    expect(meetup(2013, 11, 'first', 'Friday')).toEqual(new Date(2013, 10, 1));
  });

  xtest('first Friday of December 2013', () => {
    expect(meetup(2013, 12, 'first', 'Friday')).toEqual(new Date(2013, 11, 6));
  });

  xtest('first Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'first', 'Saturday')).toEqual(new Date(2013, 0, 5));
  });

  xtest('first Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'first', 'Saturday')).toEqual(new Date(2013, 1, 2));
  });

  xtest('first Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'first', 'Sunday')).toEqual(new Date(2013, 2, 3));
  });

  xtest('first Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'first', 'Sunday')).toEqual(new Date(2013, 3, 7));
  });

  xtest('second Monday of March 2013', () => {
    expect(meetup(2013, 3, 'second', 'Monday')).toEqual(new Date(2013, 2, 11));
  });

  xtest('second Monday of April 2013', () => {
    expect(meetup(2013, 4, 'second', 'Monday')).toEqual(new Date(2013, 3, 8));
  });

  xtest('second Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'second', 'Tuesday')).toEqual(new Date(2013, 4, 14));
  });

  xtest('second Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'second', 'Tuesday')).toEqual(new Date(2013, 5, 11));
  });

  xtest('second Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'second', 'Wednesday')).toEqual(
      new Date(2013, 6, 10)
    );
  });

  xtest('second Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'second', 'Wednesday')).toEqual(
      new Date(2013, 7, 14)
    );
  });

  xtest('second Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'second', 'Thursday')).toEqual(
      new Date(2013, 8, 12)
    );
  });

  xtest('second Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'second', 'Thursday')).toEqual(
      new Date(2013, 9, 10)
    );
  });

  xtest('second Friday of November 2013', () => {
    expect(meetup(2013, 11, 'second', 'Friday')).toEqual(new Date(2013, 10, 8));
  });

  xtest('second Friday of December 2013', () => {
    expect(meetup(2013, 12, 'second', 'Friday')).toEqual(
      new Date(2013, 11, 13)
    );
  });

  xtest('second Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'second', 'Saturday')).toEqual(
      new Date(2013, 0, 12)
    );
  });

  xtest('second Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'second', 'Saturday')).toEqual(new Date(2013, 1, 9));
  });

  xtest('second Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'second', 'Sunday')).toEqual(new Date(2013, 2, 10));
  });

  xtest('second Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'second', 'Sunday')).toEqual(new Date(2013, 3, 14));
  });

  xtest('third Monday of March 2013', () => {
    expect(meetup(2013, 3, 'third', 'Monday')).toEqual(new Date(2013, 2, 18));
  });

  xtest('third Monday of April 2013', () => {
    expect(meetup(2013, 4, 'third', 'Monday')).toEqual(new Date(2013, 3, 15));
  });

  xtest('third Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'third', 'Tuesday')).toEqual(new Date(2013, 4, 21));
  });

  xtest('third Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'third', 'Tuesday')).toEqual(new Date(2013, 5, 18));
  });

  xtest('third Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'third', 'Wednesday')).toEqual(
      new Date(2013, 6, 17)
    );
  });

  xtest('third Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'third', 'Wednesday')).toEqual(
      new Date(2013, 7, 21)
    );
  });

  xtest('third Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'third', 'Thursday')).toEqual(new Date(2013, 8, 19));
  });

  xtest('third Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'third', 'Thursday')).toEqual(
      new Date(2013, 9, 17)
    );
  });

  xtest('third Friday of November 2013', () => {
    expect(meetup(2013, 11, 'third', 'Friday')).toEqual(new Date(2013, 10, 15));
  });

  xtest('third Friday of December 2013', () => {
    expect(meetup(2013, 12, 'third', 'Friday')).toEqual(new Date(2013, 11, 20));
  });

  xtest('third Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'third', 'Saturday')).toEqual(new Date(2013, 0, 19));
  });

  xtest('third Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'third', 'Saturday')).toEqual(new Date(2013, 1, 16));
  });

  xtest('third Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'third', 'Sunday')).toEqual(new Date(2013, 2, 17));
  });

  xtest('third Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'third', 'Sunday')).toEqual(new Date(2013, 3, 21));
  });

  xtest('fourth Monday of March 2013', () => {
    expect(meetup(2013, 3, 'fourth', 'Monday')).toEqual(new Date(2013, 2, 25));
  });

  xtest('fourth Monday of April 2013', () => {
    expect(meetup(2013, 4, 'fourth', 'Monday')).toEqual(new Date(2013, 3, 22));
  });

  xtest('fourth Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'fourth', 'Tuesday')).toEqual(new Date(2013, 4, 28));
  });

  xtest('fourth Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'fourth', 'Tuesday')).toEqual(new Date(2013, 5, 25));
  });

  xtest('fourth Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'fourth', 'Wednesday')).toEqual(
      new Date(2013, 6, 24)
    );
  });

  xtest('fourth Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'fourth', 'Wednesday')).toEqual(
      new Date(2013, 7, 28)
    );
  });

  xtest('fourth Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'fourth', 'Thursday')).toEqual(
      new Date(2013, 8, 26)
    );
  });

  xtest('fourth Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'fourth', 'Thursday')).toEqual(
      new Date(2013, 9, 24)
    );
  });

  xtest('fourth Friday of November 2013', () => {
    expect(meetup(2013, 11, 'fourth', 'Friday')).toEqual(
      new Date(2013, 10, 22)
    );
  });

  xtest('fourth Friday of December 2013', () => {
    expect(meetup(2013, 12, 'fourth', 'Friday')).toEqual(
      new Date(2013, 11, 27)
    );
  });

  xtest('fourth Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'fourth', 'Saturday')).toEqual(
      new Date(2013, 0, 26)
    );
  });

  xtest('fourth Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'fourth', 'Saturday')).toEqual(
      new Date(2013, 1, 23)
    );
  });

  xtest('fourth Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'fourth', 'Sunday')).toEqual(new Date(2013, 2, 24));
  });

  xtest('fourth Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'fourth', 'Sunday')).toEqual(new Date(2013, 3, 28));
  });

  xtest('last Monday of March 2013', () => {
    expect(meetup(2013, 3, 'last', 'Monday')).toEqual(new Date(2013, 2, 25));
  });

  xtest('last Monday of April 2013', () => {
    expect(meetup(2013, 4, 'last', 'Monday')).toEqual(new Date(2013, 3, 29));
  });

  xtest('last Tuesday of May 2013', () => {
    expect(meetup(2013, 5, 'last', 'Tuesday')).toEqual(new Date(2013, 4, 28));
  });

  xtest('last Tuesday of June 2013', () => {
    expect(meetup(2013, 6, 'last', 'Tuesday')).toEqual(new Date(2013, 5, 25));
  });

  xtest('last Wednesday of July 2013', () => {
    expect(meetup(2013, 7, 'last', 'Wednesday')).toEqual(new Date(2013, 6, 31));
  });

  xtest('last Wednesday of August 2013', () => {
    expect(meetup(2013, 8, 'last', 'Wednesday')).toEqual(new Date(2013, 7, 28));
  });

  xtest('last Thursday of September 2013', () => {
    expect(meetup(2013, 9, 'last', 'Thursday')).toEqual(new Date(2013, 8, 26));
  });

  xtest('last Thursday of October 2013', () => {
    expect(meetup(2013, 10, 'last', 'Thursday')).toEqual(new Date(2013, 9, 31));
  });

  xtest('last Friday of November 2013', () => {
    expect(meetup(2013, 11, 'last', 'Friday')).toEqual(new Date(2013, 10, 29));
  });

  xtest('last Friday of December 2013', () => {
    expect(meetup(2013, 12, 'last', 'Friday')).toEqual(new Date(2013, 11, 27));
  });

  xtest('last Saturday of January 2013', () => {
    expect(meetup(2013, 1, 'last', 'Saturday')).toEqual(new Date(2013, 0, 26));
  });

  xtest('last Saturday of February 2013', () => {
    expect(meetup(2013, 2, 'last', 'Saturday')).toEqual(new Date(2013, 1, 23));
  });

  xtest('last Sunday of March 2013', () => {
    expect(meetup(2013, 3, 'last', 'Sunday')).toEqual(new Date(2013, 2, 31));
  });

  xtest('last Sunday of April 2013', () => {
    expect(meetup(2013, 4, 'last', 'Sunday')).toEqual(new Date(2013, 3, 28));
  });

  xtest('last Wednesday of February 2012', () => {
    expect(meetup(2012, 2, 'last', 'Wednesday')).toEqual(new Date(2012, 1, 29));
  });

  xtest('last Wednesday of December 2014', () => {
    expect(meetup(2014, 12, 'last', 'Wednesday')).toEqual(
      new Date(2014, 11, 31)
    );
  });

  xtest('last Sunday of February 2015', () => {
    expect(meetup(2015, 2, 'last', 'Sunday')).toEqual(new Date(2015, 1, 22));
  });

  xtest('first Friday of December 2012', () => {
    expect(meetup(2012, 12, 'first', 'Friday')).toEqual(new Date(2012, 11, 7));
  });
});
