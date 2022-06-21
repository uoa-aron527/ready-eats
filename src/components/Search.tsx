import React, { useState } from "react";
import { SearchForm } from "./SearchForm";
import { ImSearch } from "react-icons/im";
import { useNavigate} from 'react-router-dom'

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigateTo = useNavigate();

  const submitEventHandler = (e: any) => {
    e.preventDefault();
    navigateTo('/search/' + searchQuery);
  }

  return (
    <SearchForm onSubmit={submitEventHandler}>
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
