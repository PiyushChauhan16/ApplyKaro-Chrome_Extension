import React from 'react'
import InfoJSX from './InfoJSX';

const CompleteInfo = ({handleClick}) => {
    let name= JSON.parse (localStorage.getItem ("name"));
    let rollNumber = JSON.parse (localStorage.getItem ("rollNumber"));
    let email = JSON.parse (localStorage.getItem ("email"));
    let phoneNumber = JSON.parse (localStorage.getItem ("phoneNumber"));
    let address = JSON.parse (localStorage.getItem ("address"));
    let experience = JSON.parse (localStorage.getItem ("experience"));
    let college = JSON.parse (localStorage.getItem ("college"));
    let branch = JSON.parse (localStorage.getItem ("branch"));
    let cgpa = JSON.parse (localStorage.getItem ("cgpa"));
    let links = JSON.parse (localStorage.getItem ("links"));

    console.log (experience);
    
  return (
    <div className='main-div'>
        <div className='personalDetails-div' style={{paddingTop: "10px"}}>
            <div><p className='complete-info-heading'>Personal Details</p></div>
            <div className='card'>
                <InfoJSX labelName={"Name"} data={name} />
                <InfoJSX labelName={"Roll Number"} data={rollNumber} />
                <InfoJSX labelName={"Email"} data={email} />
                <InfoJSX labelName={"Phone Number"} data={phoneNumber} />
                <InfoJSX labelName={"Address"} data={address} />
                
            </div>

            <div><p className='complete-info-heading'>Experience</p></div>
            {
                experience.map ((curr) => {
                    return (
                        <div className='card'>
                            <InfoJSX labelName={"Company"} data={curr.name} />
                            <InfoJSX labelName={"Role"} data={curr.role} />
                            <InfoJSX labelName={"Description"} data={curr.description} />
            
                        </div>
                    )
                    
                })
            }

            <div><p className='complete-info-heading'>Academics</p></div>
            <div className='card'>
                <InfoJSX labelName={"College"} data={college} />
                <InfoJSX labelName={"Branch"} data={branch} />
                <InfoJSX labelName={"CGPA"} data={cgpa} />
                {
                links.map ((curr) => {
                    return (
                        <><InfoJSX labelName={curr.linkName} data={curr.link} flag = {1}/>
                        <br></br><br></br></>
                        
                      
                    )
                    
                })
            }
                
            </div>

            <div><button 
            className='add-exp-btn' 
            style={{marginRight: "290px"}}
            onClick = {()=>{
                handleClick (1);
            }}
            >Edit Information</button></div>
            


        </div>


    </div>
  )
}

export default CompleteInfo