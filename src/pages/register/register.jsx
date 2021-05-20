import React from 'react'
import './register.css'

export default function register() {
  return (
    <div className="register">
      <span className="registerTitle">Register </span>
      <form className="registerForm">
        <label htmlFor="">Name</label>
        <input className="registerInput" type="text" placeholder="Enter Your Name.." />
        <label htmlFor="">SurName</label>
        <input className="registerInput" type="text" placeholder="Enter Your Surname.." />
        <label htmlFor="">Email</label>
        <input className="registerInput" type="text" placeholder="Enter Your Email.." />
        <label htmlFor="">Password</label>
        <input className="registerInput" type="password" placeholder="Enter Your Password.." />
        <label htmlFor="">Comfirm Password</label>
        <input className="registerInput" type="password" placeholder="Enter Your Password.." />
        <button className="registerButton">Register</button>
      </form>
      <button className="registerRegisterButton">Login</button>
    </div>
  );
}
