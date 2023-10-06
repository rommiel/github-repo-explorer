import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Title from "../../shared_components/Title.tsx";
import SearchInput from "../../shared_components/SearchInput.tsx";
import UserCard from "../../shared_components/UserCard.tsx";
import axios from "../../services/axios.js";

const Search = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    setLoading(true);
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`/search/users?q=${query}`);
        return data?.items;
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    fetchUsers()
      .then((res) => {
        setLoading(false);
        setUsers(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [query]);

  return (
    <div className="main-container">
      <Title />
      <SearchInput q={query} />
      <hr />
      {loading ? (
        <div className="loader d-flex align-items-center">
          <strong role="status">Searching...</strong>
          <div className="spinner-border ms-auto" aria-hidden="true"></div>
        </div>
      ) : (
        <div className="search-results">
          {users ? (
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

export default Search;
