import { z } from 'zod'

export const editProfileSchema = z.object({
  name: z.string().min(3),
})
