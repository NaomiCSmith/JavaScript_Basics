const Candy = require('./candy.js');

describe('Candy', () => {
    it('returns candy name with .getName', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getName()).toBe('Mars');
    })
    it('returns candy price with .getPrice', () => {
        const candy = new Candy('Mars', 4.99);
        expect(candy.getPrice()).toEqual(4.99);
    })
})