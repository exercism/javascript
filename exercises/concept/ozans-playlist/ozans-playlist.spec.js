import {
  addSong,
  hasSong,
  listArtists,
  removeDuplicates,
  removeSong,
} from './ozans-playlist';

describe("Ozan's playlist", () => {
  describe('removeDuplicates', () => {
    xtest('works for an empty playlist', () => {
      const playlist = [];

      expect(removeDuplicates(playlist)).toEqual([]);
    });

    xtest('works for a non-empty playlist', () => {
      const SONG_1 = 'Two Paintings and a Drum - Carl Cox';
      const SONG_2 = 'Leash Called Love - The Sugarcubes';
      const playlist = [SONG_1, SONG_2, SONG_1];
      const expected = [SONG_1, SONG_2];

      expect(removeDuplicates(playlist)).toEqual(expected);
    });
  });

  describe('hasSong', () => {
    const SONG_1 = 'Big Science - Laurie Anderson';
    const SONG_2 = 'Tightrope - Laurie Anderson';

    xtest('returns true when the song is in the playlist', () => {
      const playlist = [SONG_1, SONG_2];

      expect(hasSong(playlist, SONG_1)).toBe(true);
    });

    xtest('returns false when the song is not in the playlist', () => {
      const playlist = [SONG_2];

      expect(hasSong(playlist, SONG_1)).toBe(false);
    });
  });

  describe('addSong', () => {
    const SONG_1 = 'Jigsaw Feeling - Siouxsie and the Banshees';
    const SONG_2 = 'Feeling Good - Nina Simone';

    xtest('adds a song that is not already in the playlist', () => {
      const playlist = [];
      const expected = [SONG_1];

      expect(addSong(playlist, SONG_1)).toEqual(expected);
    });

    xtest('does not add a song that is already in the playlist', () => {
      const playlist = [SONG_1, SONG_2];
      const expected = [SONG_1, SONG_2];

      expect(addSong(playlist, SONG_1)).toEqual(expected);
    });
  });

  describe('removeSong', () => {
    const SONG_1 = 'Ancestors - Tanya Tagaq';
    const SONG_2 = 'Take This Hammer - Lead Belly';

    xtest('works if the song is present in the playlist', () => {
      const playlist = [SONG_1, SONG_2];
      const expected = [SONG_2];

      expect(removeSong(playlist, SONG_1)).toEqual(expected);
    });

    xtest('works if the song is not present in the playlist', () => {
      const playlist = [SONG_2];
      const expected = [SONG_2];

      expect(removeSong(playlist, SONG_1)).toEqual(expected);
    });
  });

  describe('listArtists', () => {
    xtest('works for an empty playlist', () => {
      const playlist = [];

      expect(listArtists(playlist)).toEqual([]);
    });

    xtest('works for a non-empty playlist', () => {
      const playlist = [
        'Onu Alma Beni Al - Sezen Aksu',
        'Famous Blue Raincoat - Leonard Cohen',
        'Rakkas - Sezen Aksu',
      ];
      const expected = ['Sezen Aksu', 'Leonard Cohen'];

      expect(listArtists(playlist)).toEqual(expected);
    });
  });
});
