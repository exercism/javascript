import { rows } from './diamond';

describe('Diamond', () => {
  test("Degenerate case with a single 'A' row", () => {
    expect(rows('A')).toEqual(['A']);
  });

  xtest('Degenerate case with no row containing 3 distinct groups of spaces', () => {
    // prettier-ignore
    expect(rows('B')).toEqual([
      ' A ',
      'B B',
      ' A '
    ]);
  });

  xtest('Smallest non-degenerate case with odd diamond side length', () => {
    // prettier-ignore
    expect(rows('C')).toEqual([
      '  A  ',
      ' B B ',
      'C   C',
      ' B B ',
      '  A  '
    ]);
  });

  xtest('Smallest non-degenerate case with even diamond side length', () => {
    expect(rows('D')).toEqual([
      '   A   ',
      '  B B  ',
      ' C   C ',
      'D     D',
      ' C   C ',
      '  B B  ',
      '   A   ',
    ]);
  });

  xtest('Largest possible diamond', () => {
    expect(rows('Z')).toEqual([
      '                         A                         ',
      '                        B B                        ',
      '                       C   C                       ',
      '                      D     D                      ',
      '                     E       E                     ',
      '                    F         F                    ',
      '                   G           G                   ',
      '                  H             H                  ',
      '                 I               I                 ',
      '                J                 J                ',
      '               K                   K               ',
      '              L                     L              ',
      '             M                       M             ',
      '            N                         N            ',
      '           O                           O           ',
      '          P                             P          ',
      '         Q                               Q         ',
      '        R                                 R        ',
      '       S                                   S       ',
      '      T                                     T      ',
      '     U                                       U     ',
      '    V                                         V    ',
      '   W                                           W   ',
      '  X                                             X  ',
      ' Y                                               Y ',
      'Z                                                 Z',
      ' Y                                               Y ',
      '  X                                             X  ',
      '   W                                           W   ',
      '    V                                         V    ',
      '     U                                       U     ',
      '      T                                     T      ',
      '       S                                   S       ',
      '        R                                 R        ',
      '         Q                               Q         ',
      '          P                             P          ',
      '           O                           O           ',
      '            N                         N            ',
      '             M                       M             ',
      '              L                     L              ',
      '               K                   K               ',
      '                J                 J                ',
      '                 I               I                 ',
      '                  H             H                  ',
      '                   G           G                   ',
      '                    F         F                    ',
      '                     E       E                     ',
      '                      D     D                      ',
      '                       C   C                       ',
      '                        B B                        ',
      '                         A                         ',
    ]);
  });
});
