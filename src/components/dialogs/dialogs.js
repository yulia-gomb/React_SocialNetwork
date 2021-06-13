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
  let dialogs = [
    { id: 1, name: "Marina" },
    { id: 2, name: "Olga" },
    { id: 3, name: "Michail" },
    { id: 4, name: "Lilia" },
    { id: 5, name: "Boss" },
  ];

  let messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Good morning" },
    { id: 3, message: "Yo!!" },
    { id: 4, message: "Yo!!" },
    { id: 5, message: "Yo!!" },
  ];

  let dialogsElements = dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} />
  ));

  let messageElements = messages.map((m) => <Message message={m.message} />);

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
