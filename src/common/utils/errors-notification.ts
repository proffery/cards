import { toast } from 'react-toastify'

import { ErrorResponse } from '@/services/decks/decks.types'

export const errorNotification = (err: unknown) => {
  if (
    typeof err === 'object' &&
    err !== null &&
    'data' in err &&
    typeof err.data === 'object' &&
    err.data !== null
  ) {
    if (
      'status' in err &&
      typeof err.status === 'number' &&
      err.status >= 400 &&
      'message' in err.data &&
      typeof err.data.message === 'string'
    ) {
      toast.error(err.data.message)
    } else if ('errorMessages' in err.data) {
      if (Array.isArray(err.data.errorMessages)) {
        if (typeof err.data.errorMessages[0] === 'string') {
          err.data.errorMessages.forEach(el => {
            toast.error(el)
          })
        } else {
          const error = err as ErrorResponse

          error.data.errorMessages.forEach(el => {
            toast.error(el.message)
          })
        }
      }
    } else {
      toast.error('Some error occurred')
    }
  }

  if (err instanceof Error) {
    toast.error(err.message)
  }
}
