import React, {useEffect, useRef, useState} from 'react';
import L, {map} from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup, LayersControl, LayerGroup} from 'react-leaflet';
import '../../App.css';
import 'leaflet/dist/leaflet.css';

import denuncias from '../../denuncias.json';
import {addDoc, collection, GeoPoint, getDocs} from "@firebase/firestore";
import {db} from "../../firebase";
import firebase from "firebase/compat";
import * as ELG from "esri-leaflet-geocoder";
import {Button} from "bootstrap";
import Link from "@material-ui/core/Link";
import Report from './Report';

//delete L.Icon.Default.prototype._getIconUrl;


/*
L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('../../images/marker-icon-2x.png').default,
    iconUrl: require('../../images/marker-icon.png').default,
    shadowUrl: require('../../images/marker-shadow.png').default
});
*/

export default function MapPicker() {

    const [storeData, setStoreData] = useState([]);
    const [map, setMap] = useState(null)

   /* useEffect(() => {
        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        if ( !map ) return;


        //  L.marker([50.5, 30.5], []).addTo(map);
        /!*        export function createMarker(latitude,longitude,popupContent){

                    L.marker([latitude,longitude]).addTo(map)
                        .bindPopup(popupContent);
                }*!/

        /!*        const getUsers = async () => {
                    const data = await getDocs(usersCollectionRef);
                    setUsers(data.docs.map((doc) => ({...doc.data()
                    })))
                    //en la linea de arriba estamos recorriendo la coleccion y guardanco cada dato del documento en un array y tambien
                    //trayendo el id de cada documento
                };

               getUsers();*!/


        //const usersList = []


        /!*     const usersRef = firebase.database().ref('users')
             usersRef.on('value', (snapshot) => {
                 setData({...snapshot.val()})

                 console.log(data)

                 /!*const usersVal = snapshot.val()
                 for (let id in usersVal) {
                     usersList.push(usersVal[id])
  *!/
                 }
              )*!/
        /!*    {
                try {
                    Object.keys(data).map((id, index) => {
                        console.log(data[id].img)
                        locations.push([data[id].issue, data[id].address.lat, data[id].address.lon, data[id].img])
                        console.log(locations)

                        for (let i = 0; i < locations.length ;i++) {
                            new L.marker([locations[i][1], locations[i][2]])
                                .bindPopup("<img src = ' " + locations[i][3] + "' />" + locations[i][0])
                                .addTo(map)

                        }
                        /!*        let markers = []
            locations.forEach((element, i) => {
                markers[i] = L.marker([element[1], element[2]]).addTo(map)
                    .bindPopup("<img src = ' " + element[3] + "' />" + element[0])
            })*!/
                    })
                } catch (err) {
                    console.log(err)
                }
            }
 *!/






        /!*      console.log(locations[i][3])

      })}

     // console.log(usersList)


     /!* {
          let locations = []
          {
              if (usersList) {
                  usersList.map((userVal) => {
                      console.log(userVal)
                      locations.push([userVal.issue, userVal.address.lat, userVal.address.lon, userVal.img])
                  })

                  /!*   (async () => {
                         setContent(await getContentData())
                     }) ();*!/

                  console.log(locations)

              } else {
                  return ('')
              }
          }

          console.log(locations)
          for (let i = 0; i < locations.length; i++) {*!/
        /!*new L.marker([34.07381780761041, -118.44177995896911])
           /!* .bindPopup("<img src = ' " + locations[i][3] + "' />" + locations[i][0])*!/
            .addTo(map)*!/
        /!*      console.log(locations[i][3])

              console.log('kasemaster')
          }
      }
*!/




    }, [])
*/

    useEffect(() => {
        const fetchData = () => {
            let tmp = []
            const usersRef = firebase.database().ref('users')
            usersRef.on('value', (snapshot) => {
                snapshot.forEach(doc => {
                    tmp.push(doc.val())
                })
                setStoreData(tmp);
                /* setLocations(locations)
                 console.log(locations)*/

                /*const usersVal = snapshot.val()
                for (let id in usersVal) {
                    usersList.push(usersVal[id])
 */
            })
        }
        fetchData()


    }, [])


    const handleOnFlyTo = (event) => {

/*        const { current = {} } = mapRef;
        const { leafletElement: map } = current;

        if ( !map ) return*/
        let coordinates = []
        let result = []

   /*     storeData.map(x => {
            coordinates.push([x.address.lat, x.address.lon])

        })
        console.log(coordinates)
*/
     /*   map.flyTo([x.address.lat, x.address.lon], 20, {
            essential: true,
            duration :2})*/
       result = storeData.map(x => ({
            lat: x.address.lat, lng: x.address.lon
        }))

        result.push()
        console.log(result[0])
      /*
       coordinates.push([x.address.lat, x.address.lon])
            console.log(coordinates.length)
*/

        result.forEach((element, index, array) => {
            console.log(element.lat, element.lng)
            console.log(index)


/*
            map.flyTo([element.lat, element.lng], 16, {
                duration :2})
             return (<Marker
                 key={index}
                 position={[element.lat, element.lng]}>
                     <Popup>
                         A pretty CSS3 popup.<br /> Easily customizable.
                     </Popup>
                 </Marker>
         )*/



        });

        /*      for( let i=0; i<result.length; i++) {
                  console.log(result[i][1])
                 /!* map.flyTo([result[i][0], result[i][1]], 21, {
                      duration :2})*!/
              }*/

    }


    /*
   console.log(e)

    let flyMarker = []
            for (let i = 0; i < flyMarker.length; i++) {
                map.setView([flyMarker[i][0], flyMarker[i][1]], 16, {
                    essential: true,
                    duration :2})

            }
            flyMarker.filter(obj => {
                console.log(obj)
            })
            console.log(flyMarker)
            */
    /*
const { lat, lng } = e.latlng;
console.log(lat, lng);*/

    /* storeData.map(x=> {
          marker.on('click', function(e){
         map.setView(e.latlng, 13);
     });
     })*/

    /*  storeData.map(x => {
          let denuncias = []
          denuncias.push([x.address.lat, x.address.lon])
          console.log(denuncias)
              map.flyTo([x.address.lat, x.address.lon], 14, {
              essential: true,
              duration :2})
          })  */

    /*
     handleClick = (e) => {
         const { lat, lng } = e.latlng;
         console.log(lat, lng);
       } */
    /*  flyMarker.push([x.address.lat, x.address.lon])
      console.log(flyMarker)

      for(let i=0; i<flyMarker.length; i++) {
          map.flyTo([flyMarker[i][0], flyMarker[i][1]], 14, {
          essential: true,
          duration :2})
      }*/


    const handleClick = event => {

        const { lat, lng } = event.latlng
       /* map.flyTo(event.latlng, 21, {
            essential: true,
            duration :2
        })*/

        console.log(`Clicked at ${lat}, ${lng}`)
    }
    return (
        <div className='map'>

            <div>
                <MapContainer center={[-31.4167, -64.18]} ref={setMap} zoom={13} >
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;https://www.openstreetmap.org/copyright&quot;>OpenStreetMap</a> contributors" />
                        <LayersControl position='topright'>


                    {
                        storeData.map((x, index) => {


                        console.log([x.issue, x.address.lat, x.address.lon, x.img, index])
                        if (!x.img){
                        return (
                            <LayerGroup>
                        <Marker
                            onClick={handleOnFlyTo}
                            index={index}
                            position={[x.address.lat, x.address.lon]}
                            data={index}

                        >
                            <Popup>
                                <p>{x.issue}</p>
                            </Popup>
                        </Marker>

                            </LayerGroup>
                        )} else {
                        return (
                                <LayerGroup>
                        <Marker
                            index={index}
                            onClick={handleOnFlyTo}
                            position={[x.address.lat, x.address.lon]}
                        >
                            <Popup>
                                <h5>{x.issue}</h5>
                                <img
                                src={x.img}
                                width="150px"
                                height="150px"
                                />
                            </Popup>
                        </Marker>
                                </LayerGroup>


                        )
                    }
                    })

                    }

                        </LayersControl>

                </MapContainer>
            </div>

            <section className='denuncias'>
                <h2 style={{
                    fontWeight: "900", fontSize: "20px", marginLeft:'20px', marginTop:'10px'}}> DENUNCIAS</h2>
                {
                    storeData.map(x => <Report data={x} />)
                }
            </section>
        </div>

    );
}


/*  onClick={ (event) => {
                                const { lat, lng } = event.latlng
                                console.log(`Clicked at ${lat}, ${lng}`)}}*/