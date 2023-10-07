import React, { useState } from "react";
import "./SearchInput.css";
import { createSearchParams, useNavigate } from "react-router-dom";
import SearchInputProps from "../models/SearchInputProps";

const SearchInput = ({ q }: SearchInputProps) => {
  const [query, setQuery] = useState(q || "");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query) {
      navigate({
        pathname: "/search",
        search: `?${buildParams(query)}`,
      });
    }
  };

  const buildParams = (q: string): URLSearchParams => {
    return createSearchParams({ q: q });
  };

  return (
    <div className="search-main">
      <input
        type="text"
        className="form-control"
        id="username"
        placeholder="Enter username, e.g. rommiel"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <button onClick={handleSearch} className="search-btn btn btn-primary">
        <span className="fa fa-search"></span>
      </button>
    </div>
  );
};

export default SearchInput;
