export class Scale {
  constructor(tonic) {
    this.INTERVAL_STEPS = ['m', 'M', 'A'];
    this.SHARPS_SCALE = [
      'A',
      'A#',
      'B',
      'C',
      'C#',
      'D',
      'D#',
      'E',
      'F',
      'F#',
      'G',
      'G#',
    ];
    this.FLATS_SCALE = [
      'A',
      'Bb',
      'B',
      'C',
      'Db',
      'D',
      'Eb',
      'E',
      'F',
      'Gb',
      'G',
      'Ab',
    ];
    this.USE_FLATS = [
      'F',
      'Bb',
      'Eb',
      'Ab',
      'Db',
      'Gb',
      'd',
      'g',
      'c',
      'f',
      'bb',
      'eb',
    ];

    this.tonic = tonic.slice(0, 1).toUpperCase() + tonic.slice(1);
    // note use of original tonic argument
    this.chromaticScale = this.USE_FLATS.includes(tonic)
      ? this.FLATS_SCALE
      : this.SHARPS_SCALE;
  }

  chromatic() {
    return this.reorderChromaticScale();
  }

  interval(intervals) {
    const scale = this.reorderChromaticScale();
    const result = [];
    let currentIndex = 0;

    for (const step of intervals) {
      result.push(scale[currentIndex]);
      currentIndex = currentIndex + (this.INTERVAL_STEPS.indexOf(step) + 1);
    }
    return result;
  }

  reorderChromaticScale() {
    const tonicIndex = this.chromaticScale.indexOf(this.tonic);
    return this.chromaticScale
      .slice(tonicIndex)
      .concat(this.chromaticScale.slice(0, tonicIndex));
  }
}
