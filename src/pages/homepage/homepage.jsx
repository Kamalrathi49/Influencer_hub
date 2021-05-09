import React from "react";

import "./homepage.style.scss";
import { ReactComponent as Logo } from "../../assests/crown.svg";

import Animation1 from "../../component/animation/animation1.component";

import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="header">
        <Link to="/">
          <Logo
            style={{ marginBottom: "0px", height: "60px", width: "60px" }}
          />
        </Link>
        <p className="logo-heading">Influencer Hub</p>
      </div>
      <Animation1 className="animation" />

      <div className="main-heading">
        <div class="title">
          <h1 className="text">INFLUENCERS</h1>
        </div>
      </div>

      <div class="cards-list">
        <Link to="/kamal">
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
        <Link to="/deepak">
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

      <footer class="footer-distributed">
        <div class="footer-right">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-github"></i>
          </a>
        </div>

        <div class="footer-left">
          <p class="footer-links">
            <Link class="link-1" to="/">
              Home
            </Link>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>

          <p>Company Name &copy; 2015</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
