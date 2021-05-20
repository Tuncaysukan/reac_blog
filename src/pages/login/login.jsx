import React from 'react'
import './login.css'

export default function login() {
  return (
    <div className="login">
      <span className="loginTitle">Login </span>
      <form className="loginForm">
        <label htmlFor="">Email</label>
        <input className="loginInput" type="text" placeholder="Enter Your Email.." />
        <label htmlFor="">Password</label>
        <input className="loginInput" type="password" placeholder="Enter Your Password.." />
        <button className="loginButton">Login</button>
      </form>
      <button className="loginRegisterButton">Register</button>
    </div>
  );
}
