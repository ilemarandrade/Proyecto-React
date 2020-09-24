import React,{useEffect,useState,useRef} from "react"
import "../../standardFront.css"
import LogoHarvestful from "../../assets/ico/logo-harvestful.svg"
import Earth from "../../assets/ico/earth.svg"
import DropDowns from "../interaction/dropdowns"
import {useStore} from "react-redux"
import useGetTheme from "../../hooks/getTheme"

/**
*@name PaywallContainer by Ilemar Andrade 
*@version 1.0
*@brief Este component renderiza el contenedor principal de la app en la pantall
*@param  slider es un elemento jsx
*@param form hasta ahora es un string  pero debe ser un elemento jsx que es un formulario
*@return renderiza el contenedor principal de la app
*/
const PaywallContainer=({slider,form})=>{
    /**
     * @param deviceWidth devuelve el valor de deviceWidth
     * @param setdeviceWidth setea a deviceWidth
     * @minHeight es lo que calcula el 55% de altura basado en el ancho del contenedo de la Paywall
     */



    const [deviceWidth,setdeviceWidth]  =   useState(1);
    const PaywallContainer              =   useRef(null)
    const theme     =  useGetTheme();
    //const minHeight                     =   deviceWidth*55/100


    /**
     * @name useEffect by Ilemar Andrade
     * @brief setea deviceWidth con setdeviceWidth y agregue el event onresize
     * @return remueve el onresize
     */
    
    useEffect(()=>
    {
                    setdeviceWidth(PaywallContainer.current.clientWidth)

                    window.addEventListener('resize', heightForWidth);
                    
                    return () => 
                    {
                        
                        window.removeEventListener('resize', heightForWidth);
                    }

    },[])


    /**
     * @name heightForWidth by Ilemar Andrade
     * @brief setea deviceWidth con setdeviceWidth y agregue el event onresize
     * @return devuelve el valor nuevo de deviceWidth
     */    

    const heightForWidth=()=>
    {

        setdeviceWidth(PaywallContainer.current.clientWidth)
    
    }

    

    return(
            <div id="PaywallContainer" ref={PaywallContainer} className="perfectCentered bs" style={{minHeight: "minHeight"}}>
                
                {slider}

                <div id="ContainerForm" className="perfectCentered">

                    {form}

                </div>

                <hr id="PaywallHr" />

                <div id="MadeBy">

                    <p className={`txtm-lft mb-05 ${theme}-fc-secondary`}>Desarrollado por</p>

                    <img alt="Logo del usuario" id="ImgMadeBy" src={LogoHarvestful}/>

                </div>

                <div id="Language" className="perfectCentered">

                    <img alt="Earth" className="mr-05" src={Earth}/>

                    <DropDowns {...PropsDropDowns}></DropDowns>

                </div>
                
            </div>
            )
}


const PropsDropDowns={
    declaration:{
        titleDropDowns: 'ES',
        enable:true,
        options:["IN"]
      }
}

export default PaywallContainer