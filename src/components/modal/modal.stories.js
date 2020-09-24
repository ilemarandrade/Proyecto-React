import React from "react"
import  Modal from './modal.js';
import Accordian from "../Accordion.js"

export default {
  title: "Modal",
}
const props={
  declaration:{
  title:"Preguntas frecuentes",
  width:"40%"}
}
const args={
  declaration:{
      questionAnswers:[ 
          {title:"Titulo de la preguntas 1", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 2", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 3", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 4", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 5", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 6", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
          {title:"Titulo de la preguntas 7", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent efficitur suscipit sapien, in maximus purus tincidunt et. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Phasellus bibendum vehicula felis at egestas. Fusce pretium rhoncus magna eget porttitor. Nam non turpis fringilla, hendrerit neque id, porttitor orci."},
      ]
  }
}
const viewsModal=<Accordian {...args} ></Accordian>
const sendModal={...props,viewsModal}
export function PrimaryModal(){
    return(
        <>
        <Modal {...sendModal}/>
        </>
    )
}