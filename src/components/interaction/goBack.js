import React from "react"
import { useHistory } from "react-router-dom";
import arrowLeft from "../../assets/ico/arrow-left.svg"
import useGetTheme from "../../hooks/getTheme"



const GoBack = () =>{

    const theme = useGetTheme();
    const history = useHistory();

    const back =() =>
    {
       history.goBack()

    }
    
    return (
            <div id="GoBack" onClick={back} className="mt-1 df fjs fz-0-9 w-100">
                    
                            <p  className={`btn ${theme}-fc-secondary`}>
                    
                                <img src={arrowLeft} alt="" className="arrowBack mr-05" />
                            Regresar
                    
                            </p>
                    
            </div>
    )
}

export default GoBack