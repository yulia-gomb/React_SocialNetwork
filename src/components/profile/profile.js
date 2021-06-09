import React from "react";
import style from "./profile.module.css";
import MyPosts from "@comp/profile/MyPosts/Post/MyPosts";
import ProfileInfo from "@comp/profile/profileInfo/profileInfo";

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts />
    </div>
  );
};

export default Profile;
