import React from "react";
import Homepage from "./Homepage";
import { Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {
  return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:type" element={<Cuisine />} />
      </Routes>
  );
};

export default AllPages;
