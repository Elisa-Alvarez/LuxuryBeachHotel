import React, {Component} from 'react';
import {Link} from 'react-router-dom'

export default class NavBar extends Component{
    render()
   { return (
        <>
        <header className="App-header">
        <nav>
          <ul>
            <li><Link>Home</Link></li>
            <li><Link>Rooms</Link></li>
          </ul>
        </nav>
       </header>
       </>
    )}
}