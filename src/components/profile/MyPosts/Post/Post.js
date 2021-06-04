import React from "react";
import style from "./Post.module.css";

const Post = () => {
  return (
    <div className={style.item}>
      <img src="https://peopletalk.ru/wp-content/uploads/2016/11/1480331127.jpg" />
      Post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};

export default Post;
