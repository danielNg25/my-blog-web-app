import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <h3 className="topTitle">Trường's Blog</h3>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/it" className="link">
              IT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/economy" className="link">
              ECONOMY
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/sport" className="link">
              SPORT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/movie" className="link">
              MOVIE
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/music" className="link">
              MUSIC
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/book" className="link">
              BOOK
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/other" className="link">
              OTHER
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <img className="topImg" src="https://i.ibb.co/NK7VNmZ/myAvatar.jpg" alt="" />{" "}
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
