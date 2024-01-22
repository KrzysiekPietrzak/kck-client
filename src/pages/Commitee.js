import React, { useState } from "react"

function App(){

   
    const namesPL = ["Misja", "Uczestnicy", "Patronaty", "Komitet Organizacyjny", "Informacje Użytkowe", " Kontakt", " Formularz", "KONFERENCJA NAUKOWA", "CZY ZAWODY UI/UX TO ZAWODY PRZYSZŁOŚCI?","Agenda","","Konferencja jest dwudniowa","Dzień 1:","9:00 - 10:00 Rozpoczęcie"," 10:00 - 11:30 Wykład Bjerna Stormfelda", " 11:30 - 13:00 Wykład Agnes Butterfield "," 13:00 - 15:00 Przerwa na lunch", "15:00 - 19:00 Prezentacja rozwiązań przedstawionych na wykładach","Dzień 2:","9:00-13:00 Pierwsza część wystąpień gości","13:00 - 15:00 Przerwa na lunch", "15:00 - 18:00 Druga część wystąpień gości", "18:00 - 18:30 Zakończenie", "Goście specjalni:" ]
    const namesEN = ["Mission", "Guests", "Patrons", "Committee", "Info", "Contact", "Form", "SCIENTIFIC CONFERENCE", "ARE UI/UX JOBS OF THE FUTURE?","Agenda","","The conference is two days long ","Day 1:","9:00 - 10:00 Start"," 10:00 - 11:30 Lecture by Bjern Stormfeld"," 11:30 - 13:00 Lecture by Agnes Butterfield", "13:00 - 15:00 Lunch break","15:00 - 19: 00 Presentation of solutions presented during lectures","Day 2:","9:00-13:00 First part of guest speeches", "13:00 - 15:00 Lunch break", "15:00 - 18:00 Second part of guest speeches", "18:00 - 18:30 End ", "Special guests: "]
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
        <div style={{paddingTop:"10vh"}}>
            <h1 style={{fontFamily:"DancingScript"}}>{names[9]}</h1>
            <h3>Agenda</h3>
            <h4>{names[10]}</h4>
            <h5>{names[11]}</h5>
            <h5>{names[12]}</h5>
            <h5>{names[13]}</h5>
            <h5>{names[14]}</h5>
            <h5>{names[15]}</h5>
            <h5>{names[16]}</h5>
            <h5>{names[17]}</h5>
        
            <h5>{names[18]}</h5>
            <h5>{names[19]}</h5>
            <h5>{names[20]}</h5>
            <h5>{names[21]}</h5>
            <h5>{names[22]}</h5>
            <br></br>
            <h1 style={{fontFamily:"DancingScript"}}>{names[23]}</h1>
                        <div style={{display:"flex"}}> 
<img src="./images/speak1.jpg" width="200px" height="200px"></img>
<div><h3>Bjorn Stormfeld </h3><h4>CEO Lorem Ipsum</h4> </div>
<img src="./images/speak2.jpg" width="200px" height="200px"></img>
<div><h3>Agnes Butterfield</h3> <h4>CEO Company Name</h4></div>
            </div>
        </div>
        </div>
    </div>
)
}
export default App