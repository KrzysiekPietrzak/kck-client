import React, { useState } from "react"

function App(){

 
    const namesPL = ["Misja", "Uczestnicy", "Patronaty", "Komitet Organizacyjny", "Informacje Użytkowe", " Kontakt", " Formularz", "KONFERENCJA NAUKOWA", "CZY ZAWODY UI/UX TO ZAWODY PRZYSZŁOŚCI?","Numer telefonu:"]
    const namesEN = ["Mission", "Guests", "Patrons", "Committee", "Info", "Contact", "Form", "SCIENTIFIC CONFERENCE", "ARE UI/UX JOBS OF THE FUTURE?","Phone:"]
    const [isPL, setIsPL] = useState(true)
    const [names, setNames] = useState(namesPL)

    function changeStrings() {
        if (isPL == true) {

            setIsPL(false)
            setNames(namesEN)
        }
        else {
            setIsPL(true)
            setNames(namesPL)
        }
    }


    function changeSize() {

        const box = Array.from(document.querySelectorAll('.menuI'))

        for (let i = 0; i < box.length; i++) {


            console.log(box[i])
            box[i].classList.toggle('big')
            box[i].classList.toggle('normal')



        }
    }

    return (
        <div >

        <div >
            <div>
                <a className="menuI normal" href="mission">{names[0]} </a>
                <a className="menuI normal" href="guests">{names[1]} </a>
                <a className="menuI normal" href="patrons">{names[2]}  </a>
                <a className="menuI normal " href="commitee">{names[3]}  </a>
                <a className="menuI normal" href="info">{names[4]}  </a>
                <a className="menuI normal" href="contact">{names[5]} </a>
                <a className="menuI normal" href="form">{names[6]}     </a>
                <button style={{ float: "right" }} onClick={changeSize}>aA</button>
                <button style={{ float: "right" }} onClick={changeStrings}>PL/EN</button>
            </div>
        </div>
        <h1 style={{fontFamily:"DancingScript",
margin:"auto",
width:"50%",
paddingTop:"10vh"
}}>{names[7]} <br></br>
{names[8]}</h1>
        <div style={{display:"flex",
    paddingTop:"10vh"}}>
        <div style={{
            backgroundImage: "url(https://images.pexels.com/photos/15434151/pexels-photo-15434151/free-photo-of-the-interior-of-a-large-building-with-a-dome.jpeg)",
            height: "60vh",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "70vw",

        }}>
           

        </div>
        <div style={{paddingTop:"10vh"}}>
            <h1 style={{fontFamily:"DancingScript"}}>{names[5]}</h1>
            <h2>Email: kck3214321@gmail.com</h2>
            <h2>{names[9]} +43 601746717</h2>

            <br></br>

            
        </div>
        </div>
    </div>
)
}
export default App