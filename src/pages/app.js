import React from "react";
import "../app.css";
import Header from "@comp/header/header";
import Navbar from "@comp/navbar/navbar";
import Profile from "@comp/profile/profile";

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
};

export default App;
