export type User = {
  avatar: null | string
  created: string
  email: string
  id: string
  isEmailVerified: boolean
  name: string
  updated: string
}

export type LoginArgs = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUnArgs = {
  email: string
  password: string
}
export type RecoverPasswordArgs = {
  email: string
  html: string
}

export type UpdateUserDataArgs = {
  avatar?: string
  name?: string
}
