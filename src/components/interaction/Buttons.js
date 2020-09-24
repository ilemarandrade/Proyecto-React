import React, { useState } from "react";
import "../../standardFront.css"
import Spinner from "./Spinner.js"
import { useHistory } from "react-router-dom";
import {useStore} from "react-redux"
import useGetTheme from "../../hooks/getTheme";

/**
*@name button by Ilemar Andrade 
*@version 1.0
*@brief Este component renderiza un boton en la pantalla, tiene estado de normal, loading, disable y error.
*@params puede contener label, color...
*@return renderizado del boton
*/
const Button=({label="Continuar", width="100%", color="white", enable=false, style="", goToRoute="",typeButton="Primary" })=>
{
    /**
     * @name Declarations by Ilemar Andrade
     * @brief declaracion de las variables del button
     * @param actionProcess esta variable contiene un state en false para luego ser seteada
     * @param setactionProcess setea a actionProcess de true a false y de false a true 
     * @param loading esta varible tiene un valor dependiendo de actionProcess que si es true es la animacion de loading 
     * si es false es un elemento vacio  
     *     */
    
    const theme = useGetTheme()  
    const history                           =   useHistory()
    const [actionProcess,setactionProcess]  =   useState(false);
    
    const loading=<Spinner {...{
                                color   : color,
                                width   : actionProcess?"2em":"0em"}} />
    
    const styledButton={
                        width           : width,
                        background      : enable?"":"yellow !important"
                        }

    /**
    *@name actionButton by Ilemar Andrade 
    *@version 1.0
    *@brief se dispara al hacer click sobre el boton
    *@return null
    */


       const actionButton=()=>
    {
        
        if(enable)
        {
            
            goToRoute !== "" && history.push(goToRoute);
        
            setactionProcess(!actionProcess)

        }
        
    }

    /**
    *@name onbutton by Ilemar Andrade 
    *@version 1.0
    *@brief coloca un estilo en el boton
    *
    *@param  e evento del boton
    *@return cambios de styles en el boton
    */

   /* const onButton=(e)=>
    {
        if(styledButton.background==="white")
        {
            e.target.style.background="#0984FF";
            e.target.style.color="white"
        }
        else
        {
            e.target.style.background= "#066ED6"
        }
    }



    /**
    *@name outButton by Ilemar Andrade 
    *@version 1.0
    *@brief coloca estilo en el boton
    *
    *@param  e evento del boton
    *@return renderizado del boton
    */

    /*
    const outButton=(e)=>
    {
        if(styledButton.background==="white")
        {
            e.target.style.background="";
            e.target.style.color=styledButton.color
        }
        else
        {
            e.target.style.background= styledButton.background
        }
    }*/

    return( 
            <div    style={{...styledButton,...style}} 
                    className={`${enable?theme:`${theme}Enabled`}-button${typeButton} btn noSelect perfectCentered fweight-600 pallm-05 `}
                    onClick={actionButton}>
                    

                {loading}{label}
                
            </div>);
}

export default Button