import React from "react";
import "./App.css";

import Home from "./Pages/Home";
import Rooms from "./Pages/Room";
import SingleRooms from "./Pages/SingleRooms";
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