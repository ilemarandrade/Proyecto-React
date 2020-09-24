import React, { useRef, useState } from "react";
import "../../standardFront.css"
import eye from "../../assets/ico/eye.svg"
import eyeOff from "../../assets/ico/eyes-off.svg"
import {useStore} from "react-redux" 
import useGetTheme from "../../hooks/getTheme";
import arrow from "../../assets/ico/arrow.svg";
import questionimg from "../../assets/ico/question.svg"
/**
*@name Input by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza un Input en la pantalla, tiene estado de normal, loading, disable y error.
*
*@param  props tipo objecto y en @param props.puede contener label, color...
*@return renderizado del input
*/


export const Input=({ label         =   "Default",
                      placeholder   =   '',
                      disabled      =   "disabled",
                      enable        =   true,
                      lecture       =   false,
                      width         =   100,
                      height        =   "3.2em",
                      padding       =   "",
                      value         =   '',
                      maxLength     =   10,
                      minLength     =   0,
                      required      =   true,
                      type          =   "text",
                      isCupon       =   false,
                      question      =   false })=>
{
    /**
     * @name Declarations by Ilemar Andrade
     * @brief declaracion de las variables del input
     * @param valueInput contiene el value del input 
     * @param setvalueInput setea el state valueInput 
     * @param typeInput es el tipo de input que recibio
     * @param settypeInput setea typeInput
     */
    const [valueInput,setvalueInput]    =   useState(value);
    const [typeInput,settypeInput]      =   useState(false)

   
    const theme = useGetTheme();
  
    const styleInput={
        width:typeof width==="number"? width+"%":width,
        height:height,
        position:"relative",
        padding:padding


    }
    
    /**
    *@name changeValue by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento que permite que se dispara setvalueInput 
    *
    *@param  e es el elemento que contiene evento @param e.target.value es el value actual de value
    *@return setea el valueInput 
    */
    const changeValue=(e)=>{

        setvalueInput(e.target.value)

    }
    /**
    *@name changeType by Ilemar Andrade
    *@version 1.0
    *@brief Este es un evento que permite que se dispara setvalueInput 
    *@return setea el typeInput
    */
    const changeType=()=>{

        settypeInput(!typeInput);

    }



    return(
        <div style={styleInput} 
             className={`dfc ${type==="number"?"":"mb-1"} InputContainer ipt ${theme}-background-terciary`}>
                 
            <img onClick={changeType} alt="" src={typeInput?eyeOff:eye} style={{ position    :   "absolute",
                                                                                 width       :   "1em",
                                                                                 top         :   "40%",
                                                                                 right       :   "1em",
                                                                                 display     :   type==="password"?"block":"none"}}/>

            <img src={questionimg} alt="" style={{ position    : "absolute",
                                                top         : "1em",
                                                right       : "0.5em",
                                                width       : "1em",
                                                display     :  question?"block":"none"  }}  />                                                                     

            <p className={`cP ${theme}-fc-primary fweight-600`} style={{display:isCupon?"":"none"}}>APLICAR</p>                                                                     
            
            <label className={`${theme}-fc-secondary fweight-600 ${theme}-fc-secondary`} htmlFor={label}>
                
                
                {label.toUpperCase()}

            </label>

            <input type         =   {typeInput?"text":type} 
                   onChange     =   {changeValue}
                   disabled     =   {disabled} 
                   placeholder  =   {placeholder} 
                   name         =   {label} 
                   maxLength    =   {maxLength} 
                   minLength    =   {minLength} 
                   value        =   {valueInput}
                   className    =   {`${theme}-fc-primary`}/>

        </div>
    )

}



