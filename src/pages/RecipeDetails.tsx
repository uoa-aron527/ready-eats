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
    <DetailsWrapper
      animate = {{ opacity: 1 }}
      initial = {{ opacity: 0 }}
      exit = {{ opacity: 0 }}
      transition = {{ duration: 0.75 }}
    >
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
        {activeTab === 'Instructions' && (
          <div>
            <h2 dangerouslySetInnerHTML={{ __html: recipeDetails.summary}}></h2>
            <h2 dangerouslySetInnerHTML={{ __html: recipeDetails.instructions}}></h2>
          </div>
        )}

        {activeTab === 'Ingredients' && (
          <ul>
            {recipeDetails.extendedIngredients.map((ingredient: any) => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        )}
        
      </InfoTab>
    </DetailsWrapper>
  )
}

export default RecipeDetails