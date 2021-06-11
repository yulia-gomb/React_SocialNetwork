import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

let postData = [
  { id: 1, message: "Hi! How are you?", countLike: 12 },
  { id: 2, message: "It`s my first post", countLike: 34 },
];

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
      <Post message={postData[0].message} countLike={postData[0].countLike} />
      <Post message={postData[1].message} countLike={postData[1].countLike} />
    </div>
  );
};

export default MyPosts;
