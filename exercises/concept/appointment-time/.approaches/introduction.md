# Introduction

## Default value for optional argument

```javascript
export function createAppointment(days, now = undefined) {
  if (now === undefined) {
    now = Date.now();
  }

  /* ... */
}
```

```javascript
export function createAppointment(days, now = undefined) {
  now = now || Date.now();

  /* ... */
}
```

```javascript
export function createAppointment(days, now = undefined) {
  now = now ?? Date.now();

  /* ... */
}
```

```javascript
export function createAppointment(days, now = Date.now()) {
  /* ... */
}
```

```javascript
export function createAppointment(days, now = new Date()) {
  const date = new Date(now);
  /* ... */
}
```

## Adding the requested days until the appointment

```javascript
date.setDate(date.getDate() + days);
return date;
```

```javascript
return new Date(now + days * 24 * 60 * 60 * 1000);
```

```javascript
return new Date(now + days * 86_400_000);
```

## Generating a ISO8601 timestamp string

```javascript
return appointmentDate.toISOString();
```

```javascript
const date_yyyy = String(appointmentDate.getUTCFullYear()).padStart(4, '0');
const date_mm = String(appointmentDate.getUTCMonth() + 1).padStart(2, '0');
const date_dd = String(appointmentDate.getUTCDate()).padStart(2, '0');

const hh = String(appointmentDate.getUTCHours()).padStart(2, '0');
const mm = String(appointmentDate.getUTCMinutes()).padStart(2, '0');
const ss = String(appointmentDate.getUTCSeconds()).padStart(2, '0');
const ms = String(appointmentDate.getUTCMilliseconds()).padStart(3, '0');

return `${date_yyyy}-${date_mm}-${date_dd}T${hh}:${mm}:${ss}.${ms}Z`;
```

## Extracting the appointment details

```javascript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group#browser_compatibility

const regex = [
  // matching YYYY-, extracts as year without leading zeros
  '^(?:000(?<year>\\d{1})|00(?<year>\\d{2})|0(?<year>\\d{3})|(?<year>\\d{4}))-',

  // matching MM-, extracts as month without leading zeros
  '(?:0(?<month>\\d{1})|(?<month>\\d{2}))-',

  // matching DD, extracts as date without leading zeros
  '(?:0(?<date>\\d{1})|(?<date>\\d{2}))',

  // matching T, no extraction
  'T',

  // matching HH:, extracts as hour without leading zeros
  '(?:0(?<hour>\\d{1})|(?<hour>\\d{2})):',

  // matching MM:, extracts as minute without leading zeros
  '(?:0(?<minute>\\d{1})|(?<minute>\\d{2})):',

  // matching SS:mssZ, no extraction
  '\\d{2}\\.\\d{3}Z?$',
].join('');
```

```javascript
const regex = [
  // matching YYYY-, extracts as year including leading zeros
  '^(?<year>\\d{4})-',

  // matching MM-, extracts as month without leading zeros
  '(?<month>\\d{2})-',

  // matching DD, extracts as date without leading zeros
  '(?<date>\\d{2})',

  // matching T, no extraction
  'T',

  // matching HH:, extracts as hour without leading zeros
  '(?<hour>\\d{2}):',

  // matching MM:, extracts as minute without leading zeros
  '(?<minute>\\d{2}):',

  // matching SS:mssZ, no extraction
  '\\d{2}\\.\\d{3}Z?$',
].join('');

const detailsMatcher = new RegExp(regex);
const match = detailsMatcher.exec(getAppointmentTimestamp(appointmentDate));
if (!match) {
  throw new Error('Could not extract details');
}

// TODO: roll-over minute under or overflow
// TODO: roll-over hour under or overflow
const details = {
  year: match.groups ? parseInt(match.groups['year'], 10) : 0,
  month: match.groups ? parseInt(match.groups['month'], 10) - 1 : 0,
  date: match.groups ? parseInt(match.groups['date'], 10) : 0,
  hour: match.groups
    ? parseInt(match.groups['hour'], 10) -
      appointmentDate.getTimezoneOffset() / 60
    : 0,
  minute: match.groups
    ? parseInt(match.groups['minute'], 10) -
      (appointmentDate.getTimezoneOffset() % 60)
    : 0,
};

return details;
``;
```
