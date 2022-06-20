import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

const Cuisine = () => {
  
  const [cuisineCategory, setCuisineCategory] = useState([]);
  const params = useParams();

  useEffect(() => {
    // getCuisineCategory()
    console.log(params.type)
  },[params.type])

  const getCuisineCategory = async (name: String) => {

    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_KEY}&number=9&cuisine=${name}`
    );
    const categoryRecipes = await response.json();
    setCuisineCategory(categoryRecipes.results);
  };

  return <div>Cuisine</div>;
};

export default Cuisine;
