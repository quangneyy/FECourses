import React, { useEffect, useRef, useState } from "react";
import { Link, Route } from "react-router-dom";
import { ref } from "yup";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

const HomeTemplate = (props) => {
  const ref = useRef(null);

  const [appear, setAppear] = useState(false);
  
  const openMenu = () => {
    setAppear(!appear);
  };
  const { Component } = props;

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (appear && !ref.current.contains(event.target)) {
        setAppear(!appear)
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [appear]);
  return (
    <div className="cover">
      <div
        ref={ref}
        className={`nav ${appear ? "appear" : "non-appear"} `}
      >
        <ul>
          <li>
            <Link to="/" onClick={openMenu}>
              HOME
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={openMenu}>
              CONTACT
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={openMenu}>
              COURSES
            </Link>
          </li>
          <li>
            <Link to="/ourteam" onClick={openMenu}>
              OUR TEAM
            </Link>
          </li>
          <li>
            <Link to="/signin" onClick={openMenu}>
              SIGN IN
            </Link>
          </li>
        </ul>
      </div>
      <div className={`${appear ? "nav_effect" : "non_nav_effect"}`}>
        <Header appear={appear} openMenu={openMenu} />
        <Component />
        <Footer />
      </div>
    </div>
  );
};

export default HomeTemplate;
