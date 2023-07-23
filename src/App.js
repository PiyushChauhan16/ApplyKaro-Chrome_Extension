import React from 'react'
import PersonalDetails from './PersonalDetails'
import { useState } from 'react';
import Experience from './Experience';
import './style.css'
import Academics from './Academics';
import CompleteInfo from './CompleteInfo';

const App = () => {
 
  let [value, setValue] = useState (()=>{
    let output = localStorage.getItem ("flag");
    let saved = JSON.parse (output);

    if (saved === null || saved < 4) return 1;
    else return 4;
  });

  console.log ("inApp", value);

  function handleClick (newVal){
    setValue (newVal);
  }

  function RenderByVal (handleClick){
    if (value === 1) return <PersonalDetails handleClick = {handleClick}/>
    else if (value === 2) return <Experience handleClick = {handleClick}/>
    else if (value === 3) return <Academics handleClick= {handleClick}/>
    else return <CompleteInfo handleClick = {handleClick} />
  }
  
  return (
    
    <div>
      {RenderByVal (handleClick)}

    </div>
  )
}

export default App