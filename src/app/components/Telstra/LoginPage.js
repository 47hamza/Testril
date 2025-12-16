  'use client';

import { useState } from 'react';
import { FaAngleLeft } from 'react-icons/fa6';
import TelstraLogo from './Logo';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberUsername, setRememberUsername] = useState(false);
  const [step, setStep] = useState(1); // 1 = username step, 2 = password step

  const handleContinue = () => {
    if (username.trim()) {
      setStep(2);
    }
  };

  const handleBack = () => {
    setStep(1);
    setPassword('');
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="headerInner">
          <div className="logoContainer">
            <TelstraLogo />
          </div>
          <hr className="headerSeparator" />
        </div>
      </header>

      {/* Main Content */}
      <main className="main">
        <div className="loginForm">
          <h1 className="title">Sign in</h1>
          <p className="subtitle">Sign in with your Telstra ID</p>

          {step === 1 ? (
            <>
              {/* Username Step */}
              <div className="formGroup">
                <label htmlFor="username" className="label">
                  Username
                </label>
                <input
                  type="text"
                  id="username"
                  className="input"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' && username.trim()) {
                      handleContinue();
                    }
                  }}
                />
              </div>

              <a href="#" className="recoverLink">
                Recover username
              </a>

              <div className="checkboxGroup">
                <input
                  type="checkbox"
                  id="remember"
                  className="checkbox"
                  checked={rememberUsername}
                  onChange={(e) => setRememberUsername(e.target.checked)}
                />
                <label htmlFor="remember" className="checkboxLabel">
                  Remember username
                </label>
              </div>

              <button 
                className="continueButton"
                onClick={handleContinue}
                disabled={!username.trim()}
              >
                Continue
              </button>

              <div className="separator">
                <span className="separatorText">OR</span>
              </div>

              <button className="createButton">
                Create a Telstra ID
              </button>
            </>
          ) : (
            <>
              {/* Password Step */}
              <div className="formGroup">
                <label htmlFor="usernameDisplay" className="label">
                  Back to previous for:
                </label>
                <div className="usernameDisplayContainer">
                  <button 
                    className="backButton"
                    onClick={handleBack}
                    type="button"
                    aria-label="Go back"
                  >
                    <FaAngleLeft />
                  </button>
                  <input
                    type="text"
                    id="usernameDisplay"
                    className="input usernameDisplay"
                    value={`${username}`}
                    readOnly
                  />
                </div>
              </div>

              <div className="formGroup">
                <label htmlFor="password" className="label">
                  Password
                </label>
                <div className="passwordContainer">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    id="password"
                    className="input passwordInput"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' && password.trim()) {
                        // Handle sign in
                        console.log('Sign in:', { username, password });
                      }
                    }}
                  />
                  <button
                    type="button"
                    className="showPasswordButton"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    Show
                  </button>
                </div>
              </div>

              <a href="#" className="recoverLink">
                Recover account
              </a>

              <button 
                className="signInButton"
                onClick={() => {
                  if (password.trim()) {
                    // Handle sign in
                    console.log('Sign in:', { username, password });
                  }
                }}
                disabled={!password.trim()}
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footerContent">
          <span className="copyright">
            Copyright © 2025 Telstra
          </span>
          <div className="footerLinks">
            <a href="#" className="footerLink">Privacy</a>
            <a href="#" className="footerLink">Terms of use</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


