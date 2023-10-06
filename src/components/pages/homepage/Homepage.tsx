import React from "react";
import "./Homepage.css";
import Title from "../../shared_components/Title.tsx";
import SearchInput from "../../shared_components/SearchInput.tsx";

const Homepage = () => {
  return (
    <div className="main-container">
      <Title />
      <SearchInput q={""} />
    </div>
  );
};

export default Homepage;
