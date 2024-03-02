// RecipeListItem.js
import React from 'react';
import '../styles/RecipeListItem.css'; // Import the recipe list item styles

const RecipeListItem = ({ recipe, onClick }) => {
    return (
      <div className="recipe-list-item" onClick={onClick}>
        <h3>{recipe.title}</h3>
        <img src={recipe.image} alt={recipe.title} />
        <p>Cooking Time: {recipe.readyInMinutes} minutes</p>
        <p>Servings: {recipe.servings}</p>
        <p>Preparation Time: {recipe.preparationMinutes} minutes</p>
        <p>{recipe.summary}</p>
      </div>
    );
  };
  

export default RecipeListItem;
