import React, { useRef, useState } from "react"
import { useStore } from "react-redux"
import useGetTheme from "../../hooks/getTheme"
import FormLogin from "../../views/paywall/form/formLogin"
import arrow from "../../assets/ico/arrow2.svg"
import FormUserTicket from "../../views/paywall/form/formUserTicket"


const AccordionForm = ({    
                            entradasGeneral     =   [{
                                                        title:"Datos del Comprador",
                                                        quantityTickets:[{},{}]
                                                    }],
                            VIP                 =  [{
                                                        title:"Tickets VIP",
                                                        quantityTickets:[{}]
                                                    }],
                        }) =>
{

    const theme=useGetTheme()

    const contentAccordion = useRef()

    const accordionFormTitle=useRef()

    const [deployA,setdeployA]=useState(entradasGeneral[0].quantityTickets.map((e,i)=>
    {
        return i==0?true:false
    }));

    const [deployB,setdeployB]=useState(VIP[0].quantityTickets.map((e,i)=>
    {
        return i==0?true:false
    }));

    const handlerAccordionGeneral = (e) =>
    {
        const ele=e.target.id
        const newDeployA=deployA.map((e,i)=>
        {
          if(i==ele)
          return !e
          else return false

        },ele)
        setdeployA(newDeployA);
    }
    const handlerAccordionVIP = (e) =>
    {
        const ele=e.target.id
        const newDeployB=deployB.map((e,i)=>
        {
          if(i==ele)
          return !e
          else return false

        },ele)
        setdeployB(newDeployB);
    }

    const arrowAnimation =
    {
        transition: "transform 1s"
    }

    const accordionEntradaGeneral = entradasGeneral[0].quantityTickets.map((e,i)=>
    {

        return(
                <div id="accordionForm" key={`accordionForm${i}`} className={`${theme}-border-primary cP ${i+1<entradasGeneral.length?"bb-n":""} `} style={{height:deployA[i]?"auto":"3em"}}>

                    <div id={i} ref={accordionFormTitle} className={`${theme}-title-style-1 accordionFormTitle txtm-lft pr ${deployA[i]?theme:""}-bb-primary`} onClick={handlerAccordionGeneral}>
                        
                        Entrada de la persona {i+1}
                        <img src={arrow} style={{transform:  deployA[i]? "rotate(-180deg)":"rotate(0deg)",...arrowAnimation}}/>

                    </div>
                    <div ref={contentAccordion} className={`${theme}-background-secondary pallm-1`}>
                        
                        <FormUserTicket/>


                    </div>

            </div>
        )
    
    }) 
    const accordionEntradaVIP = VIP[0].quantityTickets.map((e,i)=>
    {

        return(
                <div id="accordionForm" key={`accordionForm${i}`} className={`${theme}-border-primary ${i+1<entradasGeneral.length?"bb-n":""} `} style={{height:deployB[i]?"auto":"3em"}}>

                    <div id={i} ref={accordionFormTitle} className={`${theme}-title-style-1 accordionFormTitle txtm-lft pr cP ${deployB[i]?theme:""}-bb-primary`} onClick={handlerAccordionVIP}>
                        
                        Entrada de la persona {i+1}
                        <img src={arrow} style={{transform:  deployB[i]? "rotate(-180deg)":"rotate(0deg)",...arrowAnimation}}/>

                    </div>
                    <div ref={contentAccordion} className={`${theme}-background-secondary pallm-1`}>
                        
                        <FormUserTicket/>


                    </div>

            </div>
        )
    
    }) 


    return(
            <div className="">

                <div className="mb-1">
                    <p className={`${theme}-title-style-1 lh-1 fz-1-1 mb-1`}>

                        {entradasGeneral[0].title}
                    
                    </p>
                     {accordionEntradaGeneral}
                </div>

                <div className="mb-1">
                    <p className={`${theme}-title-style-1 lh-1 fz-1-1 mb-1`}>
                    
                        {VIP[0].title}
                    
                    </p>
                        {accordionEntradaVIP}
                </div>
    
                
            </div>
    )
}


export default AccordionForm