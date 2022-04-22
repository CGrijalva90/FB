import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import Logo from "../../svg/logo";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header_left">
          <Link to="/" className="header_logo">
            <div className="circle">
              <Logo />
            </div>
          </Link>
        </div>

        <div className="header_middle"></div>
        <div className="header_right"></div>
      </header>
    </div>
  );
};

export default Header;
