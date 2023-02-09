import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <nav className="nav-items">
      <h1 className="navbar-logo">Trippy</h1>
      <div className="menu-icons" onClick={handleClick}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        {MenuItems.map((items, index) => {
          const { title, url, cName, icon } = items;
          return (
            <li className={cName} key={index}>
              <a href={url} className={cName}>
                <i className={icon}></i>
                {title}
              </a>
            </li>
          );
        })}
        <button>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
