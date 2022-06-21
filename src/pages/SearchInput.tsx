import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const SearchInput = () => {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    getSearchResults(params.query);
  },[params.query])

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