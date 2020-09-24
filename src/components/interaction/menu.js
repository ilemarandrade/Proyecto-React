import React, { useState, useEffect } from "react"
import "../../standardFront.css"
import menuHamburguesa from "../../assets/ico/menu.svg"
import cross from "../../assets/ico/cross.svg"
import { useHistory } from "react-router-dom"
import DropDowns from "./dropdowns"
import Sub from "./subDivision"
import {useStore} from "react-redux"
import useGetTheme from "../../hooks/getTheme"

/**
*@name Menu by Ilemar Andrade
*@version 1.0
*@brief Este component renderiza un menu horizontal dinamico
*@param  itemsMenu tipo objecto contiene la cantidad url, href,title...
*@return retorna un jsx del Menu 
*/
export const Menu=({itemsMenu= ["EVENTO","CONTACTO","PREGUNTAS FRECUENTES","COMPARTIR"] })=>
{

    /**
    *@name by Ilemar Andrade
    *@version 1.0
    *@brief declaracion de variables dentro de MenuWeb    
    *@param  itemsMenu contiene un jsx dinamico con los titulos que iran en el menu
    *@param containerTitlesMenu es un objeto que contiene los styles del contenedor de los titulos de el menu
    */
    let history                         =   useHistory()
    const theme     =   useGetTheme();
    const [deployMenu,setdeployMenu]    =   useState(false);
    const containerTitlesMenu           =   {
                                                width           :   itemsMenu.length>4?"50%":"",
                                                overflow        :   itemsMenu.length>4? "auto":"",
                                                paddingBottom   :   itemsMenu.length>4?"0.5em":"",
                                            }
    useEffect(()=>{
        disabledScroll()
        window.addEventListener("scroll", disabledScroll);
        window.addEventListener("resize", menuInitial);

        return ()=>{
            window.removeEventListener("scroll", disabledScroll)
            window.addEventListener("resize", menuInitial);
        }

    })

    const menuInitial = () =>{

        noDeployMenuCLick();

    }
                                            
    const disabledScroll=(e)=>{
      
      deployMenu ? document.body.style.overflow = 'hidden':document.body.style.overflow = "auto"
      
    }                                        
    const noDeployMenuCLick=(e)=>{

        setdeployMenu(false)

    }

    const deployMenuClick=()=>{
        
        setdeployMenu(!deployMenu)

    }

    const goLogin=()=>{
        
        history.push("/login");

    }
    const itemsMenuNormal=itemsMenu.map((el,i)=><div key={i} >
                                                            <a className={`mr-2 ${theme}-title-style-1 cP`}>
                                                                {el}
                                                            </a>
                                                        </div>
                                             )

    const itemsMenuMobile=itemsMenu.map((el,i)=><div onClick={noDeployMenuCLick} 
                                                                 key={i} 
                                                                 className="pbm-1 plm-3 ptm-1 txtm-lft" >
                                                                     <a className={`mr-2 ${theme}-title-style-1 cP`}>
                                                                         {el}
                                                                     </a>
                                                            </div>
                                                    )
    return(
            <div id="ContainerMenu" 
                style={{background:deployMenu?"#f5f6f7":"",
                        transition:"background 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) 0s"}} 
                className="perfectCentered pr"
                >

                <div id="menuMobile" className="cP" onClick={deployMenuClick}>

                    <img style={{width:deployMenu?"1em":"1.4em"}} 
                        src={deployMenu?cross:menuHamburguesa}/>

                </div>

                <div id="MenuMobileViews" 
                    className="ptm-1 dfc" 
                    style={{top:deployMenu?"5em":"-60em",
                            transition:"top 0.4s ease-in-out 0s"}}>

                    {itemsMenuMobile}

                    <div className="dfr pbm-1 plm-3 ptm-1">

                        <Sub />

                    </div>

                    <div style={{padding:"0em 3em"}} >

                        <hr className="w-100" />

                    </div>   

                    <div onClick={(e)=>{goLogin();noDeployMenuCLick()}} 
                        className={`pbm-1 plm-3 ptm-1 ${theme}-title-style-1 cP txtm-lft`}>

                        LOGIN

                    </div>   

                </div>

                <div id="containerTitlesMenu" style={containerTitlesMenu}>

                    {itemsMenuNormal}

                    <DropDowns />

                </div>

                <div id="Login" 
                    onClick={goLogin} 
                    className={`${theme}-title-style-1 cP`} 
                    style={{visibility:deployMenu?"hidden":"",
                            transition:"visibility 0.1s ease-in-out 0s"}}>

                            LOGIN
                </div>
            </div>

    )
}







    /**
    *@name SubMenu by Ilemar Andrade
    *@version 1.0
    *@brief Este component renderiza un submenu vertical dinamico
    *@param  tipo objecto contiene la cantidad url, href,title...
    *@return retorna un jsx del SubMenu 
    */
export const SubMenu=({itemsMenu = [{ href:"", callBack:"", title:"Titulo 1"}]})=>{
    /**
    *@name by Ilemar Andrade
    *@version 1.0
    *@brief declaracion de variables dentro de MenuWeb    
    *@param  itemsListSm contiene un jsx dinamico con una tag <a> que se colocaron un 
    titulo y callback o href segun lo enviado en el @param declacration
    */

    const itemsListSM=itemsMenu.map((el,i)=><a key={i} className="pallm-05" 
                                                                   href={el.href} 
                                                                   onClick={el.callBack} 
                                                                   style={{color:"black"}}>

                                                            {el.title}

                                                         </a>
                                                )


    return(
        <div style={styleContainerSubMenu} className="dfc">
            
            {itemsListSM}
            
        </div>
    )
}

/**
    *@name styleContainerSubMenu by Ilemar Andrade
    *@version 1.0
    *@brief son los styles del contenedor del sub menu
    */

    
const styleContainerSubMenu={
    background: "white",
    width: "6em",
    position: "absolute"
}

