import React from "react";
import "./user1.style.scss";

import { ReactComponent as Logo } from "../../assests/crown.svg"

class User1Data extends React.Component {
  constructor() {
    super();

    this.state = {
      apidata: "",
    };
  }
  componentDidMount() {
    fetch("https://api.github.com/users/kamalrathi49")
      .then((Response) => Response.json())
      .then((data) => this.setState({ apidata: data }, console.log(data)));
  }

  render() {
    const { apidata } = this.state;
    return (
      <div className="container">
        <div>
          <img className="avatar" src={apidata.avatar_url} alt="avatar" />
          <h1 className="name">@{apidata.login}</h1>
        </div>
        <div className="social-profile">
         <a href="https://www.instagram.com/kamalrathi49"> <button className="btn">Isntagram Profile</button> </a>
          <a href="https://twitter.com/kamalrathi49/"><button className="btn">Twitter Account</button> </a>
          <a href="https://github.com/kamalrathi49"><button className="btn">Github Account</button></a>
          <a href="https://www.linkedin.com/in/kamalrathi49/"><button className="btn">Linkden Profile</button></a>
          <a href="https://www.facebook.com/kamal.gujjar.12764874/"><button className="btn">FaceBook Profile</button></a>
          <button className="btn">Text on Whatsapp</button>
        </div>
        <Logo className="logo"/>
      </div>
    );
  }
}

export default User1Data;
