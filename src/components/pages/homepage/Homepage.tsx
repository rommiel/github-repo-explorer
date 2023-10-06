import React, { useState } from "react";
import "./Homepage.css";
import axios from "../../services/axios";
import UserCard from "../../shared_components/UserCard.tsx";
import githubLogo from "../../../images/github_logo.png";

const Homepage = () => {
  const [query, setQuery] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleQueryChange = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    if (query) {
      setLoading(true);
      const items = await fetchUsers();

      setTimeout(() => {
        setUsers(items);
        setLoading(false);
      }, 1000);
    } else {
      console.log("No results...");
    }
  };

  const fetchUsers = async () => {
    try {
      const { data } = await axios.get(`/search/users?q=${query}`);
      return data?.items;
    } catch (err) {
      console.log(err);
      return null;
    }
  };

  return (
    <div className="main-container">
      <div className="search-form">
        <div className="header">
          <img src={githubLogo} alt="Github Logo" className="git-logo" />
          <h4>Search Github User</h4>
        </div>

        <div className="search-main">
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Enter username, e.g. rommiel"
            value={query}
            onChange={handleQueryChange}
          />
          <button onClick={handleSearch} className="search-btn btn btn-primary">
            <span className="fa fa-search"></span>
          </button>
        </div>
      </div>
      <hr />

      {loading ? (
        <div className="loader d-flex align-items-center">
          <strong role="status">Searching...</strong>
          <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      ) : (
        <div className="search-results">
          {users.length > 0 ? (
            users.map((user) => {
              return (
                <div
                  className="accordion accordion-flush"
                  id="accordionExample"
                  key={user.id}
                >
                  <UserCard user={user} />
                </div>
              );
            })
          ) : (
            <h2>No results...</h2>
          )}
        </div>
      )}
    </div>
  );
};

export default Homepage;
