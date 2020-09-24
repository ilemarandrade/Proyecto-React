import React from "react"
import "../../standardFront.css"
import { useStore } from "react-redux"

/**
*@name FullView by Ilemar Andrade
*@version 1.0
*@brief Este component es el componente padre de la app
*@param  children son los elementos hijos 
*@return renderizado de la app
*/

const FullView=({width="",app=""})=>{

    const store     =   useStore()
    const theme     =   store.getState().theme;


    return(
            <div style={{fontSize:width[1]+"px"}} 
                className={`${theme}-background fullScreen`}>

                    {app}

             </div>
           )
}


export default FullView