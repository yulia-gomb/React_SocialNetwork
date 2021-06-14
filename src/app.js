import React from "react";
import { render } from "react-dom";
import "bootstrap/dist/css/bootstrap-reboot.min.css";
import "bootstrap/dist/css/bootstrap-grid.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "@pages/app.js";
import state from "./redux/state";

render(<App state={state} />, document.getElementById("root"));
