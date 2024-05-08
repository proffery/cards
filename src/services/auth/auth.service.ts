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
      async onQueryStarted(_, { queryFulfilled }) {
        const result = await queryFulfilled

        localStorage.setItem('accessToken', result.data.accessToken.trim())
        localStorage.setItem('refreshToken', result.data.refreshToken.trim())
      },

      query: body => ({
        body,
        method: 'POST',
        url: '/v1/auth/login',
      }),
    }),

    logout: builder.mutation<void, void>({
      invalidatesTags: ['Auth'],

      onQueryStarted: (_, { dispatch }) => {
        localStorage.removeItem('accessToken')
        localStorage.removeItem('refreshToken')
        dispatch(baseApi.util.resetApiState())
      },

      query: () => ({
        // header: {
        //   Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        // },
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

    resetPassword: builder.mutation<void, { body: ResetPassword; params: ResetPasswordArgs }>({
      invalidatesTags: ['Auth'],
      query: ({ body, params }) => ({
        body,
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
      query: args => {
        const formData = new FormData()

        if (args.name) {
          formData.append('name', args.name)
        }
        if (args.avatar) {
          formData.append('avatar', args.avatar)
        }

        return {
          body: formData,
          method: 'PATCH',
          url: '/v1/auth/me',
        }
      },
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
