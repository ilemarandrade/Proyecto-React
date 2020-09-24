import React from "react"
import useGetTheme from "../../hooks/getTheme"



const WhenIsEvent = ({price="99", dateEvent= "Sáb, Jun 14 - Dom 15 a 9:00 AM - 8:30 PM"}) =>{

    
    const theme     =  useGetTheme(); 

    return(
            <div id="WhenIsEvent" className="txtm-lft mb-1 pos-r">

                <p className={`${theme}-title-style-1`}>Seminario Online</p>

                <p className="fc-primary">{dateEvent}</p>

                <p id="priceEvent" className={`${theme}-title-style-1`}>${price}</p>

                <p className="fz-0-7">Incluye Impuesto</p>

            </div>
    )


}




export default WhenIsEvent