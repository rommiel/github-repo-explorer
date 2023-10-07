import React from "react";
import "./RepoCard.css";
import RepoCardProps from "../models/RepoCardProps";

const RepoCard = ({ repo }: RepoCardProps) => {
  return (
    <div className="repo-card-container">
      <div className="top-part">
        <a
          className="repo-name"
          href={repo.html_url}
          target="_blank"
          rel="noreferrer"
        >
          {repo.name}
        </a>
        <div className="repo-details">
          {repo.stargazers_count} <span className="fa fa-star"></span>
          {repo.forks_count} <span className="fa fa-code-fork"></span>
        </div>
      </div>

      <div className="additional-details">{repo.language}</div>
    </div>
  );
};

export default RepoCard;
