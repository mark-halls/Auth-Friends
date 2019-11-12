import React from "react";
import { Switch, Route } from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import { BrowserRouter as Router } from "react-router-dom";

import "./App.css";
import Login from "./components/Login";
import FriendList from "./components/FriendList";
import Friend from "./components/Friend";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <PrivateRoute path="/friends">
            <FriendList />
          </PrivateRoute>
          <PrivateRoute path="/friends/:id">
            <Friend />
          </PrivateRoute>
          <Route exact path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
