var dna = require('./nucleotide-count');

describe('DNA', function () {
  it('Empty DNA strand has no adenosine', function () {
    expect(dna().count('A')).toEqual(0);
  });

  xit('Repetitive cytidine gets counted', function () {
    expect(dna('CCCCC').count('C')).toEqual(5);
  });

  xit('Counts only thymidine', function () {
    expect(dna('GGGGGTAACCCGG').count('T')).toEqual(1);
  });

  xit('Counts a nucleotide only once', function () {
    var acid = dna('CGATTGGG');
    acid.count('T');
    acid.count('T');
    expect(acid.count('T')).toEqual(2);
  });

  xit('Empty DNA strand has no nucleotides', function () {
    var expected = {A: 0, T: 0, C: 0, G: 0};
    expect(dna().histogram()).toEqual(expected);
  });

  xit('Repetitive sequence has only guanosine', function () {
    var expected = {A: 0, T: 0, C: 0, G: 8};
    expect(dna('GGGGGGGG').histogram()).toEqual(expected);
  });

  xit('Counts all nucleotides', function () {
    var strand = 'AGCTTTTCATTCTGACTGCAACGGGCAATATGTCTCTGTGTGGATTAAAAAAAGAGTGTCTGATAGCAGC';
    var expected = {A: 20, T: 21, C: 12, G: 17};
    expect(dna(strand).histogram()).toEqual(expected);
  });

  xit('Validates DNA', function () {
    expect(dna.bind(null, 'JOHNNYAPPLESEED')).toThrow();
  });
});
