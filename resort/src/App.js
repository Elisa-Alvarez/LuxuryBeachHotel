import React from 'react';
import './App.css';
import{Route, Switch, Link} from 'react-router-dom'
import Home from './components/Home'
import Room from './components/Room'
import SingleRooms from './components/SingleRooms'
import Error from './components/Error'
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar></NavBar>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/rooms" component={Room}/>
        <Route exact path="/rooms/:single" component={SingleRooms} />
        <Route component={Error}/>
      </Switch>
    </div>
  );
}

export default App;
