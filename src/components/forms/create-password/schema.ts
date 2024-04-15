import { z } from 'zod'

export const createPasswordSchema = z.object({
  password: z.string().min(3),
})
