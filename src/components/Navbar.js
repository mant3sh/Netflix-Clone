import React, { useState, useEffect } from "react";
import "./Nav.css";

function Navbar() {
  const [navbackground, setNavbackground] = useState(false);
  const handel = () => {
    if (window.scrollY > 100) {
      setNavbackground(true);
    } else setNavbackground(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", handel);

    return () => {
      window.removeEventListener("scroll", handel);
    };
  }, []);

  return (
    <div className={`nav ${navbackground && "nav_back"}`}>
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="NETFLIX"
      />
      <img
        className="user"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt=""
      />
    </div>
  );
}

export default Navbar;
