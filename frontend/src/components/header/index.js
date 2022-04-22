import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Logo,
  Search,
  HomeActive,
  Friends,
  Watch,
  Market,
  Gaming,
  Menu,
  Notifications,
  Messenger,
  ArrowDown,
} from "../../svg";

const Header = () => {
  const { user } = useSelector((user) => ({ ...user }));
  console.log(user);
  const color = "#65676b";
  return (
    <div>
      <header>
        <div className="header_left">
          <Link to="/" className="header_logo">
            <div className="circle">
              <Logo />
            </div>
          </Link>

          <div className="search search1">
            <Search color={color} />
            <input
              type="text"
              className="hide_input"
              placeholder="Search Facebook"
            />
          </div>
        </div>

        <div className="header_middle">
          <Link to="/" className="middle_icon">
            <HomeActive />
          </Link>
          <Link to="/" className="middle_icon hover1">
            <Friends color={color} />
          </Link>
          <Link to="/" className="middle_icon hover1">
            <Watch color={color} />
          </Link>
          <Link to="/" className="middle_icon hover1">
            <Market color={color} />
          </Link>
          <Link to="/" className="middle_icon hover1">
            <Gaming color={color} />
          </Link>
        </div>

        <div className="header_right">
          <Link to="/profile" className="profile_link hover1">
            <img src={user?.picture} alt="" />
            <span>{user?.first_name}</span>
          </Link>
          <div className="circle_icon hover1">
            <Menu />
          </div>
          <div className="circle_icon hover1">
            <Messenger />
          </div>
          <div className="circle_icon hover1">
            <Notifications />
            <div className="right_notification">5</div>
          </div>
          <div className="circle_icon hover1">
            <ArrowDown />
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
