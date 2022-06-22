import React from 'react'
import {useEffect, useState} from "react";
import {getAllProductos} from "../Services/productosServices";
import {Row} from "react-bootstrap";
import Producto from "./Producto";
import Menu from "./Menu";


export default function Productos() {
    const [loading, setLoading] = useState(true)
    const [productos, setProductos] = useState([])
    const [buscar, setBuscar] = useState('ipod')

    useEffect(()=> {
        const request = async ()=> {
            try{
                const response = await getAllProductos(buscar)
                setProductos(response.results)
                setLoading(false)
            }catch(e){
                console.log(e)
            }
        }
        request()
    }, [buscar]) //cada vez que cambia el valor en buscar (ej. agrego una 'o'), useEffect se vuelve a ejecutar
                        //y como dentro del useEffect está 'buscar', y esta tiene un nuevo valor
                        //ahora los productos que se traen son con (ej. 'm' y 'o')
                        //y así cada vez el valor dentro de buscar cambie
    const handleChange = (event)=>{
        const value = event.target.value
        setBuscar(value)
        //cada evento del teclado (value) se asiganara como nuevo valor a 'buscar', entonces
        //se ejecutara el useEffect
        //'m'   =>setBuscar('m')    =>buscar = 'm'
        //'mo'   =>setBuscar('mo')    =>buscar = 'mo'
        //'mot'   =>setBuscar('mot')    =>buscar = 'mot'
    }
    if(loading){
        return(<div>Cargando...</div>)
    }else{
        const titulo= "Listado de productos"
        return(
            <div>

                <Menu />
                <h1>{titulo}</h1>
                <input value={buscar} onChange={handleChange}></input>
                <Row>
                    {productos.map(productoData => <Producto data={productoData} />)}
                </Row>
            </div>
        )
    }
}