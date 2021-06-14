import React from "react";
import style from "./../navbar.module.css";

const Friends = (props) => {
  console.log(props);
  return (
    <div className={style.friends}>
      <h2>Friends</h2>
      {/*<div>{props.name}</div>*/}
    </div>
  );
};

export default Friends;
