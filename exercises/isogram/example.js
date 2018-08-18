module.exports = function (word) {
  this.word = word.replace(/ |-/g, '');

  this.isIsogram = function () {
    var unique = this.word.toLowerCase().split('').filter(function (element, index, self) {
      return self.indexOf(element) === index;
    });

    return unique.length === this.word.length;
  };
};
