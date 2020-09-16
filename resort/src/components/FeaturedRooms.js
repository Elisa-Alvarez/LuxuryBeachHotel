import React,{Component} from 'react'
import {RoomContext} from '../context/context'
import Loading from './Loading'
import RoomType from './RoomType'
import Title from './Title'
export default class Featured extends Component{
    static contextType = RoomContext
    render(){
      let {loading,featured : rooms } = this.context
      rooms = rooms.map( room =>{
          return <RoomType key ={room.id} room={room} /> 
      })
        return(
        
            <section className= "Featured">
               <Title title = "Featured Rooms" />
               <div className ="featured-rooms-center">
                   {loading? <Loading />:rooms}
               </div>       
            </section>
            
        )
    }
}

