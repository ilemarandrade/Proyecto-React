import React, { useState,useCallback } from "react";
import {InputSelect, Input} from "../../../components/interaction/Input"
import Checkbox from "../../../components/interaction/checkbox.js"
import Button from "../../../components/interaction/Buttons.js"
import { propsInputSelectTickets,propsCBUseCupon,propsDescuento } from "../../../store/config/user.js";
import ContainerForm from "../../../components/interaction/containerForm";
import SiteSafe from "../../../components/interaction/siteSafe"
import ResumeBuy from "../../../components/interaction/resumeBuy";
import useGetTheme from "../../../hooks/getTheme";
import GoBack from "../../../components/interaction/goBack";
import Steps from "../../../components/interaction/steps.js";
import Tickets from "../../../components/interaction/tickets.js";
import { ButtonClient } from "../../../store/config/form";





const FormTicket =()=>{

    const theme = useGetTheme();

    const [visibleInputBeforeCheckbox, setvisibleInputBeforeCheckbox] = useState();

    const [visibleResumeBuy,setvisibleResumeBuy]=   useState(false)

    const handleCheckCoupon = useCallback((status)=>
    {
        setvisibleInputBeforeCheckbox(status);
        
    }, [propsCBUseCupon])

    
    propsCBUseCupon.options[0].callBack = handleCheckCoupon;


  

    const handlerSeeResume =(status)=>
    {
        setvisibleResumeBuy(status);
        


    }
  

    return(
            <ContainerForm {...{height:false}}>
                    
                    <Tickets handlerSeeResume={handlerSeeResume}/>

                    <Checkbox {...propsCBUseCupon } />

                    <div style={{display:visibleInputBeforeCheckbox?"":"none"}}>

                        <Input {...{...propsDescuento,isCupon:true}} />

                    </div>

                    <div style={{display:visibleResumeBuy?"":"none"}}>
                    
                        <ResumeBuy />

                    </div>


                    <div style={{marginTop:visibleInputBeforeCheckbox?"":"0.8em"}}>
                    
                        <Button {...ButtonClient} />
                    
                    </div>

                    <GoBack/>
                    

                    <SiteSafe/>

                
                
            
            
            
            
            
            </ContainerForm>
            )



}



export default FormTicket