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
    };

    detailImage.src = newCocktail.image;
    (defaultName.textContent = newCocktail.name),
      (defaultIngredients.textContent = newCocktail.ingredients);
    defaultInstructions.textContent = newCocktail.instructions;

    // Paul here. This code is for generating random cocktail recipe.
    
  function randomCocktail(cocktails){

  let item = cocktails[Math.floor(Math.random()*cocktails.length)];
  console.log(item)
  let btn = document.getElementById('btn');
  let output = doucment.getElementById('output');
}
}
