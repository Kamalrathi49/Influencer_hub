import React from "react";

import "./homepage.style.scss";



import { Link } from "react-router-dom";

const HomePage = () => {
    return(
        <div className="users">
        <Link to="/kamal">
            <img className="user" src="https://avatars.githubusercontent.com/u/73382877?v=4" alt="img"/>
            <h1 className="username">Kamal Rathi</h1>
        </Link>

        <Link to="/deepak">
        <img className="user" src="https://avatars.githubusercontent.com/u/57827083?v=4" alt="img"/>
         <h1 className="username">Deepak Bhamla</h1>
    </Link>
       </div>

   
    )
};

export default HomePage;
