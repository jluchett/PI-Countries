import React from "react";
import { NavLink } from "react-router-dom";
import '../CssStyles/NavBar.css'

export default function NavBar() {
  return (
    <div className="base6">
      <div className="navBar">
        <NavLink to="/home" className="menuNavBar">
          Home
        </NavLink>
        <NavLink to="/activity" className="menuNavBar">
          Create Activity
        </NavLink>
      </div>
    </div>
  );
}