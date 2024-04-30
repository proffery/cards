import { z } from 'zod'

export const addDeckSchema = z.object({
  cover: z.any(),
  isPrivate: z.boolean().default(false),
  name: z.string().min(3).max(30),
})
