import React, {useCallback, useState} from "react"
import {Input} from "../../../components/interaction/Input.js"
import Checkbox from "../../../components/interaction/checkbox.js"
import Button from "../../../components/interaction/Buttons.js"
import {ButtonPayment} from "../../../store/config/form.js"
import {useStore} from "react-redux"

import {propsEmailInput, 
        propsConfirmEmailInput, 
        propsNameInput, 
        propsLastNameInput,
        propsCreatePasswordInput, 
        propsBuyFast } from "../../../store/config/user.js"

import arrowBlue from "../../../assets/ico/arrow-blue.svg"
import arrowLeft from "../../../assets/ico/arrow-left.svg"
import { useHistory } from "react-router-dom"
import useGetTheme from "../../../hooks/getTheme.js"
import ContainerForm from "../../../components/interaction/containerForm.js"
import FormLogin from "./formLogin.js"
import GoBack from "../../../components/interaction/goBack.js"
import AccordionForm from "../../../components/interaction/accordionForm.js"
import SiteSafe from "../../../components/interaction/siteSafe"



/**
 * @name FormBuyerData by Ilemar Andrade
 * @brief es el formulario para registrarse el usuario 
 * @return pinta el form en pantalla
 */

const FormClient = () =>{
       /**
     * @const history es un hook
     */
    const history = useHistory()

    const [visibleInputBeforeCheckbox,setvisibleInputBeforeCheckbox]    =   useState(propsBuyFast.options[0]["checked"])

   
    const theme     =   useGetTheme();

    const [loged,setloged]= useState(false)

    /**
     * @name goBack by Ilemar Andrade
     * @brief en un event onCLick
     * @return cambia la ruta a "/login"
     */

    const goBack = ()=>{
        history.push("/tickets");
    }


    const handlerLoged=()=>
    {
        setloged(!loged)
    }



    const handleCheckCoupon = useCallback((status)=>
    {
        setvisibleInputBeforeCheckbox(status);
        
    }, [propsBuyFast])

    
    propsBuyFast.options[0].callBack = handleCheckCoupon;
    

    return(
            <ContainerForm {...{height:false}}>


                    <div className={`fz-1-1 perfectCentered mb-05 fjs`}>
                            
                            <p className={`${theme}-title-style-1 lh-1 fz-1-1`}>Datos del comprador</p>

                            <p onClick={handlerLoged} className={`${theme}-fc-terciary cP fz-0-7`}>
                               
                                {loged?"CREAR CUENTA ":"¿TIENES CUENTA? "}
                                
                                <img src={arrowBlue}  style={{transform: "rotate(-90deg)",width:"0.65em",height: "0.65em"}} />

                            </p>

                    </div>


                  {loged? 
                  
                  
                    <FormLogin />
                    
                    :

                    <div className="form txtm-lft w-100">

                        <div className="ipt-container-double">

                            <Input {...propsNameInput}/>
                            <Input {...propsLastNameInput}/>

                        </div>

                        <div className="ipt-container-double">

                            <Input {...propsEmailInput}/>
                            <Input {...propsConfirmEmailInput}/>

                        </div>

                        <Checkbox {...propsBuyFast} />
                        
                        <div style={{display:visibleInputBeforeCheckbox?"":"none"}}>
                            
                            <Input {...propsCreatePasswordInput}/>

                        </div>

                    </div> 

                  }



                    <AccordionForm/>


                    


                    <Button {...{...ButtonPayment,goToRoute:"/payment"} }/>

                    <GoBack/>

                    <SiteSafe />
                   
            </ContainerForm>    
          
          )
}

export default FormClient