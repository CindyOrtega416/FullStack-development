import {
    BoxContainer,
    FormContainer, 
    Input,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { useState } from "react";


export function SignUpForm () {

const [input, setInput] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: ''
  });
 
  const [error, setError] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    contraseña: '',
    confirmarContraseña: ''
  })
 
  const onInputChange = e => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }
 
  const validateInput = e => {
    let { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };
   
      switch (name) {
        case "nombre":
          if (!value) {
            stateObj[name] = "Por favor ingrese su nombre.";
          }
          break;

          case "apellido":
            if (!value) {
              stateObj[name] = "Por favor ingrese su apellido.";
            }
            break;
        
        case "email":
          if (!value) {
            stateObj[name] = "Por favor ingrese su email.";
          }
          break;

          case "telefono":
            if (!value) {
              stateObj[name] = "Por favor ingrese su telefono.";
            }
            break;
    
   
        case "contraseña":
          if (!value) {
            stateObj[name] = "Por favor ingrese una contraseña.";
          } else if (input.confirmarContraseña && value !== input.confirmarContraseña) {
            stateObj["confirmarContraseña"] = "Las contraseñas no coinciden.";
          } else {
            stateObj["confirmarContraseña"] = input.confirmarContraseña ? "" : error.confirmarContraseña;
          }
          break;
   
        case "confirmarContraseña":
          if (!value) {
            stateObj[name] = "Por favor confirme la contraseña.";
          } else if (input.contraseña && value !== input.contraseña) {
            stateObj[name] = "Las contraseñas no coinciden.";
          }
          break;
   
        default:
          break;
      }
   
      return stateObj;
    });
  }
    return(
        <div>
            <FormContainer>
                <Input 
                    type="text" 
                    name="nombre" 
                    value={input.nombre}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Nombre" />
                {error.nombre && <span className='err'>{error.nombre}</span>}

                <Input 
                    type="text" 
                    name="apellido" 
                    value={input.apellido}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Apellido" />
                {error.apellido && <span className='err'>{error.apellido}</span>}

                <Input 
                    type="email" 
                    name="email" 
                    value={input.email}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Email" />
                {error.email && <span className='err'>{error.email}</span>}

                <Input 
                    type="number" 
                    name="telefono" 
                    value={input.telefono}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Telefono" />
                {error.telefono && <span className='err'>{error.telefono}</span>}

                <Input 
                    type="password" 
                    name="contraseña" 
                    value={input.contraseña}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Contraseña" />
                {error.contraseña && <span className='err'>{error.contraseña}</span>}

                <Input 
                    type="password" 
                    name="confirmarContraseña" 
                    value={input.confirmarContraseña}
                    onChange={onInputChange}
                    onBlur={validateInput}
                    placeholder="Confirmar contraseña" />
                {error.confirmarContraseña && <span className='err'>{error.confirmarContraseña}</span>}

            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Registrarse</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
        </div>
    );
}