# Instructions

Your friend Ozan is putting together a playlist for an upcoming roadtrip. He doesn't want to hear the same song more than once, but the playlist has gotten so long that he's having trouble keeping track of which songs have already been added.

The API for Ozan's music player only knows how to work with arrays, so he attempts to write some code that checks for duplicates by iterating through every item in the playlist. However, with five thousand songs and counting, his program takes much too long to execute. He needs your help!

Coming to Ozan's aid, you quickly realize that you'll need an intermediate data structure to operate on the playlist more efficiently.

## 1. Remove duplicate songs

Implement the `removeDuplicates` function, which takes a playlist as a _parameter_ and _returns_ a new playlist where all the songs are unique.

```javascript
const playlist = [
  'Court and Spark - Joni Mitchell',
  'Big Yellow Taxi - Joni Mitchell',
  'Court and Spark - Joni Mitchell
]

removeDuplicates(playlist)
//=> ['Court and Spark - Joni Mitchell', 'Big Yellow Taxi - Joni Mitchell']
```

## 2. Check whether a song has already been added

Implement the `hasSong` function, which takes a playlist and a song as _parameters_ and _returns_ a boolean that indicates whether the playlist contains the song.

```javascript
const playlist = [
  'The Fashion Show - Grace Jones',
  'Dr. Funkenstein - Parliament',
];

hasSong(playlist, 'Dr. Funkenstein - Parliament');
//=> true

hasSong(playlist, 'Walking in the Rain - Grace Jones');
//=> false
```

## 3. Add a song

Implement the `addSong` function, which takes a playlist and a song as _parameters_ and _returns_ a new playlist containing the song. If the song was already in the playlist, it doesn't get added again.

```javascript
const playlist = ['Selma - Bijelo Dugme'];

addSong(playlist, 'Atomic Dog - George Clinton');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']

addSong(playlist, 'Selma - Bijelo Dugme');
//=> ['Selma - Bijelo Dugme', 'Atomic Dog - George Clinton']
```

## 4. Remove a song

Implement the `removeSong` function, which takes a playlist and a song as _parameters_ and _returns_ a new playlist without the song.

```javascript
const playlist = [
  'The Treasure - Fra Lippo Lippi',
  'After the Fall - Klaus Nomi',
];

removeSong(playlist, 'The Treasure - Fra Lippo Lippi');
//=> ['After the Fall - Klaus Nomi']

removeSong(playlist, 'I Feel the Magic - Belinda Carlisle');
//=> ['After the Fall - Klaus Nomi']
```
