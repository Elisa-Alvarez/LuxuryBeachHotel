import React from 'react';
import Hero from './Hero'
import Banner from './Banner'
import {Link} from 'react-router-dom'
import { Button } from '@material-ui/core';
export default function Error(){
  return(
      
      <Hero>
        <Banner title="404 Error" subtitle="Page Not Found">
          <Link to="/">
            <Button variant = "outlined" className="home-btn">Return To Home Page</Button>
          </Link>
        </Banner>
      </Hero>
      
  )
}