import React from "react";
import Homepage from "./Homepage";
import SearchInput from "./SearchInput";
import { Route, Routes, useLocation } from "react-router-dom";
import Cuisine from "./Cuisine";
import RecipeDetails from "./RecipeDetails";
import { AnimatePresence } from 'framer-motion'

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {

  const location = useLocation();

  return (
    <AnimatePresence exitBeforeEnter>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<SearchInput />} />
        <Route path="/recipe/:name" element={<RecipeDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AllPages;
