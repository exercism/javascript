A new poetry club has opened in town, and you're thinking of attending. Because
there have been incidents in the past, the club has a very specific door policy
which you'll need to master, before attempting entry.

There are two doors at the poetry club, both are guarded. In order to gain
entry, you'll need to work out the password of that day:

## Front door

1. The guard will recite a poem, one line at the time;
   - You will have to respond with the appropriate letter.
2. The guard will tell you all the letters you've responded with at once;
   - You need to format the letters as a capitalised word.

For example, one of their favourite writers is Michael Lockwood, who's written
the following _acrostic_ poem, which means that the first letter of each
sentence form a word:

```text
Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave
```

When the guard recites **Stands so high**, you'll respond **S**, when the guard
recites **Huge hooves too**, you'll respond **H**.

Finally the password you write down is `Shire`, and you'll get in.

## Back door

In the back of the club you'll find the most renowned poets, which is like the
VIP area. Because this is not for everyone, the back door process is a bit more
convoluted.

1. The guard will recite a poem, one line at the time;
   - You will have to respond with the appropriate letter.
2. The guard will tell you all the letters you've responded with at once, _but
   there are sometimes spaces after each sentence_:
   - You need to format the letters as a capitalised word
   - and ask nicely, by appending `, please`

For example, the poem mentioned before is also _telestich_, which means that
the last letter of each sentence form a word:

```text
Stands so high
Huge hooves too
Impatiently waits for
Reins and harness
Eager to leave
```

When the guard recites **Stands so high**, you'll respond **h**, when the guard
recites **Huge hooves too**, you'll respond **o**.

Finally the password you write down is `Horse, please`, and you can party
with the renowned poets.

## Tasks

## 1. Get the first letter of a sentence

Implement a function that returns first letter of a sentence:

```javascript
frontDoorResponse('Stands so high')
// => "S"
```

## 2. Capitalize a word

Implement a function that correctly capitalizes a word:

```javascript
capitalize('SHIRE')
// => "Shire"

capitalize('horse')
// => "Horse"
```

## 3. Get the last letter of a sentence

Implement a function that returns the last letter of a sentence:

```javascript
backDoorResponse('Stands so high')
// => "h"
```

## 4. Trim a sentence

Improve the previous function so that it removes whitespace from the end of a sentence and returns the last character:

```javascript
backDoorResponse('Stands so high   ')
// => "h"
```

## 5. Be polite

Change the implementation of the `backDoorPassword` function so that it's polite:

```javascript
backDoorPassword('esroh')
// => "Horse, please"
```
