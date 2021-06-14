import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "@pages/app.js";

let posts = [
  { id: 1, message: "Hi! How are you?", countLike: 12 },
  { id: 2, message: "It`s my first post", countLike: 34 },
  { id: 3, message: "Today is a good day", countLike: 58 },
  { id: 4, message: "Sun", countLike: 7 },
];

let dialogs = [
  { id: 1, name: "Marina" },
  { id: 2, name: "Olga" },
  { id: 3, name: "Michail" },
  { id: 4, name: "Lilia" },
  { id: 5, name: "Boss" },
];

let messages = [
  { id: 1, message: "Hello" },
  { id: 2, message: "Good morning" },
  { id: 3, message: "Yo!!" },
  { id: 4, message: "Yo!!" },
  { id: 5, message: "Yo!!" },
];

render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById("root")
);
