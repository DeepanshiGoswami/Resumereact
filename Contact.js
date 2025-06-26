import React, { useState } from "react";
import "../App.css";

import { motion } from "framer-motion";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!\n" + JSON.stringify(formData, null, 2));
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <motion.div
      className="contact-container"
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
        borderBottom: "3px solid #ff8800",
        paddingBottom: "12px"
      }}>
        📬 Contact Me
      </h1>

      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <div>
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required
            style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required
            style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "6px", border: "1px solid #ccc" }} />
        </div>

        <div>
          <label>Message</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required
            style={{ width: "100%", padding: "10px", fontSize: "1rem", borderRadius: "6px", border: "1px solid #ccc", height: "120px" }} />
        </div>

        <button type="submit" style={{
          backgroundColor: "#007bff",
          color: "white",
          padding: "12px 24px",
          fontSize: "1rem",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer"
        }}>
          Send Message
        </button>
      </form>
    </motion.div>
  );
}

export default Contact;