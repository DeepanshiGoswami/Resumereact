import React from "react";
import "../App.css";

import { motion } from "framer-motion";

function Resume() {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/Deepanshi_Goswami_Resume.pdf"; // Ensure this file is in the public folder
    link.download = "Deepanshi_Goswami_Resume.pdf";
    link.click();
  };

  return (
    <motion.div
      className="resume-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      style={{
        padding: "40px",
        backgroundColor: "#fefefe",
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
        borderBottom: "3px solid #6c63ff",
        paddingBottom: "12px"
      }}>
        📄 Resume
      </h1>

      <button onClick={handleDownload} style={{
        backgroundColor: "#6c63ff",
        color: "white",
        border: "none",
        borderRadius: "6px",
        padding: "10px 20px",
        fontSize: "1rem",
        marginBottom: "30px",
        cursor: "pointer"
      }}>
        📥 Download PDF
      </button>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>🎓 Education</h2>
        <ul style={{ fontSize: "1.1rem", color: "#444" }}>
          <li><strong>B.Tech in Computer Science Engineering</strong> – GEHU, Dehradun (2022–2026) – CGPA: 7.25</li>
          <li>Senior Secondary (12th CBSE) – 76%</li>
          <li>Secondary (10th CBSE) – 85%</li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>🏅 Certifications</h2>
        <ul style={{ fontSize: "1.1rem", color: "#444" }}>
          <li>Google Cloud Computing Foundations – Swayam, Jul 2023</li>
          <li>Developing Life Skills – NPTEL, Mar 2024</li>
          <li>Communicative English – Swayam, Oct 2024</li>
          <li>
            Coding Ninjas Certificates:
            <ul>
              <li><a href="https://certificate.codingninjas.com/view/ee6613f8fdaee2ac" target="_blank">Certificate 1</a></li>
              <li><a href="https://certificate.codingninjas.com/view/e1903fd809ae5f47" target="_blank">Certificate 2</a></li>
              <li><a href="https://certificate.codingninjas.com/view/58462e6db6c6cb19" target="_blank">Certificate 3</a></li>
              <li><a href="https://certificate.codingninjas.com/view/d412fe53f96f904c" target="_blank">Certificate 4</a></li>
            </ul>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: "30px" }}>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>💡 Soft Skills</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>Problem Solving, Self-Learning, Communication, Adaptability, Teamwork</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.6rem", color: "#1e1e1e" }}>📌 Extracurriculars</h2>
        <p style={{ fontSize: "1.1rem", color: "#444" }}>NSS Member | Tech Wizard 2.0 | Choose and Code | Badminton Tournament</p>
      </section>

    </motion.div>
  );
}

export default Resume;