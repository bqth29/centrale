import React from "react";
import logo from "./hollymood-white.svg";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <img src={logo} className="HomePage-logo" alt="logo" />
      </header>
    </div>
  );
};

export default HomePage;
