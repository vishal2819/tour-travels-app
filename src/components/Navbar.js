import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import Form from "./Form";
import "./Navbar.css";
const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  const handleForm = () => {
    setShowForm(!showForm);
    return <Form />;
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
              <Link to={url} className={cName}>
                <i className={icon}></i>
                {title}
              </Link>
            </li>
          );
        })}
        <button type="submit" onClick = {handleForm}>Sign Up</button>
      </ul>
    </nav>
  );
};

export default Navbar;
