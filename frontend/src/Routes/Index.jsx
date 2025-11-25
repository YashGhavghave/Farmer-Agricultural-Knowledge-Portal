import React from 'react'
import Login from "../Components/Login.jsx"
import Register from '../Components/Register.jsx'
import {Routes, Route} from "react-router"
import LandingPage from '../Components/LandingPage.jsx'
import GoogleCallback from '../handler/callback.handler.jsx'

function Index() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/" element={<LandingPage/>}></Route>
        <Route path="/google/callback" element={<GoogleCallback />} />
      </Routes>
    </div>
  )
}

export default Index
