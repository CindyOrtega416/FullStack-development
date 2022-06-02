import React, {useEffect, useRef, useState} from "react";
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from "../contexts/AuthContext";
import { Link, useHistory } from 'react-router-dom';
import {addDoc, collection, GeoPoint} from "@firebase/firestore";
import {db} from "../firebase";
import firebase from "firebase/compat";
import logo from '../images/logo.jpg'
import  {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { signup } = useAuth()  //para poder usar en el form lo que creamos en AuthContext
    const [error, setError] = useState('') //vacio porque no va a tener un error por default
    const [success, setSuccess] = useState('')
    const [info, setInfo] = useState(true)
    const [loading, setLoading] = useState(false) //como estado inicial no estamos cargando nada
    const history = useHistory()

    const [newDni, setNewDni] = useState("")
    const [newName, setNewName] = useState("")
    const [newPhone, setNewPhone] = useState("")

    const [users, setUsers] = useState([])
    const usersCollectionRef = collection(db, "registeredUsers")


    const createRegisteredUsers = () =>{
        const registeredUsersRef = firebase.database().ref('registeredUsers/')
        const regisUsers = {
            dni: newDni,
            phone_number: newPhone,
            name: newName
        };
        registeredUsersRef.push(regisUsers);

    }



    /*const createUser = async () => {
        await addDoc(usersCollectionRef, {dni: newDni,
            phone_number: newPhone,
            name: newName

        })
    }
*/

    async function handleSubmit(e) {
        e.preventDefault() //prevent our form to refresh

        if(passwordRef.current.value !==
            passwordConfirmRef.current.value) {
            return [setError('Las contraseñas no coinciden'), setInfo(false)]
        }

        try {
            setError('') //antes de intentar cualquier cosa queremos resetear el mensaje de error
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            return [setSuccess('La cuenta ha sido creada con éxito'), setInfo(false)]
/*            setTimeout(() => {
                history.push("/")
            }, 500)*/
            setLoading(false)

        } catch(error) {
            console.log(error)
            return [setError('La cuenta que intenta crear ya existe'), setInfo(false)]
        }

    }
    return (

        <section class="vh-100" style={{backgroundColor:" white"}}>
            <div class="container py-5 h-100">
                <div class="row d-flex justify-content-center align-items-center h-100">
                    <div class="col col-xl-10">
                        <div class="card" style={{borderRadius: "1rem",  boxShadow:" 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19)"}}>
                            <div class="row g-0">
                                <div class="col-md-6 col-lg-5 d-none d-md-block" style={{backgroundColor: "#095E3D",borderRadius:" 1rem 0 0 1rem"}}>
                                    <img src={logo} alt="login form" class="img-fluid" style={{borderRadius:" 1rem 0 0 1rem", marginTop:"50%"}} />
                                </div>
                                <div class="col-md-6 col-lg-7 d-flex align-items-center">
                                    <div class="card-body p-4 p-lg-5 text-black">
                                        <h2 className="text-center mb-4">Registrarse</h2>
                                        {info && <Alert variant="info">Las contraseñas deben tener más de 6 caracteres</Alert>}
                                        {error && <Alert variant="danger">{error}</Alert>}
                                        {success && <Alert variant="success">{success}</Alert>}
                                        <Form onSubmit={handleSubmit}>
                                            <Form.Group id="dni">
                                                <Form.Label>DNI</Form.Label>
                                                <Form.Control type="text" onChange={(event) => {
                                                    setNewDni(event.target.value);
                                                }}/>
                                            </Form.Group>
                                            <Form.Group id="phone" >
                                                <Form.Label>Número de teléfono</Form.Label>
                                                <Form.Control type="text" onChange={(event) => {
                                                    setNewPhone(event.target.value);
                                                }}/>
                                            </Form.Group>
                                            <Form.Group id="name" >
                                                <Form.Label>Nombre</Form.Label>
                                                <Form.Control type="text" onChange={(event) => {
                                                    setNewName(event.target.value);
                                                }}/>
                                            </Form.Group>
                                            <Form.Group id="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control type="email" ref={emailRef} required />
                                            </Form.Group>
                                            <Form.Group id="password">
                                                <Form.Label>Contraseña</Form.Label>
                                                <Form.Control type="password" ref={passwordRef} required />
                                            </Form.Group>
                                            <p>     </p>
                                            <button class="colorb" disabled={loading} type="submit" onClick={createRegisteredUsers}>
                                                Registrarse
                                            </button>
                                        </Form>

                                        <div className="w-100 text-center mt-2">
                                            ¿Ya tienes una cuenta? <Link to="/" style={{color: "rgb(228, 170, 35)"}}>Inicia sesión</Link>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}