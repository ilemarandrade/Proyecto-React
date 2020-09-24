
const Screen=(width)=>{
        const typgf=17;
        const sendclass=["",typgf]
        const height=window.innerHeight;
        const n_windowsw=  (width * 0.1) + width;
        if (n_windowsw < height){
             sendclass[0]="portrait"
            }
        else{
          sendclass[0]="landscape"
        }
       /* if(width > 450){
         sendclass[1]=30}*///Parece ser que esto es lo que rompe el diseño
        if(width > 500){
    
        sendclass[1]=12}

         if(width > 600){
        sendclass[1]=10}

         if(width > 700){
        sendclass[1]=9}
      
         if (width > 993 && sendclass[0]==="landscape"){
        sendclass[1]=5
        } 
        if (width >= 1900 && sendclass[0]==="landscape"){
          sendclass[1]=4.5
          }
          if (width >= 993 && sendclass[0]==="portrait"){
            sendclass[1]=6.5
            }
             

        sendclass[1]= width * sendclass[1] / 400;
         return sendclass
      }

export default Screen
     