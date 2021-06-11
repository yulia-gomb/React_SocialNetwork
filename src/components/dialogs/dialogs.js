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

let dialogsData = [
  { id: 1, name: "Marina" },
  { id: 2, name: "Olga" },
  { id: 3, name: "Michail" },
  { id: 4, name: "Lilia" },
  { id: 5, name: "Boss" },
];

let messageData = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Good morning" },
  { id: 3, message: "Yo!!" },
  { id: 4, message: "Yo!!" },
  { id: 5, message: "Yo!!" },
];

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
        <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        <DialogItem name={dialogsData[3].name} id={dialogsData[3].id} />
        <DialogItem name={dialogsData[4].name} id={dialogsData[4].id} />
      </div>

      <div className={style.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
        <Message message={messageData[3].message} />
        <Message message={messageData[4].message} />
      </div>
    </div>
  );
};

export default Dialogs;
