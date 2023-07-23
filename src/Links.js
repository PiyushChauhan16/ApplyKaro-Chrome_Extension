import React, { useCallback, useEffect, useState } from 'react'

const Links = ({linkNo, savedLinkName, savedlink, listOfLinks, setListofLinks}) => {
    let [link, setLink] = useState (savedlink);
    let [linkName, setLinkName]= useState (savedLinkName);

    useEffect(()=>{
        setLink (savedlink);
        setLinkName (savedLinkName);
    }, [savedlink, savedLinkName]);


    console.log ("inLinks", linkName, savedLinkName, linkNo);


    function handleOnChange (e){
        let updatedList = listOfLinks.map ((curr) => {
            if (linkNo === curr.id){
                return {id: linkNo, linkName: linkName, link: e.target.value};
                
            }
            else return curr;
        });
        
        console.log (e.target.value);
        setLink (e.target.value);
        setListofLinks (updatedList);
        

    }

    function handleLinkNameChange (e){
        let updatedList = listOfLinks.map ((curr) => {
            if (linkNo === curr.id){
                return {...curr, linkName: e.target.value, link: link};
                
            }
            else return curr;
        });
        
        console.log (updatedList);
        console.log (e.target.value);
        setLinkName (e.target.value);
        setListofLinks (updatedList);
    }


    function handleDelLink (e){
        let updatedList = listOfLinks.filter ((curr) => {
            return curr.link !== link;
        });

        setListofLinks (updatedList);
    }



  return (
    <div className='link-div'>
        <input 
        type = "text"
        placeholder='Link Name'
        value = {linkName}
        onChange = {e=>handleLinkNameChange (e)}
        >
        </input>

        <br></br>
        <input 
        type='text' 
        className='links'
        placeholder='URL of website'
        value = {link}
        onChange={(e) => {
            handleOnChange (e);
        }}
        ></input>

        <button className='del-btn'
        onClick={(e)=>handleDelLink (e)}
        >❌</button>
    </div>
  )
}

export default Links