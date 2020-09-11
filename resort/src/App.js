import React from "react";
import "./App.css";

import Home from "./components/Home";
import Rooms from "./components/Room";
import SingleRooms from "./components/SingleRooms";
import Error from "./components/Error";

import Navbar from "./components/NavBar";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRooms} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;