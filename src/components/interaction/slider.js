import React, { useEffect,useState } from "react"
import "../../standardFront.css"
import img from "../../assets/images/image.jpg"
/**
*@name Slider by Ilemar Andrade 
*@version 1.0
*@brief Este component renderiza un Slider que esta los momentos es una img dinamica
*@param  background contiene el background
*@return renderiza el slider 
*/

const Slider=({ background = img})=>{
    /**
    *@name declarations by Ilemar Andrade 
    *@version 1.0
    *@brief son variables declaradas del componente slider
    *@param styleSlider es un objec que contiene los styles del slider
    */
   const [deviceWidth,setdeviceWidth]=useState(window.innerWidth);
    /**
     * @name useEffect by Ilemar Andrade
     * @version 1.0
     * @brief es un hook para saber el tamaño actual de la pantalla para saber que styles en la img colocar
     * @return la funcion @param orientation y agrega y remueve el event onresize 
     */
   
   
   useEffect(()=>{
       setdeviceWidth(deviceWidth)
       window.addEventListener('resize', orientation);
       
       return () => 
       {
           
           window.removeEventListener('resize', orientation);
       }
  
      },[])
    
    
      const orientation=()=>{
        setdeviceWidth(window.innerWidth)
                            }

    /**
     * @param stylesSlider estos son styles de slider 
     * @param styleSliderMobile estos son styles de slider
     */
    const styleSlider={
        background:`linear-gradient(0deg,white 0%, transparent 50%),url(${background})`,
        backgroundPositionX:"center",
        backgroundSize: "cover",}
    const styleSliderMobile={
        background:`url(${background})  0% 0% / cover `,
        backgroundPositionY:"15%"
                            }
    
    return <div id="Slider" style={deviceWidth>992?styleSlider:styleSliderMobile} /> 
}

export default Slider 