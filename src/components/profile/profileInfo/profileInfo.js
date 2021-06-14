import React from "react";
import style from "./profileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div>
      <div className={style.mainImg}>
        <img
          src="https://sbims.com/wp-content/uploads/2017/04/Association_Membership_Networking_Connections.jpg"
          alt="img"
        />
      </div>
      <div className={style.descriptionBlock}>Ava + description</div>
    </div>
  );
};

export default ProfileInfo;
