import React, { useState, useRef } from "react"
import { Map, TileLayer } from 'react-leaflet'


export default function Report (props) {
   
    const mapRef = useRef();


    const {data} = props
    let coordinates = []
    

    const handleClick = (() => {
/*
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;
   
             if ( !map ) return */

        
        coordinates.push([data.address.lat, data.address.lon])
        console.log(coordinates)

      /*  map.flyTo([coordinates], 16, { 
            duration :2})}
      */}
     
    )
    return (
        <div>
                    
              <ul style={{  textAlign:"left"}}>
                     <li>
                         <button onClick={handleClick}> {[data.issue, data.address.lat]}<br/></button>
                         <p>{coordinates}</p>
                            
                     </li>
               </ul>
    
         </div>
    )

}