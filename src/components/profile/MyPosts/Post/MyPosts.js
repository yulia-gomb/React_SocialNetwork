import React from "react";
import style from "./MyPosts.module.css";
import Post from "@comp/profile/MyPosts/Post/Post";

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
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
