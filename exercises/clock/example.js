export default function (hour, minute) {
  const MINUTESPERDAY = 1440;
  const HOURSPERDAY = 24;

  const clock = {
    hour,
    minute: minute || 0,
  };

  function formatNum(num) {
    const numString = num.toString();
    return numString.length === 1 ? `0${numString}` : numString;
  }

  function adjustTime(delta) {
    delta = Math.abs(delta) >= MINUTESPERDAY ? delta % MINUTESPERDAY : delta;

    const currentMinutes = clock.hour * 60 + clock.minute;
    let newMinutes = (currentMinutes + delta) % MINUTESPERDAY;

    newMinutes = newMinutes < 0 ? newMinutes += MINUTESPERDAY : newMinutes;

    clock.hour = Math.floor(newMinutes / 60) % HOURSPERDAY;
    clock.minute = newMinutes - clock.hour * 60;
  }

  adjustTime(0);

  return {
    clock,
    toString: () => `${formatNum(clock.hour)}:${formatNum(clock.minute)}`,
    plus(minutes) { adjustTime(minutes); return this; },
    minus(minutes) { adjustTime(-minutes); return this; },
    equals: otherClock => clock.hour === otherClock.clock.hour &&
                          clock.minute === otherClock.clock.minute,
  };
}
