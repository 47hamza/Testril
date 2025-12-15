  'use client';

import { useState } from 'react';
import TelstraLogo from './Logo';
import './LoginPage.css';

export default function LoginPage() {
  const [username, setUsername] = useState('sdsasd');
  const [rememberUsername, setRememberUsername] = useState(false);

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

          <div className="formGroup">
            <label htmlFor="username" className="label">
              body
            </label>
            <input
              type="text"
              id="username"
              className="input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
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

          <button className="continueButton">
            Continue
          </button>

          <div className="separator">
            <span className="separatorText">OR</span>
          </div>

          <button className="createButton">
            Create a Telstra ID
          </button>
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


