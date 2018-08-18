'use strict';

module.exports = translate;

function translate(rnaStrand) {
  var proteins = [];

  if (rnaStrand) {
    for (var i = 0; i < rnaStrand.length; i += 3) {
      var protein = getProtein(rnaStrand.substring(i, i + 3));

      if (protein) {
        if (protein === 'STOP') {
          break;
        }

        if (protein === 'INVALID') {
          throw new Error('Invalid codon');
        }

        proteins.push(protein);
      }
    }
  }

  return proteins;
}

function getProtein(codon) {
  switch (codon) {
  case 'AUG':
    return 'Methionine';

  case 'UUU':
  case 'UUC':
    return 'Phenylalanine';

  case 'UUA':
  case 'UUG':
    return 'Leucine';

  case 'UCU':
  case 'UCC':
  case 'UCA':
  case 'UCG':
    return 'Serine';

  case 'UAU':
  case 'UAC':
    return 'Tyrosine';

  case 'UGU':
  case 'UGC':
    return 'Cysteine';

  case 'UGG':
    return 'Tryptophan';

  case 'UAA':
  case 'UAG':
  case 'UGA':
    return 'STOP';

  default:
    return 'INVALID';
  }
}
