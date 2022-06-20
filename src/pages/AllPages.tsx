import React from "react";
import Homepage from "./Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface AllPagesProps {}

const AllPages: React.FC<AllPagesProps> = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AllPages;
