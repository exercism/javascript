// @ts-check

const { spawnSync } = require('child_process');
const { resolve: resolvePath, relative } = require('path');

const BASE_DIR = resolvePath(__dirname);

/**
 * Spawns a new node process, emulating `grep`.
 *
 * node /path/to/grep.js -f -l -a -g -s **pattern** files1 files2 files3
 *
 * @param {{ flags: string[], pattern: string, files: string[] }} config
 */
function spawnGrep(config) {
  const args = [
    resolvePath(BASE_DIR, 'grep.js'),
    ...config.flags,
    config.pattern,
    ...config.files.map((file) =>
      relative(BASE_DIR, resolvePath(BASE_DIR, 'data', file)),
    ),
  ];

  return new Promise((resolve, reject) => {
    const child = spawnSync('node', args, { stdio: 'pipe', cwd: BASE_DIR });
    const stderr = child.stderr.toString().trim();
    const stdout = child.stdout.toString().trim().split(/\r?\n/).join('\n');

    // If anything is written to stderr, consider the entire process as failed.
    //
    // Normally you'd check the status code (exit code) and reject/fail if it's
    // not equal to "0".
    if (stderr) {
      reject(stderr);
    } else {
      resolve(stdout);
    }
  });
}

/**
 * Formats a string template cross-env
 *
 * @param {string} stringTemplate
 */
function formatStringTemplate(stringTemplate) {
  return stringTemplate
    .split(/\r?\n/)
    .map((sentence) => sentence.trim())
    .join('\n');
}

/**
 * Path to a data file
 * @param {string} file
 */
function resolveDataFile(file) {
  return relative(BASE_DIR, resolvePath(BASE_DIR, 'data', file));
}

