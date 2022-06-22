import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetails = () => {

  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState({});

  useEffect(() => {
    getRecipeDetails();
  },[params.name])

  const getRecipeDetails = async () => {
    const response = await fetch(
      `https://api.spooncular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_DETAILS_KEY}`
    )
    const recipes = response.json();
    setRecipeDetails(recipes);
  }

  return (
    <div>RecipeDetails</div>
  )
}

export default RecipeDetails