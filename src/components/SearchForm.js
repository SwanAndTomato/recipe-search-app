// SearchForm.js
import React, { useState } from 'react';
import '../styles/SearchForm.css'

const SearchForm = ({ onSearch }) => {
  const [ingredients, setIngredients] = useState('');

  const handleChange = (e) => {
    setIngredients(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(ingredients);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter ingredients separated by commas..."
        value={ingredients}
        onChange={handleChange}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
