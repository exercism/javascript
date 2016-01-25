export default function meetupDay (year, month, dayOfWeek, which) {

  let candidates = getCandidates(year, month, dayOfWeek);
  let d, i, res;

  which = which.toLowerCase();

  if (which === 'teenth') {
    res = find(candidates, d =>  {
      return 13 <= d.getDate() && d.getDate() <= 19;
    });
  }
  else if (which === 'last') {
    res = candidates.pop();
  }
  else {
    which = parseInt(which) - 1;
    res = candidates.slice(which, which + 1).pop();
  }

  if (!res) { throw new MeetupDayException('Day not found!'); }

  return res;
}

function getCandidates (year, month, dayOfWeek) {
  let d,
    i,
    numDaysInMonth = new Date(year, month + 1, 0).getDate(),
    res = [];

  for (i = 0; i < numDaysInMonth; i++) {
    d = new Date(year, month, i + 1);

    if (d.getDay() === getDayIndex(dayOfWeek)) {
      res.push(d);
    }
  }

  return res;
}

function getDayIndex (day) {
  const daysInd = {
    'sunday': 0,
    'monday': 1,
    'tuesday': 2,
    'wednesday': 3,
    'thursday': 4,
    'friday': 5,
    'saturday': 6
  };

  day = day.toLowerCase();

  return daysInd[day];
}

function find(ary, callback) {
  for (let i = 0; i < ary.length; i++) {
    if (callback(ary[i], i, ary)) { return ary[i]; }
  }
}

function MeetupDayException(message) {
  this.message = message;
  this.name = 'MeetupDayException';
}
