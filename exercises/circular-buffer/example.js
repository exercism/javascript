let buffer, bufferMax;

export class BufferEmptyError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Buffer is empty.';
  }
};
export class BufferFullError extends Error {
  constructor(message) {
    super();
    this.message = message || 'Buffer is full.';
  }
};

const read = () => {
  if (buffer.length === 0){
    throw new BufferEmptyError();
  }
  return buffer.splice(0,1)[0];
};

const write = (value) => {
  if (buffer.length === bufferMax){
    throw new BufferFullError();
  }
  value ? buffer.push(value) : null;
};

const forceWrite = (value) => {
  if (buffer.length === bufferMax){
    read();
  }
  write(value);
};

const clear = () => buffer = [];

const CircularBuffer = (capacity) => {
  buffer = [];
  bufferMax = capacity;
  return {
    read: read,
    write: write,
    forceWrite: forceWrite,
    clear: clear
  };
};

export { CircularBuffer as default };
