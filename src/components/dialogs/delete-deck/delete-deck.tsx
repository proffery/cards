import { Dialog, DialogProps, Typography } from '@/components'

type Props = {
  deckName: string
  onConfirm: () => void
} & Omit<DialogProps, 'onConfirm'>
export const DeleteDeck = ({ deckName, onConfirm, onOpenChange, ...rest }: Props) => {
  const handleConfirm = () => {
    onConfirm()
    onOpenChange?.(false)
  }

  return (
    <Dialog
      cancelText={'Cancel'}
      confirmText={'Delete Deck'}
      onConfirm={handleConfirm}
      title={'Delete Deck'}
      {...rest}
    >
      <Typography.Body1>
        Do you really want to remove{' '}
        <Typography.Subtitle1 as={'span'}>{deckName}</Typography.Subtitle1>?
      </Typography.Body1>
      <Typography.Body1>All cards will be deleted.</Typography.Body1>
    </Dialog>
  )
}
