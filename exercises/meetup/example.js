function getDayIndex(day) {
  const daysInd = {
    sunday: 0,
    monday: 1,
    tuesday: 2,
    wednesday: 3,
    thursday: 4,
    friday: 5,
    saturday: 6,
  };
  return daysInd[day.toLowerCase()];
}

function getCandidates(year, month, dayOfWeek) {
  let d;
  let i;
  const numDaysInMonth = new Date(year, month + 1, 0).getDate();
  const res = [];
  for (i = 0; i < numDaysInMonth; i += 1) {
    d = new Date(year, month, i + 1);
    if (d.getDay() === getDayIndex(dayOfWeek)) {
      res.push(d);
    }
  }
  return res;
}

function find(ary, callback) {
  for (let i = 0; i < ary.length; i += 1) {
    if (callback(ary[i], i, ary)) { return ary[i]; }
  }
  throw new Error('Day not found!');
}

export function meetupDay(year, month, dayOfWeek, which) {
  const candidates = getCandidates(year, month, dayOfWeek);
  let res;

  if (which === 'teenth') {
    res = find(candidates, d => d.getDate() >= 13 && d.getDate() <= 19);
  } else if (which === 'last') {
    res = candidates.pop();
  } else {
    const ordinal = parseInt(which, 10) - 1;
    res = candidates.slice(ordinal, ordinal + 1).pop();
  }

  if (!res) { throw new Error('Day not found!'); }

  return res;
}
