//import React from "react";
import { Link } from "react-router-dom";

const sections = [
  { id: "introduction", title: "Introduction" },
  { id: "set2", title: "Stricter Penalties" },
  { id: "useage3", title: "Helmet Law " },
  { id: "overview4", title: "ITMS Act" },
  { id: "Page5", title: "NMT Act" },
  { id: "Page6", title: "Motor Vehicles Act" },
  { id: "Page7", title: "Tamil Nadu Smart Parking Act" },
  { id: "Page8", title: "School Zone Traffic Safety Act" },
  { id: "Conclusion", title: "Conclusion" },
  { id: "Certificate", title: "Certificate" },
  { id: "UnityComponent", title: "UnityComponent" },
];




const Side = () => {

  const sidebarStyle = {
    overflowY: "auto",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    width: "250px",
        backgroundColor: "#1f1f1f",
        color: "#fff",
        padding: "10px",
        position: "fixed",
        height: "100vh",
        boxShadow: "10px 6px 17px rgba(0, 0, 0, 0.2)",
        borderRadius:"20px",
  };
  

  return(
  <>
 
  

  <nav style={sidebarStyle} className="sidebar"
   
  >
    <h2 style={{ textAlign: "center", marginBottom: "20px", fontSize: "22px" }}>
      SafExit
    </h2>
    <ul style={{ listStyle: "none", padding: "0" }}>

      {/* map the all array of section */}
      
      {sections.map((section) => (
        <li key={section.id} style={{ marginBottom: "12px" }}>

          {/* Link the sections one by one */}
          <Link
            to={`/${section.id}`}
            style={{
              color: "#ddd",
              textDecoration: "none",
              display: "block",
              padding: "10px 15px",
              borderRadius: "5px",
              transition: "background 0.1s ",
            }}
            
            // for hover

            onMouseOver={(e) => (e.target.style.background = "#333")}
            onMouseOut={(e) => (e.target.style.background = "none")}
          >
            {section.title}

            
          </Link>
        </li>
      ))}
    </ul>
  </nav>


  
  </>
)};

export default Side;
