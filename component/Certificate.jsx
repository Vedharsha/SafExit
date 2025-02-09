
//import React from "react";
import certificate from '../../image/certificate.jpg';



const Certificate =()=>{




    return(
        <>
        <div style={{margin:"40px 20px 20px 35%" ,textAlign:"center",height:"400px",width:"500px",backgroundColor:"#f4f4f4",borderRadius:"30px"}}>

        <h2>
        You are passed !
        </h2>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <img src={certificate} width="250px"  />
     

        </div>
        </>
    )
}
export default Certificate;