import { z } from 'zod'

export type FormValues = z.infer<typeof schema>

export const schema = z.object({
  email: z.string().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().optional(),
})
