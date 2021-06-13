import React from "react";
import style from "./profile.module.css";
import MyPosts from "@comp/profile/MyPosts/Post/MyPosts";
import ProfileInfo from "@comp/profile/profileInfo/profileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
      /*id={posts.id}
        message={posts.message}
        countLike={posts.countLike}*/
      />
    </div>
  );
};

export default Profile;
