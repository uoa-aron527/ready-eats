import React, { useState, useEffect } from 'react'

const SearchInput = () => {
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    getSearchResults();
  },[])

  const getSearchResults = async (name: any) => {

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=9&query=${name}`
    );
    const searchRecipes = await response.json();
    setSearchResults(searchRecipes.results);
  };



  return (
    <div>Search</div>
  )
}

export default SearchInput;