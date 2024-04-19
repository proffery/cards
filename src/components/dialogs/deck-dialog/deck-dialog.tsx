import { ChangeEvent, useEffect, useState } from 'react'
import { useController, useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { Button, Checkbox, Dialog, DialogProps, Input } from '@/components'
import { convertUrlToFile } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './deck-dialog.module.scss'

import { addDeckSchema } from './schema'

type FormFields = z.infer<typeof addDeckSchema>
type Props = {
  defaultValues?: { cover: string; isPrivate: boolean; name: string }
  onConfirm: (data: FormFields) => void
} & Omit<DialogProps, 'onConfirm'>
export const DeckDialog = ({
  defaultValues,
  onCancel,
  onConfirm,
  onOpenChange,
  ...rest
}: Props) => {
  const [coverImage, setCoverImage] = useState<File | null>(null)

  useEffect(() => {
    defaultValues?.cover &&
      convertUrlToFile(defaultValues?.cover).then(image => setCoverImage(image))
  }, [defaultValues?.cover])

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormFields>({
    defaultValues: {
      isPrivate: defaultValues?.isPrivate || false,
      name: defaultValues?.name || '',
    },
    resolver: zodResolver(addDeckSchema),
  })

  const {
    field: { disabled, name, onBlur, onChange, ref: checkRef, value },
  } = useController({ control, name: 'isPrivate' })

  const handleCancel = () => {
    reset()
    setCoverImage(null)
    onCancel?.()
  }

  const handleConfirm = handleSubmit(data => {
    onConfirm(data)
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
        <Input
          errorMessage={errors.name?.message}
          fullWidth
          label={'Deck Name'}
          {...register('name')}
        />
        {coverImage && <img alt={'Deck cover'} src={URL.createObjectURL(coverImage)} />}
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
