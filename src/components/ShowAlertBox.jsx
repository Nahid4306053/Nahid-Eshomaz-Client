import React, { useEffect, useRef } from 'react'
import '../scss/AlertBox.scss'
export default function ShowalertBox({alertMassage , popupAlertMsg ,closepopup}) {  
  const alertbox = useRef()
   function closeitem( containerId ){
      document.getElementById(containerId).classList.remove('alert_open');
          setTimeout(function(){
            document.getElementById(containerId).remove();
           },100)  
  }
  
  useEffect(()=>{ 
    function openalert(msg){
        const targetelement = document.getElementById('alert_box');
        const containerId = "alertpopup"+Math.random();
        const closeId = "close"+Math.random();

        const alert = `<div id="${containerId}" class="alert_body">
                      <div class="alert_container">
                        <h3>${msg}</h3> 
                      </div>
                      <div class="outer_layer">
                        <div style="opacity: 0;" class="progress"></div>
                        <div onClick=closeitem("${containerId}") id=${closeId} class="closealert">
                        <i class="fa-solid fa-xmark"></i>
                        </div>
                <div class="progress"></div>
                </div>
           </div> `
         targetelement.insertAdjacentHTML("beforeend",alert);
        setTimeout(function(){
          document.getElementById(containerId).classList.add('alert_open');
        },10)    
         setTimeout(function(){
         document.getElementById(containerId).classList.remove('alert_open');
              document.getElementById(closeId).addEventListener('click',function(){
              document.getElementById(containerId).classList.remove('alert_open');
          })  
        },10000)   
     
         setTimeout(function(){
         document.getElementById(containerId).remove();
        },10500)    
     }
    if(alertbox.current.children.length < 10){
           if(alertMassage !== ""){
          openalert(alertMassage);
     }
    }
  },[alertMassage])
  // console.log(alertMassage);
return (
<div className="container">
    <div ref={alertbox} id="alert_box" class="alert_box ">
    </div>
     {popupAlertMsg &&     
     <div className="topAlertBox">
         <div className={`topAlertBody ${popupAlertMsg && "showtopAlert"}`}>
          <div className="closetopAlert ">
          <i onClick={closepopup} class="fa-solid fa-xmark closbtn"></i>
          </div>
            <div className="totalAlertText h-full">
              <ul>
                <li>{popupAlertMsg}</li>
              </ul>  
            </div>     
         </div>
    </div>}
</div>
)
}
 