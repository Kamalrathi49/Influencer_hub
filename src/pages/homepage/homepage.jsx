import React from "react";

import "./homepage.style.scss";

import { Link } from "react-router-dom";

import Search from "../../component/search/search";
import social from "../../assests/Social Media - 35344.mp4";
import VideoBg from "reactjs-videobg";

const HomePage = () => {
  return (
    <div className="users">
      <div>
        <h1 style={{ color: "#333", display: "block" }}>
          The Only Link You’ll Ever Need
        </h1>
        <p style={{ marginBottom: "40px" }}>
          Connect audiences to all of your content with just one link
        </p>
      </div>
      <Search />

      <div class="cards-list">
        <Link to="/influencer_hub/kamal">
          <div class="card 1">
            <div class="card_image">
              {" "}
              <img src="https://avatars.githubusercontent.com/u/73382877?v=4" />{" "}
            </div>
            <div class="card_title title-white">
              <p>Kamal</p>
            </div>
          </div>
        </Link>
        <Link to="/influencer_hub/deepak">
          <div class="card 2">
            <div class="card_image">
              <img src="https://avatars.githubusercontent.com/u/57827083?v=4" />
            </div>
            <div class="card_title title-white">
              <p>Deepak</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
