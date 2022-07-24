import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../../../img/header/logo.png";

const Header = (props) => {

  return (
    <div className="header">
      <div className="header_cover">
        <div className="header_left">
          <img src={logo} alt="logo" />
        </div>
        <div className="header_right">
          <button onClick={props.openMenu}>
        <lord-icon src="https://cdn.lordicon.com/wgwcqouc.json" trigger="morph" colors="primary:#ffffff,secondary:#08a88a" style={{width: 50, height: 50}}>
</lord-icon>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
