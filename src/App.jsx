

import { useState } from 'react'
import './App.css'
import Search from './components/Search'
import Foodlist from './components/Foodlist';
import Nav from './components/Nav';
import Container from './components/Container';
import Innercontaainer from './components/Innercontainer';
import Fooddetails from './components/Fooddetails';
function App() {
  const [fooddata,setfooddata]=useState([]);
  const [foodid,setfoodid]=useState("656329")
  return(
    
    <div>
    <Nav />
    <Search fooddata={fooddata} setfooddata={setfooddata} />
    <Container>
    <Innercontaainer>
    <Foodlist setfoodid={setfoodid} fooddata={fooddata} />
    </Innercontaainer>
    <Innercontaainer>
    <Fooddetails foodid={foodid}/>
    </Innercontaainer>
   </Container>
   
    </div>
  )
}

export default App
