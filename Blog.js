import React from "react";
import "../App.css";

import { motion } from "framer-motion";

function Blog() {
  return (
    <motion.div 
      className="blog-container"
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
        📘 Blog Articles & Learning Notes
      </h1>

      <article style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.7rem", color: "#1e1e1e" }}>🚀 Building My Portfolio Website from Scratch</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
          This project was my gateway into React and modern web development. I used React Router for seamless navigation and Framer Motion for elegant transitions. All components are modular and styled without Tailwind or any UI libraries. The goal? A truly personalized experience.
        </p>
      </article>

      <article style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.7rem", color: "#1e1e1e" }}>🧠 JavaScript Insights: 5 Things I Wish I Knew Sooner</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
          Did you know `var` hoisting can trip up async functions? Or that `forEach` doesn’t work with `await`? I’ve collected five key lessons from real bugs and breakthroughs that every aspiring JavaScript dev should know.
        </p>
      </article>

      <article style={{ marginBottom: "40px" }}>
        <h2 style={{ fontSize: "1.7rem", color: "#1e1e1e" }}>🤖 Embracing Machine Learning Projects Early</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
          From detecting breast cancer to analyzing text with SpaCy, I’ve worked on several ML projects using Scikit-learn and real datasets. I share how I overcame fear of math-heavy models and built confidence through practical implementation.
        </p>
      </article>

      <article>
        <h2 style={{ fontSize: "1.7rem", color: "#1e1e1e" }}>🌐 Why I Love Building for the Web</h2>
        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#444" }}>
          Web development combines creativity with problem-solving. I explain how simple HTML & CSS projects grew into full-fledged applications, and how I learned to debug faster, design better, and collaborate smarter.
        </p>
      </article>

    </motion.div>
  );
}

export default Blog;
