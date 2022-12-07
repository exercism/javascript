import {
  addTrack,
  deleteTrack,
  hasTrack,
  listArtists,
  removeDuplicates,
} from './ozans-playlist';

describe('removeDuplicates', () => {
  test('works for an empty playlist', () => {
    const playlist = [];

    expect(removeDuplicates(playlist)).toEqual([]);
  });

  test('works for a non-empty playlist', () => {
    const TRACK_1 = 'Two Paintings and a Drum - Carl Cox';
    const TRACK_2 = 'Leash Called Love - The Sugarcubes';
    const playlist = [TRACK_1, TRACK_2, TRACK_1];
    const expected = [TRACK_1, TRACK_2];

    expect(removeDuplicates(playlist)).toEqual(expected);
  });
});

describe('hasTrack', () => {
  const TRACK_1 = 'Big Science - Laurie Anderson';
  const TRACK_2 = 'Tightrope - Laurie Anderson';

  test('returns true when the track is in the playlist', () => {
    const playlist = [TRACK_1, TRACK_2];

    expect(hasTrack(playlist, TRACK_1)).toBe(true);
  });

  test('returns false when the track is not in the playlist', () => {
    const playlist = [TRACK_2];

    expect(hasTrack(playlist, TRACK_1)).toBe(false);
  });
});

describe('addTrack', () => {
  const TRACK_1 = 'Jigsaw Feeling - Siouxsie and the Banshees';
  const TRACK_2 = 'Feeling Good - Nina Simone';

  test('adds a track that is not already in the playlist', () => {
    const playlist = [];
    const expected = [TRACK_1];

    expect(addTrack(playlist, TRACK_1)).toEqual(expected);
  });

  test('does not add a track that is already in the playlist', () => {
    const playlist = [TRACK_1, TRACK_2];
    const expected = [TRACK_1, TRACK_2];

    expect(addTrack(playlist, TRACK_1)).toEqual(expected);
  });
});

describe('deleteTrack', () => {
  const TRACK_1 = 'Ancestors - Tanya Tagaq';
  const TRACK_2 = 'Take This Hammer - Lead Belly';

  test('works if the track is present in the playlist', () => {
    const playlist = [TRACK_1, TRACK_2];
    const expected = [TRACK_2];

    expect(deleteTrack(playlist, TRACK_1)).toEqual(expected);
  });

  test('works if the track is not present in the playlist', () => {
    const playlist = [TRACK_2];
    const expected = [TRACK_2];

    expect(deleteTrack(playlist, TRACK_1)).toEqual(expected);
  });
});

describe('listArtists', () => {
  test('works for an empty playlist', () => {
    const playlist = [];

    expect(listArtists(playlist)).toEqual([]);
  });

  test('works for a non-empty playlist', () => {
    const playlist = [
      'Onu Alma Beni Al - Sezen Aksu',
      'Famous Blue Raincoat - Leonard Cohen',
      'Rakkas - Sezen Aksu',
    ];
    const expected = ['Sezen Aksu', 'Leonard Cohen'];

    expect(listArtists(playlist)).toEqual(expected);
  });
});
