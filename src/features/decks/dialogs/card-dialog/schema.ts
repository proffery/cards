import { z } from 'zod'

export const addCardSchema = z.object({
  answer: z.string().min(3).max(30),
  answerImg: z.any(),
  question: z.string().min(3).max(30),
  questionImg: z.any(),
})
