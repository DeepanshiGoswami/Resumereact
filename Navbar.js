import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";

import { FiSun, FiMoon } from "react-icons/fi";

function Navbar() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle("dark-theme", !darkMode);
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: darkMode ? "#222" : "#ffffff",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    padding: "12px 30px",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    transition: "background-color 0.3s ease"
  };

  const linkStyle = {
    margin: "0 10px",
    textDecoration: "none",
    fontSize: "1rem",
    fontWeight: "500",
    color: darkMode ? "#eee" : "#333",
    padding: "8px 12px",
    borderRadius: "6px",
    transition: "all 0.2s ease-in-out"
  };

  const activeStyle = {
    backgroundColor: "#6c63ff",
    color: "#fff"
  };

  return (
    <nav style={navStyle}>
      <div>
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/projects", label: "Projects" },
          { path: "/skills", label: "Skills" },
          { path: "/resume", label: "Resume" },
          { path: "/contact", label: "Contact" },
          { path: "/blog", label: "Blog" },
        ].map((route) => (
          <Link
            key={route.path}
            to={route.path}
            style={{
              ...linkStyle,
              ...(location.pathname === route.path ? activeStyle : {})
            }}
          >
            {route.label}
          </Link>
        ))}
      </div>
      <button onClick={toggleDarkMode} style={{
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: "1.2rem",
        color: darkMode ? "#ffe600" : "#333"
      }}>
        {darkMode ? <FiSun /> : <FiMoon />}
      </button>
    </nav>
  );
}

export default Navbar;