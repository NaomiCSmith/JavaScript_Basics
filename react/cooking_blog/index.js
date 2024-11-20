// file: index.js

const body = document.querySelector("body");

const recipeTitleEl = document.createElement("p");
recipeTitleEl.innerText = "Recipe One: Toast"
body.appendChild(recipeTitleEl);

const recipeListEl = document.createElement("ol"); // Create an ordered list element

const stepOneEl = document.createElement("li"); // Create a new list item element
stepOneEl.innerText = "Toast some bread"; // Update the text of the list item
recipeListEl.appendChild(stepOneEl); // Add the item as a child of the recipe list

const stepTwoEl = document.createElement("li"); // Repeat for the second instruction
stepTwoEl.innerText = "Spread butter on the toast";
recipeListEl.appendChild(stepTwoEl);

const stepThreeEl = document.createElement("li");
stepThreeEl.innerText = "Eat and enjoy!";
recipeListEl.appendChild(stepThreeEl);

body.appendChild(recipeListEl); // Add the recipe list onto the body of the page
