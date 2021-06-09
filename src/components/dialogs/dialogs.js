import React from "react";
import style from "./dialogs.module.css";
import { NavLink } from "react-router-dom";

const DialogItem = (props) => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <DialogItem name={"Marina"} id={"1"} />
        <DialogItem name={"Olga"} id={"2"} />
        <DialogItem name={"Michail"} id={"3"} />
        <DialogItem name={"Lilia"} id={"4"} />
        <DialogItem name={"Boss"} id={"5"} />
      </div>

      <div className={style.messages}>
        <Message message={"Hello"} />
        <Message message={"Good morning"} />
        <Message message={"Yo!!"} />
      </div>
    </div>
  );
};

export default Dialogs;
