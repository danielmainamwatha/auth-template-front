import React from "react";
import { Redirect, Switch, Route } from "react-router-dom";
import {login} from "./auth";

export function Routes() {

    return(
        <Switch>
            <Route path="/" component={login}/>
        </Switch>
    );
}