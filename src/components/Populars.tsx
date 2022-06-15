import React from 'react'

interface PopularsProps{}

const Populars: React.FC<PopularsProps> = () => {

  const getPopularRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.APIKEY}`);
      const data = await response.json();
      console.log(data);
  }



  return (
    <div>Populars</div>
  );
}

export default Populars;