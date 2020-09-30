import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import Featured from '../components/FeaturedRooms'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
import Services from '../components/Services';

function Home (){
    return(
       <div className="Home">   
          <Hero>
            <Banner title="Luxury Rooms" subtitle="Get the room of your dreams starting at only $199">
                 <Link to="/rooms"><Button variant="outlined" className="home-btn">Learn More...</Button></Link>
           </Banner>
          </Hero>
          <Services/>
          <Featured />
       </div>
    
    )
}

export default Home;