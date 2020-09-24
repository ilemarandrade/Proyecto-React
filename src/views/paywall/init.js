import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import {Menu} from "../../components/interaction/menu.js"
import PaywallContainer from "../../components/interface/PaywallContainer.js"
import Slider from "../../components/interaction/slider.js"
import Logo from "../../components/interaction/logo"
import FormStart from "./form/formStart.js"
import FormLogin from "./form/formLogin.js"
import FormForgotPassword from "./form/formForgotPassword.js"
import FormClient from "./form/formClient.js"
import FormPayment from "./form/formPayment.js"
import FormTicket from "./form/formTicket.js"
import "../../standardFront.css"

/**
*@name Init by Ilemar Andrade
*@version 1.0
*@brief es la vista que contiene el layout de la app y las rutas de la misma
*@return renderiza la app segun su ruta 
*/

/**
 * @param slider
 * @brief fue creadas para poder pasar como props a PaywallContainer  
 */
const slider=<Slider ></Slider>;
const Init=()=>{

    return(
        <Router>
            <Switch>
                <>
                <Logo />
                <Menu />
                <div id="containerViews" className="perfectCentered">
                    <Route exact path="/">
                        <PaywallContainer {...{slider,form:<FormStart/>}}  />
                    </Route>
                    <Route exact path="/login">
                        <PaywallContainer {...{slider,form:<FormLogin/>}}  />
                    </Route>
                    <Route exact path="/forgotPassword">
                        <PaywallContainer {...{slider,form:<FormForgotPassword/>}}  />
                    </Route>
                    <Route exact path="/client">
                        <PaywallContainer {...{slider,form:<FormClient/>}}  />
                    </Route>
                    <Route exact path="/tickets">
                        <PaywallContainer {...{slider,form:<FormTicket/>}}  />
                    </Route>
                    <Route exact path="/payment">
                        <PaywallContainer {...{slider,form:<FormPayment/>}}  />
                    </Route>
                </div>
                </>
            </Switch>
        </Router>
    )

}

export default Init