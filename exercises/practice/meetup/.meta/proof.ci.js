const weekday = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const getDayOfWeekCount = (dayOfWeek) => {
  return weekday.indexOf(dayOfWeek);
};

const getMeetupDay = (year, month, weekOrdinal, dayOfWeek) => {
  let lowerLimit = 1;
  let upperLimit = daysInMonth(year, month);
  switch (weekOrdinal) {
    case 'first':
      upperLimit = 7;
      break;
    case 'second':
      lowerLimit = 8;
      upperLimit = 14;
      break;
    case 'third':
      lowerLimit = 15;
      upperLimit = 21;
      break;
    case 'fourth':
      lowerLimit = 22;
      upperLimit = 28;
      break;
    case 'last':
      lowerLimit = upperLimit - 6;
      break;
    case 'teenth':
      lowerLimit = 13;
      upperLimit = 19;
      break;
  }

  for (let i = lowerLimit; i <= upperLimit; i++) {
    if (
      new Date(year, month - 1, i).getDay() === getDayOfWeekCount(dayOfWeek)
    ) {
      return i;
    }
  }
  throw new Error();
};

export const meetup = (year, month, weekOrdinal, dayOfWeek) => {
  const meetupDay = getMeetupDay(year, month, weekOrdinal, dayOfWeek);
  return new Date(year, month - 1, meetupDay);
};
