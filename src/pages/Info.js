import React, { useState } from "react"

function App(){


    const namesPL = ["Misja", "Uczestnicy", "Patronaty", "Komitet Organizacyjny", "Informacje Użytkowe", " Kontakt", " Formularz", "KONFERENCJA NAUKOWA", "CZY ZAWODY UI/UX TO ZAWODY PRZYSZŁOŚCI?","Dojazd","Konferencja odbędzie się w hotelu 'Pod słońcem'", "Tam też można zarezerwować nocleg"]
    const namesEN = ["Mission", "Guests", "Patrons", "Committee", "Info", "Contact", "Form", "SCIENTIFIC CONFERENCE", "ARE UI/UX JOBS OF THE FUTURE?","Arrival", "The conference will be held at the 'Pod Słońcem' hotel", "You can also book accommodation there"]
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
paddingTop:"10vh"}}>{names[7]} <br></br>
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
        <div style={{paddingTop:"0vh",
    paddingRight:"20vh"}}>
            <h1 style={{fontFamily:"DancingScript"}}>{names[9]}</h1>
            <h3>{names[10]}</h3>
            <h4>{names[11]}</h4>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5378.37100001507!2d18.972807028319025!3d51.592994915388374!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471a5b5af1e59ed9%3A0xa7106ef4ed949b90!2zUG9kIHPFgm_FhGNlbQ!5e0!3m2!1spl!2spl!4v1705920507099!5m2!1spl!2spl" width="600" height="450" style={{border:"0", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}}></iframe>
            <h4>{names[12]}</h4>
        </div>
        </div>
    </div>
)
}
export default App