import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My posts</div>
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default MyPosts;
