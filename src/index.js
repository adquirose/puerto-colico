
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss";
import "assets/demo/demo.css";
import "assets/demo/react-demo.css";
// pages
import Index from "views/Index.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" render={(props) => <Index {...props} />} />
  </BrowserRouter>,
  document.getElementById("root")
);
