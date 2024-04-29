import { components } from '@/services/schema'

export type User = components['schemas']['User']

export type LoginRequest = components['schemas']['LoginRequest']

export type LoginResponse = components['schemas']['LoginResponse']

export type RegistrationRequest = components['schemas']['RegistrationRequest']

export type EmailVerificationRequest = components['schemas']['EmailVerificationRequest']

export type ResendVerificationEmailRequest = components['schemas']['ResendVerificationEmailRequest']

export type RecoverPasswordRequest = components['schemas']['RecoverPasswordRequest']

export type ResetPasswordRequest = components['schemas']['ResetPasswordRequest']

export type UpdateUserRequest = components['schemas']['UpdateUserRequest']
