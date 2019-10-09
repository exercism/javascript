//
// This is only a SKELETON file for the 'Circular Buffer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

class CircularBuffer {
  write() {
    throw new Error("Remove this statement and implement this function");
  }

  read() {
    throw new Error("Remove this statement and implement this function");
  }

  forceWrite() {
    throw new Error("Remove this statement and implement this function");
  }
}

export default () => {
  // Complete this with the code for the exercise.
  return new CircularBuffer();
}

export const BufferFullError = new Error("Error: Buffer is full");

export const BufferEmptyError = new Error("Error: Buffer is empty");
