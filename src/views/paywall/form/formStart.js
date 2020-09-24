import React, { useCallback, useState } from "react"
import "../../../standardFront.css"
import Button from "../../../components/interaction/Buttons.js" 
import ContentSeeMore from "../../../components/interaction/contentSeeMore.js"
import {ButtonEvent, ButtonBuy} from "../../../store/config/form.js"
import {propsPresentiaOnline}  from "../../../store/config/user.js"
import {useStore} from "react-redux"
import calendar from "../../../assets/ico/calendar.svg"
import place from "../../../assets/ico/place.svg"
import { InputRadio } from "../../../components/interaction/Input"
import useGetTheme from "../../../hooks/getTheme"


/**
*@name formStart by Ilemar Andrade
*@version 1.0
*@brief este es el formulario que se muestra al iniciar la app
*@return renderiza un formulario dentro del Paywall
*/

const FormStart = () =>
{

    const theme     =   useGetTheme()
    const [buttonBuyActived, setbuttonBuyActived] =   useState(false)

/**
 * @name Declarations
 * @brief son variables que se le declaran los props a los botones
 * @param event props para boton para ir a evento
 * @param Comprar props para boton para comprar
 * @param mediaMatch es una variable para verificar el tamaño de la pantalla del device
 */

const ContentDate         = {
                                length: 120,
                                description: "Sab, Jun 14 - Dom 15 a 9:00 AM - 8:30",
                                imgTitle: <img src={calendar} />,

                            }

const ContentPlace        = {
                                length: 100,
                                description: "16701 Collins, Ave, Sunny Isles Beach, FL 33160, USA",
                                imgTitle: <img src={place} />,    
                            }

const handleButtonActive = useCallback((status)=>
{

    setbuttonBuyActived(status)
    


},[propsPresentiaOnline])

propsPresentiaOnline.options.map((e)=>
{
  e.callback = handleButtonActive
}

)


/**
 *@TODOD4 
 1) adaptar el componente ContentSeeMore para recibir un titulo
 2) Si no viene description no se debe  mostrar el componente ContentSeeMore, descripcion ni titulo     
 3) Evitemos el mediaWatch en react, programemos a nivel de media query  
 4) Pendiente con la identacion no pongamos los  elementos HTML inline, dale sus espacios
 5) Si la cadena enviada en  descripcion es menor al length enviado no colocar los 3 puntos (...)
 */

    return(
            <div className="w-100 h-100 perfectCentered dfc">

                <div className="form txtm-lft w-100 prm-05">

                    <h1 className={`${theme}-title-style-1 lh-1`}>
                        Seminario <br/>Creando Riqueza
                    </h1>

                    <h3 style={{fontWeight:"100"}} className={`mb-1-5 ${theme}-fc-secondary`}>
                        Alejandro Cardona
                    </h3>
                    
                    <ContentSeeMore declaration={ContentDate}/>   
                    
                    <ContentSeeMore declaration={ContentPlace}/> 
                    
                    <p className={`mb-1 ${theme}-title-style-1`}>Elige tu experiencia</p>

                    <InputRadio {...propsPresentiaOnline}/>
                        
                </div>    

                <div className={`mt-1 fjs btn-container-double w-100`}>

                    <Button {...ButtonEvent} />
                    <Button {...{...ButtonBuy, enable:buttonBuyActived}} />
                    
                </div>

            </div>
    )
}


export default FormStart

