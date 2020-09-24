import React from "react"
import { useStore } from "react-redux"


const useGetTheme = () =>
{

    const theme = useStore().getState().theme;
    
   

    return theme



}

export default useGetTheme