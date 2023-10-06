import React from "react";
import githubLogo from "../../images/github_logo.png";
import "./Title.css";
import { useNavigate } from "react-router-dom";

const Title = () => {
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  return (
    <div className="header">
      <img
        src={githubLogo}
        alt="Github Logo"
        onClick={goToHome}
        className="git-logo"
      />
      <h4>Search Github User</h4>
    </div>
  );
};

export default Title;