/**
*@name InputSelect by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza un InputSelect en la pantalla, tiene estado de normal, loading, disable y error.
*
*@param  props tipo objecto y en @param props contener label, color,opciones...
*@return renderizado del Select
*/
export const InputSelectSecondary=({ label           =   'Default',
                            placeholder     =   '',
                            disabled        =   "disabled",
                            enable          =   true,
                            lecture         =   false,
                            width           =   "100%",
                            height          =   100,
                            padding         =   "",
                            value           =   'Value',
                            maxLength       =   10,
                            minLength       =   0,
                            required        =   true,
                            seeResume       = false,
                            index           = "",
                            options         =   [{id:1,value:1}],
                            PositionAbsolute=   false
                         })=>
{
 
    const optionsHeight=useRef()
    const theme = useGetTheme();
    const [state,setState]=useState(seeResume)
    const [deploy,setdeploy]=useState();
    const [valueOfSelect,setvalueOfSelect]=useState(options[0].value);

    const styleInputSelect={
        width:width,
        padding:padding,
        height:deploy?optionsHeight.current.clientHeight+2:height,
        zIndex:10-index,
        transition: "height 0.5s"


    }


    

    const deploySelect = (e) =>
    {
        setdeploy(!deploy)

        if(e.target.id !=="")
        setvalueOfSelect(e.target.id)
    

        e.target.id>0?setState(state,state[0].seeResume=(true)):setState(state,state[0].seeResume=(false))
        
        if (typeof state[0]?.callback == "function" && e.target.id>0)
          state[0].callback(state[0].seeResume,index);


        else if (typeof state[0]?.callback == "function" && e.target.id==0)
        state[0].callback(state[0].seeResume,index);

    }

     /**
    *@name Declarations by Ilemar Andrade
    *@version 1.0
    *@param  options contiene un mapeo que se le hace al props @param options
    *@return devuelve los option de select dinamicamente
  */
 const optionsJSX=options.map((e,i)=>
    {
      return(<div onClick={deploySelect} style={{display:i==0?valueOfSelect==e.value?"none":"":""}} className={`${theme}-fc-primary pallm-02 cP txtm-lft`} key={e.id} id={e.value}>

                {e.value}

            </div>
      )
            
    })



    return(
            <div style={styleInputSelect} className={`InputContainerSelectSecondary ${theme}-fc-secondary ${PositionAbsolute?"InputContainerSelectPA":""} white-background-terciary`}>

                <div ref={optionsHeight}>
                
                    <div onClick={deploySelect} id={valueOfSelect} className={`${theme}-fc-primary pallm-02 pr txtm-lft cP selectSecondary`}>

                        {valueOfSelect}

                        <img src={arrow} className={`${deploy?"animationImgSelect":""}`} />

                    </div>
                    {optionsJSX}

                    

                </div>
               
                
            </div>
         )

 }
 
 export const InputSelect=({ label           =   'Default',
                            placeholder     =   '',
                            disabled        =   "disabled",
                            enable          =   true,
                            lecture         =   false,
                            width           =   "100%",
                            height          =   100,
                            padding         =   "",
                            value           =   'Value',
                            maxLength       =   10,
                            minLength       =   0,
                            required        =   true,
                            seeResume       = false,
                            index           = "",
                            selected        =   false,
                            options         =   [{id:1,value:1}],
                            PositionAbsolute=   false
                         })=>
{
 
    const optionsHeight=useRef()
    const theme = useGetTheme();
    const [state,setState]=useState(selected)
    const [deploy,setdeploy]=useState();
    const [valueOfSelect,setvalueOfSelect]=useState(placeholder);

    const styleInputSelect={
        width:width,
        padding:padding,
        height:deploy?optionsHeight.current.clientHeight+2:height,
        zIndex:50-index,
        transition: "height 0.5s"


    }


    

    const deploySelect = (e) =>
    {
        
        setdeploy(!deploy)
        if(e.target.id !=="")
        setvalueOfSelect(e.target.id)
        setState(state,state[0].value=e.target.id);

        
        if (typeof state[0]?.callBack == "function")
          state[0].callBack(state[0].value);

       

    }

     /**
    *@name Declarations by Ilemar Andrade
    *@version 1.0
    *@param  options contiene un mapeo que se le hace al props @param options
    *@return devuelve los option de select dinamicamente
  */
 const optionsJSX=options.map((e,i)=>
    {
      return(<div onClick={deploySelect} style={{height:height}} className={` ${theme}-fc-secondary perfectCentered fjs-start select ${theme}-fc-primary cP txtm-lft`} key={e.id} id={e.value}>

                {e.value}

            </div>
      )
            
    })



    return(
            <div style={styleInputSelect} className={`InputContainerSelect  ${PositionAbsolute?"InputContainerSelectPA":""} white-background-terciary`}>

                <div ref={optionsHeight}>
                
                    <div onClick={deploySelect} id={valueOfSelect} className={`${theme}-fc-primary ${theme}-fc-secondary pr txtm-lft cP select dfc`} style={{height:height}}>

                        <label className={`${theme}-fc-secondary fweight-600 ${theme}-fc-secondary`} htmlFor={label}>
                
                
                            {label.toUpperCase()}

                        </label>

                        {valueOfSelect}

                        <img src={arrow} className={`${deploy?"animationImgSelect":""}`} />

                    </div>
                    {optionsJSX}

                    

                </div>
               
                
            </div>
         )

 }
 



















 export const InputRadio = ({options=[{label:"Opcion1",value:"Opcion1"}, {label:"Opcion2",value:"Opcion2"}]}) =>{
    
    const [state , setState]= useState({options})

    const theme = useGetTheme()

    
    const handleButton = ({index=0}) =>
    {
        try
        {
         
          setState(state, state.options[index].selected = true)
          if(typeof state.options[0]?.callback== "function")
            state.options[index].callback(state.options[index].selected)
    
          return true;
        }
        catch
        {
            return false

        }


    }

    const dinamicInputRadio=options.map((e,i)=>
    {
        return(
                <div key = {"radio_container_"+i} className={`container-radio cP`}>

                    <input type            =   "radio" 
                           id              =   {e.value} 
                           name            =   "SelectionForm" 
                           value           =   {e.title}
                           onChange        =   {() => 
                            { 
                              handleButton({index:i});
                            }
                        } />
                    
                    <div>

                        <p className={`${theme}-title-style-1`}>
                            
                            {e.title}
                        
                        </p>
                        <label htmlFor="SelectionForm" className={`${theme}-fc-secondary`}>{e.description}</label>   
                                                                    
                    
                    </div>
                                                                
                </div>
                )
                                                    
    })


    return(
        <div className={`container-all-radio`}>

            {dinamicInputRadio}
        
        </div>
    )
 }