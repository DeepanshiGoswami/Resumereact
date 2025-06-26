import React from "react";
import { motion } from "framer-motion";
import "../App.css";


function Home() {
  return (
    <motion.div
      className="home-container"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background: "linear-gradient(135deg, #6c63ff, #33c1ff)",
        color: "#fff",
        textAlign: "center",
        padding: "20px"
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px" }}>
        👋 Hi, I'm <span style={{ color: "#ffe600" }}>Deepanshi</span>
      </h1>
      <p style={{ fontSize: "1.3rem", maxWidth: "600px", marginBottom: "30px" }}>
        A creative developer and CSE student passionate about building smart web applications and exploring new technologies.
      </p>
      <a href="/contact" style={{
        padding: "12px 24px",
        backgroundColor: "#ffe600",
        color: "#000",
        fontWeight: "bold",
        borderRadius: "8px",
        textDecoration: "none",
        fontSize: "1rem"
      }}>
        Let's Connect 🚀
      </a>
    </motion.div>
  );
}

export default Home;