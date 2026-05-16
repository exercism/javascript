export class SplitSecondStopwatch {
  constructor() {
    this._state = 'ready';
    this._totalSeconds = 0;
    this._currentLap = 0;
    this._previousLaps = [];
  }

  get state() {
    return this._state;
  }

  get currentLap() {
    return this._formatTime(this._currentLap);
  }

  get total() {
    return this._formatTime(this._totalSeconds);
  }

  get previousLaps() {
    return this._previousLaps.map(this._formatTime);
  }

  start() {
    if (this._state === 'running') {
      throw new Error('cannot start an already running stopwatch');
    }
    this._state = 'running';
  }

  stop() {
    if (this._state !== 'running') {
      throw new Error('cannot stop a stopwatch that is not running');
    }
    this._state = 'stopped';
  }

  lap() {
    if (this._state !== 'running') {
      throw new Error('cannot lap a stopwatch that is not running');
    }
    this._previousLaps.push(this._currentLap);
    this._currentLap = 0;
  }

  reset() {
    if (this._state !== 'stopped') {
      throw new Error('cannot reset a stopwatch that is not stopped');
    }
    this._state = 'ready';
    this._totalSeconds = 0;
    this._currentLap = 0;
    this._previousLaps = [];
  }

  advanceTime(duration) {
    if (this._state === 'running') {
      const seconds = this._toSeconds(duration);
      this._currentLap += seconds;
      this._totalSeconds += seconds;
    }
  }

  _toSeconds(duration) {
    const [h, m, s] = duration.split(':').map(Number);
    return h * 3600 + m * 60 + s;
  }

  _formatTime(seconds) {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  }
}
