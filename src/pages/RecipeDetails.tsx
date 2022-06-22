import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailsWrapper } from '../components/DetailsWrapper';

const RecipeDetails = () => {

  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState<any>({});

  useEffect(() => {
    getRecipeDetails();
  },[params.name])

  const getRecipeDetails = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_DETAILS_KEY}`
    )
    const recipes = await response.json();
    setRecipeDetails(recipes);
  }

  return (
    <DetailsWrapper>
      <div>
        <h2>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.id} />
      </div>
    </DetailsWrapper>
  )
}

export default RecipeDetails