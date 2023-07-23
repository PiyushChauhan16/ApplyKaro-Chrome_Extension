import React from 'react'

const InfoJSX = ({labelName, data, flag = 0}) => {
  return (
    <>
       <label style={{fontWeight:"bold"}}>{labelName}</label><br></br>
       {flag == 0 && <p style={{marginTop: "1px"}}>{data == ''? "NA" : data}</p>}
       {flag == 1 && <a href = {data == ''? "" : data} style={{marginTop: "1px"}}>{data == ''? "NA" : data}</a>}
       

       


    </>
  )
}

export default InfoJSX