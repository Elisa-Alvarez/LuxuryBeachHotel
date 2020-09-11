import React from 'react';
import Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';

function Home (){
    return(
       <div className="Home">   
          <Hero>
            <Banner title="Luxury Rooms" subtitle="Get the room of your dreams starting at only $199">
                 <Link to="/rooms"><Button variant="outlined" className="home-btn">Learn More...</Button></Link>
           </Banner>
          </Hero>
       </div>
    
    )
}

export default Home;