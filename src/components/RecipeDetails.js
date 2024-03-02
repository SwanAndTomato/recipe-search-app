// RecipeDetails.js
import React from 'react';

const RecipeDetails = ({ recipe }) => {
  return (
    <div>
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      <h3>Ingredients:</h3>
      <ul>
        {recipe.extendedIngredients.map((ingredient) => (
          <li key={ingredient.id}>{ingredient.original}</li>
        ))}
      </ul>
      <h3>Instructions:</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions }} />
    </div>
  );
};

export default RecipeDetails;
