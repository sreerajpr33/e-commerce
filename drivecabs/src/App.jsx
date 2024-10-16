import { useState } from 'react'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css'
import Layout from '../../../react/my_react/src/component/Layout'
import Home from './Component/Home'
import Contact from './Component/Contact'
import About from './Component/About'


function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/'element={<Layout/>}>
      <Route index element={<Home/>}/>
      <Route path="contact" element={<Contact/>}/>
      <Route path="about" element={<About/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
