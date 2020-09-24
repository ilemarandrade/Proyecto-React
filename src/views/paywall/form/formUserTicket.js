import React from "react"
import { Input } from "../../../components/interaction/Input"
import {propsNameInput,propsLastNameInput, propsConfirmEmailInput} from "../../../store/config/user.js"


const FormUserTicket = () =>
{
    return(
            <div>
                <div className="ipt-container-double ">
                    
                    <Input {...propsNameInput}/>
                    <Input {...propsLastNameInput}/>

                </div>

                <Input {...propsConfirmEmailInput}/>
            </div>
    )

}

export default FormUserTicket