describe('grep exercise', () => {
  describe('Test grepping a single file', () => {
    it('One file, one match, no flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Agamemnon',
          flags: [],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe('Of Atreus, Agamemnon, King of men.');
    });

    xit('One file, one match, print line numbers flag', () => {
      return expect(
        spawnGrep({
          pattern: 'Forbidden',
          flags: ['-n'],
          files: ['paradise-lost.txt'],
        }),
      ).resolves.toBe('2:Of that Forbidden Tree, whose mortal tast');
    });

    xit('One file, one match, case-insensitive flag', () => {
      return expect(
        spawnGrep({
          pattern: 'FORBIDDEN',
          flags: ['-i'],
          files: ['paradise-lost.txt'],
        }),
      ).resolves.toBe('Of that Forbidden Tree, whose mortal tast');
    });

    xit('One file, one match, print file names flag', () => {
      return expect(
        spawnGrep({
          pattern: 'Forbidden',
          flags: ['-l'],
          files: ['paradise-lost.txt'],
        }),
      ).resolves.toBe(resolveDataFile('paradise-lost.txt'));
    });

    xit('One file, one match, match entire lines flag', () => {
      return expect(
        spawnGrep({
          pattern: 'With loss of Eden, till one greater Man',
          flags: ['-x'],
          files: ['paradise-lost.txt'],
        }),
      ).resolves.toBe('With loss of Eden, till one greater Man');
    });

    xit('One file, one match, multiple flags', () => {
      return expect(
        spawnGrep({
          pattern: 'OF ATREUS, Agamemnon, KIng of MEN.',
          flags: ['-n', '-i', '-x'],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe('9:Of Atreus, Agamemnon, King of men.');
    });

    xit('One file, several matches, no flags', () => {
      return expect(
        spawnGrep({
          pattern: 'may',
          flags: [],
          files: ['midsummer-night.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`Nor how it may concern my modesty,
        But I beseech your grace that I may know
        The worst that may befall me in this case,`),
      );
    });

    xit('One file, several matches, print line numbers flag', () => {
      return expect(
        spawnGrep({
          pattern: 'may',
          flags: ['-n'],
          files: ['midsummer-night.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`3:Nor how it may concern my modesty,
        5:But I beseech your grace that I may know
        6:The worst that may befall me in this case,`),
      );
    });

    xit('One file, several matches, match entire lines flag', () => {
      return expect(
        spawnGrep({
          pattern: 'may',
          flags: ['-x'],
          files: ['midsummer-night.txt'],
        }),
      ).resolves.toBe('');
    });

    xit('One file, several matches, case-insensitive flag', () => {
      return expect(
        spawnGrep({
          pattern: 'ACHILLES',
          flags: ['-i'],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`Achilles sing, O Goddess! Peleus' son;
        The noble Chief Achilles from the son`),
      );
    });

    xit('One file, several matches, inverted flag', () => {
      return expect(
        spawnGrep({
          pattern: 'Of',
          flags: ['-v'],
          files: ['paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`Brought Death into the World, and all our woe,
        With loss of Eden, till one greater Man
        Restore us, and regain the blissful Seat,
        Sing Heav'nly Muse, that on the secret top
        That Shepherd, who first taught the chosen Seed`),
      );
    });

    xit('One file, no matches, various flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Gandalf',
          flags: ['-n', '-l', '-x', '-i'],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe('');
    });

    xit('One file, one match, file flag takes precedence over line flag', () => {
      return expect(
        spawnGrep({
          pattern: 'ten',
          flags: ['-n', '-l'],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe(resolveDataFile('iliad.txt'));
    });

    xit('One file, several matches, inverted and match entire lines flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Illustrious into Ades premature,',
          flags: ['-x', '-v'],
          files: ['iliad.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`Achilles sing, O Goddess! Peleus' son;
        His wrath pernicious, who ten thousand woes
        Caused to Achaia's host, sent many a soul
        And Heroes gave (so stood the will of Jove)
        To dogs and to all ravening fowls a prey,
        When fierce dispute had separated once
        The noble Chief Achilles from the son
        Of Atreus, Agamemnon, King of men.`),
      );
    });
  });

  describe('Test grepping multiples files at once', () => {
    xit('Multiple files, one match, no flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Agamemnon',
          flags: [],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        `${resolveDataFile('iliad.txt')}:Of Atreus, Agamemnon, King of men.`,
      );
    });

    xit('Multiple files, several matches, no flags', () => {
      return expect(
        spawnGrep({
          pattern: 'may',
          flags: [],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile(
          'midsummer-night.txt',
        )}:Nor how it may concern my modesty,
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:But I beseech your grace that I may know
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:The worst that may befall me in this case,`),
      );
    });

    xit('Multiple files, several matches, print line numbers flag', () => {
      return expect(
        spawnGrep({
          pattern: 'that',
          flags: ['-n'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile(
          'midsummer-night.txt',
        )}:5:But I beseech your grace that I may know
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:6:The worst that may befall me in this case,
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:2:Of that Forbidden Tree, whose mortal tast
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:6:Sing Heav'nly Muse, that on the secret top`),
      );
    });

    it('Multiple files, one match, print file names flag', () => {
      return expect(
        spawnGrep({
          pattern: 'who',
          flags: ['-l'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile('iliad.txt')}
        ${resolveDataFile('paradise-lost.txt')}`),
      );
    });

    xit('Multiple files, several matches, case-insensitive flag', () => {
      return expect(
        spawnGrep({
          pattern: 'TO',
          flags: ['-i'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile(
          'iliad.txt',
        )}:Caused to Achaia's host, sent many a soul
        ${resolveDataFile('iliad.txt')}:Illustrious into Ades premature,
        ${resolveDataFile(
          'iliad.txt',
        )}:And Heroes gave (so stood the will of Jove)
        ${resolveDataFile(
          'iliad.txt',
        )}:To dogs and to all ravening fowls a prey,
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:I do entreat your grace to pardon me.
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:In such a presence here to plead my thoughts;
        ${resolveDataFile('midsummer-night.txt')}:If I refuse to wed Demetrius.
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Brought Death into the World, and all our woe,
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Restore us, and regain the blissful Seat,
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Sing Heav'nly Muse, that on the secret top`),
      );
    });

    xit('Multiple files, several matches, inverted flag', () => {
      return expect(
        spawnGrep({
          pattern: 'a',
          flags: ['-v'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile(
          'iliad.txt',
        )}:Achilles sing, O Goddess! Peleus' son;
        ${resolveDataFile('iliad.txt')}:The noble Chief Achilles from the son
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:If I refuse to wed Demetrius.`),
      );
    });

    xit('Multiple files, one match, match entire lines flag', () => {
      return expect(
        spawnGrep({
          pattern: 'But I beseech your grace that I may know',
          flags: ['-x'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        `${resolveDataFile(
          'midsummer-night.txt:But I beseech your grace that I may know',
        )}`,
      );
    });

    xit('Multiple files, one match, multiple flags', () => {
      return expect(
        spawnGrep({
          pattern: 'WITH LOSS OF EDEN, TILL ONE GREATER MAN',
          flags: ['-n', '-i', '-x'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        `${resolveDataFile(
          'paradise-lost.txt',
        )}:4:With loss of Eden, till one greater Man`,
      );
    });

    xit('Multiple files, no matches, various flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Frodo',
          flags: ['-n', '-l', '-x', '-i'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe('');
    });

    xit('Multiple files, several matches, file flag takes precedence over line number flag', () => {
      return expect(
        spawnGrep({
          pattern: 'who',
          flags: ['-n', '-l'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile('iliad.txt')}
        ${resolveDataFile('paradise-lost.txt')}`),
      );
    });

    xit('Multiple files, several matches, inverted and match entire lines flags', () => {
      return expect(
        spawnGrep({
          pattern: 'Illustrious into Ades premature,',
          flags: ['-x', '-v'],
          files: ['iliad.txt', 'midsummer-night.txt', 'paradise-lost.txt'],
        }),
      ).resolves.toBe(
        formatStringTemplate(`${resolveDataFile(
          'iliad.txt',
        )}:Achilles sing, O Goddess! Peleus' son;
        ${resolveDataFile(
          'iliad.txt',
        )}:His wrath pernicious, who ten thousand woes
        ${resolveDataFile(
          'iliad.txt',
        )}:Caused to Achaia's host, sent many a soul
        ${resolveDataFile(
          'iliad.txt',
        )}:And Heroes gave (so stood the will of Jove)
        ${resolveDataFile(
          'iliad.txt',
        )}:To dogs and to all ravening fowls a prey,
        ${resolveDataFile('iliad.txt')}:When fierce dispute had separated once
        ${resolveDataFile('iliad.txt')}:The noble Chief Achilles from the son
        ${resolveDataFile('iliad.txt')}:Of Atreus, Agamemnon, King of men.
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:I do entreat your grace to pardon me.
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:I know not by what power I am made bold,
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:Nor how it may concern my modesty,
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:In such a presence here to plead my thoughts;
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:But I beseech your grace that I may know
        ${resolveDataFile(
          'midsummer-night.txt',
        )}:The worst that may befall me in this case,
        ${resolveDataFile('midsummer-night.txt')}:If I refuse to wed Demetrius.
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Of Mans First Disobedience, and the Fruit
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Of that Forbidden Tree, whose mortal tast
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Brought Death into the World, and all our woe,
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:With loss of Eden, till one greater Man
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Restore us, and regain the blissful Seat,
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Sing Heav'nly Muse, that on the secret top
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:Of Oreb, or of Sinai, didst inspire
        ${resolveDataFile(
          'paradise-lost.txt',
        )}:That Shepherd, who first taught the chosen Seed`),
      );
    });
  });
});
