import React from "react";
import { Link } from "react-router-dom";
import "./TopBar.css";

export default function TopBar() {
  const user = false;
  return (
    <div className="topbar">
      <div className="topLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
        <i className=" topIcon fab fa-pinterest-square"></i>
        <i className=" topIcon fab fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/About">
              About
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Contact">
              Contact
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/Write">
              Write
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              {user && "LOGOUT"}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img className="topImg" src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <i className=" topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
