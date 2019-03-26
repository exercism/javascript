import { twoFer } from './two-fer.js'

describe('no name given', () => {
  test('no name given', () => {
    expect(twoFer()).toEqual("One for you, one for me.")
  })
})

describe('a name given', () => {
  xtest('a name given', () => {
    expect(twoFer("Alice")).toEqual("One for Alice, one for me.")
  })
})

describe('another name given', () => {
  xtest('another name given', () => {
    expect(twoFer("Bob")).toEqual("One for Bob, one for me.")
  })
})
