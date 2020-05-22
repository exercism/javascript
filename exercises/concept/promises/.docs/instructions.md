In this exercise you'll be providing a `TranslationService` where paid members
have some quality assurance.

You have found a magical translation API that is able to fulfill any
translation _request_ in a reasonable amount of time, and you
want to capitalize on this.

The magical API has a very minimal interface:

## Fetching a translation

`api.fetch(text)` fetches the translation of `text`, returning two values:

- `translation`: the actual translation
- `quality`: the quality expressed as a number

If there is no translation available (because it has not been requested yet),
the API throws an error. This also happens if a piece of text is untranslatable.

## Requesting a translation

`api.request(text, callback)` requests the translation of `text`, calling the
`callback` once it's ready, without a value.

The `request` API is unstable, which means that sometimes the API will call the
`callback` with an error. If that happens, it is okay to re-request.

## ⚠ Warning! ⚠

Because of some previous users being lazy when programming, always requesting a
translation, without even checking if the text was already translated, the API
returns an error if the text has already been translated ánd blocks all access
completely, forever.

## Tasks

## 1. Fetch a translation, ignoring the quality

Implement a function to fetch a translation, ignoring the quality, and
forwarding any errors thrown by the API:

```javascript
service.free('jIyaj')
// => Promise<...> resolves "I understand."

service.free("jIyajbe'")
// => Promise<...> rejects Error("Not yet translated")
```

- Returns the translation if it can be retrieved, regardless its quality
- Forwards any error from the translation API

## 2. Fetch a batch of translations, all-or-nothing

Implement a function that batch translates the given texts using the free
service, returning all the translations, or a single error.

```javascript
service.batch(['jIyaj', "majQa'"])
// => Promise<...> resolves ["I understand.", "Well done!"]

service.batch(['jIyaj', "jIyajbe'"])
// => Promise<...> rejects new Error("Not yet translated")

service.batch([])
// => Promise<...> rejects BatchIsEmpty()
```

- Resolves with all the translations (in the same order), if they are all available
- Rejects with the first error that is encountered
- Rejects with a `BatchIsEmpty` error if no texts are given

## 3. Request a translation, retrying at most 2 times

Implement a function that requests a translation, with automatic retries, up to a total of 3 calls for the same request.

```javascript
service.request("jIyajbe'")
// => Promise<...> resolves (with nothing), can now be retrieved using the fetch API
```

## 4. Fetch a translation, inspect the quality, or request it

Implement the function for premium users which fetch a translation, request it
if it's not available, and only return it if it meets a certain threshold.

```javascript
service.premium("jIyajbe'", 100)
// => Promise<...> resolves "I don't understand."

service.premium("'arlogh Qoylu'pu'?", 100)
// => Promise<...> rejects QualityThresholdNotMet()

service.premium("'arlogh Qoylu'pu'?", 40)
// => Promise<...> resolves "What time is it?"
```

## N.B.

The correct translation of `'arlogh Qoylu'pu'?` is **How many times has it been heard?**.
