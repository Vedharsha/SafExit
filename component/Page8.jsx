import React from "react";
import Side from "./Side";
import { useState} from "react";
import { useNavigate } from "react-router-dom";


const Page8 = () => {


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
      alert("Claim your certificate!");
      navigate("/Certificate");

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
          <h2 className="" style={{color:"yellow"}}>Tamil Nadu School Zone Traffic Safety Act – Child Safety Regulations   

          </h2>
          <p className=""  >To enhance  student safety, Tamil Nadu enforces   strict traffic regulations in school zones. The   School Zone Traffic Safety Act  mandates  reduced speed limits of 25 km/h  near schools, and violations result in  ₹3,000 fines. Additionally,   speed breakers, pedestrian crossings, and school safety signs  are mandatory near all schools. Coimbatore has also introduced  traffic marshals  at key junctions near  educational institutions  to manage  peak-hour congestion .  
</p>

          <h1>
            1. What is the maximum speed limit near schools in Tamil Nadu?  

          </h1>

          <div style={{ marginLeft: "30px" }}>


            <label> <input value={"a"} name="q1" checked={selectedValue.q1 === "a"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />25 km/h </label><br></br>
            <label><input value={"1"} name="q1" checked={selectedValue.q1 === "1"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />40 km/h  </label>   <br></br>
            <label><input value={"2"} name="q1" checked={selectedValue.q1 === "2"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />50 km/h     </label>  <br />
            <label><input value={"3"} name="q1" checked={selectedValue.q1 === "3"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />No specific limit  </label>  <br />
           
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
              {message.q1}
            </div>
          </div>


          {/* 22 */}

          <h1>
            2.What safety feature is commonly added near schools?  
          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q2" checked={selectedValue.q2 === "0"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Extra traffic signals </label><br></br>
            <label><input value={"b"} name="q2" checked={selectedValue.q2 === "b"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Pedestrian crossings and speed breakers   </label><br></br>
            <label><input value={"2"} name="q2" checked={selectedValue.q2 === "2"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Bus priority lanes </label><br></br>
            <label><input value={"3"} name="q2" checked={selectedValue.q2 === "3"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />No safety measures required  </label><br></br>
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
              {message.q2}
            </div>
          </div>
          {/* 33 */}
          <h1>
            3. How is traffic managed during school hours in Coimbatore?  


          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q3" checked={selectedValue.q3 === "0"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />No special measures  </label><br />
            <label><input value={"1"} name="q3" checked={selectedValue.q3 === "1"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />Vehicles are banned completely </label><br />
            <label><input value={"c"} name="q3" checked={selectedValue.q3 === "c"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />Traffic marshals control the movement</label><br />
            <label><input value={"3"} name="q3" checked={selectedValue.q3 === "3"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />Schools handle traffic alone</label><br />
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

export default Page8;
