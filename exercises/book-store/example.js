export class BookStore {
  static total(basket) {
    return calculate(basket, 0)
  }
}

function calculate(basket, total) {
  if (!basket.length) return total

  const group = basket.filter((book, i) => basket.indexOf(book) === i)
  let totalMin = Infinity
  for (let j = group.length; j > 0; j--) {
    const basketToRemove = group.slice(0, j).reverse()
    const basketRemaining = basket.filter(book => {
      const idx = basketToRemove.indexOf(book)
      if (idx > -1) {
        basketToRemove.splice(idx, 1)
        return false
      }
      return true
    })
    const totalCurrent = calculate(basketRemaining, total + totalForGroup(j))
    totalMin = Math.min(totalMin, totalCurrent)
  }

  return totalMin
}

function totalForGroup(count) {
  const discount = [0, 0, 0.05, 0.1, 0.2, 0.25]
  const price = 8
  const maxPrice = price * count
  const groupDiscount = 1 - discount[count]
  return maxPrice * groupDiscount * 100
}
