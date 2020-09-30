import React from 'react'
import RoomType from './RoomType'
function RoomList ({rooms}) {
if (rooms.length === 0){
    return (
    <div className="empty-rooms">
      <h3>No Rooms Found That Mached Your Search</h3>
    </div>
    );
}
return (
    <section className="sorted-rooms">

            {
                rooms.map((room=>{
                    return <RoomType key={room.id}  room={room} />
                }))
            }
   
    </section>
)
}

export default RoomList