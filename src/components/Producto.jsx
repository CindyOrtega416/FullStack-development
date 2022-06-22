import React, {useState} from "react";
import {Col, Card, Button} from "react-bootstrap";
import {Link} from "react-router-dom";
const style = {
    card:{ width: '18rem' }
}

export default function Producto(props) {
    const {data} = props
    const [mensaje, setMensaje] = useState('')
    const handleClick = ()=>  {
        console.log("Id producto", data.id)
        setMensaje("Gracias por su compra")
    }
    return(

        <Col>
            <Card style={style.card}>
                <Card.Img variant="top" src={data.thumbnail} />
                <Card.Body>
                    <Card.Title>{data.title}</Card.Title>
                    <Card.Text>
                        $ {data.price}
                    </Card.Text>
                    <Button as={Link} to={'/producto/'+data.id} variant="primary">Ver Detalle</Button>
                    <div>{mensaje}</div>
                </Card.Body>
            </Card>
        </Col>


    )
}