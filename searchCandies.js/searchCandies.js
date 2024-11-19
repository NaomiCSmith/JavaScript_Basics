// file: searchCandies.js

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

const searchCandies = (search, maxPrice, candies) => {
    const lowerCase = search.toLowerCase();
    return candies.filter((candy) => candy.name.toLowerCase().startsWith(lowerCase) && candy.price < maxPrice).map((candy) => candy.name);
    };


module.exports = searchCandies;