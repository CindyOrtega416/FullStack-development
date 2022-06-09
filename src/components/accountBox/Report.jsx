import React, { useState, useRef } from "react"
import {Map, TileLayer, useMap, useMapEvent, useMapEvents} from 'react-leaflet'

import {map} from "leaflet";
import "leaflet/dist/leaflet.css";


export default function Report (props) {
   
   // const mapRef = useRef();


    const {data} = props
    let coordinates = []

   // const map = mapRef
   // const { current: map } = useMap();

    /*const map = useMapEvents({
        click: () => {
            coordinates.push([data.address.lat, data.address.lon])
            console.log(coordinates)
            map.flyTo(coordinates, 16, {
                duration :2})
        }
    })

    return (
        <div>

            <ul style={{  textAlign:"left"}}>
                <li>
                    <button > {[data.issue, data.address.lat]}<br/></button>
                    <p>{coordinates}</p>

                </li>
            </ul>
        </div>
    )*/
    const handleClick = (() => {
            let nuevaCordoba = []
            let lasRosas = []
            let centro = []
            let others = []

          /*  const { current = {} } = mapRef;
            const { leafletElement: map } = current;*/

            coordinates.push([data.address.lat, data.address.lon, data.address.suburb])
            console.log(coordinates)

/*            const result = coordinates.map(group => {
            if(data.address.suburb === 'Nueva Córdoba'){
                nuevaCordoba.push(data.issue)
            } else if (data.address.suburb === 'Las Rosas'){
                lasRosas.push(data.issue)
            }else if (data.address.suburb === 'Centro'){
                centro.push(data.issue)
            } else {
                others.push(data.issue)
            }
    });*/


/*
              map.flyTo(coordinates, 16, {
                   duration :2})*!/
      /!*  map.flyTo([coordinates], 16)*/
        }

    )
    return (
        <div>
              <ul style={{  textAlign:"left"}}>


                     <li>
                         <p onClick={handleClick}> {[data.issue]}<br/></p>
                         <p>{coordinates}</p>
                            
                     </li>


               </ul>
         </div>
    )

}