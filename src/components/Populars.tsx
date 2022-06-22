import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from "./Wrapper";
import { Card } from './Card';
import { ImageGradient } from './ImageGradient';
import { Link } from 'react-router-dom';

interface PopularsProps {}

const Populars: React.FC<PopularsProps> = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    // This is to check whether local storage on the browser already has stored the popular recipes 
    const isRecipePresent = localStorage.getItem("recipes");

    if (isRecipePresent) {
      setPopularRecipes(JSON.parse(isRecipePresent));
    } 
    
    // If not, the endpoint is fetched and payload stored onto local storage to adhere to endpoint usage limits
    else {
      
      const response = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`
      );
      const data = await response.json();

      localStorage.setItem('recipes', JSON.stringify(data.recipes));

      console.log(data);
      setPopularRecipes(data.recipes);
    }
  };

  return (
    <div>
      <Wrapper>
        <h2>Popular Recipes Now!</h2>
        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "3.25rem",
          }}
        >
          {popularRecipes.map((recipe: any) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card>
                  <Link to={'/recipe/' + recipe.id}>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt={recipe.title} />
                  <ImageGradient />
                  </Link>
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
};

export default Populars;
