import React, {useState} from "react";
import RecipeList from "./RecipeList";
import '../css/app.css'
import uuidv4 from 'uuid/dist/v4'

export const RecipeContext = React.createContext()

function App() {


  const [recipes, setRecipes] = useState(sampleRecipes)

  const recipeContextValue = {
    handleRecipeDelete,
    handleRecipeAdd
  }

  return (
      <RecipeContext.Provider value={recipeContextValue}>
        <RecipeList recipes={recipes} />
      </RecipeContext.Provider>
  )

  function handleRecipeAdd() {
    const newRecipe = {
      id: uuidv4(),
      name: 'New',
      servings: 1,
      cookTime: '1:00',
      instructions: 'Instr.',
      ingredients: [
        {id: uuidv4(), name: 'Name', amount: '1 Tbs'}
      ]
    }

    setRecipes([...recipes, newRecipe])
  }

  function handleRecipeDelete(id) {
    setRecipes(recipes.filter(recipe=>recipe.id !==id))
  }
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
