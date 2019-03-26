import { colorCode, COLORS } from './resistor-color.js'

describe('Color codes', () => {
  describe('Black', () => {
    xtest('Black', () => {
      expect(colorCode("black")).toEqual(0)
    })
  })

  describe('White', () => {
    xtest('White', () => {
      expect(colorCode("white")).toEqual(9)
    })
  })

  describe('Orange', () => {
    xtest('Orange', () => {
      expect(colorCode("orange")).toEqual(3)
    })
  })
})

describe('Colors', () => {
  xtest('Colors', () => {
    expect(COLORS).toEqual(["black","brown","red","orange","yellow","green","blue","violet","grey","white"])
  })
})
