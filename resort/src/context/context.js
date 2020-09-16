import React, {Component,useEffect} from 'react';
import Client from "../Contentfull";


const RoomContext = React.createContext();

class RoomProvider extends Component{
    state = {
        rooms:[],
        sortedRooms:[],
        featured:[],
        loading:true,
        type: 'all',
        capacity: 1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false,
    }
    
    getData = async () => {
    try {
      let response =  await Client.getEntries({
        content_type: "rooms"
      });
      let rooms = this.formatData(response.items);
        console.log(response.items)
      let featured = rooms.filter(room => room.featured === true);

      let maxPrice = Math.max(...rooms.map(item => item.price));
      let maxSize = Math.max(...rooms.map(item => item.size));
      this.setState({
        rooms,
        featured,
        sortedRooms: rooms,
        loading: false,

        price: maxPrice,
        maxPrice,
        maxSize
      });
    } catch (error) {
      console.log(error);
    }
  
  
  };
 
  componentDidMount(){
    console.log(this.getData())
  }

    formatData(items) {
      let tempItems = items.map(item => {
        let id = item.sys.id;
        let images = item.fields.images.map(image => image.fields.file.url);
  
        let room = { ...item.fields, images, id };
        return room;
      });
      return tempItems;
    }

    getRoom = (slug) =>{
       let tempRoom = [...this.state.rooms]
       const selectedRoom =  tempRoom.find((selectedRoom)=>selectedRoom.slug === slug)
       return selectedRoom
    }
     onChange = e => {
         const target = e.target
         const name = e.target.name
         const value = e.type === 'checkbox' ? target.checked : target.value
         this.setState({
           [name] : value
         },this.fillerSearch)

    }
    fillerSearch = () => {
        let {
          rooms, type , capacity, price , minSize, maxSize, pets, breakfast
        } = this.state

        let tempRooms = [...rooms]

        capacity = parseInt(capacity)

        price = parseInt(price)

        if(type !== 'all'){
          tempRooms = tempRooms.filter(room => room.type === type)
        }

        if (capacity !== 1){
          tempRooms = tempRooms.filter(room => room.capacity >= capacity)
        }
      
        tempRooms = tempRooms.filter(room => room.price <= price)
        
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize)

        tempRooms = tempRooms.filter(room => room.breakfast === true)

        tempRooms = tempRooms.filter(room => room.pets === true )
      

        this.setState({
          sortedRooms:tempRooms
        })
    }
    render (){
        return <RoomContext.Provider value = {{...this.state, getRoom:this.getRoom,onChange: this.onChange}}>
          {this.props.children}
        </RoomContext.Provider>

        
    }
    
}

const RoomConsumer = RoomContext.Consumer
export function theConsumer (Component) {
     return (props) =>{
       return <RoomConsumer>
         {
           value => <Component {...props} context = {value} />
         }
       </RoomConsumer>
     }
}
export {RoomProvider,RoomConsumer,RoomContext}