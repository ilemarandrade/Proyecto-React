import React,{useCallback,useState} from "react"
import useGetTheme from "../../hooks/getTheme.js";
import {InputSelectSecondary} from "./Input.js"
import {propsInputSelectTickets} from "../../store/config/user"
import { useStore } from "react-redux";


/**
*@name Tickets by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza 
*@param  data contiene la informacion de cada uno de los tickets que se van a renderizar
*@return renderizado un contenedor con los tickets disponible para comprar
*/


const Tickets = ({ 
                    data= [{name:"Ticket General", maxTickets:10, cost:99,preSelection:false },{name:"Ticket VIP", maxTickets:10, cost:1000, preSelection:false }],
                    handlerSeeResume={}

}) =>
{

    /**, */

    const [itemsPreSelection,setItemsPreSelection]=useState(data.map((e,i)=>
    {
        return  e.preSelection
    }))

    
    const handleSeeResume = useCallback((status,index)=>
    {
        
        setItemsPreSelection([...itemsPreSelection,itemsPreSelection[index]=status])

        if(itemsPreSelection.includes(true))
        handlerSeeResume(true);
       else
       handlerSeeResume(false);
       

    },[propsInputSelectTickets])

    propsInputSelectTickets.seeResume[0].callback = handleSeeResume


/**
*@const theme by Ilemar Andrade
*@brief Es la que lee en el store que tema tiene el app
*/
    const theme = useGetTheme();


  /**
*@const ticketReceived by Ilemar Andrade
*@brief crea un jsx a cada nombre de ticket que traiga la data
*/   


    const ticketReceived= data.map((e,i)=>
    {
        return(    <div key={`${e.name+i}`} className={`df fjs mb-06`}>

                        <p className={`fweight-600 fz-1 ${theme}-fc-secondary ls-tickets`}>{e.name}</p>

                        <div className={`df pr fjs`}>  

                            <p className={`${theme}-title-style-1 mr-05 fz-1-2`}>{`$${e.cost}`}</p>
                            
                            <div style={{height:propsInputSelectTickets.height,width:propsInputSelectTickets.width}}></div>
                            
                            <InputSelectSecondary {...{...propsInputSelectTickets, index: i }}/>

                        </div>

                    </div>
            
            )
    
    
    })
    return(
            <div>
 
                {ticketReceived}
                
            </div>
        
    )


}


export default Tickets