import React, {useState} from "react"
import arrowDown from "../assets/ico/arrow-down.svg"
import arrowUp from "../assets/ico/arrow-up.svg"
import "../standardFront.css"
import {useStore} from "react-redux"
import useGetTheme from "../hooks/getTheme"

/**
*@name Accordion by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza Accordion dinamico
*@param  questionAnswers contiene la cantidad de preguntas y respuestas.
*@return renderizado del Accordion dinamico
*/

const Accordion=({questionAnswers = []})=>{
    /**
     * @name Declarations by Ilemar Andrade
     * @brief declaracion de las variables del accordion
     * @param eleAccordion crea un array para ser el valor incial de @param listSee que servira para evaluar el display de los elementos hijos del accordion 
     * @param listSee este le dara el valor del display: a los elementos hijos de accordion 
     * @param setlistSee este setea a listSee
     * @param chieldAccordion crea cada uno de los div hijos que contendran la pregunta y la respuestas
     */
    const eleAccordion=questionAnswers.map((el,i)=>{return "none"})
    const [listSee, setlistSee]=useState(eleAccordion)

    const theme     =   useGetTheme();
     /**
    *@name showQ by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento click que muestra la respuesta o la desaparece segun su condicion del display de la respuesta
    *@param  e tipo  es el elemento en donde se disparo el evento.
    *@return devuelve el display de las respuestas de cada uno de las preguntas
    */
    const showQ=(e)=>{
        const ele=e.target.id
        const newView=listSee.map((el,i)=>{ 
            if(i==ele){
                if(el==="")return "none"
                else return ""
            }
            else return "none"
    },ele)
    setlistSee(newView)
    }

    const chieldAccordion=questionAnswers.map((el,i)=>{
                                                                    return(
                                                                        <>
                                                                            <div key={i} className="mb-05 phm-1 questionAnswers"> 
                                                                            <div className="mb-1 pos-r">
                                                                                <p onClick={showQ} id={i}  className={`txtm-lft ${theme}-title-style-1`}>{el.title}</p>
                                                                                <img src={listSee[i]==="none"? arrowDown:arrowUp} style={{position: "absolute",top:"40%",right: "0",pointerEvents:"none"}} />
                                                                            </div>
                                                                            <div style={{display:listSee[i]}}>
                                                                                <p className="txtm-lft">
                                                                                    {el.content}
                                                                                </p>
                                                                            </div>
                                                                            </div>
                                                                        </>
                                                                    )
                                                                  })
   
                                                                  
    
    return(
        <div style={{overflow:"auto",height:"80%",padding:"0.5em"}}>
            {chieldAccordion}
        </div>
    )

}

export default Accordion