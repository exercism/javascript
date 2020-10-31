export function getFirstCard(deck) {
  const [first] = deck

  return first
}

export function getSecondCard(deck) {
  const [, second] = deck

  return second
}

export function swapTopTwoCards([a, b, ...rest]) {
  return [b, a, ...rest]
}

export function discardTopCard(deck) {
  const [first, ...rest] = deck

  return [first, rest]
}

const FACE_CARDS = ['jack', 'queen', 'king']

export function insertFaceCards([head, ...tail]) {
  return [head, ...FACE_CARDS, ...tail]
}
