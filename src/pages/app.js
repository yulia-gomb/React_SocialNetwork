import React from "react";
import "../app.css";
import Header from "@comp/header/header";
import Navbar from "@comp/navbar/navbar";
import Profile from "@comp/profile/profile";
import Dialogs from "@comp/dialogs/dialogs";
import { BrowserRouter, Route } from "react-router-dom";
import Music from "@comp/music/music";
import News from "@comp/news/news";
import Settings from "@comp/settings/settings";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state={props.state.sideBar} />

        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => <Dialogs state={props.state.dialogsPage} />}
          />
          <Route
            path="/profile"
            render={() => <Profile state={props.state.profilePage} />}
          />
          <Route path="/news" component={News} />
          <Route path="/music" component={Music} />
          <Route path="/settings" component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
