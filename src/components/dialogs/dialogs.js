import React from "react";
import style from "./dialogs.module.css";

const Dialogs = (props) => {
  return (
    <div className={style.dialogs}>
      <div className={style.dialogItems}>
        <div className={style.dialog + " " + style.active}>Marina</div>
        <div className={style.dialog}>Irina</div>
        <div className={style.dialog}>Sergey</div>
        <div className={style.dialog}>Michail</div>
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
