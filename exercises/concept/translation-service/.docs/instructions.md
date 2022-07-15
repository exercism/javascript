# Instructions

In this exercise, you'll be providing a `TranslationService` that provides basic translation services to free members, and advanced translation to premium members with quality assurances.

**The API**

You have found an outer space translation API that fulfills any translation `request` in a reasonable amount of time.
You want to capitalize on this.
The space translators are extremely fickle and hate redundancy, so they also provide _API storage_ satellites where you can `fetch` past translations without bothering them.

**_Fetching a translation_**

`api.fetch(text)` fetches a translation of `text` from the _API storage_ and returns a `promise` that provides two values:

- `translation`: the actual translation
- `quality`: the quality expressed as a number

If a translation is not found in the _API storage_, the API throws a `NotAvailable` error.
Translations can be added using the `api.request` method.
If 'text' is not translatable, the API throws an `Untranslatable` error.

```javascript
api.fetch('jIyaj');
// => Promise({ resolved: 'I understand' })
```

**_Requesting a translation_**

Some translations are sure to exist, but haven't been added to the _API storage_ yet. That's the difference between `NotAvailable` ( not in storage, but can be requested ) and `Untranslatable` ( cannot be translated ).

`api.request(text, callback)` requests that a translation of `text` be performed and added into the _API storage_.
On completion the `callback` function is called.

- On success `callback` is passed `undefined`: this indicates the translation was successful and is accessible using the `api.fetch` method.
- On failure `callback` is passed an `error`: this indicates something went wrong.
  The outspace API is _unstable_, which means that the API fails often.
  If that happens, it is okay to `api.request` again.

```javascript
api.request('majQa’');
// => Promise({ resolved: undefined })
```

**⚠ Warning! ⚠**

```exercism/caution
The API works its magic by teleporting in the various translators when a `request` comes in.
This is a very costly action, so it shouldn't be called when a translation *is* available.
Unfortunately, not everyone reads the manual, so there is a system in place to kick-out bad actors.

If an `api.request` is called for `text` is available, the API throws an `AbusiveClientError` for this call, **and every call after that**.
Ensure that you *never* request a translation if something has already been translated.
```

## 1. Fetch a translation, ignoring the quality

The free service only provides translations that are currently in the _API storage_.

Implement a method `free(text)` that provides free members with translation that already exist in the _API storage_.
Ignore the quality and forward any errors thrown by the API.

- Returns the translation if it can be retrieved, regardless of its quality
- Forwards any error from the translation API
- Uses the `api.fetch` method (`api.fetch` returns a `promise`)

```javascript
service.free('jIyaj');
// => Promise<...> resolves "I understand."

service.free("jIyajbe'");
// => Promise<...> rejects Error("Not yet translated")
```

## 2. Fetch a batch of translations, all-or-nothing

Implement a method `batch([text, text, ...])` for free members that translates an array of text using the free service, returning all the translations, or a single error.

- Resolves with all the translations (in the same order), if they are all available
- Rejects with the first error that is encountered
- Rejects with a `BatchIsEmpty` error if no texts are given

```javascript
service.batch(['jIyaj', "majQa'"]);
// => Promise<...> resolves ["I understand.", "Well done!"]

service.batch(['jIyaj', "jIyajbe'"]);
// => Promise<...> rejects new Error("Not yet translated")

service.batch([]);
// => Promise<...> rejects BatchIsEmpty()
```

## 3. Request a translation, retrying at most 2 times

Implement a premium user method `request(text)`, that _requests_ a translation be added to the _API storage_.
The request should automatically retry if a failure occurs.  
It should perform no more than **3 calls** for the same request (_don't upset the space translators!!!_).

- If `api.request` does not return an error, resolve with `undefined`
- If `api.request` returns an error, retry at most two times
- If you run out of retries, reject with the last error received

```javascript
service.request("jIyajbe'");
// => Promise<...> resolves (with nothing), can now be retrieved using the fetch API
```

## 4. Fetch a translation, inspect the quality, or request it

Implement a premium user method `premium(text, quality)` to fetch a translation.
If a translation is `NotAvailable`, request the translation and fetch it after its been added to the _API storage_.
The method should only return the translation if it meets a certain `quality` threshold.

- If `api.fetch` resolves, check the quality before resolving
- If `api.fetch` rejects, _request_ the translation instead
- If `api.request` rejects, forward the error

```javascript
service.premium("jIyajbe'", 100);
// => Promise<...> resolves "I don't understand."

service.premium("'arlogh Qoylu'pu'?", 100);
// => Promise<...> rejects QualityThresholdNotMet()

service.premium("'arlogh Qoylu'pu'?", 40);
// => Promise<...> resolves "What time is it?"
```

**N.B.**

```exercism/note
The correct translation of `'arlogh Qoylu'pu'?` is **How many times has it been heard?**.
```
