class InputCell {
  constructor(value) {
    this.value = value;
    this.updated = true;
    this.subscribers = [];
  }

  setValue(value) {
    if (value !== this.value) {
      this.value = value;
      this.notify();
    }
  }

  notify() {
    this.subscribers.forEach((sub) => {
      sub.markForUpdate();
    });
    this.subscribers.forEach((sub) => {
      sub.update();
    });
  }

  addSubscriber(sub) {
    this.subscribers.push(sub);
  }
}

class ComputeCell {
  constructor(inputCells, fn) {
    this.fn = fn;
    this.inputCells = inputCells;
    this.inputCells.forEach((cell) => {
      cell.addSubscriber(this);
    });
    this.subscribers = [];
    this.value = fn(inputCells);
    this.callbacks = [];
    this.updated = true;
    this.lastValue = this.value;
  }

  update() {
    const value = this.fn(this.inputCells);
    if (value !== this.value) {
      this.value = value;
      this.updated = true;
      this.notify();
    }
  }

  notify() {
    this.subscribers.forEach((sub) => {
      sub.markForUpdate();
    });
    this.subscribers.forEach((sub) => {
      sub.update();
    });
    this.runCallbacks();
  }

  markForUpdate() {
    this.updated = false;
    this.subscribers.forEach((sub) => {
      sub.markForUpdate();
    });
  }

  runCallbacks() {
    if (this.allInputsUpdated() && this.valueChanged()) {
      this.lastValue = this.value;
      this.callbacks.forEach((cb) => {
        cb.run(this);
      });
    }
  }

  allInputsUpdated() {
    return (
      this.inputCells.filter((cell) => cell.updated).length ===
      this.inputCells.length
    );
  }

  valueChanged() {
    return this.lastValue !== this.value;
  }

  addSubscriber(sub) {
    this.subscribers.push(sub);
  }

  addCallback(cb) {
    this.callbacks.push(cb);
  }

  removeCallback(cb) {
    this.callbacks = this.callbacks.filter((c) => c !== cb);
  }
}

class CallbackCell {
  constructor(fn) {
    this.fn = fn;
    this.values = [];
  }

  run(cell) {
    this.values.push(this.fn(cell));
  }
}

export { InputCell, ComputeCell, CallbackCell };
