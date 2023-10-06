import React, { useState } from "react";
import "./SearchInput.css";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchInput = ({ q }) => {
  const [query, setQuery] = useState(q);
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (query) {
      navigate({
        pathname: "/search",
        search: `?${createSearchParams({ q: query })}`,
      });
    }
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
