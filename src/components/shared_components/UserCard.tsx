import React, { useState, useEffect } from "react";
import axiosService from "../services/axios.js";
import "./UserCard.css";
import RepoCard from "./RepoCard.tsx";
import UserCardProps from "../models/UserCardProps.ts";
import UserModel from "../models/UserModel.ts";
import RepoModel from "../models/RepoModel.ts";

const UserCard = ({ user }: UserCardProps) => {
  const [repos, setRepos] = useState<RepoModel[]>([]);

  useEffect(() => {
    const fetchUserRepo = async (user: UserModel) => {
      try {
        const { data } = await axiosService.get(`/users/${user.login}/repos`);
        return data;
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    fetchUserRepo(user)
      .then((res) => {
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
          {repos && repos.length > 0 ? (
            repos.map((repo) => {
              return (
                <div key={repo.id.toString()}>
                  <RepoCard repo={repo} />
                </div>
              );
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
