import React, { useState } from "react"


function Homepage() {


    const namesPL = ["Misja", "Uczestnicy", "Patronaty", "Komitet Organizacyjny", "Informacje Użytkowe", " Kontakt", " Formularz", "KONFERENCJA NAUKOWA", "CZY ZAWODY UI/UX TO ZAWODY PRZYSZŁOŚCI?"]
    const namesEN = ["Mission", "Guests", "Patrons", "Committee", "Info", "Contact", "Form", "SCIENTIFIC CONFERENCE", "ARE UI/UX JOBS OF THE FUTURE?"]
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


            <div style={{
                backgroundImage: "url(https://images.pexels.com/photos/15434151/pexels-photo-15434151/free-photo-of-the-interior-of-a-large-building-with-a-dome.jpeg)",
                height: "100vh",
                backgroundSize: "contain",
                backgroundRepeat: "no-repeat",
                width: "70vw",
                margin: "auto"

            }}>
                <h1 style={{
                    fontSize: "3.3em",
                    fontFamily: "DancingScript",
                    opacity: "100%",
                    fontWeight: "1000",
                    textAlign: "right",
                    paddingTop: "20%"
                }}>{names[7]}<br />{names[8]}</h1>

            </div>

        </div>
    )
}
export default Homepage