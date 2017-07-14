import SpaceAge from './space-age';

describe('Space Age', () => {
  test('age in seconds', () => {
    const age = new SpaceAge(1000000);
    expect(age.seconds).toEqual(1000000);
  });

  xtest('age in earth years', () => {
    const age = new SpaceAge(1000000000);
    expect(age.onEarth()).toEqual(31.69);
  });

  xtest('age in mercury years', () => {
    const age = new SpaceAge(2134835688);
    expect(age.onEarth()).toEqual(67.65);
    expect(age.onMercury()).toEqual(280.88);
  });

  xtest('age in venus years', () => {
    const age = new SpaceAge(189839836);
    expect(age.onEarth()).toEqual(6.02);
    expect(age.onVenus()).toEqual(9.78);
  });

  xtest('age in mars years', () => {
    const age = new SpaceAge(2329871239);
    expect(age.onEarth()).toEqual(73.83);
    expect(age.onMars()).toEqual(39.25);
  });

  xtest('age in jupiter years', () => {
    const age = new SpaceAge(901876382);
    expect(age.onEarth()).toEqual(28.58);
    expect(age.onJupiter()).toEqual(2.41);
  });

  xtest('age in saturn years', () => {
    const age = new SpaceAge(3000000000);
    expect(age.onEarth()).toEqual(95.06);
    expect(age.onSaturn()).toEqual(3.23);
  });

  xtest('age in uranus years', () => {
    const age = new SpaceAge(3210123456);
    expect(age.onEarth()).toEqual(101.72);
    expect(age.onUranus()).toEqual(1.21);
  });

  xtest('age in neptune year', () => {
    const age = new SpaceAge(8210123456);
    expect(age.onEarth()).toEqual(260.16);
    expect(age.onNeptune()).toEqual(1.58);
  });
});

