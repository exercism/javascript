function Element(value, next) {
  if (!(this instanceof Element)) {
    throw new Error('Element is a constructor.');
  }

  if (typeof value === 'undefined') {
    throw new Error('Value required.');
  }

  if (typeof next !== 'undefined' && !(next instanceof Element)) {
    throw new Error('A Element instance as next value is required.');
  }

  this.value = value;
  this.next = next;
}

function List() {}

List.prototype.push = function (value) {
  if (typeof value === 'undefined') {
    throw new Error('Argument required.');
  }

  var newEl = (value instanceof Element)
    ? value
    : new Element(value);

  if (!this.head) {
    this.head = newEl;
    return;
  }

  var lastEl = this.head;
  while (lastEl.next) {
    lastEl = lastEl.next;
  }

  lastEl.next = newEl;
};

List.prototype.unshift = function (value) {
  if (typeof value === 'undefined') {
    throw new Error('Argument required.');
  }

  var newEl = (value instanceof Element)
    ? value
    : new Element(value);

  newEl.next = this.head;
  this.head = newEl;
};

List.prototype.shift = function () {
  if (!this.head) {
    return;
  }

  this.head = this.head.next;
};

List.prototype.pop = function () {
  if (!this.head) {
    return;
  }

  var penultEl;
  var lastEl = this.head;
  while (lastEl.next) {
    penultEl = lastEl;
    lastEl = lastEl.next;
  }

  /* eslint-disable no-undefined */
  if (!penultEl) {
    this.head = undefined;
  } else {
    penultEl.next = undefined;
  }
  /* eslint-enable no-undefined */
};

List.prototype.reverse = function () {
  if (!this.head) {
    return;
  }

  var current;
  var previous;
  while (this.head) {
    current = this.head;
    this.shift();
    current.next = previous;
    previous = current;
  }

  this.head = previous;
};

List.prototype.toArray = function () {
  var array = [];
  var current = this.head;

  while (current) {
    array.push(current.value);
    current = current.next;
  }

  return array;
};

List.fromArray = function (array) {
  var list = new List();
  array.forEach(function (item) {
    list.push(new Element(item));
  });

  return list;
};

exports.List = List;
exports.Element = Element;
