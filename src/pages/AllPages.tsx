import React from "react";
import Homepage from "./Homepage";
import SearchInput from "./SearchInput";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:type" element={<Cuisine />} />
        <Route path="/search/:query" element={<SearchInput />} />
      </Routes>
  );
};

export default AllPages;
