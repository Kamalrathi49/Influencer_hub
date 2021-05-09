import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assests/crown.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="inner-header">
        <div className="title">
          <Link to="/" >
            <Logo
              style={{ marginBottom: "0px", height: "50px", width: "50px" }}
            />
            <p className="logo-heading">Influencer Hub</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
