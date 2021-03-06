import React from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {Button} from '@material-ui/core'
import SearchContainer from '../components/SearchContainer'
const Room = () => {
    return (
        <>
          <Hero hero="room-hero">
              <Banner title="Our Rooms">
                  <Link to="/">
                  <Button variant="outlined" className="home-btn">Return Home</Button>
                  </Link>
              </Banner>
          </Hero>
          <SearchContainer />
        </>
    )
}

export default Room