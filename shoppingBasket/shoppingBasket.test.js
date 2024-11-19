// > const candy = new Candy('Mars', 4.99);

// > candy.getName();
// 'Mars'
// > candy.getPrice();
// 4.99

// > const basket = new ShoppingBasket();
// > basket.getTotalPrice();
// 0

// > basket.addItem(candy);

// > basket.getTotalPrice();
// 4.99

// > basket.addItem(new Candy('Skittle', 3.99));
// > basket.addItem(new Candy('Skittle', 3.99));

// > basket.getTotalPrice();
// 12.97

// To complete this exercise, you'll have to:

// Initialise a new project directory.
// Write Jest tests cases for a class.
// Declare a class and its methods.
// Use a JS object as a "double" or mock.
// Use let rather than const to make a variable able to change.

const ShoppingBasket = require('./shoppingBasket.js');
const Candy = require('./candy.js');

describe('ShoppingBasket', () => {
    
    it('starts with zero price in basket', () => {
        const basket = new ShoppingBasket();
        expect(basket.getTotalPrice()).toEqual(0);
    });

    it('adds new candy to basket with price 4.99', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        basket.addItem(candy);
        expect(basket.getTotalPrice()).toEqual(4.99);
    });

    it('adds three items to basket to equal 12.97', () => {
        const basket = new ShoppingBasket();
        const candy = new Candy('Mars', 4.99);
        const candy2 = new Candy('Skittle', 3.99);
        const candy3 = new Candy('Skittle', 3.99);
        basket.addItem(candy);
        basket.addItem(candy2);
        basket.addItem(candy3);
        expect(basket.getTotalPrice()).toEqual(12.97);
    });

    // introducing mocks:

    it('adds a mock candy to empty basket to equal 3.50', () => {
        const basket = new ShoppingBasket();
        const candyDouble = {
            getPrice: () => 3.50,
        };
        basket.addItem(candyDouble);
        expect(basket.getTotalPrice()).toEqual(3.50);
    });
});