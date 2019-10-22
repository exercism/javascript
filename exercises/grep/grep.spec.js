const { spawnSync } = require('child_process')
const path = require('path')

const BASE_DIR = './tmp_exercises';

const resolveDataFile = file => path.resolve(BASE_DIR, 'data', file);

const spawn_grep = config => {
  const args = [
    path.resolve(BASE_DIR, './grep.js'),
    ...config.flags,
    config.pattern,
    ...config.files.map(file => path.resolve(BASE_DIR, 'data', file))
  ]

  return new Promise((resolve, reject) => {
    const child = spawnSync('node', args, { stdio: 'pipe' })
    const stderr = child.stderr.toString().trim()
    const stdout = child.stdout.toString().trim()

    if (stderr) {
      reject(stderr)
    }

    resolve(stdout)
  });
}

describe('grep exercise', () => {
  describe('Test grepping a single file', () => {
    it('One file, one match, no flags', () => {
      return expect(spawn_grep({
        pattern: "Agamemnon",
        flags: [],
        files: ["iliad.txt"]
      })).resolves.toBe("Of Atreus, Agamemnon, King of men.")
    })

    it('One file, one match, print line numbers flag', () => {
      return expect(spawn_grep({
        pattern: "Forbidden",
        flags: ["-n"],
        files: ["paradise-lost.txt"]
      })).resolves.toBe("2:Of that Forbidden Tree, whose mortal tast")
    })

    it('One file, one match, case-insensitive flag', () => {
      return expect(spawn_grep({
        pattern: "FORBIDDEN",
        flags: ["-i"],
        files: ["paradise-lost.txt"]
      })).resolves.toBe("Of that Forbidden Tree, whose mortal tast")
    })

    it('One file, one match, print file names flag', () => {
      return expect(spawn_grep({
        pattern: "Forbidden",
        flags: ["-l"],
        files: ["paradise-lost.txt"]
      })).resolves.toBe(resolveDataFile("paradise-lost.txt"))
    })

    it('One file, one match, match entire lines flag', () => {
      return expect(spawn_grep({
        pattern: "With loss of Eden, till one greater Man",
        flags: ["-x"],
        files: ["paradise-lost.txt"]
      })).resolves.toBe("With loss of Eden, till one greater Man")
    })

    it('One file, one match, multiple flags', () => {
      return expect(spawn_grep({
        pattern: "OF ATREUS, Agamemnon, KIng of MEN.",
        flags: ["-n", "-i", "-x"],
        files: ["iliad.txt"]
      })).resolves.toBe("9:Of Atreus, Agamemnon, King of men.")
    })

    it('One file, several matches, no flags', () => {
      return expect(spawn_grep({
        pattern: "may",
        flags: [],
        files: ["midsummer-night.txt"]
      })).resolves.toBe(`Nor how it may concern my modesty,\nBut I beseech your grace that I may know\nThe worst that may befall me in this case,`)
    })

    it('One file, several matches, print line numbers flag', () => {
      return expect(spawn_grep({
        pattern: "may",
        flags: ["-n"],
        files: ["midsummer-night.txt"]
      })).resolves.toBe(`3:Nor how it may concern my modesty,\n5:But I beseech your grace that I may know\n6:The worst that may befall me in this case,`)
    })

    it('One file, several matches, match entire lines flag', () => {
      return expect(spawn_grep({
        pattern: "may",
        flags: ["-x"],
        files: ["midsummer-night.txt"]
      })).resolves.toBe('')
    })

    it('One file, several matches, case-insensitive flag', () => {
      return expect(spawn_grep({
        pattern: "ACHILLES",
        flags: ["-i"],
        files: ["iliad.txt"]
      })).resolves.toBe(`Achilles sing, O Goddess! Peleus' son;\nThe noble Chief Achilles from the son`)
    })

    it('One file, several matches, inverted flag', () => {
      return expect(spawn_grep({
        pattern: "Of",
        flags: ["-v"],
        files: ["paradise-lost.txt"]
      })).resolves.toBe(`Brought Death into the World, and all our woe,\nWith loss of Eden, till one greater Man\nRestore us, and regain the blissful Seat,\nSing Heav'nly Muse, that on the secret top\nThat Shepherd, who first taught the chosen Seed`)
    })

    it('One file, no matches, various flags', () => {
      return expect(spawn_grep({
        pattern: "Gandalf",
        flags: ["-n", "-l", "-x", "-i"],
        files: ["iliad.txt"]
      })).resolves.toBe('')
    })

    it('One file, one match, file flag takes precedence over line flag', () => {
      return expect(spawn_grep({
        pattern: "ten",
        flags: ["-n", "-l"],
        files: ["iliad.txt"]
      })).resolves.toBe(resolveDataFile('iliad.txt'))
    })

    it('One file, several matches, inverted and match entire lines flags', () => {
      return expect(spawn_grep({
        pattern: "Illustrious into Ades premature,",
        flags: ["-x", "-v"],
        files: ["iliad.txt"]
      })).resolves.toBe(`Achilles sing, O Goddess! Peleus' son;\nHis wrath pernicious, who ten thousand woes\nCaused to Achaia's host, sent many a soul\nAnd Heroes gave (so stood the will of Jove)\nTo dogs and to all ravening fowls a prey,\nWhen fierce dispute had separated once\nThe noble Chief Achilles from the son\nOf Atreus, Agamemnon, King of men.`)
    })
  })

  describe('Test grepping multiples files at once', () => {
    it('Multiple files, one match, no flags', () => {
      return expect(spawn_grep({
        pattern: "Agamemnon",
        flags: [],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}:Of Atreus, Agamemnon, King of men.`)
    })

    it('Multiple files, several matches, no flags', () => {
      return expect(spawn_grep({
        pattern: "may",
        flags: [],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('midsummer-night.txt')}:Nor how it may concern my modesty,\n${resolveDataFile('midsummer-night.txt')}:But I beseech your grace that I may know\n${resolveDataFile('midsummer-night.txt')}:The worst that may befall me in this case,`)
    })

    it('Multiple files, several matches, print line numbers flag', () => {
      return expect(spawn_grep({
        pattern: "that",
        flags: ["-n"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('midsummer-night.txt')}:5:But I beseech your grace that I may know\n${resolveDataFile('midsummer-night.txt')}:6:The worst that may befall me in this case,\n${resolveDataFile('paradise-lost.txt')}:2:Of that Forbidden Tree, whose mortal tast\n${resolveDataFile('paradise-lost.txt')}:6:Sing Heav'nly Muse, that on the secret top`)
    })

    it('Multiple files, one match, print file names flag', () => {
      return expect(spawn_grep({
        pattern: "who",
        flags: ["-l"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}\n${resolveDataFile('paradise-lost.txt')}`)
    })

    it('Multiple files, several matches, case-insensitive flag', () => {
      return expect(spawn_grep({
        pattern: "TO",
        flags: ["-i"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}:Caused to Achaia's host, sent many a soul\n${resolveDataFile('iliad.txt')}:Illustrious into Ades premature,\n${resolveDataFile('iliad.txt')}:And Heroes gave (so stood the will of Jove)\n${resolveDataFile('iliad.txt')}:To dogs and to all ravening fowls a prey,\n${resolveDataFile('midsummer-night.txt')}:I do entreat your grace to pardon me.\n${resolveDataFile('midsummer-night.txt')}:In such a presence here to plead my thoughts;\n${resolveDataFile('midsummer-night.txt')}:If I refuse to wed Demetrius.\n${resolveDataFile('paradise-lost.txt')}:Brought Death into the World, and all our woe,\n${resolveDataFile('paradise-lost.txt')}:Restore us, and regain the blissful Seat,\n${resolveDataFile('paradise-lost.txt')}:Sing Heav'nly Muse, that on the secret top`)
    })

    it('Multiple files, several matches, inverted flag', () => {
      return expect(spawn_grep({
        pattern: "a",
        flags: ["-v"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}:Achilles sing, O Goddess! Peleus' son;\n${resolveDataFile('iliad.txt')}:The noble Chief Achilles from the son\n${resolveDataFile('midsummer-night.txt')}:If I refuse to wed Demetrius.`)
    })

    it('Multiple files, one match, match entire lines flag', () => {
      return expect(spawn_grep({
        pattern: "But I beseech your grace that I may know",
        flags: ["-x"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('midsummer-night.txt:But I beseech your grace that I may know')}`)
    })

    it('Multiple files, one match, multiple flags', () => {
      return expect(spawn_grep({
        pattern: "WITH LOSS OF EDEN, TILL ONE GREATER MAN",
        flags: ["-n", "-i", "-x"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('paradise-lost.txt')}:4:With loss of Eden, till one greater Man`)
    })

    it('Multiple files, no matches, various flags', () => {
      return expect(spawn_grep({
        pattern: "Frodo",
        flags: ["-n", "-l", "-x", "-i"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe('')
    })

    it('Multiple files, several matches, file flag takes precedence over line number flag', () => {
      return expect(spawn_grep({
        pattern: "who",
        flags: ["-n", "-l"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}\n${resolveDataFile('paradise-lost.txt')}`)
    })

    it('Multiple files, several matches, inverted and match entire lines flags', () => {
      return expect(spawn_grep({
        pattern: "Illustrious into Ades premature,",
        flags: ["-x", "-v"],
        files: ["iliad.txt", "midsummer-night.txt", "paradise-lost.txt"]
      })).resolves.toBe(`${resolveDataFile('iliad.txt')}:Achilles sing, O Goddess! Peleus' son;\n${resolveDataFile('iliad.txt')}:His wrath pernicious, who ten thousand woes\n${resolveDataFile('iliad.txt')}:Caused to Achaia's host, sent many a soul\n${resolveDataFile('iliad.txt')}:And Heroes gave (so stood the will of Jove)\n${resolveDataFile('iliad.txt')}:To dogs and to all ravening fowls a prey,\n${resolveDataFile('iliad.txt')}:When fierce dispute had separated once\n${resolveDataFile('iliad.txt')}:The noble Chief Achilles from the son\n${resolveDataFile('iliad.txt')}:Of Atreus, Agamemnon, King of men.\n${resolveDataFile('midsummer-night.txt')}:I do entreat your grace to pardon me.\n${resolveDataFile('midsummer-night.txt')}:I know not by what power I am made bold,\n${resolveDataFile('midsummer-night.txt')}:Nor how it may concern my modesty,\n${resolveDataFile('midsummer-night.txt')}:In such a presence here to plead my thoughts;\n${resolveDataFile('midsummer-night.txt')}:But I beseech your grace that I may know\n${resolveDataFile('midsummer-night.txt')}:The worst that may befall me in this case,\n${resolveDataFile('midsummer-night.txt')}:If I refuse to wed Demetrius.\n${resolveDataFile('paradise-lost.txt')}:Of Mans First Disobedience, and the Fruit\n${resolveDataFile('paradise-lost.txt')}:Of that Forbidden Tree, whose mortal tast\n${resolveDataFile('paradise-lost.txt')}:Brought Death into the World, and all our woe,\n${resolveDataFile('paradise-lost.txt')}:With loss of Eden, till one greater Man\n${resolveDataFile('paradise-lost.txt')}:Restore us, and regain the blissful Seat,\n${resolveDataFile('paradise-lost.txt')}:Sing Heav'nly Muse, that on the secret top\n${resolveDataFile('paradise-lost.txt')}:Of Oreb, or of Sinai, didst inspire\n${resolveDataFile('paradise-lost.txt')}:That Shepherd, who first taught the chosen Seed`)
    })
  })
})
