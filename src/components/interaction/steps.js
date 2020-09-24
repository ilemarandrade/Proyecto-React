import React from "react"
import useGetTheme from "../../hooks/getTheme"
import arrowSteps from "../../assets/ico/arrowSteps.svg"
import { useHistory } from "react-router-dom";


const Steps = ({
                itemsSteps= [
                                {name:"Selecciona Entrada", active:true, pathname:"/tickets"},
                                {name:"Datos de Entrada", active:true, pathname:"/client"},
                                {name:"Informacion del Pago", active:false, pathname:"/payment"},
                                
                               
                               
                            ]    
})=>
{

    const theme = useGetTheme();
    const history= useHistory();
    
    const seeScroll=itemsSteps.length>3?{
        overflow: "auto",
    }:
    {}

    const nameActived=itemsSteps.map((e,i)=>
    {
        if(e.pathname===history.location.pathname) 
        return e.name

    })

    const itemsStepsReceived = itemsSteps.map((e,i)=>
    {
        return(
                <>
                    
                        
                    <p key={`${i}itemsSteps`} className={`${itemsSteps.length>3?"mr-1":""} t-nr ${e.pathname===history.location.pathname?theme+"-fc-secondary fweight-600":theme+"-fc-primary fweight-100"}`}>
                            
                        {e.name}
                            
                    </p>
                    
                        
                    
                    {
                        i  <itemsSteps.length-1?
                            <img src={arrowSteps} className={`${itemsSteps.length>3?"mr-1":""}`} style={{width:"0.4em"}}/>
                            :
                            <></>
                    }
                </>
                
             )

    }

    )

    const circleItemsReceived =itemsSteps.map((e,i)=>
    {
        return(

                <>
                    <div className={`${e.pathname===history.location.pathname?"stepActived":"stepDesactived"} mr-05 `}></div>
                </>


        )

            
    })


    

    return (
            <>    
                <div id="navBuyTicket"  
                    className={`${theme}-background-secondary perfectCentered fz-0-7 mb-1-5 w-100`}
                    style={seeScroll}>
                
                    {itemsStepsReceived}
                
                </div>

                <div id="navBuyTicketMobile" className={`dfc df perfectCentered w-100 mb-1-5`}>
                    
                    <div className={`df perfectCentered mb-1 w-100`}>
                    
                        {circleItemsReceived}
                    
                    </div>
                    <p className={`${theme}-title-style-1 fz-0-9`}>
                        
                       {nameActived}
                    
                    </p>

                </div>
            </> 
    )

}


export default Steps