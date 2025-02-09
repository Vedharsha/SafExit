//import React from "react";
import Side from "./Side";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Page5 = () => {

  
const navigate = useNavigate("");
  
  const [selectedValue, setSelectedValue] = useState({
    q1:null,
    q2:null,
  q3:null});
  const [message, setMessage] = useState({
    q1:"",
    q2:"",
    q3:"",
  });


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
      navigate("/Page6");

    }
  };

  return(
  <>
  <Side/>
  <div style={{ marginLeft: "270px", padding: "30px", flex: 1 }}>
  <h2>Tamil Nadu Non-Motorized Transport (NMT) Act – Protection for Pedestrians & Cyclists   
</h2>
<p>The Tamil Nadu Non-Motorized Transport (NMT) Act represents a landmark legislation designed to transform urban mobility by prioritizing pedestrians and cyclists. The Act addresses pressing issues like traffic congestion, air pollution, and road safety in rapidly urbanizing cities through comprehensive initiatives. At its core, the Act enforces strict pedestrian rights at zebra crossings, mandating vehicles to come to a complete stop for pedestrians with fines ranging from ₹500 to ₹1,000 for violations. Cities have also introduced pedestrian-only zones in high-traffic areas, while Coimbatore has pioneered smart pedestrian signals that dynamically adjust their timing based on real-time foot traffic.

The legislation mandates the development of dedicated cycle lanes physically separated from motorized traffic, addressing a major barrier to cycling adoption in urban areas. Cities like Chennai and Madurai have already begun implementing cycle lane networks with plans for expansion. The Act&apos;s scope extends beyond urban centers to include smaller towns and rural regions, ensuring equitable access to non-motorized transport infrastructure statewide. This comprehensive approach includes the construction of footpaths, pedestrian bridges, and cycling tracks in rural areas, complemented by public awareness campaigns and community outreach programs to promote sustainable transport alternatives.

A distinguishing feature of the Act is its strong emphasis on inclusivity and accessibility, requiring all pedestrian infrastructure to accommodate diverse users, including the elderly, children, and differently-abled individuals. This includes the installation of tactile paving for the visually impaired, wheelchair ramps, and adequate lighting for nighttime safety. The Act has already demonstrated positive impacts on public health through reduced air pollution and increased physical activity, while also providing economic benefits by lowering transportation costs and boosting local economies through pedestrian-friendly commercial areas. The successful implementation of these initiatives relies on continued collaboration among local governments, urban planners, transportation authorities, and community organizations, making the Tamil Nadu NMT Act a model for sustainable urban development across India.

</p>

<h1>
1.What happens if a driver does not stop for a pedestrian at a zebra crossing?  
</h1>
<div style={{marginLeft:""}}>

<label><input value={"a"} name="q1" checked={selectedValue.q1 === "a"} onChange={(e) => handleOptionChange(e, "q1")} type="checkbox"/> ₹500 to ₹1,000 fine </label> <br></br>
      <label><input   value={"1"}      name="q1" checked={selectedValue.q1 === "1"}    onChange={(e) => handleOptionChange(e, "q1")}  type="checkbox"/>The pedestrian is fined          </label><br></br>
      <label><input   value={"2"}      name="q1" checked={selectedValue.q1 === "2"}   onChange={(e) => handleOptionChange(e, "q1")}          type="checkbox"/>The driver gets a warning     </label>   <br></br>
      <label><input   value={"3"}      name="q1" checked={selectedValue.q1 === "3"}    onChange={(e) => handleOptionChange(e, "q1")}         type="checkbox"/>The vehicle is seized        </label><br></br>
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q1 === correctAnswer.q1 ? "green" : "red" }}>
        {message.q1}
      </div>
     
      </div>
      {/* 22 */}
      <h1>
      2. What is a key feature of Coimbatore’s pedestrian safety initiative?  
      </h1>
      <div style={{marginLeft:""}}>

      <label> <input  value={"b"}    name="q2"   checked={selectedValue.q2 === "b"}   onChange={(e) => handleOptionChange(e, "q2")} type="checkbox"/> Smart pedestrian signals that adjust timing based on foot traffic </label><br></br>
      <label> <input  value={"1"}    name="q2"   checked={selectedValue.q2 === "1"}    onChange={(e) => handleOptionChange(e, "q2")} type="checkbox"/>Banning pedestrians from crossing roads     </label>                       <br></br> 
      <label> <input  value={"2"}    name="q2"   checked={selectedValue.q2 === "2"}    onChange={(e) => handleOptionChange(e, "q2")} type="checkbox"/> Allowing vehicles to drive on sidewalks  </label>                         <br></br>    
      <label> <input  value={"3"}    name="q2"   checked={selectedValue.q2 === "3"}    onChange={(e) => handleOptionChange(e, "q2")} type="checkbox"/> Removing zebra crossings         </label>                                 <br></br>   
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q2 === correctAnswer.q2 ? "green" : "red" }}>
        {message.q2}
      </div>
      </div>
      
      {/* 33 */}
      <h1>
      3. Why were pedestrian-only zones introduced?  
      </h1>
      <div style={{marginLeft:""}}>

      <label> <input  value={"c"}   name="q3"   checked={selectedValue.q3 === "c"}   onChange={(e) => handleOptionChange(e, "q3")}            type="checkbox"/>To reduce vehicle congestion in commercial areas  </label> <br></br>
      <label> <input  value={"1"}   name="q3"   checked={selectedValue.q3 === "1"}    onChange={(e) => handleOptionChange(e, "q3")}           type="checkbox"/>To allow more vehicle parking   </label><br></br>
      <label><input   value={"2"}   name="q3"   checked={selectedValue.q3 === "2"}    onChange={(e) => handleOptionChange(e, "q3")}          type="checkbox"/> To increase vehicle speed limits   </label><br></br>
      <label> <input  value={"3"}   name="q3"   checked={selectedValue.q3 === "3"}    onChange={(e) => handleOptionChange(e, "q3")}           type="checkbox"/>To remove public walking spaces   </label><br></br>
      <div style={{ marginTop: "10px", fontSize: "16px", color: selectedValue.q3 === correctAnswer.q3 ? "green" : "red" }}>
        {message.q3}
      </div>
      <button onClick={handleSubmit} style={{ margin: "20px 0px 20px 25%", padding: "8px 15px", cursor: "pointer",borderRadius:"10px" }}>
        Submit
      </button>
      </div>


    
      

  </div>
  </>
)};

export default Page5;
