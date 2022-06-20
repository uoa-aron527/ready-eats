import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Grid } from "../components/Grid";
import { CuisineCard } from "../components/CuisineCard";

const Cuisine = () => {
  
  const [cuisineCategory, setCuisineCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    getCuisineCategory(params.type);
  },[params.type])

  const getCuisineCategory = async (name: any) => {

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=9&cuisine=${name}`
    );
    const categoryRecipes = await response.json();
    setCuisineCategory(categoryRecipes.results);
  };

  return( 
    <Grid>
      {cuisineCategory.map((recipe: any) => {
        return(
          <CuisineCard key={recipe.id}>
            <img src={recipe.image} alt={recipe.title} />
            <h3>{recipe.title}</h3>
          </CuisineCard>
        )
      })}
    </Grid>
  );
};

export default Cuisine;
