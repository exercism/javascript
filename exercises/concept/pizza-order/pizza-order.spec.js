import { pizzaPrice, orderPrice } from './pizza-order';

class PizzaOrder {
  /**
   *
   * @param {Pizza} pizza
   * @param  {Extra[]} extras
   */
  constructor(pizza, ...extras) {
    this.pizza = pizza;
    this.extras = Object.freeze(extras);

    Object.freeze(this);
  }
}

describe('Price for pizza margherita', () => {
  it("pizzaPrice('Margherita')", () => {
    expect(pizzaPrice('Margherita')).toBe(7);
  });
});

describe('Price for pizza formaggio', () => {
  it("pizzaPrice('Formaggio')", () => {
    expect(pizzaPrice('Formaggio')).toBe(10);
  });
});

describe('Price for pizza caprese', () => {
  it("pizzaPrice('Caprese')", () => {
    expect(pizzaPrice('Caprese')).toBe(9);
  });
});

describe('Price for pizza margherita with extra sauce', () => {
  it("pizzaPrice('Margherita', 'ExtraSauce')", () => {
    expect(pizzaPrice('Margherita', 'ExtraSauce')).toBe(8);
  });
});

describe('Price for pizza caprese with extra toppings', () => {
  it("pizzaPrice('Caprese', 'ExtraToppings')", () => {
    expect(pizzaPrice('Caprese', 'ExtraToppings')).toBe(11);
  });
});

describe('Price for pizza formaggio with extra sauce and toppings', () => {
  it("pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings')", () => {
    expect(pizzaPrice('Formaggio', 'ExtraSauce', 'ExtraToppings')).toBe(13);
  });
});

describe('Price for pizza caprese with extra sauce and toppings', () => {
  it("pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')", () => {
    expect(pizzaPrice('Caprese', 'ExtraSauce', 'ExtraToppings')).toBe(12);
  });
});

describe('Price for pizza caprese with a lot of extra toppings', () => {
  it("pizzaPrice('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')", () => {
    expect(
      pizzaPrice(
        'Caprese',
        'ExtraToppings',
        'ExtraToppings',
        'ExtraToppings',
        'ExtraToppings',
      ),
    ).toBe(17);
  });
});

describe('Order price for no pizzas', () => {
  it('orderPrice([])', () => {
    expect(orderPrice([])).toBe(0);
  });
});

describe('Order price for a single pizza caprese', () => {
  it("orderPrice([PizzaOrder('Caprese')])", () => {
    const order = new PizzaOrder('Caprese');
    expect(orderPrice([order])).toBe(9);
  });
});

describe('Order price for a single pizza formaggio with extra sauce', () => {
  it("orderPrice([PizzaOrder('Formaggio', 'ExtraSauce')])", () => {
    const order = new PizzaOrder('Formaggio', 'ExtraSauce');
    expect(orderPrice([order])).toBe(11);
  });
});

describe('Order price for one pizza margherita and one pizza caprese with extra toppings', () => {
  it("orderPrice([PizzaOrder('Margherita'), PizzaOrder('Caprese', 'ExtraToppings')])", () => {
    const margherita = new PizzaOrder('Margherita');
    const caprese = new PizzaOrder('Caprese', 'ExtraToppings');

    expect(orderPrice([margherita, caprese])).toBe(18);

    // Also test that the order doesn't matter
    expect(orderPrice([caprese, margherita])).toBe(18);
  });
});

describe('Order price for one pizza margherita with a LOT of sauce and one pizza caprese with a LOT of toppings', () => {
  it("orderPrice([PizzaOrder('Margherita', 'ExtraSauce', 'ExtraSauce', 'ExtraSauce'), PizzaOrder('Caprese', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings', 'ExtraToppings')])", () => {
    const saucyMargherita = new PizzaOrder(
      'Margherita',
      'ExtraSauce',
      'ExtraSauce',
      'ExtraSauce',
    );
    const toppedCaprese = new PizzaOrder(
      'Caprese',
      'ExtraToppings',
      'ExtraToppings',
      'ExtraToppings',
      'ExtraToppings',
    );

    expect(orderPrice([saucyMargherita, toppedCaprese])).toBe(27);

    // Also test that the order doesn't matter
    expect(orderPrice([toppedCaprese, saucyMargherita])).toBe(27);
  });
});

describe('Order price for very large order', () => {
  it('orderPrice([/* lots of */])', () => {
    const margherita = new PizzaOrder('Margherita');
    const margherita2 = new PizzaOrder('Margherita', 'ExtraSauce');
    const caprese = new PizzaOrder('Caprese');
    const caprese2 = new PizzaOrder('Caprese', 'ExtraToppings');
    const formaggio = new PizzaOrder('Formaggio');
    const formaggio2 = new PizzaOrder('Formaggio', 'ExtraSauce');
    const formaggio3 = new PizzaOrder(
      'Formaggio',
      'ExtraSauce',
      'ExtraToppings',
    );
    const formaggio4 = new PizzaOrder(
      'Formaggio',
      'ExtraToppings',
      'ExtraSauce',
      'ExtraToppings',
      'ExtraSauce',
    );

    const actual = orderPrice([
      margherita,
      margherita2,
      caprese,
      caprese2,
      formaggio,
      formaggio2,
      formaggio3,
      formaggio4,
    ]);
    expect(actual).toBe(85);
  });
});

describe('Order price for a gigantic order', () => {
  it('orderPrice([/* lots of */])', () => {
    const allTheMargheritas = Array(100 * 1000).fill(
      new PizzaOrder('Margherita'),
    );
    const actual = orderPrice(allTheMargheritas);
    expect(actual).toBe(700 * 1000);
  });
});
