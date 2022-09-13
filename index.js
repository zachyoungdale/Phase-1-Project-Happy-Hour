fetch("http://localhost:3000/cocktails")
  .then((response) => response.json())
  .then((data) => {
    randomCocktail(data)
  });

//Zach here. this code below should handle the submit form for the new cocktail.

const detailImage = document.querySelector(".detail-image");
const defaultName = document.querySelector(".name");
const defaultIngredients = document.querySelector(".ingredient-list");
const defaultInstructions = document.querySelector("#instructions-placeholder");
const btn = document.querySelector("#random-cocktail");

function handleSubmit() {
  const newCocktailForm = document.querySelector("#new-cocktail");
  newCocktailForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const newName = e.target.name.value;
    const newImage = e.target.image.value;
    const newIngredients = e.target.ingredients.value;
    const newInstructions = e.target["new-instructions"].value;

    const newCocktail = {
      name: newName,
      image: newImage,
      ingredients: newIngredients,
      instructions: newInstructions,
    }
      
      fetch("http://localhost:3000/cocktails", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newCocktail),
      })
        .then((response) => response.json())
        .then((data) => console.log(data));
    

    detailImage.src = newCocktail.image
    (defaultName.textContent = newCocktail.name),
      (defaultIngredients.textContent = newCocktail.ingredients)
    defaultInstructions.textContent = newCocktail.instructions;
  })
}
  

    // Paul here. This code is for generating random cocktail recipe.
    
  function randomCocktail(cocktails){

    btn.addEventListener('click', function(){
    let randomCocktails = cocktails[Math.floor(Math.random() * cocktails.length)]
    detailImage.src = randomCocktails.image
    defaultName.textContent = randomCocktails.name
    defaultIngredients.textContent = randomCocktails.ingredients
    defaultInstructions.textContent = randomCocktails.instructions
    })
  }
