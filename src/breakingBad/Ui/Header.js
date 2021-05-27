import React from "react";
import "../BreakingBad.css";
import Logo from "../img/logo.png";
const Header = () => {
  return (
    <div className="center">
      <div style={{ marginTop: "20px" }}>
        <img src={Logo} alt="Bad" />
      </div>
    </div>
  );
};

export default Header;
