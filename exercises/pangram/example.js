
var Pangram = function (candidate) {
  var notAlpha = /[^a-z]+/gi;
  var ALPHA_LENGTH = 26;
  var cleaned;
  var unique;

  unique = {};
  cleaned = (candidate.replace(notAlpha, '')).toLowerCase();
  cleaned.split('').forEach(function (el) {
    unique[el] = true;
  });

  return {
    isPangram: function () {
      return Object.keys(unique).length === ALPHA_LENGTH;
    }
  };
};

module.exports = Pangram;
