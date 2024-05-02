import { z } from 'zod'

export const signUpSchema = z
  .object({
    autocomplete: z.string().optional(),
    confirmPassword: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(3),
  })
  .refine(schema => schema.password === schema.confirmPassword, {
    message: 'The passwords did not match',
    path: ['confirmPassword'],
  })
