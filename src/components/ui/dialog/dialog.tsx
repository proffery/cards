import { Button, Modal, ModalProps } from '@/components'

import s from './dialog.module.scss'

export type DialogProps = {
  cancelText?: string
  confirmText?: string
  onCancel?: () => void
  onConfirm?: () => void
} & ModalProps
export const Dialog = ({
  cancelText = 'Cancel',
  children,
  confirmText = 'OK',
  onCancel,
  onConfirm,
  onOpenChange,
  ...rest
}: DialogProps) => {
  const handleCancel = () => {
    onOpenChange?.(false)
    onCancel?.()
  }
  const handleConfirm = () => {
    onConfirm?.()
    onOpenChange?.(false)
  }

  return (
    <Modal onOpenChange={handleCancel} {...rest}>
      {children}
      <div className={s.buttons}>
        <Button onClick={handleCancel} variant={'secondary'}>
          {cancelText}
        </Button>
        <Button onClick={handleConfirm}>{confirmText}</Button>
      </div>
    </Modal>
  )
}
