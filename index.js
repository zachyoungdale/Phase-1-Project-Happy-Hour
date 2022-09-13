fetch("http://localhost:3000/cocktails")
  .then((response) => response.json())
  .then((data) => console.log(data));

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
  

    // Paul here. this code is for generating random cocktail recipe
    
    let btn = document.getElementById('btn');
    let output = doucment.getElementById('output');
    let cocktails = [ {
        
        "id": 1,
        "name": "Margarita",
        "image": "https://upload.wikimedia.org/wikipedia/commons/0/09/Klassiche_Margarita.jpg",
        "ingredients": "Tequila, Triple Sec, Lime Juice, Salt",
        "Instructions": "Rub the rim of the glass with the lime slice to make the salt stick to it. Take care to moisten only the outer rim and sprinkle the salt on it. The salt should present to the lips of the imbiber and never mix into the cocktail. Shake the other ingredients with ice, then carefully pour into the glass."
      },
      {
        "id": 2,
        "name": "Classi c Old-Fashioned",
        "image": "https://www.thecocktaildb.com/images/media/drink/w8cxqv1582485254.jpg",
        "ingredients": "Bitters, Water, Sugar, Bourbon, Orange, Maraschino Cherry",
        "Instructions": "In an old-fashioned glass, muddle the bitters and water into the sugar cube, using the back of a teaspoon. Almost fill the glass with ice cubes and add the bourbon. Garnish with the orange slice and the cherry. Serve with a swizzle stick."
      },
      {
        "id": 3,
        "name": "Martini",
        "image": "https://www.thecocktaildb.com/images/media/drink/71t8581504353095.jpg",
        "ingredients": "Gin, Dry Vermouth, Olive",
        "Instructions": "Straight: Pour all ingredients into mixing glass with ice cubes. Stir well. Strain in chilled martini cocktail glass. Squeeze oil from lemon peel onto the drink, or garnish with olive."
      },
      {
        "id": 4,
        "name": "Negroni",
        "image": "https://www.thecocktaildb.com/images/media/drink/qgdu971561574065.jpg",
        "ingredients": "Gin, Campari, Sweet Vermouth",
        "Instructions": "Stir into glass over ice, garnish and serve."
      },
      {
        "id": 5,
        "name": "A1",
        "image": "https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg",
        "ingredients": "Gin, Grand Marnier, Lemon Juice, Grenadine",
        "Instructions": "Pour all ingredients into a cocktail shaker, mix and serve over ice into a chilled glass."
      },
      {
        "id": 6,
        "name": "Gin Tonic",
        "image": "https://www.thecocktaildb.com/images/media/drink/qcgz0t1643821443.jpg",
        "ingredients": "Gin, Tonic Water, Lemon Peel, Ice",
        "Instructions": "Fill a highball glass with ice, pour the gin, top with tonic water and squeeze a lemon wedge and garnish with a lemon wedge."
      },
      {
        "id": 7,
        "name": "Moscow Mule",
        "image": "https://www.thecocktaildb.com/images/media/drink/3pylqc1504370988.jpg",
        "ingredients": "Vodka, Lime Juice, Ginger Ale",
        "Instructions": "Combine vodka and ginger beer in a highball glass filled with ice. Add lime juice. Stir gently. Garnish."
      },
      {
        "id": 8,
        "name": "Cosmopolitan",
        "image": "https://www.thecocktaildb.com/images/media/drink/kpsajh1504368362.jpg",
        "ingredients": "Absolut Citron, Lime juice, Cointreau, Cranberry juice",
        "Instructions": "Add all ingredients into cocktail shaker filled with ice. Shake well and double strain into large cocktail glass. Garnish with lime wheel."
      },
      {
        "id": 9,
        "name": "Manhattan",
        "image": "https://www.thecocktaildb.com/images/media/drink/yk70e31606771240.jpg",
        "ingredients": "Sweet Vermouth, Bourbon, Angostura bitters, Ice, Maraschino cherry, Orange peel",
        "Instructions": "Stirred over ice, strained into a chilled glass, garnished, and served up."
      },
      {
        "id": 10,
        "name": "Mimosa",
        "image": "https://www.thecocktaildb.com/images/media/drink/juhcuu1504370685.jpg",
        "ingredients": "Champagne, Orange Juice",
        "Instructions": "Ensure both ingredients are well chilled, then mix into the glass. Serve cold."
      }];

    btn.addEventListener('click', function(){
    let randomCocktails = cocktails[Math.floor(Math.random() * cocktails.length)]
    output.inner.HTML = randomCocktails
});
