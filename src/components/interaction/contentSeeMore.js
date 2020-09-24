
import React,{useState,  useRef, useEffect } from "react";
import arrowDown from "../../assets/ico/arrow-down.svg"
import useGetTheme from "../../hooks/getTheme";

const ContentSeeMore =(props)=>
{
    /** 
     * @param setdeploy cambia los valores del deploy
     * @param deploy retorna los valores del deploy
     * @param status indica si el contenido esta desplegado
     * @param height indica el tamaño actual del contenido, para  poder realizar el efecto 
     * @param myTrap marca al elemento trampa para saber el tamaño en el siguiente status
     * @param myElement marca al elemento observado por el usuario
    */

    const [deploy, setdeploy]    =  useState({status:false, height:"auto"});
    const {status, height}       =  deploy;
    const text                   =  props.declaration.description
    const myTrap                 =  useRef(null);
    const myElement              =  useRef(null);
    const theme     =   useGetTheme();
    

    /**
     *@name  toggleStatus Angel Ruiz
     *@version 1.0
     *@brief  actualiza el  componente al recibir el evento click en ver mas
     *@todo cuando oculta un componente hay que hacerle un settimeout de 1 segundo
     *@return null
     */
    const toggleStatus = () =>
    {
        if (!status) 
        {
            setElement(myTrap.current.clientHeight, !status, 0);
        }
        else
        {
            setElement(myTrap.current.clientHeight,  status, 0);
            setElement(myTrap.current.clientHeight, !status, 777);
        }
    }


    /**
     *@name  myText by Angel Ruiz
     *@version 1.0
     *@brief  retorna el texto, segun el estado actual del componente
     *
     *@param value status, para  indicarle si muestra el resumento o completo el contenido
     *@return null
     */
    const myText = (value) =>
    {
        if(!value && text.length < 55 )
            return text

        if (value)
            return text
        
        else
            return props.declaration.description.substring(0,props.declaration.length) + "..."
    }

    /**
     *@name  resetContentView by Angel Ruiz
     *@version 1.0
     *@brief  setea a auto para obtener el tamaño adecuado del contenedor
     *@return null
     */
    const resetContentView=()=>
    {
        setElement("auto", false, 100);
        //setElement(myElement.current.clientHeight, false, 777);
    }

    /**
     *@name  setElement by Angel Ruiz
     *@version 1.0
     *@brief  componente con valores por defecto, el tiempo tiene que coincidir con el css
     *@return null
     */
    const setElement=(height, status, time)=>
    {
        setTimeout(() => 
        {
            setdeploy({
                status: status,
                height: height
            })
        }, time);
    }

    /**
     *@name  useEffect by Angel Ruiz
     *@version 1.0
     *@brief  se ejecuta la renderizar el componente, y setea los valores iniciales
     *@todo crear metodo onresize para recalcular los tamaño segun la dimensiones de la pantalla
     *@return null
     */
    useEffect( ()=>
    {
        setTimeout(() => 
        {
         setElement(myElement.current.clientHeight, false, 1);
        }, 100);

        window.addEventListener('resize', resetContentView);

        return () =>
        {
            window.removeEventListener('resize', resetContentView);
        }

     }, []);
     

    return(
    
        <div    ref         =   {myElement}
                style       =   {{height: height}}
                className   =   {`container-see-more ${status? "active" : ""}`} >

                {props.declaration.imgTitle}
                <div className={`txtm-lft pbm-05 ${theme}-fc-primary`}>
                    
                    <p   ref         =   {myTrap}
                            className   =   "trap">
                        {myText(!status)}
                    </p>
                    <p>{myText(status)}</p>
                    
                    {
                        text.length >  props.declaration.length?
                        (
                                <div  className={`dinline action-arrow ${theme}-fc-primary`}
                                        onClick={toggleStatus} >

                                    {(!status)? " Ver Más":" Ver Menos"}

                                    <img    alt         =   "arrow"
                                            className   =   "arrow" 
                                            src         =   {arrowDown} />   
                                </div>
                        )
                        :
                        "" 
                        
                }
            </div>
        </div>
    )

}

export default ContentSeeMore
