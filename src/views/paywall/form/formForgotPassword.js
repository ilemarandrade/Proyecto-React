import React from "react"
import {Input} from "../../../components/interaction/Input.js"
import Button from "../../../components/interaction/Buttons.js"
import {propsEmailInput} from "../../../store/config/user.js"
import {ButtonSend} from "../../../store/config/form"
import arrowLeft from "../../../assets/ico/arrow-left.svg"
import { useHistory } from "react-router-dom"
import {useStore} from "react-redux"
import useGetTheme from "../../../hooks/getTheme.js"
import GoBack from "../../../components/interaction/goBack.js"

/**
 * @name FormForgotPassword by Ilemar Andrade
 * @version 1.0
 * @brief pinta en la pantalla el form de olvido su contraseña
 * @return devuelve el form
 */

const FormForgotPassword = () =>{
    /**
     * @const history es un hook
     */
    const history = useHistory()

  
    const theme     =   useGetTheme();

    /**
     * @name goBack by Ilemar Andrade
     * @brief en un event onCLick
     * @return cambia la ruta a "/login"
     */

    const goBack = ()=>{

        history.push("/login");

    }

    return(
            <div className="w-100 txtm-lft form w-100">

                <h1 className={`${theme}-title-style-1 lh-1 mb-05`}>Olvido Contraseña</h1>
                
                <Input {...propsEmailInput} />
                
                <Button {...ButtonSend} />
                
                <GoBack/>

            </div>
    )



}

export default FormForgotPassword