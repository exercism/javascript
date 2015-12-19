let buffer, bufferMax;

const BufferEmptyException = () => ({
    name: "buffer empty exception!",
    message: "can't read from an empty buffer!"
  });

const BufferFullException = () => ({
    name: "buffer full exception!",
    message: "can't write to a full buffer!"
  });

const read = () => {
  if (buffer.length === 0){
    throw BufferEmptyException();
  }
  return buffer.splice(0,1)[0];
};

const write = (value) => {
  if (buffer.length === bufferMax){
    throw BufferFullException();
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
  }
};

export { CircularBuffer as default };
export { BufferFullException as bufferFullException };
export { BufferEmptyException as bufferEmptyException };
