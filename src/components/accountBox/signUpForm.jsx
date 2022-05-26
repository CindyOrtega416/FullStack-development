
import {
    BoxContainer,
    FormContainer, 
    Input,
    SubmitButton,
} from "./common";
import { Marginer } from "../marginer";

export function SignUpForm () {

    return(
        <BoxContainer>
            <FormContainer>
                <Input type="text" placeholder="Nombre" />
                <Input type="text" placeholder="Apellido" />
                <Input type="email" placeholder="Email" />
                <Input type="text" placeholder="Telefono" />
                <Input type="password" placeholder="Contraseña" />
                <Input type="password" placeholder="Confirmar Contraseña" />
            </FormContainer>
            <Marginer direction="vertical" margin={10} />
            <SubmitButton type="submit">Registrarse</SubmitButton>
            <Marginer direction="vertical" margin="1em" />
        </BoxContainer>
        
    );
}