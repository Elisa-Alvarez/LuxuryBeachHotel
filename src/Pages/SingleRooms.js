import React, {Component} from 'react';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import {RoomContext} from '../context/context'
import StyledHero from '../components/StyledHero'
export default class SingleRooms extends Component{
    constructor(props){
        super(props)
        this.state = {
            slug: this.props.match.params.slug 
        }
    }
   static contextType = RoomContext
    render()
        {
        let {getRoom} = this.context
        const room = getRoom(this.state.slug)
        if (!room){
            return <div className="error-render">
                <h2>Sorry we did not find the room you were looking for...</h2>
                <Link to="/" className="home-btn">Back To Rooms</Link>
            </div>
        }
        const {name,description,size,capacity,price,extras,breakfast,pets,images} =room 
        const [mainImg, ...deafaultImg] =images
        return (
           <>
            <StyledHero img ={images[0]} >
                <Banner title ={`${name} `}>
                    <Link to ="/rooms" className="home-btn"></Link>
                </Banner>
            </StyledHero>
            <section className="single-room">
                <div className='single-room-img'>
                    {deafaultImg.map((img,i)=>{
                        return <img key={i} src={img} alt={name} />                    })}
                </div>
                <div clssName="single-room-info">
                   <div className="description">
                     <h3>Details</h3>
                     <p>{description}</p>
                   </div>
                   <div className="info">
                      <h3>Info</h3>
                      <h6>Price: ${price}</h6>
                      <h6>Size: {size} sqft</h6>
                      <h6>Max Capacity:{capacity > 1 ?`${capacity} People`: `${capacity} Person` }</h6>
                      <h6>{pets ?`Pet's are allowed`:`No Pets Allowed`}</h6>
                      <h6>{breakfast && "Free Breakfast Included"}</h6>
                   </div>
                 </div>
            </section>
            <section className="extras">
              <h6>Extras</h6>
              <ul className="extras">
                  {extras.map((extra,i) =>{
                     return <li key={i}>- {extra}</li>
                  })}
              </ul>
            </section>
            </>
        )
    }
}