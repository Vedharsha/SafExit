import React from "react";
import{Link, useNavigate} from "react-router-dom";
import Side from "./Side";
import { useState } from "react";

const Overview = () => {

  
  const [selectedValue, setSelectedValue] = useState({
    q1:null,
    q2:null,
  q3:null});
  const [message, setMessage] = useState({
    q1:"",
    q2:"",
    q3:"",
  });

  const navigate = useNavigate("");

const correctAnswer = {
  q1:"a",
  q2:"b",
  q3:"c",
};

  const handleOptionChange = (event, question) => {
    const value = event.target.value;
    setSelectedValue((prev) => ({ ...prev, [question]: value }));


    if (value === correctAnswer[question]) {
      setMessage((prev) => ({ ...prev, [question]: "✅ Correct Answer!"  }));
    } else {
      setMessage((prev) => ({ ...prev, [question]: "❌ Incorrect Answer! Try again." }));
    }
  
  };

  const handleSubmit = () => {
    if (!selectedValue.q1 || !selectedValue.q2 || !selectedValue.q3){
      alert("Please select at least one option.");
    }

    else {
      alert("Form submitted successfully!");
      navigate("/Page5");

    }
  };




  return(
  <>
  <Side/>

 
  <div style={{ marginLeft: "270px", padding: "30px", flex: 1 }}>
    <h2> The Intelligent Traffic Management System (ITMS) Act – AI-Based Enforcement  
    </h2>
    <p>Tamil Nadu has adopted  AI-powered traffic management  under the  Intelligent
       Traffic Management System (ITMS) Act, integrating   CCTV cameras, speed sensors, and automatic
       number plate recognition (ANPR)  to track violations in real time. The system automatically detects  
       overspeeding, signal jumping, and wrong-way driving, issuing   e-challans via SMS. ITMS has significantly 
       reduced   road accidents and congestion  in cities like  Coimbatore and Chennai .
</p>


      <h1>
     1. What technology is used in Tamil Nadu’s ITMS to detect violations?  

      </h1>
      <div style={{marginLeft:"70px"}}>
      <label> <input  value={"a"}      name="q1" checked={selectedValue.q1 === "a"}   onChange={(e) => handleOptionChange(e, "q1")}             type="radio"/>  Manual traffic policing   </label><br/>
      <label><input   value={"1"}      name="q1" checked={selectedValue.q1 === "1"}    onChange={(e) => handleOptionChange(e, "q1")}   type="radio"/>Speed breakers   </label><br/>
      <label><input   value={"2"}      name="q1" checked={selectedValue.q1 === "2"}   onChange={(e) => handleOptionChange(e, "q1")}           type="radio"/>AI-based cameras and ANPR  </label><br/>
      <label><input   value={"3"}      name="q1" checked={selectedValue.q1 === "3"}    onChange={(e) => handleOptionChange(e, "q1")}           type="radio"/>Random vehicle checking   </label><br/>
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
        {message.q1}
      </div>
      </div>
      {/* 22 */}
      <h1>
     2. How are violators notified under ITMS?  
      </h1>
      <div style={{marginLeft:"30px"}}>
      <label><input    value={"0"}                 name="q2"   checked={selectedValue.q2 === "0"}   onChange={(e) => handleOptionChange(e, "q2")}    type="radio"/>Physical notice from traffic police   </label><br/>
      <label><input    value={"b"}                 name="q2"   checked={selectedValue.q2 === "b"}    onChange={(e) => handleOptionChange(e, "q2")}   type="radio"/>e-Challan via SMS and email   </label><br/>
      <label> <input   value={"2"}                 name="q2"   checked={selectedValue.q2 === "2"}    onChange={(e) => handleOptionChange(e, "q2")}    type="radio"/>Newspaper publication  </label><br/>
      <label> <input   value={"3"}                 name="q2"   checked={selectedValue.q2 === "3"}    onChange={(e) => handleOptionChange(e, "q2")}    type="radio"/> No notification is given   </label><br/>
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
        {message.q2}
      </div>
      </div>
      {/* 33 */}
      <h1>
     3. What is one of the main benefits of ITMS in Tamil Nadu? 
      </h1>
      <div style={{marginLeft:"30px"}}>
      <label> <input  value={"c"}   name="q3"   checked={selectedValue.q3 === "c"}   onChange={(e) => handleOptionChange(e, "q3")}          type="radio"/>Reducing human involvement in fine collection </label><br/>
      <label> <input  value={"1"}   name="q3"   checked={selectedValue.q3 === "1"}    onChange={(e) => handleOptionChange(e, "q3")}         type="radio"/>Increasing vehicle pollution   </label><br/>
      <label> <input  value={"2"}   name="q3"   checked={selectedValue.q3 === "2"}    onChange={(e) => handleOptionChange(e, "q3")}         type="radio"/> Removing all speed limits   </label><br/>
      <label> <input  value={"3"}   name="q3"   checked={selectedValue.q3 === "3"}    onChange={(e) => handleOptionChange(e, "q3")}         type="radio"/> Allowing all vehicles to skip red signals   
</label><br/>
<div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q3 === correctAnswer.q3 ? "green" : "red" }}>
        {message.q3}
      </div>
      <button onClick={handleSubmit} style={{ margin: "20px 0px 20px 15%", padding: "8px 15px", cursor: "pointer" ,borderRadius:"10px"}}>
        Submit
      </button>
      </div>

    <Link
        to="/Page5"
        style={{
          color: "#007bff",
          textDecoration: "none",
          marginTop: "20px",
          display:"flex",
          justifyContent:"center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        → Next
      </Link>
  </div>

  <script>
    
  </script>
 
  </>
)};

export default Overview;
