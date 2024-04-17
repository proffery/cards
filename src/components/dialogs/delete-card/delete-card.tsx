import { Dialog, DialogProps, Typography } from '@/components'

type Props = {
  onConfirm: () => void
} & Omit<DialogProps, 'onConfirm'>
export const DeleteCard = ({ onConfirm, onOpenChange, ...rest }: Props) => {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange?.(false)
  }

  return (
    <Dialog
      cancelText={'Cancel'}
      confirmText={'Delete Card'}
      onConfirm={handleConfirm}
      title={'Delete Card'}
      {...rest}
    >
      <Typography.Body1>Do you really want to remove this card?</Typography.Body1>
    </Dialog>
  )
}
