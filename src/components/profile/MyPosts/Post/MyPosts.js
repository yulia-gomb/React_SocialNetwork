import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

const MyPosts = () => {
  return (
    <div className={style.postBlocks}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <Post message="Hi! How are you?" />
      <Post message="It`s my first post" />
    </div>
  );
};

export default MyPosts;
