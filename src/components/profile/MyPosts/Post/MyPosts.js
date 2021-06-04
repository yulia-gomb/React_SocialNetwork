import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>

      <Post message="Hi! How are you?" />
      <Post message="It`s my first post" />
    </div>
  );
};

export default MyPosts;
