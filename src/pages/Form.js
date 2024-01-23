import React, { useState } from "react"



function App(){


    const namesPL = ["Misja", "Uczestnicy", "Patronaty", "Komitet Organizacyjny", "Informacje Użytkowe", " Kontakt", " Formularz", "KONFERENCJA NAUKOWA", "CZY ZAWODY UI/UX TO ZAWODY PRZYSZŁOŚCI?","Imię i nazwisko","Afiliacja","Tytuł","Abstrakt","Telefon","Dodaj ofertę"]
    const namesEN = ["Mission", "Guests", "Patrons", "Committee", "Info", "Contact", "Form", "SCIENTIFIC CONFERENCE", "ARE UI/UX JOBS OF THE FUTURE?","Name and surname","Affiliation","Title","Abstract","Phone","Add Offert"]
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


    
  const [nameSurname,setNameSurname]=useState('');
  const [affiliation,setAffiliation]=useState('');
  const [title, setTitle]=useState('');
  const [abstract, setAbstract]=useState('');
  const [email, setEmail]=useState('');
  const [phone, setPhone]=useState('');


  async function newOffer(event){
    event.preventDefault()
    const response = await fetch(/*'http://localhost:3030/api/speaker'*/"https://serv6.onrender.com/api/speaker",{
      method: 'POST', 
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        nameSurname,
        affiliation,
        title,
        abstract,
        email,
        phone,
 
      })
    })
    const response2 = await fetch(/*'http://localhost:3030/send'*/"https://serv6.onrender.com/api/send",{
        method: 'POST', 
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify({
          email,
          nameSurname,
        affiliation,
        title,
        abstract,
        phone,


    })
})
setNameSurname(''),
setAbstract(''),
setAffiliation(''),
setEmail(''),
setTitle(''),
setPhone('')
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

<div  style={{display:"flex",
    paddingTop:"10vh"}}>
                   <div style={{
            backgroundImage: "url(https://images.pexels.com/photos/15434151/pexels-photo-15434151/free-photo-of-the-interior-of-a-large-building-with-a-dome.jpeg)",
            height: "60vh",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "70vw",

        }}>

            </div>


            <div className="App">
     <h1>Dodaj swoje wystąpienie</h1>
     <form onSubmit={newOffer}>
      <label> {names[9]}</label>
      <input 
      value={nameSurname}
      onChange={(e)=>setNameSurname(e.target.value)}
      type="text"
      placeholder='namesurname'
      />
      <br></br>
      
      <label>{names[10]}</label>
      <input 
      value={affiliation}
      onChange={(e)=>setAffiliation(e.target.value)}
      type="text"
      placeholder='affiliation'
      />
<br></br>

<label>{names[11]}</label>
<input 
      value={title}
      onChange={(e)=>setTitle(e.target.value)}
      type="text"
      placeholder='title'
      />
      <br />

<label>{names[12]}</label>
      <input 
      value={abstract}
      onChange={(e)=>setAbstract(e.target.value)}
      type="text"
      placeholder='abstract'

      />  
      <br />

      <label>Email</label>
      <input 
      value={email}
      onChange={(e)=>setEmail(e.target.value)}
      type="text"
      placeholder='email'

      />  
      <br />

      <label>{names[13]}</label>
      <input 
      value={phone}
      onChange={(e)=>setPhone(e.target.value)}
      type="text"
      placeholder='phone'

      />  
      <br />
      
<input type ="submit" value={names[14]}/>
     </form>
    </div>


</div>
        </div>
    )
}
export default App