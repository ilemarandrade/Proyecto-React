import React from "react";
import {element,object } from 'prop-types'
import Cross from "../../assets/ico/cross.svg"
import "../../standardFront.css"

/**
*@name Modal by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza un Modal en la pantalla
*
*@param  declaration tipo objecto y en @param declaration puede contener title,width...
*@param viewsModal contiene lo que se va a mostrar en el modal por ejemplo accordion...
*@return renderizado del Modal
*/

const Modal=({declaration,viewsModal})=>{
    return(
        <div id="ContainerModal" className="perfectCentered">
            <div id="modal"style={{width:declaration.width}} >
                <img id="crossModal" src={Cross} />
                <h1 className="title-style-1 txtm-cntr">
                    {declaration.title}
                </h1>
                {viewsModal}
            </div> 
        </div>
    )
}

    /**
     * @param Modal.propTypes dice de que tipo es la propiedad que aceptara
     */
Modal.propTypes = {
    props: object,
    viewsModal:element,
 }


export default Modal;