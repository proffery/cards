import { ChangeEvent, useState } from 'react'
import { useController, useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { Button, Checkbox, Dialog, DialogProps, Input } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './add-new-deck.module.scss'

import { addDeckSchema } from './schema'

type FormFields = z.infer<typeof addDeckSchema>
type Props = {
  onConfirm: (data: FormFields) => void
} & Omit<DialogProps, 'onConfirm'>
export const AddNewDeck = ({ onCancel, onConfirm, onOpenChange, ...rest }: Props) => {
  const [image, setImage] = useState<File | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(addDeckSchema) })

  const {
    field: { disabled, name, onBlur, onChange, ref: checkRef, value },
  } = useController({ control, name: 'isPrivate' })

  const handleCancel = () => {
    reset()
    setImage(null)
    onCancel?.()
  }

  const handleConfirm = handleSubmit(data => {
    onConfirm(data)
    onOpenChange?.(false)
    setImage(null)
    reset()
  })

  const handleCoverChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.currentTarget?.files && setImage(e.currentTarget?.files[0])
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
        <Input
          errorMessage={errors.name?.message}
          fullWidth
          label={'Deck Name'}
          {...register('name')}
        />
        {image && <img alt={'Deck cover'} src={URL.createObjectURL(image)} />}
        <div className={s.buttons}>
          {image && (
            <Button onClick={() => setImage(null)} title={'Delete image'} variant={'secondary'}>
              <Trash />
              Delete image
            </Button>
          )}
          <Button
            as={'label'}
            className={s.fileLabel}
            fullWidth={!image}
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
            <Image /> Upload Image
          </Button>
        </div>
        <Checkbox
          checked={value}
          disabled={disabled}
          label={'Private pack'}
          name={name}
          onBlur={onBlur}
          onCheckedChange={onChange}
          ref={checkRef}
        />
      </form>
    </Dialog>
  )
}
