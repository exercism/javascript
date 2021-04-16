export class BufferEmptyError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Buffer is empty.';
  }
}
export class BufferFullError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Buffer is full.';
  }
}

// eslint-disable-next-line import/no-default-export
export default class CircularBuffer {
  constructor(capacity) {
    this.buffer = [];
    this.bufferMax = capacity;
  }

  read() {
    if (this.buffer.length === 0) {
      throw new BufferEmptyError();
    }
    return this.buffer.splice(0, 1)[0];
  }

  write(value) {
    if (this.buffer.length === this.bufferMax) {
      throw new BufferFullError();
    }
    return value ? this.buffer.push(value) : null;
  }

  forceWrite(value) {
    if (this.buffer.length === this.bufferMax) {
      this.read();
    }
    this.write(value);
  }

  clear() {
    this.buffer = [];
    return this.buffer;
  }
}
