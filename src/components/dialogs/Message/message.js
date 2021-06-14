import React from "react";
import style from "./../dialogs.module.css";

const Message = (props) => {
  return (
    <div className={style.message}>
      <img src={props.src} />
      {props.message}
    </div>
  );
};

export default Message;
