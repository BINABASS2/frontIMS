import React, { useState } from 'react';
import classNames from 'classnames';
import './Login.css';
import { FaUserCheck, FaLinkedin, FaGoogle, FaTwitter, FaFacebook } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsPersonWorkspace } from "react-icons/bs";

const Login = (props) => {
  const [active, setActive] = useState("login");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    if (name === 'firstName') setFirstName(value);
    else if (name === 'lastName') setLastName(value);
    else if (name === 'login') setLogin(value);
    else if (name === 'password') setPassword(value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    props.onLogin(e, login, password);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    props.onRegister(e, firstName, lastName, login, password);
  };

  return (
    <div className={`container ${isSignUp ? 'sign-up-mode' : ''} content`}>
      <div className='forms-container'>
        <div className='signin-signup'>
          {/* SIGN-IN */}
          <form className='sign-in-form' onSubmit={onSubmitLogin}>
            <h2 className='title'>Sign in</h2>
            <div className='input-field'>
              <FaUserCheck className='icon' />
              <input
                type='text'
                placeholder='Username'
                name="login"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <RiLockPasswordFill className='icon' />
              <input
                type='password'
                placeholder='Password'
                name="password"
                required
                onChange={onChangeHandler}
              />
            </div>
            <input type='submit' value='Login' className='btn solid' />
            <p className='social-text'>Or Sign in with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'><FaFacebook /></a>
              <a href='#' className='social-icon'><FaTwitter /></a>
              <a href='#' className='social-icon'><FaGoogle /></a>
              <a href='#' className='social-icon'><FaLinkedin /></a>
            </div>
          </form>
          {/* END-SIGN-IN */}

          {/* SIGN-UP */}
          <form className='sign-up-form' onSubmit={onSubmitRegister}>
            <h2 className='title'>Sign up</h2>
            <div className='input-field'>
              <FaUserCheck className='icon' />
              <input
                type='text'
                placeholder='First Name'
                name="firstName"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <FaUserCheck className='icon' />
              <input
                type='text'
                placeholder='Last Name'
                name="lastName"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <MdOutlineAlternateEmail className='icon' />
              <input
                type='text'
                placeholder='Email'
                name="login"
                required
                onChange={onChangeHandler}
              />
            </div>
            <div className='input-field'>
              <RiLockPasswordFill className='icon' />
              <input
                type='password'
                placeholder='Password'
                name="password"
                required
                onChange={onChangeHandler}
              />
            </div>
            <input type='submit' value='Sign up' className='btn solid' />
            <p className='social-text'>Or Sign up with social platforms</p>
            <div className='social-media'>
              <a href='#' className='social-icon'><FaFacebook /></a>
              <a href='#' className='social-icon'><FaTwitter /></a>
              <a href='#' className='social-icon'><FaGoogle /></a>
              <a href='#' className='social-icon'><FaLinkedin /></a>
            </div>
          </form>
          {/* END-SIGN-UP */}
        </div>
        <div className='panels-container'>
          <div className='panel left-panel'>
            <div className='content'>
              <h3>New here?</h3>
              <p>Welcome to our system. Please register to continue.</p>
              <button className='btn transparent' onClick={() => setIsSignUp(true)}>Sign up</button>
            </div>
          </div>
          <div className='panel right-panel'>
            <div className='content'>
              <h3>Already a member?</h3>
              <p>Log in to your account to continue.</p>
              <button className='btn transparent' onClick={() => setIsSignUp(false)}>Sign in</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
