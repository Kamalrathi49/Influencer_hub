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
        Influencer Not Found
        <p>
          Let's go <Link to="/">Home</Link> and try from there.
        </p>
      </div>
    </div>
  );
};

export default PageNotfound;
