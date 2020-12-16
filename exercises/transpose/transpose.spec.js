import { transpose } from './transpose';

describe('Transpose', () => {
  test('empty string', () => {
    expect(transpose([])).toEqual([]);
  });

  xtest('two characters in a row', () => {
    const input = ['A1'];
    const expected = ['A', '1'];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('two characters in a column', () => {
    const input = ['A', '1'];
    const expected = ['A1'];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('simple', () => {
    const input = ['ABC', '123'];
    const expected = ['A1', 'B2', 'C3'];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('single line', () => {
    const input = ['Single line.'];
    const expected = [
      'S',
      'i',
      'n',
      'g',
      'l',
      'e',
      ' ',
      'l',
      'i',
      'n',
      'e',
      '.',
    ];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('first line longer than second line', () => {
    const input = ['The fourth line.', 'The fifth line.'];
    const expected = [
      'TT',
      'hh',
      'ee',
      '  ',
      'ff',
      'oi',
      'uf',
      'rt',
      'th',
      'h ',
      ' l',
      'li',
      'in',
      'ne',
      'e.',
      '.',
    ];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('second line longer than first line', () => {
    const input = ['The first line.', 'The second line.'];
    const expected = [
      'TT',
      'hh',
      'ee',
      '  ',
      'fs',
      'ie',
      'rc',
      'so',
      'tn',
      ' d',
      'l ',
      'il',
      'ni',
      'en',
      '.e',
      ' .',
    ];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('square', () => {
    const input = ['HEART', 'EMBER', 'ABUSE', 'RESIN', 'TREND'];
    const expected = ['HEART', 'EMBER', 'ABUSE', 'RESIN', 'TREND'];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('rectangle', () => {
    const input = ['FRACTURE', 'OUTLINED', 'BLOOMING', 'SEPTETTE'];
    const expected = [
      'FOBS',
      'RULE',
      'ATOP',
      'CLOT',
      'TIME',
      'UNIT',
      'RENT',
      'EDGE',
    ];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('triangle', () => {
    const input = ['T', 'EE', 'AAA', 'SSSS', 'EEEEE', 'RRRRRR'];
    const expected = [
      'TEASER',
      ' EASER',
      '  ASER',
      '   SER',
      '    ER',
      '     R',
    ];
    expect(transpose(input)).toEqual(expected);
  });

  xtest('many lines', () => {
    const input = [
      'Chor. Two households, both alike in dignity,',
      'In fair Verona, where we lay our scene,',
      'From ancient grudge break to new mutiny,',
      'Where civil blood makes civil hands unclean.',
      'From forth the fatal loins of these two foes',
      "A pair of star-cross'd lovers take their life;",
      "Whose misadventur'd piteous overthrows",
      "Doth with their death bury their parents' strife.",
      "The fearful passage of their death-mark'd love,",
      "And the continuance of their parents' rage,",
      "Which, but their children's end, naught could remove,",
      "Is now the two hours' traffic of our stage;",
      'The which if you with patient ears attend,',
      'What here shall miss, our toil shall strive to mend.',
    ];
    const expected = [
      'CIFWFAWDTAWITW',
      'hnrhr hohnhshh',
      'o oeopotedi ea',
      'rfmrmash  cn t',
      '.a e ie fthow ',
      ' ia fr weh,whh',
      'Trnco miae  ie',
      'w ciroitr btcr',
      'oVivtfshfcuhhe',
      ' eeih a uote  ',
      'hrnl sdtln  is',
      'oot ttvh tttfh',
      'un bhaeepihw a',
      'saglernianeoyl',
      'e,ro -trsui ol',
      'h uofcu sarhu ',
      'owddarrdan o m',
      "lhg to'egccuwi",
      'deemasdaeehris',
      'sr als t  ists',
      ",ebk 'phool'h,",
      '  reldi ffd   ',
      'bweso tb  rtpo',
      'oea ileutterau',
      't kcnoorhhnatr',
      "hl isvuyee'fi ",
      ' atv es iisfet',
      'ayoior trr ino',
      'l  lfsoh  ecti',
      'ion   vedpn  l',
      'kuehtteieadoe ',
      'erwaharrar,fas',
      '   nekt te  rh',
      'ismdsehphnnosa',
      'ncuse ra-tau l',
      ' et  tormsural',
      "dniuthwea'g t ",
      'iennwesnr hsts',
      'g,ycoi tkrttet',
      "n ,l r s'a anr",
      "i  ef  'dgcgdi",
      't  aol   eoe,v',
      'y  nei sl,u; e',
      ',  .sf to l   ',
      '     e rv d  t',
      '     ; ie    o',
      '       f, r   ',
      '       e  e  m',
      '       .  m  e',
      '          o  n',
      '          v  d',
      '          e  .',
      '          ,',
    ];
    expect(transpose(input)).toEqual(expected);
  });
});
