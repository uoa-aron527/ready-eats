import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

interface PopularsProps {}

const Populars: React.FC<PopularsProps> = () => {
  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  }, []);

  const getPopularRecipes = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`
    );
    const data = await response.json();
    console.log(data);
    setPopularRecipes(data.recipes);
  };

  return (
    <div>
      <Wrapper>
        <h2>Popular Recipes Now!</h2>
        {popularRecipes.map((recipe: any) => {
          return (
            <Card>
              <p>{recipe.title}</p>
              <img src={recipe.image} alt={recipe.title} />
            </Card>
          );
        })}
      </Wrapper>
    </div>
  );
};

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;

const Card = styled.div`
  border-radius: 2rem;
  min-height: 30rem;
  overflow: hidden;

  img {
    border-radius: 2rem;
  }
`;

export default Populars;
