import React from "react";
import "../App.css";

import { motion } from "framer-motion";

function About() {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0, y: 30 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 0.6 }}
      style={{
        padding: "40px",
        backgroundColor: "#fefefe",
        borderRadius: "12px",
        boxShadow: "0 4px 16px rgba(0,0,0,0.12)",
        maxWidth: "850px",
        margin: "40px auto",
        fontFamily: "Segoe UI, sans-serif"
      }}
    >
      <h1 style={{
        fontSize: "2.8rem",
        color: "#222",
        marginBottom: "30px",
        borderBottom: "3px solid #00bfff",
        paddingBottom: "12px"
      }}>
        👩‍💻 About Me
      </h1>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
        Hello! I'm <strong>Deepanshi Goswami</strong>, a Computer Science Engineering student passionate about crafting beautiful digital experiences. My core strengths lie in front-end development, logical problem-solving, and exploring AI-driven applications.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
        My journey in tech began with curiosity about how websites work, and it led me to build projects using HTML, CSS, JavaScript, Python, and frameworks like Streamlit and LangChain. Over time, I’ve also developed a love for backend logic and automation.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
        I enjoy learning through hands-on projects — from an e-commerce landing page to machine learning apps that solve real-world problems. My GitHub is home to everything I build, share, and iterate upon.
      </p>

      <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
        Outside coding, I actively participate in tech contests, NSS activities, and sports. I believe in learning, adapting, and growing with each experience.
      </p>
    </motion.div>
  );
}

export default About;
