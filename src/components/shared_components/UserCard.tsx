import React, { useState, useEffect } from "react";
import axios from "../services/axios";
import "./UserCard.css";
import RepoCard from "./RepoCard.tsx";

const UserCard = ({ user }) => {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    const fetchUserRepo = async (user) => {
      try {
        const { data } = await axios.get(`/users/${user}/repos`);
        return data;
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    fetchUserRepo(user.login)
      .then((res) => {
        console.log({ res });
        setRepos(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="accordion-item user-card">
      <h2 className="accordion-header">
        <button
          className="accordion-button"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse-${user.id}`}
          aria-expanded="true"
          aria-controls={`collapse-${user.id}`}
        >
          {user.login}
        </button>
      </h2>
      <div
        id={`collapse-${user.id}`}
        className="accordion-collapse collapse"
        data-bs-parent="#accordionExample"
      >
        <div className="accordion-body">
          {repos.length > 0 ? (
            repos.map((repo) => {
              return <RepoCard repo={repo} key={repo.id} />;
            })
          ) : (
            <h6>No Repositories</h6>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCard;
