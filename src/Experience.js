import React, { useState } from 'react'
import ExperienceJSX from './ExperienceJSX';

function findMaxIndex (arr){
    if (arr == null) return 1;
    let maxEle = 1;
    for (let i = 0; i < arr.length; i++){
        if (maxEle < arr[i].id) maxEle = arr[i].id;
    }

    console.log (maxEle);
    return maxEle+1;
}

const Experience = ({handleClick}) => {
    let output = localStorage.getItem ("experience");
    let saved = JSON.parse (output);

    let maxIndex = findMaxIndex (saved);

    let [index, setIndex] = useState (maxIndex);
    let [exp, setExp] = useState (()=>{
        return saved ||  [
        {
            id: index,
            name: "",
            role: "",
            description: ""
        }
    ]
    }
   );
    
  function handleAddExperience (){
    setIndex (index+1);

    let currExp = exp;
    currExp.push ({
        id: index + 1,
        name: "",
        role: "",
        description: ""
    })
    
    setExp (currExp);
  }

 
    
  console.log (exp);

  return (
    <div className='main-div'>    
    <div className='experience-div'>
        <div>
            <p className='heading'>Experience</p>
        </div>

        <div>
            {exp.map ((curr) => {
            console.log (`in experiecne`, curr);
            return <ExperienceJSX 
            id = {curr.id} 
            iname = {curr.name} 
            irole = {curr.role} 
            idescription = {curr.description}
            expArr = {exp}
            setExpFn = {setExp}></ExperienceJSX>
        })}
        </div>

        <div>
        <button
            className='add-exp-btn'
            onClick= {handleAddExperience}>Add Experience</button>
            

        </div>

        <div>
            <button 
            className='save-btn'
            onClick={()=>{
                localStorage.setItem ("experience", JSON.stringify (exp));
                handleClick (3);
            }}>Save and Next</button>
        </div>

        
        

        
        

        
        
    </div>
    </div>
  )
}

export default Experience