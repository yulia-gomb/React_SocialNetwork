import React from "react";
import style from "./dialogs.module.css";
import DialogItem from "@comp/dialogs/DialogItem/dialogItem";
import Message from "@comp/dialogs/Message/message";

const Dialogs = (props) => {
  let dialogsElements = props.state.dialogs.map((d) => (
    <DialogItem name={d.name} id={d.id} src={d.src} />
  ));

  let messageElements = props.state.messages.map((m) => (
    <Message message={m.message} src={m.src} />
  ));

  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>{dialogsElements}</div>
      <div className={style.messages}>{messageElements}</div>
    </div>
  );
};

export default Dialogs;
