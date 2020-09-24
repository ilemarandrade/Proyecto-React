import React from "react"
import imgLogo from "../../assets/ico/logo.png"


/**
*@name Logo by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza el logo del cliente o el logo default
*@param declaration  tipo objecto y en @param declaration contiene la img del logo
*@return renderizado un logo
*/
const Logo=({ logo = imgLogo})=>{
    
    return(
            <div id="Logo">

                <img src={logo}/>

            </div>
          )
                            }


/**
 * @param Logo.defaultProps contiene el logo por default por si no recibe nada
 */                            


export default Logo