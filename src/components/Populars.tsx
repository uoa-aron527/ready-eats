import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Wrapper } from "./Wrapper";

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
            gap: "5rem",
          }}
        >
          {popularRecipes.map((recipe: any) => {
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

const Card = styled.div`
  border-radius: 2rem;
  min-height: 30rem;
  overflow: hidden;
  position: relative;

  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    z-index: 10;
    position: absolute;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ImageGradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Populars;
