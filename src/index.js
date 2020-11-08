import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import IWantCandy from "./components/IWantCandy";

ReactDOM.render(
  <Router>
    <IWantCandy />
  </Router>,
  document.getElementById("root")
);
