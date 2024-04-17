import { z } from 'zod'

export const addDeckSchema = z.object({
  cover: z.object({ image: z.any() }),
  isPrivate: z.boolean().default(false),
  name: z.string().min(1),
})
