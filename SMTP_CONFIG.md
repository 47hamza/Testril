# SMTP Configuration Guide

## Common SMTP Providers

### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password  # NOT your regular password! Use App Password
SMTP_FROM=your-email@gmail.com
```

**Important for Gmail:**
- You MUST use an "App Password", not your regular Gmail password
- Enable 2-Step Verification first
- Generate App Password: https://myaccount.google.com/apppasswords
- If using port 587, set `secure: false` and enable `requireTLS: true`

### Outlook/Hotmail
```env
SMTP_HOST=smtp-mail.outlook.com
SMTP_PORT=587
SMTP_USER=your-email@outlook.com
SMTP_PASS=your-password
SMTP_FROM=your-email@outlook.com
```

### Yahoo Mail
```env
SMTP_HOST=smtp.mail.yahoo.com
SMTP_PORT=465
SMTP_USER=your-email@yahoo.com
SMTP_PASS=your-app-password
SMTP_FROM=your-email@yahoo.com
```

### Custom SMTP Server
```env
SMTP_HOST=your-smtp-server.com
SMTP_PORT=465  # or 587 for TLS
SMTP_USER=your-username
SMTP_PASS=your-password
SMTP_FROM=noreply@yourdomain.com
```

## Troubleshooting ECONNECTION Error

1. **Check Environment Variables**: Make sure all SMTP variables are set in `.env.local`
2. **Verify SMTP Host**: Test if you can reach the SMTP server
3. **Check Port**: 
   - Port 465 = SSL/TLS (secure: true)
   - Port 587 = STARTTLS (secure: false, requireTLS: true)
4. **Firewall/Network**: Ensure your server can connect to the SMTP port
5. **Gmail Users**: Must use App Password, not regular password
6. **Test Connection**: The code now verifies connection before sending

## Testing

You can test your SMTP configuration by checking the console logs. The improved error handling will show:
- Connection verification status
- Detailed error messages
- Configuration being used (without password)

