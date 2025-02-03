
import NavBar from './components/NavBar'
import './App.css'
import Home_Text from'./Home-Page'
import { useState, useEffect } from "react";
 import { motion } from "framer-motion";
import SearchBar from './SearchBar'

 

function App() {
  return(
  <body class="op  ">
    
   <div class="flex  space-x-10 items-start ">
      <NavBar  />
   </div>
    
  <div class="ml-90 ">
    <Home_Text/>
  </div>
  <div class="ml-120 mt-180 ">
    <SearchBar/>
  </div>
     </body>
  )
   
}

export default App
