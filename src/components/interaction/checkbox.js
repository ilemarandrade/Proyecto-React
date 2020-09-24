import React, {useState} from "react";
import "../../standardFront.css";
import useGetTheme from "../../hooks/getTheme";
/**
*@name InputCheckbox by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza checkbox dinamicante en la pantalla
*@param  props tipo objecto y en @param props.declaration puede contener label, value...
*@return renderizado del input
*/

const Checkbox  = ({
                    label         = 'Default',
                    placeholder   = '',
                    disabled      = "disabled",
                    enable        = true,
                    lecture       = false,
                    width         = 100,
                    value         = '',
                    maxLength     = 10,
                    minLength     = 0,
                    required      = true,
                    options       = [] //[{label:"Futbol", value:"valor1"}]
                  })=>
{

  const [state, setState]  = useState({ options });


  const theme =  useGetTheme()

  const handleClick = (check) => 
  {
    try
    {
      
      setState(state, state.options[check.index].checked = !state.options[check.index].checked);
      if (typeof state.options[check.index]?.callBack == "function")
          state.options[check.index].callBack(state.options[check.index].checked);

      return true;
    }
    catch
    {
      return false;
    }
  }
  

    /**
   *@name Declarations by Ilemar Andrade
   *@version 1.0
   *@param dinamicCheckbox contiene un mapeo que se le hace al props @param declaration.options para hacer los checkbox dinamicos
   *@return devuelve los checkbox dinamicamente
 */
   const dinamicCheckbox=options.map((el,i) =>
   {
              
     return( 
              <div key        =   {"checkbox_container_"+i} className="txtm-lft" >

                
                <input  type            =   "checkbox" 
                        id              =   {el.value+i} 
                        value           =   {el.value}
                        defaultChecked  =   {el.checked}
                        onChange        =   {() => 
                                              { 
                                                handleClick({index:i});
                                              }
                                          }
                />                                      
                <label  className     =   {`${theme}-fc-secondary fz-0-9 fweight-100`} 
                        htmlFor       = { el.value+i}>
                                                      
                        {el.label}
                                                  
                </label>
              </div>
            )
       
    });

   
   
   return(<div className="mb-05 txtm-lft container-checkbox">

            {dinamicCheckbox}
            
          </div>)


}

export default Checkbox
