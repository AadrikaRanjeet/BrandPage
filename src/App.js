
import { useState } from 'react';
import './App.css';
import Maincontent from './Components/Maincontent';
import Navbar from './Components/Navbar';

function App() {
  const  [navbarColor,setnavbarColor] =useState('black');
  
  return (
   <>
    <Navbar navbarColor={navbarColor}/>
    <Maincontent/>
   </>
  );
}

export default App;
