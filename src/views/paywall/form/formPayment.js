import React, {useState, useCallback} from "react"
import {Input} from "../../../components/interaction/Input.js"
import Checkbox from "../../../components/interaction/checkbox.js"
import Button from "../../../components/interaction/Buttons.js"
import {propsInputNumberTarget,propsInputSelectPayment,  propsSaveInformationTarget,propsInputNumberTH, propsCodigoCW,  propsCodigoPostal, propsDescuento,  propsCBUseCupon } from "../../../store/config/user.js"
import SiteSafe from "../../../components/interaction/siteSafe"
import ContainerForm from "../../../components/interaction/containerForm.js"
import useGetTheme from "../../../hooks/getTheme.js"
import {InputSelect} from "../../../components/interaction/Input"
import GoBack from "../../../components/interaction/goBack.js"
import credicard from "../../../assets/ico/credit-cards.svg"



const FormPayment = () =>{
    const theme     =   useGetTheme()

    const [showTypePayment,setshowTypePayment]    =   useState("")


    const handlerInputSelect = useCallback((status)=>
    {
        //setvisibleInputBeforeCheckbox(status);
        setshowTypePayment(status)
        
    }, [propsInputSelectPayment])

    
   propsInputSelectPayment.selected[0].callBack = handlerInputSelect;

    return(
            <ContainerForm {...{height:false}}>


                <div className={`df fjs mb-1`}>
                    <p className={`${theme}-title-style-1 lh-1 fz-1-1 `}>Informacion del Pago</p>
                    <img src={credicard} alt="img creditcards"/>
                </div>    
                <div className="w-100 form txtm-lft">
                    
                    
                    <div className="mb-1">

                        <InputSelect {...propsInputSelectPayment} />
                    
                    </div>
                    {showTypePayment=="Tarjeta de Credito"?
                    <>
                        <Input  {...propsInputNumberTarget} />
                        <Input  {...propsInputNumberTH}/>

                        <div className="ipt-container-double">

                            <Input {...propsCodigoCW}/>
                            <Input {...propsCodigoPostal}/>

                        </div>
                        
                        
                        <Checkbox {...propsSaveInformationTarget } />
                    </>
                    :
                    <></>

                    }
                    

                <Button {...{goToRoute:"/confirmBuy"}} />

                <GoBack/>

                <SiteSafe/>
                
                </div>
            </ContainerForm>    
          
          )
}

export default FormPayment