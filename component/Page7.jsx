import React from "react";
import Side from "./Side";
import { useState} from "react";
import { useNavigate } from "react-router-dom";


const Page7 = () => {


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
      navigate("/Page8");

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
          <h2 className="" style={{color:"yellow"}}>Tamil Nadu Smart Parking Act – Digital Parking Solutions  

          </h2>
          <p className=""  >Coimbatore has introduced a  Smart Parking System  under the  Smart Parking Act, utilizing   automated parking meters, digital payments, and real-time space tracking. This initiative addresses   illegal parking issues  in  high-traffic areas like Gandhipuram, RS Puram, and Peelamedu. Vehicles parked   illegally or beyond the allotted time  receive  automated fines via e-challan. The act also promotes   multi-level parking structures  to  ease congestion in commercial zones .  </p>

          <h1>
            1.What technology is used in Coimbatore’s Smart Parking System? 

          </h1>

          <div style={{ marginLeft: "30px" }}>


            <label> <input value={"0"} name="q1" checked={selectedValue.q1 === "0"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />Manual ticketing by traffic police  </label><br></br>
            <label><input value={"a"} name="q1" checked={selectedValue.q1 === "a"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />CCTV surveillance and automatic fine issuance   </label>   <br></br>
            <label><input value={"2"} name="q1" checked={selectedValue.q1 === "2"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />Public complaints and random checking    </label>  <br />
            <label><input value={"3"} name="q1" checked={selectedValue.q1 === "3"} onChange={(e) => handleOptionChange(e, "q1")} type="radio" />No monitoring system in place   </label>  <br />
           
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
              {message.q1}
            </div>
          </div>


          {/* 22 */}

          <h1>
            2.Which areas in Coimbatore have Smart Parking Systems?   
          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q2" checked={selectedValue.q2 === "0"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Ukkadam and Kuniyamuthur    </label><br></br>
            <label><input value={"b"} name="q2" checked={selectedValue.q2 === "b"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Gandhipuram, RS Puram, and Peelamedu    </label><br></br>
            <label><input value={"2"} name="q2" checked={selectedValue.q2 === "2"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />Trichy Road and Mettupalayam Road     </label><br></br>
            <label><input value={"3"} name="q2" checked={selectedValue.q2 === "3"} onChange={(e) => handleOptionChange(e, "q2")} type="radio" />All village areas    </label><br></br>
            <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
              {message.q2}
            </div>
          </div>
          {/* 33 */}
          <h1>
            3. How do vehicle owners pay for smart parking in Coimbatore?  


          </h1>

          <div style={{ marginLeft: "30px" }}>

            <label><input value={"0"} name="q3" checked={selectedValue.q3 === "0"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Cash only </label><br />
            <label><input value={"1"} name="q3" checked={selectedValue.q3 === "1"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />No payment required </label><br />
            <label><input value={"c"} name="q3" checked={selectedValue.q3 === "c"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" />Online payments and automated meters  </label><br />
            <label><input value={"3"} name="q3" checked={selectedValue.q3 === "3"} onChange={(e) => handleOptionChange(e, "q3")} type="radio" /> Manually at police stations </label><br />
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

export default Page7;
