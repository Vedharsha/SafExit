import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";
import { useState } from "react";
import { useNavigate } from "react-router-dom";



const Set = () => {


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
    q1: "10,000",
    q2: "a",
    q3: "b",
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
      navigate("/useage3");

    }
  };




  return (


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
          <p className="text-warning"  >The  Motor Vehicles (Amendment) Act, 2019, introduced stricter penalties
            to enhance road safety and traffic discipline. Tamil Nadu enforces this Act rigorously,
            increasing fines for offenses like drunk driving, overspeeding, signal jumping, and driving
            without a license. Under this Act, driving under the influence of alcohol can lead to a fine of
            ₹10,000 and/or imprisonment of up to 6 months for the first offense. Additionally, Tamil Nadu uses
            e-challan systems  and  AI-based traffic monitoring  to detect violations and issue fines instantly.

          </p>


          <h1>
            1. What is the penalty for first-time drunk driving under this Act?

          </h1>

          <div style={{ marginLeft: "30px" }}>


            <label> <input value={"0"} name="q1" checked={selectedValue.q1 === "0"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />₹1,000 fine                </label><br></br>
            <label><input value={"10,000"} name="q1" checked={selectedValue.q1 === "10,000"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />₹10,000 fine and/or 6 months imprisonment </label>   <br></br>
            <label><input value={"2"} name="q1" checked={selectedValue.q1 === "2"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />₹2,500 fine only</label>  <br />
            <label><input value={"3"} name="q1" checked={selectedValue.q1 === "3"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />₹5,000 fine and license suspension</label>  <br />
           
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
              {message.q1}
            </div>
          </div>


          {/* 22 */}

          <h1>
            2.What system is used to issue fines for traffic violations in Tamil Nadu?
          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"a"} name="q2" checked={selectedValue.q2 === "a"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />e-Challan system           </label><br></br>
            <label><input value={"1"} name="q2" checked={selectedValue.q2 === "1"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Manual police ticketing</label><br></br>
            <label><input value={"2"} name="q2" checked={selectedValue.q2 === "2"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />SMS notifications only  </label><br></br>
            <label><input value={"3"} name="q2" checked={selectedValue.q2 === "3"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />No penalty system exists   </label><br></br>
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
              {message.q2}
            </div>
          </div>
          {/* 33 */}
          <h1>
            3. What offense results in license suspension?

          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q3" checked={selectedValue.q3 === "0"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Parking violations                  </label><br />
            <label><input value={"1"} name="q3" checked={selectedValue.q3 === "1"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Helmet violations  </label><br />
            <label><input value={"b"} name="q3" checked={selectedValue.q3 === "b"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Drunk driving and repeated offenses</label><br />
            <label><input value={"3"} name="q3" checked={selectedValue.q3 === "3"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Driving at night without headlights</label><br />
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
  )
};

export default Set;
