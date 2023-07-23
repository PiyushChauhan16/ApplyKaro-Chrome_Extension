import React, { useEffect, useState } from 'react'

const PersonalDetails = ({handleClick}) => {
  let [name, setName] = useState (()=>{
    let saved = localStorage.getItem ("name");
    let res = JSON.parse (saved);

    return res || "";
    
  });


  let [rollNumber, setRollNumber] = useState (()=>{
    let saved = localStorage.getItem ("rollNumber");
    let res = JSON.parse (saved);

    console.log  (res);
    return res || "";});


  let [email, setEmail] = useState (()=>{
    let saved = localStorage.getItem ("email");
    let res = JSON.parse (saved);

    return res || "";});



  let [phoneNumber, setPhoneNumber] = useState (()=>{
    let saved = localStorage.getItem ("phoneNumber");
    let res = JSON.parse (saved);

    return res || "";});

    let [address, setAddress] = useState (()=>{
      let saved = localStorage.getItem ("address");
      let res = JSON.parse (saved);
  
      return res || "";});

  
  


  
  return (
    <div className='main-div'>
    <div className='personalDetails-div'>
    <div><p className='heading'>Personal details</p></div>
      <div className='card'>
        
        <label for = "name">Name: </label><br></br>
          <input type = "text" 
          name = "name" 
          className = "name" 
          placeholder='eg: Piyush Chauhan' 
          value = {name} 
          onChange={(e)=>{
            localStorage.setItem ("name", JSON.stringify(e.target.value));
            setName (e.target.value);

          
          }}></input>
          <br></br>

          <label for = "roll-number">RollNo: </label><br></br>
          <input type = "text" 
          name = "roll-number" 
          className = "roll-number" 
          placeholder='Roll Number' 
          value = {rollNumber} 
          onChange={(e)=>{
            localStorage.setItem ("rollNumber", JSON.stringify(e.target.value));
            setRollNumber (e.target.value);
          }}></input>            
          <br></br>

          <label for = "Email">Email </label><br></br>
          <input type = "text" 
          name = "email" 
          className = "email" 
          placeholder='eg: abcd@gmail.com' 
          value = {email} 
          onChange={(e)=>{
            localStorage.setItem ("email", JSON.stringify(e.target.value));
            setEmail (e.target.value)}}></input>
          <br></br>

          
          <label for = "phone">Phone Number </label><br></br>
          <input type = "text" 
          name = "phone" 
          className = "phone" 
          placeholder='eg: +91 1234567789' 
          value = {phoneNumber} 
          onChange={(e)=>{
            localStorage.setItem ("phoneNumber", JSON.stringify(e.target.value));            
            setPhoneNumber (e.target.value)}}></input>
          <br></br>

          <label for = "address">Address </label><br></br>
          <input type = "text" 
          name = "address" 
          className = "address" 
          placeholder='Address' 
          value = {address} 
          onChange={(e)=>{
            localStorage.setItem ("address", JSON.stringify(e.target.value));            
            setAddress (e.target.value)}}></input>
          <br></br>

         
      </div>

      <div > <button className='save-btn' onClick={()=>{handleClick(2)}}>Save and Next</button></div>
          
    </div>

    </div>
  )
}

export default PersonalDetails