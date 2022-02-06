import CircularBuffer, {
  BufferFullError,
  BufferEmptyError,
} from './circular-buffer';

describe('CircularBuffer', () => {
  test('reading empty buffer should fail', () => {
    const buffer = new CircularBuffer(1);
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });

  test('can read an item just written', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
  });

  test('each item may only be read once', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });

  test('items are read in the order they are written', () => {
    const buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    expect(buffer.read()).toBe('1');
    expect(buffer.read()).toBe('2');
  });

  test("full buffer can't be written to", () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(() => buffer.write(2)).toThrow(BufferFullError);
  });

  test('a read frees up capacity for another write', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    expect(buffer.read()).toBe('1');
    buffer.write('2');
    expect(buffer.read()).toBe('2');
  });

  test('read position is maintained even across multiple writes', () => {
    const buffer = new CircularBuffer(3);
    buffer.write('1');
    buffer.write('2');
    expect(buffer.read()).toBe('1');
    buffer.write('3');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('3');
  });

  test("items cleared out of buffer can't be read", () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    buffer.clear();
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });

  test('clear frees up capacity for another write', () => {
    const buffer = new CircularBuffer(1);
    buffer.write('1');
    buffer.clear();
    buffer.write('2');
    expect(buffer.read()).toBe('2');
  });

  test('clear does nothing on empty buffer', () => {
    const buffer = new CircularBuffer(1);
    buffer.clear();
    buffer.write('1');
    expect(buffer.read()).toBe('1');
  });

  test('forceWrite acts like write on non-full buffer', () => {
    const buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.forceWrite('2');
    expect(buffer.read()).toBe('1');
    expect(buffer.read()).toBe('2');
  });

  test('forceWrite replaces the oldest item on full buffer', () => {
    const buffer = new CircularBuffer(2);
    buffer.write('1');
    buffer.write('2');
    buffer.forceWrite('3');
    expect(buffer.read()).toBe('2');
    expect(buffer.read()).toBe('3');
  });

  test('forceWrite replaces the oldest item remaining in buffer following a read', () => {
    const buffer = new CircularBuffer(3);
    buffer.write('1');
    buffer.write('2');
    buffer.write('3');
    expect(buffer.read()).toBe('1');
    buffer.write('4');
    buffer.forceWrite('5');
    expect(buffer.read()).toBe('3');
    expect(buffer.read()).toBe('4');
    expect(buffer.read()).toBe('5');
  });

  test('initial clear does not affect wrapping around', () => {
    const buffer = new CircularBuffer(2);
    buffer.clear();
    buffer.write('1');
    buffer.write('2');
    buffer.forceWrite('3');
    buffer.forceWrite('4');
    expect(buffer.read()).toBe('3');
    expect(buffer.read()).toBe('4');
    expect(() => buffer.read()).toThrow(BufferEmptyError);
  });
});
