import { appDeploy } from '@/common/consts/app-deploy'
import { ROUTES } from '@/common/consts/routes'

export const emailConfirmTemplate = `
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
    <h2>FlashCards Email Confirmation</h2>
    <p>Dear <b>##name##</b>,</p>
    <p>Thank you for signing up for the FlashCards project. To confirm your email address, please click on the confirmation link below:</p>
    <p><a href="${appDeploy}${ROUTES.confirmEmail}/##token##">Confirm Email</a></p>
    <p>If it doesn't work, copy and paste the following link in your browser:</p>
    <p><i>${appDeploy}${ROUTES.confirmEmail}/##token##</i></p>
    <p>If you did not sign up for this account, please disregard this email.</p>
    <p>Thank you.</p>
    <p>Best regards,<br>The <b>FlashCards</b> Team</p>
</body>
</html>
`
