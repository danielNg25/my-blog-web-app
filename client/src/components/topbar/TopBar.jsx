import React from "react";
import { Link } from "react-router-dom";
import "./topbar.css";
import axios from "axios";
import { useState, useEffect,useContext } from "react";
import { Context } from "../../context/Contex";

export default function TopBar() {
  const { user } = useContext(Context);
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
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
          {cats.map((c) => {
            return (
              <li className="topListItem">
                <Link to={`/?category=${c.name}`} className="link">
                  {c.name}
                </Link>
              </li>
            );
          })}
          <li className="topListItem">
            <Link to="/about" className="link">
              ABOUT
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user?(
          <img
          className="topImg"
          src={user.profilePic}
          alt=""
        />
        ):(<div></div>)}
        
        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
