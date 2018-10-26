const EARTH_TO_OTHER_PLANETS = {
  mercury: 0.2408467,
  venus: 0.61519726,
  earth: 1,
  mars: 1.8808158,
  jupiter: 11.862615,
  saturn: 29.447498,
  uranus: 84.016846,
  neptune: 164.79132,
};

export class SpaceAge {
  constructor(seconds) {
    this.seconds = seconds;
  }

  get earthYears() {
    return this.seconds / 31557600;
  }

  yearsOnPlanet(planet) {
    const years = this.earthYears / EARTH_TO_OTHER_PLANETS[planet];
    return parseFloat(years.toFixed(2));
  }

  onMercury() {
    return this.yearsOnPlanet('mercury');
  }

  onVenus() {
    return this.yearsOnPlanet('venus');
  }

  onEarth() {
    return this.yearsOnPlanet('earth');
  }

  onMars() {
    return this.yearsOnPlanet('mars');
  }

  onJupiter() {
    return this.yearsOnPlanet('jupiter');
  }

  onSaturn() {
    return this.yearsOnPlanet('saturn');
  }

  onUranus() {
    return this.yearsOnPlanet('uranus');
  }

  onNeptune() {
    return this.yearsOnPlanet('neptune');
  }
}
