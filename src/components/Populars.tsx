import React, { useEffect } from 'react'

interface PopularsProps{}

const Populars: React.FC<PopularsProps> = () => {

  useEffect(() => {
    getPopularRecipes();
  },[]);


  const getPopularRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`);
      const data = await response.json();
      console.log(data);
  };




  return (
    <div>Populars</div>
  );
}

export default Populars;