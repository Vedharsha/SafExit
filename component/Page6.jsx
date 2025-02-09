import React from "react";
import Side from "./Side";
import { useState} from "react";
import { useNavigate } from "react-router-dom";


const Page6 = () => {


  const [selectedValue, setSelectedValue] = useState({
    q1: null,
    q2: null,
    q3: null
  });
  const [message, setMessage] = useState({
    q1: "",
    q2: "",
    q3: "",
  });

  const navigate = useNavigate("");

  const correctAnswer = {
    q1: "a",
    q2: "b",
    q3: "c",
  };

  const handleOptionChange = (event, question) => {
    const value = event.target.value;
    setSelectedValue((prev) => ({ ...prev, [question]: value }));


    if (value === correctAnswer[question]) {
      setMessage((prev) => ({ ...prev, [question]: "✅ Correct Answer!" }));
    } else {
      setMessage((prev) => ({ ...prev, [question]: "❌ Incorrect Answer! Try again." }));
    }

  };

  const handleSubmit = () => {
    if (!selectedValue.q1 || !selectedValue.q2 || !selectedValue.q3) {
      alert("Please select at least one option.");
    }

    else {
      alert(" Answers submitted successfully!");
      navigate("/Page7");

    }
  };




  return(
 
    <>
      <Side />
      <div style={{
        borderRadius: "15px",
        padding: "30px",
        flex: 1,
        height: "fit-content",
        background: "linear-gradient(to right, #4facfe, #00f2fe)", // Gradient background
       // White text for better readability
        display: "flex",
        flexDirection: "column",
        marginLeft:"20px"
      }}>
        <div className="container " style={{ marginLeft: "250px" }}>
          <h2 className="" style={{color:"yellow"}}>The Motor Vehicles (Amendment) Act, 2019 – Stricter Penalties for Violations

          </h2>
          <p className="text-warning"  >Tamil Nadu Vehicle Pollution Control Act – Mandatory Emission Checks   
          In response to rising  air pollution levels, Tamil Nadu enforces   strict vehicle emission norms  under the  Vehicle Pollution Control Act. All vehicles must undergo   mandatory pollution control checks every six months, and failure to comply results in fines of   ₹1,000 for the first offense and ₹5,000 for repeated violations. Coimbatore, known for its   industrial growth, has introduced   pollution check stations at fuel pumps  to ensure compliance. Additionally,  electric and CNG vehicles receive incentives  under this act to promote  eco-friendly transportation .  </p>


          <h1>
            1. How often must vehicle owners in Tamil Nadu conduct pollution control checks? 

          </h1>

          <div style={{ marginLeft: "30px" }}>


            <label> <input value={"0"} name="q1" checked={selectedValue.q1 === "0"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />Every 3 months                </label><br></br>
            <label><input value={"a"} name="q1" checked={selectedValue.q1 === "a"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />Every 6 months   </label>   <br></br>
            <label><input value={"2"} name="q1" checked={selectedValue.q1 === "2"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />Every year </label>  <br />
            <label><input value={"3"} name="q1" checked={selectedValue.q1 === "3"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />No mandatory checks  </label>  <br />
           
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
              {message.q1}
            </div>
          </div>


          {/* 22 */}

          <h1>
            2.What is the fine for failing to conduct mandatory emission tests?  
          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q2" checked={selectedValue.q2 === "0"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />₹500            </label><br></br>
            <label><input value={"b"} name="q2" checked={selectedValue.q2 === "b"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />₹1,000 for the first offense </label><br></br>
            <label><input value={"2"} name="q2" checked={selectedValue.q2 === "2"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />₹10,000 for repeated violations   </label><br></br>
            <label><input value={"3"} name="q2" checked={selectedValue.q2 === "3"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />No penalty   </label><br></br>
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
              {message.q2}
            </div>
          </div>
          {/* 33 */}
          <h1>
            3. Where can Coimbatore vehicle owners check pollution levels?  


          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"c"} name="q3" checked={selectedValue.q3 === "c"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Any petrol pump with an emission testing facility               </label><br />
            <label><input value={"1"} name="q3" checked={selectedValue.q3 === "1"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />Only at RTO offices   </label><br />
            <label><input value={"2"} name="q3" checked={selectedValue.q3 === "2"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />  Private garages without government approval   </label><br />
            <label><input value={"3"} name="q3" checked={selectedValue.q3 === "3"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> No need for pollution checks </label><br />
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q3 === correctAnswer.q3 ? "green" : "red" }}>
              {message.q3}
            </div>
          </div>


          <button  onClick={handleSubmit} style={{ padding: "8px 15px",  margin: "20px 0px 20px 25%", cursor: "pointer", borderRadius:"10px" }}>
            Submit
          </button>



        </div>



      </div>



    </>

)};

export default Page6;
