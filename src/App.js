import './App.css';
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './fonts/DancingScript-Regular.ttf'
import Homepage from './pages/Homepage.js'
import Commitee from './pages/Commitee.js'
import Contact from './pages/Contact.js'
import Form from './pages/Form.js'
import Guests from './pages/Guests.js'
import Info from './pages/Info.js'
import Mission from './pages/Mission.js'
import Patrons from './pages/Patrons.js'
function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={< Homepage />}></Route>
        <Route path="/Commitee" exact element={< Commitee />}></Route>
        <Route path="/Contact" exact element={<Contact />}></Route>
        <Route path="/Form" exact element={< Form />}></Route>
        <Route path="/Guests" exact element={< Guests />}></Route>
        <Route path="/Info" exact element={< Info />}></Route>
        <Route path="/Mission" exact element={< Mission />}></Route>
        <Route path="/Patrons" exact element={< Patrons />}></Route>

      </Routes>
    </BrowserRouter>
  </div>
}

export default App