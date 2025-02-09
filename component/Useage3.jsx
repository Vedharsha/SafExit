import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Useage = () => {

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
  q1:"2",
  q2:"500",
  q3:"l",
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
      navigate("/overview4")

    }
  };






  return(
  <>
    <Side />
    <div style={{ marginLeft: "270px", padding: "30px", flex: 1 }}>
      <h2>Tamil Nadu Road Safety Policy – Mandatory Helmet Law

      </h2>
      <p>Tamil Nadu has implemented a  strict helmet law  under its
        Road Safety Policy, following Supreme Court directives. This law mandates
        that both the   rider and pillion passenger  wear helmets.  Failure to comply results
        in a ₹500 fine for the first offense  and potential  license suspension for repeated violations.
        Tamil Nadu also runs   awareness campaigns  and  strict enforcement drives  to ensure compliance.


      </p>


      <h1>
        1.Who must wear a helmet while riding a two-wheeler in Tamil Nadu?
      </h1>
      <div style={{ marginLeft: "30px" }}>
        <label><input    value={"0"}      name="q1" checked={selectedValue.q1 === "0"}   onChange={(e) => handleOptionChange(e, "q1")}          type="radio" />Only the rider           </label>   <br/>      
        <label><input    value={"1"}      name="q1" checked={selectedValue.q1 === "1"}    onChange={(e) => handleOptionChange(e, "q1" )}       type="radio" />Only the pillion rider   </label>  <br/>              
        <label><input    value={"2"}      name="q1" checked={selectedValue.q1 === "2"}   onChange={(e) => handleOptionChange(e, "q1")}         type="radio" />Both the rider and pillion rider  </label> <br/>       
        <label><input    value={"3"}      name="q1" checked={selectedValue.q1 === "3"}    onChange={(e) => handleOptionChange(e, "q1")}         type="radio" />Helmets are not mandatory   </label>     <br/>       
        <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
        {message.q1}
      </div>

      </div>
      {/* 22 */}
      <h1>
        2.What is the fine for not wearing a helmet in Tamil Nadu?

      </h1>
      <div style={{ marginLeft: "30px" }}>
      <label><input    value={"0"}   name="q2"   checked={selectedValue.q2 === "0"}   onChange={(e) => handleOptionChange(e, "q2")}  type="radio" />  ₹100</label>  <br/>  
      <label> <input   value={"500"}   name="q2"   checked={selectedValue.q2 === "500"}    onChange={(e) => handleOptionChange(e, "q2")}  type="radio" />₹500</label>   <br/> 
      <label> <input   value={"2"}   name="q2"   checked={selectedValue.q2 === "2"}    onChange={(e) => handleOptionChange(e, "q2")}  type="radio" /> ₹5,000</label>  <br/>  
      <label>  <input  value={"3"}   name="q2"   checked={selectedValue.q2 === "3"}    onChange={(e) => handleOptionChange(e, "q2")}  type="radio" />  No fine, just a warning</label>   <br/> 
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
        {message.q2}
      </div>
      </div>


      {/* 33 */}
      <h1>
        3.What can happen if a rider repeatedly violates helmet laws?

      </h1>
      <div style={{ marginLeft: "30px" }}>
      <label><input   value={"0"}   name="q3"   checked={selectedValue.q3 === "0"}   onChange={(e) => handleOptionChange(e, "q3")}       type="radio" />  ₹10,000 fine</label>   <br/> 
      <label> <input  value={"l"}   name="q3"   checked={selectedValue.q3 === "l"}    onChange={(e) => handleOptionChange(e, "q3")}      type="radio" /> License suspension</label>  <br/>  
      <label> <input  value={"2"}   name="q3"   checked={selectedValue.q3 === "2"}    onChange={(e) => handleOptionChange(e, "q3")}      type="radio" />No penalty</label> <br/>   
      <label> <input  value={"3"}   name="q3"   checked={selectedValue.q3 === "3"}    onChange={(e) => handleOptionChange(e, "q3")}      type="radio" />Vehicle confiscation</label>  <br/>  
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q3 === correctAnswer.q3 ? "green" : "red" }}>
        {message.q3}
      </div>
      <button onClick={handleSubmit} style={{  margin: "20px 0px 20px 25%",padding: "8px 15px", cursor: "pointer",borderRadius:"10px" }}>
        Submit
      </button>


      </div>


      <Link
        to="/overview4"
        style={{
          color: "#007bff",
          textDecoration: "none",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          fontSize: "16px",
          fontWeight: "bold",
        }}
      >
        → Next
      </Link>
    </div>

  </>)
};

export default Useage;
