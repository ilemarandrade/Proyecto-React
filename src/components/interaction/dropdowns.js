import React, { useState} from "react"
import "../../standardFront.css"
import triangle from "../../assets/ico/triangle.svg"
import arrow from "../../assets/ico/arrow.svg"
import useGetTheme from "../../hooks/getTheme"

/**
*@name DropDrowns by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza un DropDowns en la pantalla, tiene estado de normal, loading y disable.
*@param  tipo objecto y en @param puede contener label, color..
*@return renderizado del DropDowns
*/
const DropDowns=({titleDropDowns = 'ESPAÑOL', enable = true, options = ["INGLÉS"], background = "#f7f7f9"}, width = "auto")=>
{
     /**
     * @name DeclarationsVariables by Ilemar Andrade
     * @brief declaracion de las variables del DropDowns
     * @param showDD esta variable contiene un state en false para luego ser seteada, ya que depende de esta variable mostrar las opciones del Dropdowns
     * ya que si es true el display es block si es false es display none
     * @param setshowDD setea el showDD de false a true 
     * @param loading esta varible tiene un valor dependiendo de actionProcess que si es true es la animacion de loading 
     * si es false es un elemento vacio  
     * @param actionProcess setea a actionProcess de true a false y de false a true 
     * @param backgroundOptions es una variable que crea una lista de arrays para asignar el background y color de letra a cada opcion del dropdowns
     * @param animationOptions contiene como state inicial a @param backgroundOptions para poder ser seteado y lograr la animacion 
     * de onMouseOver y onMouseOut en las opciones de el dropdowns
     * @param setanimationOptions setea a @param animationOptions
     */
    

    const theme     =  useGetTheme()
    
    const [showDD,setshowDD]=useState(false)

    const backgroundOptions=options.map((el,i)=>{
                                                                return ["",""]
                                                            })

    const [animationOptions,setanimationOptions]=useState(backgroundOptions)

    
    
    /**
    *@name handlerDropDowns by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento que permite setear a showDD y asi mostrar las opciones del dropDowns
    *@return aparece y desaparece las opciones del dropdowns
    */
    const handlerDropDowns=()=>{
        setshowDD(!showDD);
    }
    /**
    *@name OnEle by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento onMouseOver en las opciones del dropdowns
    *@return retorna un array que le agrega un valor de background a la opcion que se le coloque el mouse 
    */
    const OnEle=(e)=>{
        const ele=e.target.id
        
        const changeBackground=backgroundOptions.map((el,i)=>{ 
                                                                if(i==ele){
                                                                    if(el[0]==="")return ["#f7f7f9",""]
                                                                    else return ["",""]
                                                                }
                                                                else return ["",""]
                                                            },ele)
        setanimationOptions(changeBackground);
    }
    
    /**
    *@name OutEle by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento onMouseOut en las opciones del dropdowns
    *@return returna un array que le quita el valor del background a la opcion que se le coloque el mouse 
    */
    const OutEle=(e)=>{  
        const ele=e.target.id
        const changeBackground=backgroundOptions.map((el,i)=>{ 
                                                                return ["",""]
                                                             },ele)
        setanimationOptions(changeBackground);
            
    }


    /**
    *@name selectEle by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento onClick que sirve para hacer una animacion al seleccionar una opcione del dropdowns
    *@return retorno un array que le a array[0] es el background array[1] es el color de la font y a los 200 ms
     coloca @param showDD @param animationOptions en su state inicial    
     */
    const selectEle=(e)=>{
        const ele=e.target.id
        const changeBackground=backgroundOptions.map((el,i)=>{ 
                                                                if(i==ele){return [background,""]}
                                                                return ["",""]
                                                             },ele)
        setanimationOptions(changeBackground);
        setTimeout(()=>{
                        setshowDD(false);
                        setanimationOptions(backgroundOptions)
                        },200)  
    
    }
    const optionDD=options.map((el,i)=><div onClick={selectEle} 
                                                        onMouseOver={OnEle} 
                                                        onMouseOut={OutEle} 
                                                        key={i} 
                                                        id={i} 
                                                        className={`txtm-lft ${theme}-title-style-1 cP`}
                                                        style={{padding:"0.5em 1em",
                                                                borderRadius:"0.3em",
                                                                background:animationOptions[i][0],
                                                                color:animationOptions[i][1]}}>{el}</div>)    
    return(
        <>
            <div style={{width:width,position:"relative"}}>
                <div className={`noSelect ${theme}-title-style-1 cP perfectCentered`} 
                     onClick={handlerDropDowns}>

                  {titleDropDowns}
                  
                  <img alt="" src={arrow} style={{  marginLeft:"0.5em",
                                                    width:"0.5em",
                                                    height:"0.5em",
                                                    transform:showDD?"rotate(-180deg)":"rotate(0deg)",
                                                    transition: "transform 0.2s cubic-bezier(0.18, 0.89, 0.32, 1.28) 0s"}}  />
                
                </div>

                <div id="optionsDropDowns" style={{display:showDD?"":"none"}}>

                    <img alt=""src={triangle} />

                    {optionDD}
                    
                </div>     
            </div>
        </>
    )
}

export default DropDowns