# Introduction

JavaScript's object destructuring syntax is a concise way to extract properties from an object and assign them to distinct variables.

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

const { sun, cloud, cloud_with_lightning } = weather;

sun;
// => '☀️'

cloud;
// => '☁️'

cloud_with_lightning;
// => '🌩️'
```
