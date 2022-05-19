import React, { useContext } from "react";
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from "./common";
import { Marginer } from "../marginer";
import { AccountContext } from "./accountContext";
import Link from "@material-ui/core/Link";
//import "../css/styles.css";

export function SignupForm(props) {
  const { switchToSignin } = useContext(AccountContext);

  return (
    <BoxContainer>
      <FormContainer>
        <Input type="number" placeholder="DNI" />
        <Input type="number" placeholder="Teléfono" />
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Contraseña" />
        <Input type="password" placeholder="Repetir Contraseña" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <SubmitButton type="submit">
          <Link className= "linkCSS" href="report" style={{ color: '#FFF' }}>Comenzar</Link>
          </SubmitButton>
      <Marginer direction="vertical" margin="1em" />
      <MutedLink href="#">
        ¿Ya tienes una cuenta?
        <BoldLink href="#" onClick={switchToSignin}>
          Ingresar
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
}
