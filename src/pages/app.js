import React from "react";
import "../app.css";
import Header from "@comp/header";
import Navbar from "@comp/navbar";
import Profile from "@comp/profile";

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
