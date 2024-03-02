// App.js
import React, { useState } from 'react';
import RecipeList from './components/RecipeList';
import RecipeDetails from './components/RecipeDetails';
import { getRecipesByDiet } from './utils/api';
import './App.css';

function App() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [ingredients, setIngredients] = useState('');
  const [diet, setDiet] = useState('');

  const searchRecipes = async () => {
    const recipes = await getRecipesByDiet(diet, ingredients.split(',').map(ingredient => ingredient.trim()));
    setRecipes(recipes);
    setSelectedRecipe(null); // Clear selected recipe when searching again
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleDietChange = (e) => {
    setDiet(e.target.value);
  };

  const handleInputChange = (e) => {
    setIngredients(e.target.value);
  };

  return (
    <div>
      <h1>Recipe Search Engine</h1>
      <div>
        <label htmlFor="ingredients">Included Ingredients:</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={handleInputChange}
          placeholder="Enter ingredients separated by commas..."
        />
      </div>
      <div>
        <label htmlFor="diet">Select dietary restriction:</label>
        <select id="diet" value={diet} onChange={handleDietChange}>
          <option value="">None</option>
          <option value="vegan">Vegan</option>
          <option value="vegetarian">Vegetarian</option>
          <option value="gluten free">Gluten Free</option>
          <option value="low fodmap">Low FODMAP</option>
        </select>
      </div>
      <button onClick={searchRecipes}>Search</button>
      {selectedRecipe ? (
        <RecipeDetails recipe={selectedRecipe} />
      ) : (
        <RecipeList recipes={recipes} onRecipeClick={handleRecipeClick} />
      )}
    </div>
  );
}

export default App;
