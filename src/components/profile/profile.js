import React from "react";
import style from "./profile.module.css";
import MyPosts from "@comp/profile/MyPosts/Post/MyPosts";
import ProfileInfo from "@comp/profile/profileInfo/profileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.posts} />
    </div>
  );
};

export default Profile;
