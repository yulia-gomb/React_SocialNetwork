import React from "react";
import style from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={style.item}>
      <img src="https://image.flaticon.com/icons/png/128/235/235438.png" />
      {props.message}
      <div>
        <span>{props.countLike} Likes</span>
      </div>
    </div>
  );
};

export default Post;
