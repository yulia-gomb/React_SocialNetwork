import React from "react";
import "../app.css";
import Header from "@comp/header/header";
import Navbar from "@comp/navbar/navbar";
import Profile from "@comp/profile/profile";
import Dialogs from "@comp/dialogs/dialogs";
import style from "@comp/dialogs/dialogs.module.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />

      <div className="app-wrapper-content">
        {/*<Dialogs />*/}
        <Profile />
      </div>
    </div>
  );
};

export default App;
