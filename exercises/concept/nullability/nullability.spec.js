import { printBadge } from './nullability';

describe('nullability', () => {
  describe('printBadge', () => {
    it("printBadge(17, 'Ryder Herbert', 'Marketing')", () => {
      const actual = printBadge(17, 'Ryder Herbert', 'Marketing');
      expect(actual).toBe('[17] Ryder Herbert - MARKETING');
    });
  });

  describe('printBadge without an employee ID', () => {
    it("printBadge(null, 'Bogdan Rosario', 'Marketing')", () => {
      const actual = printBadge(null, 'Bogdan Rosario', 'Marketing');
      expect(actual).toBe('Bogdan Rosario - MARKETING');
    });
  });

  describe('printBadge without a department', () => {
    it("printBadge(59, 'Julie Sokato', null)", () => {
      const actual = printBadge(59, 'Julie Sokato', null);
      expect(actual).toBe('[59] Julie Sokato - OWNER');
    });
  });

  describe('printBadge for a new owner', () => {
    it("printBadge(null, 'Amare Osei', null)", () => {
      const actual = printBadge(null, 'Amare Osei', null);
      expect(actual).toBe('Amare Osei - OWNER');
    });
  });
});
