import React from "react";
import { useNavigate } from "react-router-dom";
import NavLinks from "../../data/NavLinks.json";

function Navbar() {
  const navigate = useNavigate();

  const handleStories = (value) => {
    if (value === "home") {
      navigate("/");
    } else {
      navigate(`/stories/${value}`);
    }
  };

  const handleHomeComp = () => {
    navigate("/")
  }

  return (
    <div className="navbar-container">
      <div className="navbar-wrapper">
        <div className="left-container">
          <h1 onClick={handleHomeComp}>NYT</h1>
        </div>
        <ul className="middle-container">
          {NavLinks.map((link) => (
            <li key={link.id} onClick={() => handleStories(link.category)}>
              {link.value}
            </li>
          ))}
        </ul>
        <div className="right-container">
          <div className="search-container">
            <img src="/icons/search.svg" alt="icon" width="20" height="20" />
            <input placeholder="search" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
