import React from 'react'
import Title from './Tile'
import{FaCocktail,FaHiking,FaWifi,FaBowlingBall} from 'react-icons/fa'
 const service =[
      {
    icons:<FaCocktail/>,
    title: "Free Cocktails",
    info: "Lorem ipsum andnw askdfja mnakjdha thabndaljdfd jgakld  wealk adkjlnd jlq afjjha ajdejr aj djf"
 },
    {
    icons:<FaHiking/>,
    title: "Endless Hiking",
    info: "Lorem ipsum andnw askdfja mnakjdha thabndaljdfd jgakld  wealk adkjlnd jlq afjjha ajdejr aj djf"
    },
    {
        icons:<FaWifi/>,
        title: "Free Wifi",
        info: "Lorem ipsum andnw askdfja mnakjdha thabndaljdfd jgakld  wealk adkjlnd jlq afjjha ajdejr aj djf"
     },
     {
        icons:<FaBowlingBall/>,
        title: "Bowling & Arcade",
        info: "Lorem ipsum andnw askdfja mnakjdha thabndaljdfd jgakld  wealk adkjlnd jlq afjjha ajdejr aj djf"
     },
 

]
function Services () {


return(
    <section className="services">
      <Title title="services" />
      <div className="services-center">
         {service.map(item => {
           return(
               <div>
                 <div className="icon">{item.icons}</div>
                  <h5>{item.title}</h5>
                  <p className="service-info">{item.info}</p>
               </div>
           )
         })}
      </div>

    </section>

)
}

export default Services