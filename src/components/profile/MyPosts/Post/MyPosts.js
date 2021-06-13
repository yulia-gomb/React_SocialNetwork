import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

const MyPosts = () => {
  let posts = [
    { id: 1, message: "Hi! How are you?", countLike: 12 },
    { id: 2, message: "It`s my first post", countLike: 34 },
    { id: 3, message: "Today is a good day", countLike: 58 },
    { id: 4, message: "Sun", countLike: 7 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} countLike={p.countLike} />
  ));

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
      {postsElements}
    </div>
  );
};

export default MyPosts;
