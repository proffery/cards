import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { useRandomPlaceholder } from '@/common/hooks'
import { ControlledCheckbox } from '@/components/controlled/controlled-checkbox/controlled-checkbox'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button, Dialog, DialogProps } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './deck-dialog.module.scss'

import { addDeckSchema } from './schema'

export type AddDeckFormFields = z.infer<typeof addDeckSchema>
type Props = {
  defaultValues?: AddDeckFormFields
  onConfirm: (data: AddDeckFormFields) => void
} & Omit<DialogProps, 'onConfirm'>
export const DeckDialog = ({
  defaultValues,
  onCancel,
  onConfirm,
  onOpenChange,
  ...rest
}: Props) => {
  const [coverImage, setCoverImage] = useState<File | null>(null)

  const { control, handleSubmit, register, reset } = useForm<AddDeckFormFields>({
    defaultValues: {
      isPrivate: defaultValues?.isPrivate,
      name: defaultValues?.name,
    },
    resolver: zodResolver(addDeckSchema),
  })

  const handleCancel = () => {
    reset()
    setCoverImage(null)
    onCancel?.()
  }

  const handleConfirm = handleSubmit(data => {
    onConfirm({ ...data, cover: coverImage })
    onOpenChange?.(false)
    setCoverImage(null)
    reset()
  })

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget?.files && setCoverImage(e.currentTarget?.files[0])
  }

  return (
    <Dialog
      cancelText={'Cancel'}
      confirmText={'Add New Deck'}
      onConfirm={handleConfirm}
      title={'Add New Deck'}
      {...rest}
      onCancel={handleCancel}
    >
      <form className={s.form} onSubmit={handleConfirm}>
        <ControlledInput
          control={control}
          fullWidth
          label={'Deck Name'}
          name={'name'}
          placeholder={useRandomPlaceholder()}
        />
        {coverImage ? (
          <img alt={'Deck cover'} src={URL.createObjectURL(coverImage)} />
        ) : (
          defaultValues?.cover && <img alt={'Deck cover'} src={defaultValues?.cover} />
        )}
        <div className={s.buttons}>
          {coverImage && (
            <Button
              onClick={() => setCoverImage(null)}
              title={'Delete image'}
              variant={'secondary'}
            >
              <Trash size={16} />
              Delete image
            </Button>
          )}
          <Button
            as={'label'}
            className={s.fileLabel}
            fullWidth={!coverImage}
            htmlFor={'deck-cover'}
            title={'Upload image'}
            variant={'secondary'}
          >
            <input
              accept={'image/*'}
              className={s.fileInput}
              id={'deck-cover'}
              type={'file'}
              {...register('cover')}
              onChange={handleCoverChange}
            />
            <Image size={16} /> Upload Image
          </Button>
        </div>
        <ControlledCheckbox control={control} label={'Private pack'} name={'isPrivate'} />
      </form>
    </Dialog>
  )
}
