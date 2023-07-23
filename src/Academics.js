import React, { useState } from 'react'
import Links from './Links';


function findMaxIndex (arr){
    if (arr == null) return 1;

    let maxIndex = 1;

    for (let i = 0; i < arr.length; i++){
        if (maxIndex < arr[i].id) maxIndex = arr[i].id;
    }

    return maxIndex+1;
}


const Academics = ({handleClick}) => {
    let [index, setindex] = useState (findMaxIndex (JSON.parse (localStorage.getItem ("links"))));

    let [college, setCollege] = useState (()=>{
        let output = localStorage.getItem ("college");
        let saved = JSON.parse (output);

        return saved || "";
    });

    let [branch, setBranch] = useState (()=>{
        let output = localStorage.getItem ("branch");
        let saved = JSON.parse (output);

        return saved || "";
    });

    let [cgpa, setCgpa] = useState (()=>{
        let output = localStorage.getItem ("cgpa");
        let saved = JSON.parse (output);

        return saved || "";
    });
    let [links, setLinks] = useState (()=>{
        let output = localStorage.getItem ("links");
        let saved = JSON.parse (output);

        console.log ("saved",saved);
        if (saved == null ) return [{id: index, linkName: "", link:""}];
        else return saved;
    });

    console.log ("total link", links);
    
  return (
    <div className='main-div'>
    <div className='academics-div'>
        <div><p className='heading'>Academics</p></div>

        <div className='card'>
            <label for = "college">College</label>
            <br></br>
            <input 
            type='text' 
            className='college'
            placeholder='eg: Delhi Technological University'
            value = {college}
            onChange={(e) => {
                setCollege (e.target.value);
            }}
            ></input>

            <br></br>

            <label for = "Branch">Branch</label>
            <br></br>
            <input 
            type='text' 
            className='branch'
            placeholder='eg: Information Technology'
            value = {branch}
            onChange={(e) => {
                setBranch (e.target.value);
            }}
            ></input>

            <br></br>

            <label for = "cgpa">CGPA</label>
                <br></br>
                <input 
                type='text' 
                className='cgpa'
                placeholder='eg: 9.5'
                value = {cgpa}
                onChange={(e) => {
                    setCgpa (e.target.value);
                }}
                ></input>
            
            <br></br>

            <label for = "links">Links</label>  <br></br>
           
            {                
                links.map ((curr) => {
                    console.log ("current object", curr);
                    return <Links linkNo = {curr.id} savedLinkName = {curr.linkName} savedlink = {curr.link} listOfLinks = {links} setListofLinks={setLinks} />
                })
            }
           
            

            <button className='add-btn'
            onClick={()=>{
                let updated = [...links];
                updated.push ({id: index+1, linkName: "", link: ""});
                setLinks (updated);
                setindex (index+1);
            }}
            >Add Link</button>

        </div>

        <div > <button className='save-btn' 
        onClick={()=>{
            localStorage.setItem ("college", JSON.stringify (college));
            localStorage.setItem ("branch", JSON.stringify (branch));
            localStorage.setItem ("cgpa", JSON.stringify (cgpa));

            let updatedLinks = links.filter ((curr) => {
                return curr.linkName != '' && curr.link != '';
            })

            localStorage.setItem ("links", JSON.stringify (updatedLinks));
            localStorage.setItem ("flag", JSON.stringify(4));
            
            handleClick(4);
        }}>Complete Profile</button></div>
       

        
    </div>
    </div>
  )
}

export default Academics