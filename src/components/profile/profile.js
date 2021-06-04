import React from "react";
import style from "./profile.module.css";
import MyPosts from "@comp/profile/MyPosts/Post/MyPosts";

const Profile = () => {
  return (
    <div className={style.content}>
      <div>
        <img
          src="https://sbims.com/wp-content/uploads/2017/04/Association_Membership_Networking_Connections.jpg"
          alt="img"
        />
      </div>
      <div>Ava + description</div>
      <MyPosts />
    </div>
  );
};

export default Profile;
