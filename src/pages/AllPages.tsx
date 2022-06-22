import React from "react";
import Homepage from "./Homepage";
import SearchInput from "./SearchInput";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";
import RecipeDetails from "./RecipeDetails";

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<SearchInput />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
      </Routes>
  );
};

export default AllPages;
