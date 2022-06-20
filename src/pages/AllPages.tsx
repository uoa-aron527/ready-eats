import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cuisine from "./Cuisine";

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllPages;
