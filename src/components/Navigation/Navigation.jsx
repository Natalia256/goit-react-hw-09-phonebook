import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

import authSelectors from "../../redux/auth/authSelectors";

export default function Navigation() {
  const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);
  return (
    <div>
      <NavLink
        activeClassName={"active"}
        className="navLink homeLink"
        exact
        to="/"
      >
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink
          activeClassName={"active"}
          className="navLink"
          exact
          to="/phonebook"
        >
          Phonebook
        </NavLink>
      )}
    </div>
  );
}