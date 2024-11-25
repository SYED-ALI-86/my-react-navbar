import React from 'react'
import Contact from './Coomponents/Contact'
import About from './Coomponents/About'
import Womens from './Coomponents/Womens'
import Men from './Coomponents/Men'
import { Route, Routes } from 'react-router-dom'
import Navbar from './Coomponents/Navbar'
const App = () => {
  return (
   <div>
    <Navbar/>
       <Routes>
    <Route path='/contact' element={<Contact/>}></Route>
    <Route path='/about' element={<About/>}></Route>
    <Route path='/women' element={<Womens/>}></Route>
    <Route path='/men' element={<Men/>}></Route>
   </Routes>
   </div>
  )
}
 
export default App
