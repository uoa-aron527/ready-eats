import React, { useState } from "react";
import {SearchForm} from './SearchForm'
import { ImSearch } from 'react-icons/im'

const Search = () => {
  return (
    <SearchForm>
      <div>
        <ImSearch />
        <input type="text" />
      </div>
    </SearchForm>
  );
};

export default Search;
