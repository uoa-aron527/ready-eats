import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { ImSearch } from "react-icons/im";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchForm>
      <div>
        <ImSearch />
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
    </SearchForm>
  );
};

export default Search;
