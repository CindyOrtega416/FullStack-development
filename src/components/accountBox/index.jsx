import React from "react";
import {
    BoxContainer, 
    TopContainer,
    HeaderContainer,
    HeaderText,
    SmallText,
    BackDrop,
} from "./common";
import { SignUpForm } from "./signUpForm";

export function Index () {

    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop />
                <HeaderContainer>
                    <HeaderText>¡Bienvenido!</HeaderText>
                    <SmallText>Por favor, registrate para continuar</SmallText>
                </HeaderContainer>
            </TopContainer>
                <SignUpForm />
        </BoxContainer>
        
    );
}