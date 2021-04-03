// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Removes duplicate songs from a playlist.
 *
 * @param {string[]} playlist
 * @returns {string[]} new playlist with unique entries
 */
export function removeDuplicates(playlist) {
  return [...new Set(playlist)];
}

/**
 * Checks whether a playlist includes the given song.
 *
 * @param {string[]} playlist
 * @param {string} song
 * @returns {boolean} whether the song is in the playlist
 */
export function hasSong(playlist, song) {
  return new Set(playlist).has(song);
}

/**
 * Adds a song to a playlist.
 *
 * @param {string[]} playlist
 * @param {string} song
 * @returns {string[]} new playlist
 */
export function addSong(playlist, song) {
  return [...new Set(playlist).add(song)];
}

/**
 * Removes a song from a playlist.
 *
 * @param {string[]} playlist
 * @param {string} song
 * @returns {string[]} new playlist
 */
export function removeSong(playlist, song) {
  const songSet = new Set(playlist);

  songSet.delete(song);

  return [...songSet];
}
