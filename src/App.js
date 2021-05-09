import React from "react";
import "./App.scss";




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
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/kamal" component={User1Data} />
            <Route exact path="/deepak" component={User2Data} />
            <Route path="/404" component={PageNotfound} />
            <Redirect to="/404" />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
