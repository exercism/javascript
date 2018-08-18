'use strict';

var DnaTranscriber = function () {};

var dnaToRna = {
  G: 'C',
  C: 'G',
  T: 'A',
  A: 'U'
};

var transcribeDna = function (dna, lookupTable) {
  return dna.replace(/./g, function (dnaNucleotide) {
    if (!(dnaNucleotide in lookupTable)) { throw Error('Invalid input'); }
    return lookupTable[dnaNucleotide];
  });
};

DnaTranscriber.prototype.toRna = function (dna) {
  return transcribeDna(dna, dnaToRna);
};

module.exports = DnaTranscriber;
