import { components, operations } from '@/services/schema'

export type GetUser = components['schemas']['User']

export type LoginReq = components['schemas']['LoginRequest']

export type LoginRes = components['schemas']['LoginResponse']

export type Registration = components['schemas']['RegistrationRequest']

export type EmailVerification = components['schemas']['EmailVerificationRequest']

export type ResendVerificationEmail = components['schemas']['ResendVerificationEmailRequest']

export type RecoverPassword = components['schemas']['RecoverPasswordRequest']

export type ResetPassword = components['schemas']['ResetPasswordRequest']

export type UpdateUser = components['schemas']['UpdateUserRequest']

export type ResetPasswordArgs = operations['AuthController_resetPassword']['parameters']['path']
