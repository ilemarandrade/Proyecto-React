import React from "react"
import useGetTheme from "../../hooks/getTheme"


/**
*@name ResumeBuy by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza el resumen de las compras de los tickets
*@param  data contiene los items, lo adicional y le total de la factura
*@return renderizado el resumen de la compra o factura
*/

const ResumeBuy = ({ 
                      data =   {items:[{description:"Esta es la description del ticket", cost:99 }, 
                                      {description:"Esta es la description del ticket", cost:99 }], 

                                additional:[{description:"Lorep", cost:20 }, {description:"Lorep", cost:20 }],

                                total:1200}
}) =>
{


  /**
*@const theme by Ilemar Andrade
*@brief Es la que lee en el store que tema tiene el app
*/
    const theme=useGetTheme()


  /**
*@const itemsReceived by Ilemar Andrade
*@brief Este variable crea el jsx de cada data.items que trae la data
*/  


   const itemsReceived = data.items.map((e,i)=>
    {
      return (
              <div key={`items${i}`} className={`df fjs mb-05 fz-0-9 `}>

                  <p>{e.description}</p>
                  <p>{"$"+e.cost}</p>

              </div>

      )
    })


 /**
*@const additionalReceived by Ilemar Andrade
*@brief Este variable crea el jsx de cada data.additional que trae la data
*/  
    const additionalReceived = data.items.map((e,i)=>
    {
      return (
              <div key={`items${i}`} className={`df fjs mb-05 fz-0-9 `}>

                  <p>{e.description}</p>
                  <p>{"$"+e.cost}</p>

              </div>

      )
    })

    return(
            <div id="resumeBuy" className={`${theme}-background-secondary pallm-1 mb-1 ${theme}-fc-secondary `}>

              <p className={`${theme}-title-style-1 mb-05 txtm-lft fz-1-1`}>Resumen de tu Compra</p>

              <div>
                <div className={`df fjs mb-05 fz-0-9 `} >

                  <p className={`${theme}-title-style-1 ` }>Descripción</p>
                  <p className={`${theme}-title-style-1`}>Total</p>

                </div>

                <div>

                  {itemsReceived}

                  <hr/>

                  {additionalReceived}

                  <hr/>

                  <div className={`df fjs mb-05 `}>

                    <p className={`${theme}-title-style-1 fz-0-9`}>Total</p>
                    <p>{`$${data.total}`}</p>

                  </div>
                  

                </div>
              </div>
              
              

            </div>
          )

}


export default ResumeBuy