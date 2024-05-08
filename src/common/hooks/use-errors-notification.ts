import { useEffect } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { appActions } from '@/services/app/app.slice'
import { ErrorResponse } from '@/services/decks/decks.types'

export const useErrorsNotification = (err: unknown) => {
  const { setAppError } = useActions(appActions)

  useEffect(() => {
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
        setAppError({ error: err.data.message })
      } else if ('errorMessages' in err.data) {
        if (Array.isArray(err.data.errorMessages)) {
          if (typeof err.data.errorMessages[0] === 'string') {
            err.data.errorMessages.forEach((el: string) => {
              setAppError({ error: el })
            })
          } else {
            const error = err as ErrorResponse

            error.data.errorMessages.forEach(el => {
              setAppError({ error: el.message })
            })
          }
        }
      } else {
        setAppError({ error: 'Some error occurred' })
      }
    }

    if (err instanceof Error) {
      setAppError({ error: err.message })
    }
  }, [err])
}
