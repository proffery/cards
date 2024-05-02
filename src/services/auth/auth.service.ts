// Import necessary modules and types
import { baseApi } from '@/services/base-api'

import {
  EmailVerification,
  GetUser,
  LoginReq,
  LoginRes,
  RecoverPassword,
  Registration,
  ResendVerificationEmail,
  ResetPassword,
  ResetPasswordArgs,
  UpdateUser,
} from './auth.types'

export const authService = baseApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<GetUser, void>({
      providesTags: ['Auth'],
      query: () => '/v1/auth/me',
    }),

    login: builder.mutation<LoginRes, LoginReq>({
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

    recoverPassword: builder.mutation<void, RecoverPassword>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/recover-password',
      }),
    }),

    resendVerificationEmail: builder.mutation<void, ResendVerificationEmail>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/resend-verification-email',
      }),
    }),

    resetPassword: builder.mutation<void, { data: ResetPassword; params: ResetPasswordArgs }>({
      invalidatesTags: ['Auth'],
      query: ({ data, params }) => ({
        body: data,
        method: 'POST',
        url: `/v1/auth/reset-password/${params.token}`,
      }),
    }),

    signUp: builder.mutation<GetUser, Registration>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/sign-up',
      }),
    }),

    updateUser: builder.mutation<GetUser, UpdateUser>({
      invalidatesTags: ['Auth'],
      query: body => ({
        body,
        method: 'PATCH',
        url: '/v1/auth/me',
      }),
    }),

    verifyEmail: builder.mutation<void, EmailVerification>({
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
  useResendVerificationEmailMutation,
  useResetPasswordMutation,
  useSignUpMutation,
  useUpdateUserMutation,
  useVerifyEmailMutation,
} = authService
