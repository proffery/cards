import { toast } from 'react-toastify'

export const successNotification = (message: string) => {
  toast.success(message)
}
