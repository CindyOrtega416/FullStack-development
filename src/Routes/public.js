import {Route, Switch} from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import ForgotPassword from "../Pages/ForgotPassword";
import DetallePage from "../Pages/DetallePage";
import React from "react";


export default function Public() {
    return (
        <Switch>
            <Route path="/" exact>
                <HomePage />
            </Route>
            <Route path="/signup" exact>
                <Signup />
            </Route>
            <Route path="/login" exact>
                <Login />
            </Route>
            <Route path="/forgot-password" exact>
                <ForgotPassword />
            </Route>
            <Route path="/producto/:id" exact>
                <DetallePage />
            </Route>
        </Switch>
    )

}