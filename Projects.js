import React from "react";
import "../App.css";

import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div 
      className="projects-container"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      style={{
        padding: "40px",
        backgroundColor: "#ffffff",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.1)",
        maxWidth: "850px",
        margin: "40px auto",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <h1 style={{
        fontSize: "2.8rem",
        color: "#222",
        marginBottom: "30px",
        borderBottom: "3px solid #007bff",
        paddingBottom: "12px"
      }}>
        💡 Projects
      </h1>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>AI Chatbot (2024)</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Developed a real-time chatbot using LangChain, LangGraph, and Groq API. Implemented advanced prompt flows and secure config handling.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Breast Cancer Detection App (2024)</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Built a Streamlit-based web application to detect cancerous tumors using a trained Scikit-learn model.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>E-Commerce Front Page (2023)</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Designed a responsive landing page with modern UI elements, animations, and mobile-first grid layouts using CSS and JS.
        </p>
      </div>

      <div style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Currency Converter (2023)</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Created a live currency converter using API integration. Focused on dynamic data binding, styling, and smooth UI interactions.
        </p>
      </div>

      <div>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Named Entity Recognition (2023)</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>
          Used Python and SpaCy to extract named entities from text. Demonstrated its use in chatbot context and search filters.
        </p>
      </div>

    </motion.div>
  );
}

export default Projects;