export class Clock {
  constructor(hour = 0, minute = 0) {
    this.hour = this.normalizeHour(hour + Math.floor(minute / 60));
    this.minute = ((minute % 60) + 60) % 60;
  }

  normalizeHour(hour) {
    return ((hour % 24) + 24) % 24;
  }

  toString() {
    const hourStr = this.hour.toString().padStart(2, '0');
    const minuteStr = this.minute.toString().padStart(2, '0');
    return `${hourStr}:${minuteStr}`;
  }

  plus(mins) {
    while (this.minute + mins >= 60) {
      this.hour = this.normalizeHour(this.hour + 1);
      mins -= 60;
    }

    this.minute += mins;

    return this;
  }

  minus(mins) {
    this.minute -= mins;

    while (this.minute < 0) {
      this.minute += 60;
      this.hour = this.normalizeHour(this.hour - 1);
    }

    return this;
  }

  equals(other) {
    return this.hour === other.hour && this.minute === other.minute;
  }
}
