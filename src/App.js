import React from "react";
import "./App.scss";


import Header from './component/header/header.jsx';

import User1Data from "./pages/user1/user1-page.jsx";
import User2Data from "./pages/user2/user2-page.jsx";
import HomePage from "./pages/homepage/homepage.jsx";
import PageNotfound from './pages/page-not-found/page-notfound.jsx'

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
         <Header/>
          <Switch>
            <Route exact path="/influencer_hub" component={HomePage} />
            <Route path="/influencer_hub/kamal" component={User1Data} />
            <Route path="/influencer_hub/deepak" component={User2Data} />
            <Route path="/influencer_hub/404" component={PageNotfound} />
            <Redirect to="/influencer_hub/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
