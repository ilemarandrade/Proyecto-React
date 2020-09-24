
export const propsEmailInput=
{

        label: 'Email',
        type:"email",
        placeholder: 'Ingrese su correo',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 30,
        minLength:0,
        required: true,

}


export const propsConfirmEmailInput=
{

        label: 'Confimar email',
        type:"email",
        placeholder: 'Confimar email',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 30,
        minLength:0,
        required: true,

}


export const propsPasswordInput=
{
  
        label: 'Clave',
        type:"password",
        placeholder: 'Ingrese su clave',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 10,
        minLength:0,
        required: true,

}



export const propsCreatePasswordInput=
{

        label: 'Clave',
        type:"password",
        placeholder: 'Crea tu clave',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 10,
        minLength:0,
        visible:false,
        required: true,

}



export const propsNameInput=
{

        label: 'Nombre',
        type:"text",
        placeholder: 'Ingrese el nombre',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 10,
        minLength:0,
        required: true,


}




export const propsLastNameInput=
{
  
        label: 'Apellido',
        type:"text",
        placeholder: 'Ingrese el apellido',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 10,
        minLength:0,
        required: true,

}



export const propsInputNumberTarget=
{

        label: 'Numero de tarjeta',
        placeholder: 'xxxxx-xxxxx-xxxxx-xxxx',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 24,
        minLength:24,
        required: true,

}



export const propsInputNumberTH={
        
        label: 'Numero de tarjeta Habiente',
        placeholder: 'Ingrese el nombre de la tarjeta',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 24,
        minLength:0,
        required: true,

}


export const propsCodigoCW={
        
        label: 'Codigo CW',
        placeholder: 'CW',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 24,
        minLength:0,
        required: true,
        question:true,

}


export const propsCodigoPostal={
        
        label: 'Codigo POstal',
        placeholder: 'ZIP',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 24,
        minLength:0,
        required: true,

}


export const propsDescuento={
        
        label: 'Cupon de descuento',
        placeholder: 'Ingrese el codigo',
        disabled:"",
        enable: true,
        lecture: false,
        width: 100,
        value:'',
        maxLength: 24,
        minLength:0,
        required: true,

}


/**
 *      Checkbox
 */


export const  propsCBUseCupon  = 
{
      
            label: 'Default',
            placeholder: '',
            disabled:"disabled",
            enable: true,
            lecture: false,
            width: 100,
            value:'',
            maxLength: 10,
            minLength:0,
            required: true,
            options:[{   
                        checked: false, 
                        label:"Deseas Utilizar Cupon de descuento", value:"Deseas Utilizar Cupon",
                        value:"Crea una cuenta para crear mas rapido en compras futuras"
                    }]
     
}

export const  propsSaveInformationTarget  = 
{
      
            label: 'Default',
            placeholder: '',
            disabled:"disabled",
            enable: true,
            lecture: false,
            width: 100,
            value:'',
            maxLength: 10,
            minLength:0,
            required: true,
            options:[{   
                        checked: false, 
                        label:"Guardar los datos de la tarjeta para la proxima compra", value:"Guardar los datos de la tarjeta para la proxima compra",
                        value:"Crea una cuenta para crear mas rapido en compras futuras"
                    }]
     
}


export const  propsBuyFast  = 
{
      
            label: 'Default',
            placeholder: '',
            disabled:"disabled",
            enable: true,
            lecture: false,
            width: 100,
            value:'',
            maxLength: 10,
            minLength:0,
            required: true,
            options:[{  checked: false, 
                        label:"Crea una cuenta para crear mas rapido en compras futuras", 
                        value:"Crea una cuenta para crear mas rapido en compras futuras"}]
     
}
/**
        Input Select
 */

export const propsInputSelectPayment=
{
    label: 'Forma de Pago',
    placeholder: 'Selecciona Forma de Pago',
    disabled:"disabled",
    height: "3.2em",
    enable: true,
    lecture: false,
    value:'',
    maxLength: 10,
    minLength:0,
    required: true,
    selected:[{
                value:""

                }],

    options:[{id:2,value:"Tarjeta de Credito"},{id:3,value:"Paypal"}]
}



const optionTicket=[]

for(let i=0;i<=5;i++){

        optionTicket.push({id:i,value:i})

}

export const propsInputSelectTickets=
{
    label: '',
    type:"number",
    placeholder: '0',
    disabled:"",
    enable: true,
    lecture: false,
    height: "1.5em",
    width: "2em",
    value:'',
    maxLength: 10,
    minLength:0,
    required: true,
    seeResume:[
            {seeResume:true}
    ],
    PositionAbsolute:true,
    options:optionTicket

}


/**
 
        Input Radio

 */

 export const propsPresentiaOnline=
 {
         options:[
                        {
                          selected:false,      
                          title:"Entrada Presencial",      
                          description:"Entrada presencial para el evento"      
                        },

                        {
                          selected:false,      
                          title:"Entrada Online",      
                          description:"Entrada presencial para el evento"      
                        },
                                

                ]
 }

