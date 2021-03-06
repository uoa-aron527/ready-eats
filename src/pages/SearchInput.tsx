import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { CuisineCard } from '../components/CuisineCard';
import { Grid } from '../components/Grid';

const SearchInput = () => {
  const [searchResults, setSearchResults] = useState([]);
  const params = useParams();

  useEffect(() => {
    getSearchResults(params.query);
  },[params.query])

  const getSearchResults = async (name: any) => {

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_DETAILS_KEY}&number=9&query=${name}`
    );
    const searchRecipes = await response.json();
    setSearchResults(searchRecipes.results);
  };



  return (
    <Grid
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.75 }}
    >
      {searchResults.map((recipe: any) => {
        return(
          <CuisineCard key={recipe.id}
            animate = {{ opacity: 1 }}
            initial = {{ opacity: 0 }}
            exit = {{ opacity: 0 }}
            transition = {{ duration: 0.75 }}
          >
            <Link to={'/recipe/' + recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            </Link>
          </CuisineCard>
        )
      })}
    </Grid>
  )
}

export default SearchInput;