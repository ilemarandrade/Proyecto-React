import React from "react"
import siteSafe from "../../assets/ico/safe.svg"
import { useStore } from "react-redux"
import useGetTheme from "../../hooks/getTheme";




const SiteSafe = () =>
{

    const theme = useGetTheme()

    return (

            <div id="SiteSafe" className={`${theme}-fc-secondary perfectCentered mt-05 fz-0-9`} >
                
                <p>
                        
                    <img src={siteSafe} style={{marginRight:"0.5em", width:"0.8em", height:"0.8em"}} />

                    Sitio 100% Seguro
                </p>

            </div>
    )
}

export default  SiteSafe