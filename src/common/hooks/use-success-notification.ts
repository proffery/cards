import { useEffect } from 'react'

import { useActions } from '@/common/hooks/use-actions'
import { appActions } from '@/services/app/app.slice'

export const useSuccessNotification = (isSuccess: boolean, message: string) => {
  const { setAppSuccess } = useActions(appActions)

  useEffect(() => {
    isSuccess && setAppSuccess({ success: message })
  }, [isSuccess])
}
