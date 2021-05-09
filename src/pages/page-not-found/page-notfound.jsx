import React from "react";
import "./page-notfound-style.scss";

import { Link } from "react-router-dom";

const PageNotfound = () => {
  return (
    <div class="mainbox">
      <div class="err">4</div>
      <i class="far fa-question-circle fa-spin"></i>
      <div class="err2">4</div>
      <div class="msg">
        Maybe this page moved? Got deleted? Is hiding out in quarantine? Never
        existed in the first place?
        <p>
          Let's go <Link to="/">Home</Link> and try from there.
        </p>
      </div>
    </div>
  );
};

export default PageNotfound;
