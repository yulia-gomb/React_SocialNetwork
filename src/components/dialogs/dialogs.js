import React from "react";
import style from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <div className={style.dialog + " " + style.active}>
          <NavLink to="/dialogs/1">Marina</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/2">Olga</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/3">Michail</NavLink>
        </div>
        <div className={style.dialog}>
          <NavLink to="/dialogs/4">Liliya</NavLink>
        </div>
      </div>
      <div className={style.messages}>
        <div className={style.message}>Hello</div>
        <div className={style.message}>Good morning</div>
        <div className={style.message}>Yo!!</div>
      </div>
    </div>
  );
};

export default Dialogs;
