// Import necessary modules and types
import { baseApi } from '@/services/base-api'

import {
  EmailVerificationRequest,
  LoginRequest,
  LoginResponse,
  RecoverPasswordRequest,
  RegistrationRequest,
  ResendVerificationEmailRequest,
  ResetPasswordRequest,
  UpdateUserRequest,
  User,
} from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<User, void>({
      providesTags: ['Auth'],
      query: () => '/v1/auth/me',
    }),

    login: builder.mutation<LoginResponse, LoginRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),

    logout: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: '/v1/auth/logout',
      }),
    }),

    recoverPassword: builder.mutation<void, RecoverPasswordRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/recover-password',
      }),
    }),

    refreshToken: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],
      query: () => ({
        method: 'POST',
        url: '/v2/auth/refresh-token',
      }),
    }),

    resendVerificationEmail: builder.mutation<void, ResendVerificationEmailRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/resend-verification-email',
      }),
    }),

    resetPassword: builder.mutation<void, { data: ResetPasswordRequest; token: string }>({
      invalidatesTags: ['Auth'],
      query: ({ data, token }) => ({
        body: data,
        method: 'POST',
        url: `/v1/auth/reset-password/${token}`,
      }),
    }),

    signUp: builder.mutation<User, RegistrationRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),

    updateUser: builder.mutation<User, UpdateUserRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
      }),
    }),

    verifyEmail: builder.mutation<void, EmailVerificationRequest>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/verify-email',
      }),
    }),
  }),
})

export const {
  useGetMeQuery,
  useLoginMutation,
  useLogoutMutation,
  useRecoverPasswordMutation,
  useRefreshTokenMutation,
  useResendVerificationEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useVerifyEmailMutation,
} = authService
