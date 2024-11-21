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



// alternative route according to DRY principles:

const addRecipe = (title, steps) => {
    const recipeTitleEl = document.createElement("p");
    recipeTitleEl.innerText = title;
    body.appendChild(recipeTitleEl);


    const recipeListEl = document.createElement("ol");
    steps.map((step) => {
        const stepEl = document.createElement("li");
        stepEl.innerText = step;
        recipeListEl.appendChild(stepEl);
    });
    body.appendChild(recipeListEl);
};


// add a joke to make the food taste better:

const getJoke = () => {
    return fetch(`https://official-joke-api.appspot.com/random_joke`)
    .then((response) => {
        return response.json();
    })
    .then((joke) => {
        const jokeSetUpEl = document.createElement("p");
        jokeSetUpEl.innerText = `${joke.setup}`;
        body.append(jokeSetUpEl);

        const jokePunchLineEl = document.createElement("p");
        jokePunchLineEl.innerText = `${joke.punchline}`;
        body.append(jokePunchLineEl);
    });
};

getJoke()


// add event listener to TODO button

const buttonEl = document.querySelector("#TODO");
buttonEl.addEventListener("click", () => {
    return fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const todoEl = document.createElement("p");
        todoEl.innerText = `TODO: ${data.title} (Completed: ${data.completed})`;
        body.appendChild(todoEl);
    });
});