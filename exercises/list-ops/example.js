'use strict';

function List(arr) {
  this.values = arr || [];
}

List.prototype = {
  append: function (otherList) {
    var appended = this.values;

    for (var i = 0; i < otherList.length(); i++) {
      appended.push(otherList.values[i]);
    }

    return new List(appended);
  },

  concat: function (otherList) {
    return this.append(otherList);
  },

  cons: function (item, arr) {
    var x = new List([item]);
    var xs = new List(arr);
    return x.append(xs).values;
  },

  foldl: function (func, start) {
    var acc = start;

    for (var i = 0; i < this.length(); i++) {
      acc = func(this.values[i], acc);
    }

    return acc;
  },

  foldr: function (func, start) {
    var acc = start;

    for (var i = this.length() - 1; i >= 0; i--) {
      acc = func(this.values[i], acc);
    }

    return acc;
  },

  length: function () {
    var count = 0;
    this.values.forEach(function () { count++; });

    return count;
  },

  reverse: function () {
    return new List(this.foldl(this.cons, []));
  },

  map: function (func) {
    var applyFuncThenCons = function (x, acc) {
      return this.cons(func(x), acc);
    };

    return new List(this.foldr(applyFuncThenCons.bind(this), []));
  },

  filter: function (pred) {
    var consIfPred = function (x, acc) {
      return pred(x) ? this.cons(x, acc) : acc;
    };

    return new List(this.foldr(consIfPred.bind(this), []));
  }
};

module.exports = List;
