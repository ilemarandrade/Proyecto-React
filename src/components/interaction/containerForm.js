import React, { useEffect, useRef } from "react"
import { useState } from "react";
import useGetTheme from "../../hooks/getTheme"
import Steps from "./steps.js"



/**
*@name ContainerForm by Ilemar Andrade
*@version 1.0
*@brief Este component es el contenedor de los form, se creo para poder hacer la animacion del scroll
*@param  children esto es lo que se coloque dentro de este componente 
*@param height es para determinar si se centra el form o se coloca para que empiece en la parte superior del padre
*@return renderizado el contenedor de los form
*/
const ContainerForm = ({children, height = true  }) =>
{
    const theme = useGetTheme();

    const scrollForm=useRef()

    const [directionScroll,setDirectionScroll]=useState(false)


 


    const scrollA=()=>{

    
        setDirectionScroll(!directionScroll)

    }

    return (
            <div ref={scrollForm} onScroll={scrollA} className={`h-100 w-100 txtm-lft ${height?"perfectCentered":""} scroller pos-r dfc`}>

                {/*<div id="degradedTop" className={`${directionScroll?"":"dn"}`}></div>*/}
                <div className="w-100 form prm-05 txtm-lft">
                
                    <p className={`${theme}-title-style-1 mb-05 fz-1-3 `}>Seminario Creando Riqueza Presencial</p>

                    <Steps  />
                
                {children}

                {/*<div id="degradedBottom" className={`${directionScroll?"dn":""}`}></div>*/}
                
                </div>

                

            
            </div>
    )
}

export default ContainerForm 