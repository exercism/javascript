function List(list) {
  this.list = list || [];

  return {
    list: this.list,
    compare: function (other) {
      return {
        '-1': isSublist(other.list, this.list)
          ? 'SUBLIST'
          : 'UNEQUAL',
        '0': isSublist(other.list, this.list)
          ? 'EQUAL'
          : 'UNEQUAL',
        '1': isSublist(this.list, other.list)
          ? 'SUPERLIST'
          : 'UNEQUAL'
      }[lengthDiff(this, other)];
    }
  };
}

function lengthDiff(one, two) {
  return String(Math.sign(one.list.length - two.list.length));
}

function isSublist(one, two) {
  return one.join().match(two.join());
}


module.exports = List;
