import React, {useState} from 'react'
import { ReactDOM } from 'react';
import { useEffect } from 'react';

const ExperienceJSX = ({id, iname, irole, idescription, expArr, setExpFn}) => {

    let [name, setName] = useState (iname);

    let [role, setRole] = useState (irole);

    let [description, setDescription] = useState (idescription);

    useEffect(() => {
        console.log ("run iuseEffect");
        setName(iname);
        setRole(irole);
        setDescription(idescription);
      }, [iname, irole, idescription]);

    console.log ("ExperienceJSX", name, iname, role, irole, description, idescription);
    function handleNameChange (e){
        let updateExp = expArr.map ((curr) => {
            if  (curr.id === id){
                return {
                    ...curr,
                    name: e.target.value 
                }
            }
            else return curr;
        });

        setName (e.target.value);
        setExpFn (updateExp);
    }

    function handleRoleChange (e){
        let updateExp = expArr.map ((curr) => {
            if  (curr.id === id){
                return {
                    ...curr,
                    role: e.target.value 
                }
            }
            else return curr;
        });

        setRole (e.target.value);
        setExpFn (updateExp);
    }

    function handleDescriptionChange (e){
        let updateExp = expArr.map ((curr) => {
            if  (curr.id === id){
                return {
                    ...curr,
                    description: e.target.value 
                }
            }
            else return curr;
        });

        setDescription (e.target.value);
        setExpFn (updateExp);
    }
      
    function handleDeleteExperience (){
        let updatedExp = expArr.filter ((curr) => {
            console.log (curr.name, name, curr.name != name)
            return curr.id !== id
        });

        setExpFn ([...updatedExp]);
    }

      

  return (
    <div className='card'>

        <label for = "name">Company </label>
        <br></br>
        <input type = "text" 
        name = "name" 
        className = "name"
        placeholder={'eg: Amazon '}
        value = {name}
        onChange={(e)=>{
            handleNameChange (e);
        }}
        ></input>
        <br></br>

        <label for = "roll-number">Role </label><br></br>
        <input type = "text"
            name = "role" 
            className = "role"
            placeholder='eg: SDE'
            value = {role}
            onChange={(e)=>{
            handleRoleChange (e);
        }}
            ></input>            
        <br></br>

        <label for = "Email">Description </label><br></br>
        <textarea type = "text" 
        name = "email" 
        className = "email"
        placeholder='Write about your experience'
        value = {description}
        onChange={(e)=>{
            handleDescriptionChange (e);
        }}
        ></textarea>
        <br></br>
        

        <button
        onClick={handleDeleteExperience}>
        Delete Experience</button>
        

    </div>
  )
}

export default ExperienceJSX