import { Scale } from './scale-generator';

describe('ScaleGenerator', () => {
  describe('Chromatic scales', () => {
    test('Chromatic scale with sharps', () => {
      const expected = [
        'C',
        'C#',
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
        'A',
        'A#',
        'B',
      ];
      expect(new Scale('C').chromatic()).toEqual(expected);
    });

    xtest('Chromatic scale with flats', () => {
      const expected = [
        'F',
        'Gb',
        'G',
        'Ab',
        'A',
        'Bb',
        'B',
        'C',
        'Db',
        'D',
        'Eb',
        'E',
      ];
      expect(new Scale('F').chromatic()).toEqual(expected);
    });

    xtest('Chromatic scale with sharps from D', () => {
      const expected = [
        'D',
        'D#',
        'E',
        'F',
        'F#',
        'G',
        'G#',
        'A',
        'A#',
        'B',
        'C',
        'C#',
      ];
      expect(new Scale('D').chromatic()).toEqual(expected);
    });

    xtest('Chromatic scale with flats from D', () => {
      const expected = [
        'D',
        'Eb',
        'E',
        'F',
        'Gb',
        'G',
        'Ab',
        'A',
        'Bb',
        'B',
        'C',
        'Db',
      ];
      expect(new Scale('d').chromatic()).toEqual(expected);
    });
  });

  describe('Scales with specified intervals', () => {
    xtest('Simple major scale', () => {
      const expected = ['C', 'D', 'E', 'F', 'G', 'A', 'B', 'C'];
      expect(new Scale('C').interval('MMmMMMm')).toEqual(expected);
    });

    xtest('Major scale with sharps', () => {
      const expected = ['G', 'A', 'B', 'C', 'D', 'E', 'F#', 'G'];
      expect(new Scale('G').interval('MMmMMMm')).toEqual(expected);
    });

    xtest('Major scale with flats', () => {
      const expected = ['F', 'G', 'A', 'Bb', 'C', 'D', 'E', 'F'];
      expect(new Scale('F').interval('MMmMMMm')).toEqual(expected);
    });

    xtest('Minor scale with sharps', () => {
      const expected = ['F#', 'G#', 'A', 'B', 'C#', 'D', 'E', 'F#'];
      expect(new Scale('f#').interval('MmMMmMM')).toEqual(expected);
    });

    xtest('Minor scale with flats', () => {
      const expected = ['Bb', 'C', 'Db', 'Eb', 'F', 'Gb', 'Ab', 'Bb'];
      expect(new Scale('bb').interval('MmMMmMM')).toEqual(expected);
    });

    xtest('Dorian mode', () => {
      const expected = ['D', 'E', 'F', 'G', 'A', 'B', 'C', 'D'];
      expect(new Scale('d').interval('MmMMMmM')).toEqual(expected);
    });

    xtest('Phrygian mode', () => {
      const expected = ['E', 'F', 'G', 'A', 'B', 'C', 'D', 'E'];
      expect(new Scale('e').interval('mMMMmMM')).toEqual(expected);
    });

    xtest('Lydian mode', () => {
      const expected = ['A', 'B', 'C#', 'D#', 'E', 'F#', 'G#', 'A'];
      expect(new Scale('a').interval('MMMmMMm')).toEqual(expected);
    });

    xtest('Mixolydian mode', () => {
      const expected = ['Eb', 'F', 'G', 'Ab', 'Bb', 'C', 'Db', 'Eb'];
      expect(new Scale('Eb').interval('MMmMMmM')).toEqual(expected);
    });

    xtest('Locrian mode', () => {
      const expected = ['G', 'Ab', 'Bb', 'C', 'Db', 'Eb', 'F', 'G'];
      expect(new Scale('g').interval('mMMmMMM')).toEqual(expected);
    });

    xtest('Harmonic minor', () => {
      const expected = ['D', 'E', 'F', 'G', 'A', 'Bb', 'Db', 'D'];
      expect(new Scale('d').interval('MmMMmAm')).toEqual(expected);
    });

    xtest('Octatonic', () => {
      const expected = ['C', 'D', 'D#', 'F', 'F#', 'G#', 'A', 'B', 'C'];
      expect(new Scale('C').interval('MmMmMmMm')).toEqual(expected);
    });

    xtest('Hexatonic', () => {
      const expected = ['Db', 'Eb', 'F', 'G', 'A', 'B', 'Db'];
      expect(new Scale('Db').interval('MMMMMM')).toEqual(expected);
    });

    xtest('Pentatonic', () => {
      const expected = ['A', 'B', 'C#', 'E', 'F#', 'A'];
      expect(new Scale('A').interval('MMAMA')).toEqual(expected);
    });

    xtest('Enigmatic', () => {
      const expected = ['G', 'G#', 'B', 'C#', 'D#', 'F', 'F#', 'G'];
      expect(new Scale('G').interval('mAMMMmm')).toEqual(expected);
    });
  });
});
