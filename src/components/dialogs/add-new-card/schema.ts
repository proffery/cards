import { z } from 'zod'

export const addCardSchema = z.object({
  answer: z.string().min(1),
  answerImg: z.any(),
  question: z.string().min(1),
  questionImg: z.any(),
})
