import React from "react";
import animatedLoadingWhite from "../../assets/svg/loading.svg"
import animatedLoading from "../../assets/svg/loading2.svg"
/**
*@name Spinner by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza Spinner para cuando el user espera una respuesta
*@param  declaration tipo objecto puede contener width, color...
*@return renderizado el Spinner
*/


const Spinner=({width = "0em", color = "white", })=>{
    
    /**
    *@name Declaration by Ilemar Andrade
    *@version 1.0
    *@brief Declaracion de variable del componente Spinner
    *@param spinnerColor variable que segun el condicional toma la direccion del svg del spinner
    */
    const spinnerColor=color==="white"?animatedLoadingWhite:animatedLoading
    return(
        <>
            <img src={spinnerColor} style={{pointerEvents: "none",width:width,}}/>   
        </>
)

}


export default Spinner