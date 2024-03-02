// RecipeList.js
import React from 'react';
import '../styles/RecipeList.css'; // Import the recipe list styles
import RecipeListItem from './RecipeListItem';

const RecipeList = ({ recipes, onRecipeClick }) => {
  return (
    <div className="recipe-list">
      {recipes&&recipes.map((recipe) => (
        <RecipeListItem key={recipe.id} recipe={recipe} onClick={() => onRecipeClick(recipe)} />
      ))}
    </div>
  );
};

export default RecipeList;
