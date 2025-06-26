import React from "react";
import "../App.css";

import { motion } from "framer-motion";

function Skills() {
  return (
    <motion.div 
      className="skills-container"
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
        borderBottom: "3px solid #28a745",
        paddingBottom: "12px"
      }}>
        🛠️ Skills
      </h1>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Languages</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Python, Java, C/C++ (OOP), JavaScript, HTML, CSS</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Frameworks & Libraries</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Bootstrap, LangChain, Streamlit, SpaCy</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Tools & Platforms</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Git, GitHub, VS Code, MySQL, Google Cloud</p>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Core Subjects</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Data Structures & Algorithms, DBMS</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>Interests</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Web Development, Machine Learning, Chatbots</p>
      </section>

    </motion.div>
  );
}

export default Skills;