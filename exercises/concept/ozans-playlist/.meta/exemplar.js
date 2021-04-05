// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate tracks from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique tracks
 */
export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes a track.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {boolean} whether the track is in the playlist
 */
export function hasTrack(playlist, track) {
  return new Set(playlist).has(track);
}

/**
 * Adds a track to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function addTrack(playlist, track) {
  return [...new Set(playlist).add(track)];
}

/**
 * Deletes a track from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} track
 * @returns {string[]} new playlist
 */
export function deleteTrack(playlist, track) {
  const trackSet = new Set(playlist);

  trackSet.delete(track);

  return [...trackSet];
}

/**
 * Returns the list of unique artists in a playlist
 *
 * @param {string[]} playlist
 * @returns {string[]} unique artists
 */
export function listArtists(playlist) {
  const artists = new Set();

  for (let track of playlist.values()) {
    const [, artist] = track.split(' - ');

    artists.add(artist);
  }

  return [...artists];
}
