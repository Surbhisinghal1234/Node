import React from 'react'
import Show from "./Show"
import App from "./App"
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Update from './Update';


function Home() {
  return <>
  
  <BrowserRouter>
  <Routes>

  <Route path='/' element={<App/>}/>
    <Route path='/show' element={<Show/>}/>
    <Route path='/update/:id' element={<Update/>}/>


  </Routes>
  </BrowserRouter>
  </>

    

  
}

export default Home