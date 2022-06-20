import React, { useEffect, useState } from 'react'
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from "./Wrapper";
import { Card } from './Card';
import { ImageGradient } from './ImageGradient';

interface TopVegProps{}

const TopVeg: React.FC<TopVegProps> = () => {
  const [vegRecipes, setVegRecipes] = useState([]);

  useEffect(() => {
    getVeggieRecipes();
  }, []);

  const getVeggieRecipes = async () => {
    // This is to check whether local storage on the browser already has stored the popular recipes 
    const isRecipePresent = localStorage.getItem('vegRecipes');

    if (isRecipePresent) {
      setVegRecipes(JSON.parse(isRecipePresent));
    } 
    
    // If not, the endpoint is fetched and payload stored onto local storage to adhere to endpoint usage limits
    else {
      
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9&tags=vegetarian`
      );
      const data = await response.json();

      localStorage.setItem('vegRecipes', JSON.stringify(data.recipes));

      console.log(data);
      setVegRecipes(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h2>Top Veggie Recipes</h2>
        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {vegRecipes.map((recipe: any) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <ImageGradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};


export default TopVeg;