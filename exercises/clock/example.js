exports.at = at;

var HOURS_IN_A_DAY = 24;
var MINUTES_IN_AN_HOUR = 60;
var MINUTES_IN_A_DAY = HOURS_IN_A_DAY * MINUTES_IN_AN_HOUR;
var MILLIS_IN_A_MINUTE = 60 * 1000;
var MILLIS_IN_AN_HOUR = MINUTES_IN_AN_HOUR * MILLIS_IN_A_MINUTE;
var MILLIS_IN_A_DAY = HOURS_IN_A_DAY * MILLIS_IN_AN_HOUR;

function makePositive(time, maxValue) {
  return time % maxValue + maxValue;
}

function at(inputHours, inputMinutes) {
  var minutes = makePositive(inputMinutes || 0, MINUTES_IN_A_DAY);
  var hours = makePositive(inputHours, HOURS_IN_A_DAY);

  var clock = {};
  var value = (hours * MILLIS_IN_AN_HOUR) + (minutes * MILLIS_IN_A_MINUTE);
  value = makePositive(value, MILLIS_IN_A_DAY);

  clock.valueOf = function () {
    return value;
  };

  clock.toString = function () {
    var time = new Date(value).toISOString().split('T')[1].split(':');
    return time[0] + ':' + time[1];
  };

  clock.plus = function (addMinutes) {
    value += addMinutes * MILLIS_IN_A_MINUTE;
    return clock;
  };

  clock.minus = function (subMinutes) {
    value -= subMinutes * MILLIS_IN_A_MINUTE;
    return clock;
  };

  clock.equals = function (other) {
    return +clock === +other;
  };

  return Object.create(clock);
}
