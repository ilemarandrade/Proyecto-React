import React from "react"
import {Input} from "../../../components/interaction/Input"
import Button from "../../../components/interaction/Buttons.js" 
import {propsPasswordInput, propsEmailInput} from "../../../store/config/user.js"
import {ButtonContinuar} from "../../../store/config/form.js"
import { useHistory } from "react-router-dom"
import arrowLeft from "../../../assets/ico/arrow-left.svg"
import {useStore} from "react-redux"
import useGetTheme from "../../../hooks/getTheme"

/**
*@name FormLogin by Ilemar Andrade
*@version 1.0
*@brief este es el formulario para loguearse
*@return renderiza un formulario dentro del Paywall
*/

const FormLogin=()=>{

    /**
     * @param history usa un hook  
     */
    let history=useHistory()

    const theme     =  useGetTheme();

    /**
     *@name goBack by Ilemar Andrade
     *@brief es un evento onClick 
     *@return cambia el url a la direccion "/"
     */
    const goBack=()=>
    {
        history.push("/")
    }

    /**
     *@name goForgotPassword by Ilemar Andrade
     *@brief es un evento onClick 
     *@return cambia el url a la direccion "/forgotPassword"
     */

    const goForgotPassword=()=>
    {
        history.push("/forgotPassword")
    }


    return(
            <div className="mb-1">

                <div className="w-100 txtm-lft">
                    
                    <Input {...propsEmailInput}></Input> 
                    
                    <Input {...propsPasswordInput}></Input> 
                </div>
                <div className="df" style={{justifyContent:"flex-end"}}>

                   <p className={`${theme}-fc-terciary cP`}>Olvidó su Clave</p> 
                   
                </div>  
                        
            </div>
    )
}

export default FormLogin