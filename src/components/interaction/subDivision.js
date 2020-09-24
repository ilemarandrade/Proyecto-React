import React, { useState } from "react"
import arrow from "../../assets/ico/arrow.svg"
import "../../standardFront.css"
import {useStore} from "react-redux"
import useGetTheme from "../../hooks/getTheme"

/**
 *@name Sub by Ilemar Andrade 
 *@version 1.0
 *@brief es como un accordion pero con opciones para seleccionar
 *@return devuelve un submenu
 */
const Sub=({Options = [ 
                        {value:"ESPAÑOL",callback:""},
                        {value:"INGLÉS",callback:""}
                      ]
        })=>
{
    /**
     * @param deploy espara saber si esta desplegado el sub menu
     * @param setdeploy setea deploy 
     */
    const [deploy,setdeploy]=useState(false);
    const theme     =   useGetTheme();

    /**
     * @name deployEvent by Ilemar Andrade
     * @brief dispara a @const setDeploy para setear de false a true y de true a false @const deploy
     */
    const deployEvent=()=>{
        setdeploy(!deploy);
        }


    return(
        <div style={{ height:deploy?"4em":"2em",overflow:"hidden",transition: "height 1s"}}>
            <div className={`txtm-lft ${theme}-title-style-1 cP`} onClick={deployEvent}>
                {Options[0]["value"]}
                <img alt="" src={arrow} style={{marginLeft:"0.5em",
                                                width:"0.5em",
                                                height:"0.5em",
                                                transform:deploy?"rotate(-180deg)":"rotate(0deg)",
                                                transition: "transform 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s"}}  />
            </div>
            <div className={`pbm-1 plm-2 ptm-1 txtm-lft ${theme}-title-style-1 cP`}>
                {Options[1]["value"]}
            </div>
        </div>
    )
}


export default Sub