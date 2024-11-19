// file: searchCandies.test.js

// You'll test-drive a function searchCandies that takes the following two arguments: a search string and a
// maximum price — and returns only the names of candies matching these criteria:

// the candy name starts by the search string
// the candy price is less than the maximum price
// We want the function searchCandies to behave like this:

// > searchCandies('Ma', 10);
// [ 'Mars', 'Maltesers' ]

// > searchCandies('Ma', 2); // Maltesers excluded: it's more than 2
// [ 'Mars' ]

// > searchCandies('S', 10); 
// [ 'Skitties', 'Skittles', 'Starburst' ]

// > searchCandies('S', 4); 
// [ 'Skitties', 'Skittles' ] // Starbust excluded: it's more than 4

const searchCandies = require('./searchCandies.js');

describe('searchCandies', () => {
    const candies = [
        { name: 'Aero', price: 1.99 },
        { name: 'Skitties', price: 2.99 },
        { name: 'Mars', price: 1.49 },
        { name: 'Maltesers', price: 3.49 },
        { name: 'Skittles', price: 1.49 },
        { name: 'Starburst', price: 5.99 },
        { name: 'Ricola', price: 1.99 },
        { name: 'Polkagris', price: 5.99 },
        { name: 'Pastila', price: 4.99 },
        { name: 'Mentos', price: 8.99 },
        { name: 'Raffaello', price: 7.99 },
        { name: 'Gummi bears', price: 10.99 },
        { name: 'Fraise Tagada', price: 5.99 }
      ];

    it('searches for candies starting with Ma under 10 pounds', () => {
        expect(searchCandies('Ma', 10, candies)).toEqual(['Mars', 'Maltesers']);
    });

    it('searches for candies starting with ma under 10 pounds', () => {
        expect(searchCandies('ma', 10, candies)).toEqual(['Mars', 'Maltesers']);
    });

    it('searches for candies starting with Ma under 2 pounds', () => {
        expect(searchCandies('Ma', 2, candies)).toEqual(['Mars']);
    });

    it('searches for candies starting with S under 10 pounds', () => {
        expect(searchCandies('S', 10, candies)).toEqual(['Skitties', 'Skittles', 'Starburst']);
    });

    it('searches for candies starting with S under 4 pounds', () => {
        expect(searchCandies('S', 4, candies)).toEqual(['Skitties', 'Skittles']);
    });
});

