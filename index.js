fetch("http://localhost:3000/cocktails")
  .then((response) => response.json())
  .then((data) => {
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

    fetch("http://localhost:3000/cocktails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCocktail),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
}
handleSubmit();

// James here, this code handles the search bar
function handleSearchBar(data){
  console.log(data)
  const searchForm = document.querySelector(".searchbar")
  searchForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    let searchInput = event.target["search"].value;
    const findCocktail = data.find((cocktail)=>{
      return cocktail.name === searchInput
    })
    let searchImg = document.querySelector(".detail-image")
    searchImg.src = findCocktail.image
    let searchName = document.querySelector(".name")
    searchName.innerText = findCocktail.name
    let searchIngredient = document.querySelector(".ingredient-list")
    searchIngredient.innerText = findCocktail.ingredients
    let searchInstruction = document.querySelector("#instructions-placeholder")
    searchInstruction.innerText = findCocktail.Instructions
    
  })
}

