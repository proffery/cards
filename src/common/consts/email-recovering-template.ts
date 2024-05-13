import { appDeploy } from '@/common/consts/app-deploy'
import { ROUTES } from '@/common/consts/routes'

export const emailRecoveringPasswordTemplate = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>FlashCards Password Recovery</title>
    <style>
        body {
            font-family: var(--font-family-primary);
        }

        h2 {
            color: var(--color-accent-300);
        }

        p {
            color: #555;
            line-height: 1.5;
        }

        a {
            display: inline-block;
            padding: 10px 20px;

            text-decoration: none;
            border-radius: 5px;
            margin-top: 10px;
        }

        a:hover {
            background-color: var(--color-accent-500);
            color: var(--color-light-100);
        }
    </style>
</head>
<body>
    <h2>FlashCards Password Recovery</h2>
    <p>Dear <b>##name##</b>,</p>
    <p>We recently received a request to recover your password for the FlashCards project. To proceed with the password reset, please click on the confirmation link below:</p>
    <p><a href="${appDeploy}${ROUTES.createPassword}/##token##">Reset Password</a></p>
    <p>If it doesn't work, copy and paste the following link in your browser:</p>
    <p><i>${appDeploy}${ROUTES.createPassword}/##token##</i></p>
    <p>If you did not initiate this request, please disregard this email. Your password will remain unchanged.</p>
    <p>Thank you.</p>
    <p>Best regards,<br>The <b>FlashCards</b> Team</p>
</body>
</html>
`
