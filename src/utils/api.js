// utils/api.js
import axios from 'axios';

const API_KEY = '7b79a7d755fd4e22acf73d57f84d4992';
const BASE_URL = 'https://api.spoonacular.com/recipes';

export const getRecipesByIngredients = async (ingredients) => {
  try {
    const response = await axios.get(`${BASE_URL}/findByIngredients`, {
      params: {
        ingredients: ingredients,
        apiKey: API_KEY,
        number: 10, // Number of recipes to fetch
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching recipes:', error);
    return [];
  }
};

export const getRecipesByDiet = async (diet, ingredients = []) => {
  try {
    const response = await axios.get(`${BASE_URL}/complexSearch`, {
      params: {
        diet: diet,
        apiKey: API_KEY,
        includeIngredients: ingredients.join(','),
        number: 10, // Number of recipes to fetch
      },
    });
    return response.data.results;
  } catch (error) {
    console.error('Error fetching recipes by diet:', error);
    return [];
  }
};
