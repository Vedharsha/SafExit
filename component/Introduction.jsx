import React from "react";
import { Link } from "react-router-dom";
import Side from "./Side";

const styles = {
  subheading: {
    color: "yellow", // Or your preferred color
    fontSize: "2em", // Adjust size as needed
    fontFamily: "Arial", // Choose your font
    textAlign: "center",
    marginBottom: "15px", // Add some spacing
    textTransform: "uppercase" // Example: make it uppercase
  },
  // ... other styles if you have them
};


const Introduction = () => (
  <>
    <Side />
    <div
      style={{
        borderRadius:"15px",
        padding: "30px",
        flex: 1,
        height:"cover",
        width:"cover",
        background: "linear-gradient(to right, #4facfe, #00f2fe)", // Gradient background
        color: "#fff", // White text for better readability
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div className="container" style={{marginLeft:"250px"}}>

      <h2 style={styles.subheading}>Introduction to Advanced Traffic Laws in Tamil Nadu</h2> {/* Apply the style */}
      <p style={{ width:"fit-content" }}>
        Tamil Nadu, one of India's most urbanized states, has implemented advanced traffic management systems to address challenges in cities like Chennai, Coimbatore, and Madurai. The state's approach combines the national Motor Vehicles Act with state-specific policies, emphasizing technology-driven enforcement through AI-based surveillance, ANPR systems, and e-challans. Key features include strict pedestrian safety measures, a point system for traffic violations, and smart urban congestion management. The implementation of these technologies has led to reduced accident rates, improved rule compliance, and decreased corruption in enforcement. Tamil Nadu's model demonstrates how modern technology can effectively enhance urban mobility and road safety.
      </p>
      </div>

      <Link
        to="/set2"
        style={{
          color: "#fff",
          textDecoration: "none",
          backgroundColor: "#333",
          padding: "12px 20px",
          marginTop: "20px",
          borderRadius: "5px",
          display: "inline-block",
          fontSize: "16px",
          fontWeight: "bold",
          transition: "background 0.3s ease",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#555")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#333")}
      >
        → Next
      </Link>
    </div>
  </>
);

export default Introduction;