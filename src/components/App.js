import React from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'

function App() {

  return (
    <RecipeList recipes={sampleRecipes} />
  )
}

const sampleRecipes = [
  {
    id: 1,
    name: 'Plain Chicken',
    servings: 3,
    cookTime: '1:45',
    instructions: "1. Put salt on chicken\n 2. Put chicken in oven\n 3. Eat chicken",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 pounds'
      },
    ]
  },
  {
    id: 2,
    name: 'Plain Pork',
    servings: 5,
    cookTime: '2:45',
    instructions: "1. Put salt on pork\n 2. Put pork in oven\n 3. Eat pork",
    ingredients: [
      {
        id: 1,
        name: 'Chicken',
        amount: '2 pounds'
      },
      {
        id: 2,
        name: 'Paprika',
        amount: '2 pounds'
      },
    ]
  }
]

export default App;
