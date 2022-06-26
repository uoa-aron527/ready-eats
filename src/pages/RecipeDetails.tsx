import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { DetailButton } from '../components/DetailButton';
import { DetailsWrapper } from '../components/DetailsWrapper';
import { InfoTab } from '../components/InfoTab';

const RecipeDetails = () => {

  const params = useParams();
  const [recipeDetails, setRecipeDetails] = useState<any>({});
  const [activeTab, setActiveTab] = useState<string>('Instructions');

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
      <InfoTab>
        <DetailButton className={activeTab === 'Instructions' ? 'active' : ''} onClick={() => setActiveTab('Instructions')}>
          Instructions
        </DetailButton>
        <DetailButton className={activeTab === 'Ingredients' ? 'active' : ''} onClick={() => setActiveTab('Ingredients')}>
          Ingredients
        </DetailButton>
        <div>
          <h2 dangerouslySetInnerHTML={{ __html: recipeDetails.summary}}></h2>
          <h2 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions}}></h2>
        </div>
      </InfoTab>
    </DetailsWrapper>
  )
}

export default RecipeDetails