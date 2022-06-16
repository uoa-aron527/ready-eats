import React, { useEffect, useState } from 'react'

interface PopularsProps{}

const Populars: React.FC<PopularsProps> = () => {

  const [popularRecipes, setPopularRecipes] = useState([]);

  useEffect(() => {
    getPopularRecipes();
  },[]);


  const getPopularRecipes = async () => {
      const response = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`);
      const data = await response.json();
      console.log(data);
      setPopularRecipes(data.recipes);
  };




  return (
    <div>
      {popularRecipes.map((recipe: any) => {
        return(
          <div key={recipe.id}>
            <h5>
              {recipe.title}
            </h5>
          </div>
        );
      })}
    </div>
  );
}

export default Populars;