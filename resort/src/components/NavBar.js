import React, {Component} from 'react';
//import logo from '../images'
import {FaBars} from 'react-icons/fa'
import {Button} from '@material-ui/core'
import {Link} from 'react-router-dom'

export default class NavBar extends Component{
    state ={
        isOpen: false
    }
    handleToggle = () => {
        this.setState({isOpen: !this.state.isOpen})
    }

    render()
   { return (
        <>
        <header className="App-header">
        <nav className="main-nav">
             <div className="nav-center">
               
                <div className="nav-header">
                    <Link to="/">
                        <h1 className="logo-title">The Lux Resort</h1>
                    </Link>
                    <Button size="large"  className="nav-button" onClick={this.handleToggle}><FaBars className="nav-icon"/></Button>
                </div>
                
                <ul className={this.state.isOpen?"nav-links show-nav" : "nav-links"}>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                         <Link to="/rooms">Rooms</Link>
                     </li>
                </ul>
              </div>
        </nav>
       </header>
       </>
    )}
}