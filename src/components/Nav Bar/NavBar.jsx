import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="fondoNav">
      <nav className="NavBar">
        <ul className="List1">
          <li>
            <Link className="font" to="/">
              Inicio
            </Link>
          </li>
        </ul>
        <ul className="List2">
          <li>
            <Link className="font" to="/Turismo">
              Turismo
            </Link>
          </li>
          <li>
            <Link className="font" to="/Deportes">
              Deportes
            </Link>
          </li>
          <li>
            <Link className="font" to="/Artistas">
              Artistas
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
