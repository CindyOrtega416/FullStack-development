import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {getByIdProductos} from "../Services/productosServices";

export default function DetallePage() {
    const {id} = useParams()
    console.log("Id", id)
    const [loading, setLoading] = useState(true)
    const [producto, setProducto] = useState({})

    useEffect(()=> {
        try{
            const request = async()=> {
                const response = await getByIdProductos(id)
                console.log("response", response)
                setProducto(response.results)
                setLoading(false)
             }

            request()
        }   catch(e) {
            console.log(e)

        }
    }, [id])
    console.log(producto)
    if(loading){
        return (
            <div>
                Cargando...
            </div>
        )
    }else{
        return(
            <div className="">
                <h1>{producto.title}</h1>
                <p>$ {producto.price}</p>
                {producto.picture.map(image=><img src={image.url}></img>)}
            </div>
        )
    }
}