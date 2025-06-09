# About

Object [destructuring][mdn-object-destructuring] is a concise way of extracting properties from an object.
Its syntax is similar to an [object literal][mdn-object-literal] expression, but on the left-hand side of the assignment instead of the right.

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

const { sun, cloud, cloud_with_lightning } = weather;

sun;
// => '☀️'

cloud;
// => '☁️'

cloud_with_lightning;
// => '🌩️'
```

## Renaming in assignment

The syntax can extract the properties by their key like `sun`, `cloud`, and `cloud_with_lightning`, but can also pick a different name for the variable:

```javascript
const { sun: sunny, cloud: cloudy, cloud_with_rain: rainy } = weather;

typeof cloud_with_rain;
// => 'undefined'

typeof rainy;
// => 'string'

rainy;
// => 🌧️
```

The assignment is also not required to use all the values.

## Default values

The object destructuring assignment can provide _default values_ in case there is none in the source object:

```javascript
const { sun = '🌞', tornado = '🌪️', cloud_with_snow: snowy = '❄️' } = weather;

sun;
// => '☀️'

tornado;
// => '🌪️'

snowy;
// => '🌨️'
```

The following is observed:

- `sun` has extracted from the object `weather` without replacing it as it is present in the object `weather`,
- `tornado` does not exist in the object `weather`, so the default value was used,
- `cloud_with_snow` was extracted as the variable `snowy`, without replacing it, as `cloud_with_snow` is present in the object `weather`.

## Destructuring function parameters

The `weather` object has a lot of properties.
It is possible to directly extract one or multiple properties from this object when it's passed to a function:

```javascript
function weatherReport({ sun }) {
  console.log(sun);
}

weatherReport(sun);
// => '☀️'
```

## Destructuring `for of` iteration

When iterating over an `array` (or other iterable), and the items are objects, it is possible to destructure inside the `for (...) of iterable` statement:

```javascript
const { sun: sunny, cloud: cloudy, cloud_with_rain: rainy } = weather;

const prediction = [
  {
    chance: 0.8,
    weather: sunny,
    description: 'There is a 80% chance it will remain sunny.',
  },
  {
    chance: 0.15,
    weather: cloudy,
    description:
      'There is a 15% chance the clouds will keep the sun from poking through.',
  },
  {
    chance: 0.05,
    weather: rainy,
    description: 'There is a small chance of rain.',
  },
];

for (const { weather: symbol, description } of prediction) {
  console.log(`${symbol}: ${description}`);
}

//  '☀️: There is a 80% chance it will remain sunny.'
// '☁️: There is a 15% chance the clouds will keep the sun from poking through.'
// '🌧️: There is a small chance of rain.'
```

## Related concepts

[concept:javascript/array-destructuring]()
[concept:javascript/rest-and-spread]()

[mdn-object-destructuring]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring#object_destructuring
[mdn-object-literal]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer
