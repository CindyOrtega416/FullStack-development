import React from 'react'
import "../App.css";
import {
    BrowserRouter as Router,
} from "react-router-dom";

import {AuthProvider} from "../contexts/AuthContext";
import { Container } from 'react-bootstrap';
import Public from "../Routes/public";
import Menu from "./Menu";



function App() {

    return (
        <Router>
            <Menu />
            <Container>
                <AuthProvider>
                    <Public />
                </AuthProvider>
            </Container>
        </Router>


    );
}

export default App;