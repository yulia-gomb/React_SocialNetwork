import React from "react";
import style from "./navbar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "@comp/navbar/friends/friends";

const Navbar = (props) => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink to="/profile" activeClassName={style.active}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/dialogs" activeClassName={style.active}>
            Messages
          </NavLink>
        </li>
        <li>
          <NavLink to="/news" activeClassName={style.active}>
            News
          </NavLink>
        </li>
        <li>
          <NavLink to="/music" activeClassName={style.active}>
            Music
          </NavLink>
        </li>
        <li>
          <NavLink to="/settings" activeClassName={style.active}>
            Settings
          </NavLink>
        </li>
      </ul>
      <Friends state={props.state} />
    </nav>
  );
};

export default Navbar;
