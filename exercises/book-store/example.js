export class BookStore {
  static total(basket) {
    return calculate(basket, 0)
  }
}

function calculate(basket, total) {
  if (!basket.length) return total
  const deduplicateBasket = basket.filter((book, i) => basket.indexOf(book) === i)
  const groups = []
  deduplicateBasket.map((arr, k) => groups.push(...sizedCombinations(deduplicateBasket, k + 1)))
  let totalMin = Infinity

  groups.map(group => {
    const basketToRemove = group.filter((book, i) => group.indexOf(book) === i)
    const basketRemaining = basket.filter(book => {
      const idx = basketToRemove.indexOf(book)
      if (idx > -1) {
        basketToRemove.splice(idx, 1)
        return false
      }
      return true
    })
    const totalGroup = total + totalForGroup(group.length)
    const totalCurrent = basketRemaining.length ? calculate(basketRemaining, totalGroup) : totalGroup
    totalMin = Math.min(totalMin, totalCurrent)
  })

  return totalMin
}

function totalForGroup(count) {
  const discount = [0, 0, 0.05, 0.1, 0.2, 0.25]
  const price = 8
  const maxPrice = price * count
  const groupDiscount = 1 - discount[count]
  return maxPrice * groupDiscount * 100
}

function sizedCombinations(array, k) {
  let combinations = []
  if (k === array.length) return [array]
  if (k === 1) return array.map(a => [a])

  for (let i = 0; i < array.length - k + 1; i++) {
    let currentElement = array.slice(i, i + 1);
    let smallerCombinations = sizedCombinations(array.slice(i + 1), k - 1);
    smallerCombinations.map(comb => combinations.push(currentElement.concat(comb)))
  }
  return combinations
}
