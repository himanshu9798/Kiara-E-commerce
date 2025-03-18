import React, { useState } from 'react';

function Compliment() {
    const [message, setMessage] = useState("Best fitted white denim shirt more than expected crazy soft, flexible");  
    const [author,setAuthor]=useState("UPTOP")
 
    function edit() {
        setMessage("Best fitted white denim shirt more than expected crazy soft, flexible");
        setAuthor("UPTOP")
    }

    function edit1() {
        setMessage("More than expected crazy soft, flexible and best fitted white simple denim shirt");
        setAuthor("CAUSAL WAY")
    }

    function edit2() {
        setMessage("Best fitted white denim shirt more white denim than expected flexible crazy soft.");
        setAuthor("DENIM CRAZE")
    }

    function edit3() {
        setMessage("Best fitted white denim shirt more than expected crazy soft, flexible ");
        setAuthor("UPTOP")
    }

    return (
        <div style={{backgroundColor:"#f1f1f0",width:"100%",height:"40vh",paddingTop:"10%",paddingBottom:"10%"}}>
            <h2 style={{textAlign:"center",color:"gray",marginTop:"-5%"}}>WE LOVE GOOD COMPLIMENT</h2>
           <br/><br/>
            <h1 style={{width:"400px",height:"150px",textAlign:"center",marginLeft:"35%"}}>"<i>{message}</i>"</h1>
            <p style={{textAlign:"center",color:"gray"}}>{author}</p>

           <div style={{display:"flex",marginLeft:"46%",gap:"1%"}}>
            <button style={{width:"20px",height:"20px",backgroundColor:"gray",borderRadius:"50%", border:"none",outline:"none"}} onClick={edit}></button>
            <button style={{width:"20px",height:"20px",backgroundColor:"gray",borderRadius:"50%" ,border:"none",outline:"none"}} onClick={edit1}></button>
            <button style={{width:"20px",height:"20px",backgroundColor:"gray",borderRadius:"50%" ,border:"none",outline:"none"}} onClick={edit2}></button>
            <button style={{width:"20px",height:"20px",backgroundColor:"gray",borderRadius:"50%" ,border:"none",outline:"none"}} onClick={edit3}></button>
            </div>
        </div>
    );
}

export default Compliment;
