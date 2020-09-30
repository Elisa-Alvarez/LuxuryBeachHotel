import React from 'react'
import SearchFilter from './SearchFilter'
import RoomList from './RoomList'
import {theConsumer} from '../context/context'
import Loading from './Loading'
function SearchContainer ({context}){
    const {loading,sortedRooms,rooms} = context
    if(loading){
       return <Loading/>
    }
    return (  
    <div>
     <SearchFilter rooms={rooms}/>
     <RoomList  rooms={sortedRooms}/>
    </div>
    )

       
    
}

export default theConsumer(SearchContainer)