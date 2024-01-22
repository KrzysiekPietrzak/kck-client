import React from "react";
import { useState } from "react";

function App(){

    const namesPL=["Misja","Uczestnicy", "Patronaty","Komitet Organizacyjny", "Informacje Użytkowe"," Kontakt"," Formularz"]
    const namesEN=["Mission","Guests","Patrons","Committee","Info","Contact","Form"]
    const [isPL,setIsPL]=useState(true)
    const [names,setNames]=useState(namesPL)

function changeStrings(){
if (isPL==true) {

   setIsPL(false)
   setNames(namesEN)
}
else{
    setIsPL(true)
    setNames(namesPL)
}}


    return(
        <div >
            <div>
    <a href="mission">{names[0]} </a>
    <a href="guests">{names[1]} </a>
    <a href="patrons">{names[2]}  </a>
    <a href="commitee">{names[3]}  </a>
    <a href ="info">{names[4]}  </a>
    <a href="contact">{names[5]} </a>
    <a href="form">{names[6]}     </a>
    <button style={{float:"right"}} onClick={changeStrings}>PL/EN</button>  
</div>
        </div>
    )
}
export default App