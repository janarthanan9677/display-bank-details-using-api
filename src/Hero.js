import React, { useState } from 'react';
import './Hero.css';
import './Navbar.css';

const Hero = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isFormPopupVisible, setIsFormPopupVisible] = useState(false);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const showFormPopup = () => {
    setIsFormPopupVisible(true);
  };

  const hideFormPopup = () => {
    setIsFormPopupVisible(false);
  };

  return (
    <div>
      <nav className="navbar">
        <a className="logo" href="#">
          <h2>Management System</h2>
        </a>
        <ul className="links">
          <li><a href="/">HOME</a></li>
          <li><a href="/">BRAND</a></li>
          <li><a href="/Product">PRODUCT</a></li>
          <li><a href="/">CONTACT US</a></li>
        </ul>
        <button className="login-btn" onClick={showFormPopup}>LOG IN</button>
      </nav>
      <section id="hero" className="hero">
        <div className="info d-flex align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 data-aos="fade-down">Welcome to chemical industry <span style={{ marginLeft: '175px' }}>storage management system</span></h2>
                <p data-aos="fade-up">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <a className="btn-get-started" href="#">Get Started</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {isFormPopupVisible && (
        <div className="form-popup">
          <span className="close-btn material-symbols-rounded" onClick={hideFormPopup}>close</span>
          {isLogin ? (
            <div className="form-box login">
              <div className="form-details">
                <h2>Welcome Back</h2>
                <p>Please log in using your personal information to stay connected with us.</p>
              </div>
              <div className="form-content">
                <h2>LOGIN</h2>
                <form action="#">
                  <div className="input-field">
                    <input type="text" required />
                    <label>Email</label>
                  </div>
                  <div className="input-field">
                    <input type="password" required />
                    <label>Password</label>
                  </div>
                  <a href="#" className="forgot-pass-link">Forgot password?</a>
                  <button type="submit">Log In</button>
                </form>
                <div className="bottom-link">
                  Don't have an account?
                  <a href="#" id="signup-link" onClick={toggleForm}>Signup</a>
                </div>
                </div>
            </div>
          ) : (
            <div className="form-box signup">
              <div className="form-details">
                <h2>Create Account</h2>
                <p>To become a part of our community, please sign up using your personal information.</p>
              </div>
              <div className="form-content">
                <h2>SIGNUP</h2>
                <form action="#">
                  <div className="input-field">
                    <input type="text" required />
                    <label>Enter your email</label>
                  </div>
                  <div className="input-field">
                    <input type="password" required />
                    <label>Create password</label>
                  </div>
                  <div className="policy-text">
                    <input type="checkbox" id="policy" required />
                    <label htmlFor="policy">
                      I agree to the
                      <a href="#" className="option">Terms & Conditions</a>
                    </label>
                  </div>
                  <button type="submit">Sign Up</button>
                </form>
                <div className="bottom-link">
                  Already have an account?
                  <a href="#" id="login-link" onClick={toggleForm}>Login</a>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
