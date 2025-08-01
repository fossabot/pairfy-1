interface InputParams {
  name: string;
  verifyUrl: string;
}

export function generateRecoveryEmail({
  name,
  verifyUrl,
}: InputParams): string {
  return `

  
<!DOCTYPE html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width" />
    <title>PAIRFY Account Recovery</title>
  </head>
  <body style="font-family:Arial, sans-serif; background-color:#f6f6f6; padding:20px; margin:0;">
    <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:600px; margin:0 auto; background-color:#ffffff; border-radius:0px; overflow:hidden; box-shadow:0 0 8px rgba(0,0,0,0.05);">
      <tr>
        <td style="background-color:#2563eb; padding: 30px 20px; text-align:center;">
          <h1 style="color:#ffffff; margin:0;">PAIRFY Account Recovery</h1>
        </td>
      </tr>
      <tr>
        <td style="padding:30px;">
          <p style="font-size:16px; color:#333;">Hi ${name},</p>
          <p style="font-size:16px; color:#333;">
              We received a request to reset the password for your Pairfy account. If you made this request, you can reset your password by clicking the button below:
          </p>
          <p style="text-align:center; margin:30px 0;">
            <a href="${verifyUrl}" style="background-color:#2563eb; color:#fff; padding:12px 24px; border-radius:8px; text-decoration:none; display:inline-block; font-weight:bold; font-size: 14px;">
              Reset Password
            </a>
          </p>
          <p style="font-size:14px; color:#777;">
            If you didn’t request a password reset, you can safely ignore this email. Your account will remain secure.
          </p>
          <p style="font-size:14px; color:#777; margin-top:40px;">
            — The Pairfy Team
          </p>
        </td>
      </tr>
      <tr>
        <td style="background-color:#f0f0f0; padding:20px; text-align:center; font-size:12px; color:#999;">
          © 2025 Pairfy Inc. All rights reserved.
        </td>
      </tr>
    </table>
  </body>
</html>


    `;
}
