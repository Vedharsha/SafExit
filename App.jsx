//import React from "react";
//import { BrowserRouter as Router, Route, Routes,useNavigate } from "react-router-dom";

import { Route, Routes, useNavigate } from "react-router-dom";

import  { useState } from "react";
import Introduction from "./component/Introduction";
import Set from "./component/Set2";
import Useage from "./component/Useage3";
import Overview from "./component/Overview4";
import Page5 from "./component/Page5";
import Page6 from "./component/Page6";
import Conclusion from "./component/Conclusion"
import Page7 from './component/Page7';
import Page8 from "./component/Page8";
import Certificate from "./component/Certificate";
import UnityComponent from "./UnityComponent";

// const scrollToTop = () => {
//   scroller.scrollTo("top", { smooth: true, duration: 500 });
// };

function App () {


  return(

<>
    <div style={{ display: "flex", height: "100vh" }}>
     
      <Routes>
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/set2" element={<Set />} />
        <Route path="/useage3" element={<Useage />} />
        <Route path="/Overview4" element={<Overview />} />
        <Route path="/Page5" element={<Page5 />} />
        <Route path="/Page6" element={<Page6 />} />
        <Route path="/Conclusion" element={<Conclusion />} />
        <Route path="/" element={<Welcome />} />
        <Route path="/Page7" element={<Page7 />} />
        <Route path="/Page8" element={<Page8 />} />
        <Route path="/Certificate" element={<Certificate />} />
        <Route path="/UnityComponent" element={<UnityComponent />} />
        


      </Routes>

      
      

  
    </div>
    
    
    <div>
      
      
     {/* Scroll to Top Button */}
     {/* <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        padding: "12px 16px",
        borderRadius: "50%",
        cursor: "pointer",
        fontSize: "18px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        transition: "background 0.3s",
      }}
      onMouseOver={(e) => (e.target.style.background = "#0056b3")}
      onMouseOut={(e) => (e.target.style.background = "#007bff")}
    >
      ↑
    </button>
     */}

    </div>
    
    

    
</>
    
  )
  function Welcome() {

    const navigate = useNavigate();

    const handleSubmit = (e) => {
      e.preventDefault();

      navigate('/Introduction');


    };
    // const handleSubmit = (e) => {
    //   e.preventDefault();
    //   console.log("Email:", email);
    //   console.log("Password:", password);
    // };
    
  const [text, setText] = useState("");
  const [selectedOption, setSelectedOption] = useState("");

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!text || !selectedOption) {
  //     alert("Please select at least one option.");
  //   }
   
  //   else {
  //     alert(" Login successfully");
  //     navigate("/intoduction");

  //   }
  // };

    return (
      <>







    <div
      style={{
        display: "flex",
        justifyContent: "center",
        borderRadius:"30px",
        margin:"50px 30px 40px 30%",
        height: "cover",
        backgroundColor: "#f4f4f4",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          width: "350px",
          textAlign: "center",
      
          
        }}
      >
        <h2 style={{ fontSize: "24px", fontWeight: "bold", color: "#333" }}>SafExit</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "15px", textAlign: "left" }}>

            <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px" }}>
              Name:
            </label>
            <input
              type="text"
              value={text}
              placeholder="Enter name"
              onChange={(e) => setText(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "8px",
                border: "1px solid #ccc",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            />
          </div>

          <div style={{textAlign: "left",marginBottom: "15px"}}>
      <label style={{ display: "block", fontWeight: "bold", marginBottom: "5px"  }}>
        Choose an Option:
      </label>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          fontSize: "14px",
          marginBottom:"30px"
        }}
      >
        <option value="">Select  Experience</option>
        <option value="option1">0-5</option>
        <option value="option2">5-10</option>
        <option value="option3">10-20</option>
        <option value="option3">20</option>
      </select>

    
    </div>
          <button
            type="submit"
            style={{
              width: "100%",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              padding: "10px",
              fontSize: "16px",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0056b3")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#007bff")}
          >
            Login
          </button>
        </form>
      </div>
    </div>


{/* 
        <div  style={{ marginTop: "20%", color: "blue" ,marginLeft:"38%"}}>
          <h1>
            Login 
          </h1>
          <div>x
            <input type="te"/>
          </div>

          <div className='p-3' style={{ textAlign:"center" }}>

            <button type="button" style={{borderRadius:"70px",background:"green",fontSize:"25px"}} onClick={handleClick}>
              Get Set Go →
            </button>
          </div>

        </div>
 */}

      </>)
  }


    }


export default App;
