import React from "react";
import "./user2.style.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg";

import { Link } from "react-router-dom";
class User2Data extends React.Component {
  constructor() {
    super();

    this.state = {
      apidata: "",
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/deepakbhamla")
      .then((Response) => Response.json())
      .then((data) => this.setState({ apidata: data }));
  }

  render() {
    const { apidata } = this.state;
    return (
      <div className="containers">
        <div>
          <img className="avatar" src={apidata.avatar_url} alt="avatar" />
          <h1 className="name">@{apidata.login}</h1>
        </div>
        <div className="social-profile">
          <a href="https://www.instagram.com/deepak_bhamla">
            {" "}
            <button className="btn">Isntagram Profile</button>{" "}
          </a>
          <a href="https://twitter.com/itsdb_7">
            <button className="btn">Twitter Account</button>{" "}
          </a>
          <a href="https://github.com/deepakbhamla">
            <button className="btn">Github Account</button>
          </a>
          <a href="https://www.linkedin.com/in/deepakbhamla/">
            <button className="btn">Linkden Profile</button>
          </a>
          <a href="https://www.facebook.com/iamdeepakbhamla/">
            <button className="btn">FaceBook Profile</button>
          </a>
          <button className="btn">Text on Whatsapp</button>
        </div>
        <Link to="/">
          <Logo style={{ margin: "10px", paddingBottom: "20px" }} />
        </Link>
      </div>
    );
  }
}

export default User2Data;
