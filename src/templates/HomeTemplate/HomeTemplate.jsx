import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {AiFillHome} from "react-icons/ai"
import {RiContactsFill, RiTeamFill} from "react-icons/ri"
import {VscSignIn} from "react-icons/vsc"
import {FaBook} from "react-icons/fa"
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

const HomeTemplate = (props) => {
  const { Component } = props;
  // on top when navigate
  const url = useLocation()
  useEffect(() => {
    window.scrollTo(0,0)
  }, [url.pathname])


  //open and close sidebar
  const ref = useRef(null);
  const [appear, setAppear] = useState(false);
  const openMenu = () => {
    setAppear(!appear);
  };
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
              <AiFillHome/>
              <span className={`${url.pathname === '/' ? "active-color" : ""}`}>HOME</span>
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={openMenu}>
              <RiContactsFill/>
              <span className={`${url.pathname === '/contact' ? "active-color" : ""}`}>CONTACT</span>
            </Link>
          </li>
          <li>
            <Link to="/courses" onClick={openMenu}>
              <FaBook/>
              <span className={`${url.pathname === '/courses' ? "active-color" : ""}`}>COURSES</span>
            </Link>
          </li>
          <li>
            <Link to="/ourteam" onClick={openMenu}>
              <RiTeamFill/>
              <span className={`${url.pathname === '/ourteam' ? "active-color" : ""}`}>OUR TEAM</span>
            </Link>
          </li>
          <li>
            <Link to="/signin" onClick={openMenu}>
              <VscSignIn/>
             <span>SIGN IN</span> 
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
