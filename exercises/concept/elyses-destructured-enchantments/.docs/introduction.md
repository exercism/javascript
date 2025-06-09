# Introduction

## Array destructuring

JavaScript's array destructuring syntax is a concise way to extract values from an array and assign them to distinct variables.

In this example, each value in the `numberOfMoons` array is assigned to its corresponding planet:

```javascript
const numberOfMoons = [0, 2, 14];
const [venus, mars, neptune] = numberOfMoons;

neptune;
// => 14
```

In short:

- The syntax allows for naming _positioned_ elements in an array, as well as swapping variables using re-assignment.
- Destructuring syntax is available inside function parameters, and is available on any iterable.
- Leaving a position unnamed (by not writing _any_ variable name) silently ignores that position.

## Object destructuring

In JavaScript, there is also destructuring syntax to extract properties from an object and assign them to distinct variables.

In this example, weather symbols are extracted from the object `weather`:

```javascript
const weather = {
  sun: '☀️',
  sun_behind_small_cloud: '🌤️',
  sun_behind_cloud: '⛅',
  sun_behind_large_cloud: '🌥️',
  sun_behind_rain_cloud: '🌦️',
  cloud: '☁️',
  cloud_with_rain: '🌧️',
  cloud_with_snow: '🌨️',
  cloud_with_lightning: '🌩️',
  cloud_with_lightning_and_rain: '⛈️',
};

const { sun, cloud, cloud_with_lightning: thunder } = weather;

sun;
// => '☀️'

cloud;
// => '☁️'

thunder;
// => '🌩️'
```

In short:

- The syntax allows for both extracting properties as well as extracting and renaming them.
- Destructuring syntax is available inside function parameters.
