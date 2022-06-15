import React, { useEffect } from 'react'

interface PopularsProps{}

const Populars: React.FC<PopularsProps> = () => {

  const getPopularRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIKEY}&number=9`);
      const data = await response.json();
      console.log(data);
  }

  useEffect(() => {
    getPopularRecipes();
  },[]);



  return (
    <div>Populars</div>
  );
}

export default Populars;