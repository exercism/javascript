import {
  addSong,
  hasSong,
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
      const playlist = [
        'Two Paintings and a Drum - Carl Cox',
        'Leash Called Love - The Sugarcubes',
        'Two Paintings and a Drum - Carl Cox',
      ];
      const expected = [
        'Two Paintings and a Drum - Carl Cox',
        'Leash Called Love - The Sugarcubes',
      ];

      expect(removeDuplicates(playlist)).toEqual(expected);
    });
  });

  describe('hasSong', () => {
    xtest('returns true when the song is in the playlist', () => {
      const playlist = ['Big Science - Laurie Anderson'];

      expect(hasSong(playlist, 'Big Science - Laurie Anderson')).toBe(true);
    });

    xtest('returns false when the song is not in the playlist', () => {
      const playlist = [];

      expect(hasSong(playlist, 'Big Science - Laurie Anderson')).toBe(false);
    });
  });

  describe('addSong', () => {
    xtest('adds a song that is not already in the playlist', () => {
      const playlist = [];
      const expected = ['No Tears - Tuxedomoon'];

      expect(addSong(playlist, 'No Tears - Tuxedomoon')).toEqual(expected);
    });

    xtest('does not add a song that is already in the playlist', () => {
      const playlist = [
        'Feeling Good - Nina Simone',
        'Jigsaw Feeling - Siouxsie and the Banshees',
      ];
      const expected = [
        'Feeling Good - Nina Simone',
        'Jigsaw Feeling - Siouxsie and the Banshees',
      ];

      expect(addSong(playlist, 'Feeling Good - Nina Simone')).toEqual(expected);
    });
  });

  describe('removeSong', () => {
    xtest('works if the song is present in the playlist', () => {
      const playlist = [
        'Take This Hammer - Lead Belly',
        'Ancestors - Tanya Tagaq',
      ];
      const expected = ['Take This Hammer - Lead Belly'];

      expect(removeSong(playlist, 'Ancestors - Tanya Tagaq')).toEqual(expected);
    });

    xtest('works if the song is not present in the playlist', () => {
      const playlist = ['Gnossienne No. 4 - Erik Satie'];
      const expected = ['Gnossienne No. 4 - Erik Satie'];

      expect(removeSong(playlist, 'Ancestors - Tanya Tagaq')).toEqual(expected);
    });
  });
});
