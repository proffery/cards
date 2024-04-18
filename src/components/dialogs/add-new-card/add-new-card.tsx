import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { Button, Dialog, DialogProps, Input, Typography } from '@/components'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './add-new-card.module.scss'

import { addCardSchema } from './schema'

type FormFields = z.infer<typeof addCardSchema>
type Props = {
  onConfirm: (data: FormFields) => void
} & Omit<DialogProps, 'onConfirm'>

export const AddNewCard = ({ onCancel, onConfirm, onOpenChange, ...rest }: Props) => {
  const [questionImage, setQuestionImage] = useState<File | null>(null)
  const [answerImage, setAnswerImage] = useState<File | null>(null)

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm<FormFields>({ resolver: zodResolver(addCardSchema) })

  const handleCancel = () => {
    reset()
    setQuestionImage(null)
    setAnswerImage(null)
    onCancel?.()
  }

  const handleConfirm = handleSubmit(data => {
    onConfirm(data)
    setQuestionImage(null)
    setAnswerImage(null)
    onOpenChange?.(false)
    reset()
  })

  const handleCoverChange = (
    e: ChangeEvent<HTMLInputElement>,
    setImage: (image: File | null) => void
  ) => {
    e.currentTarget?.files && setImage(e.currentTarget?.files[0])
  }

  return (
    <Dialog
      cancelText={'Cancel'}
      confirmText={'Add New Card'}
      onConfirm={handleConfirm}
      title={'Add New Card'}
      {...rest}
      onCancel={handleCancel}
    >
      <form className={s.form} onSubmit={handleConfirm}>
        <Typography.Subtitle2>Question:</Typography.Subtitle2>
        <Input
          errorMessage={errors.question?.message}
          fullWidth
          label={'Question?'}
          {...register('question')}
        />
        {questionImage && <img src={URL.createObjectURL(questionImage)} />}
        <div className={s.buttons}>
          {questionImage && (
            <Button
              onClick={() => setQuestionImage(null)}
              title={'Delete Question Image'}
              variant={'secondary'}
            >
              <Trash />
              Delete image
            </Button>
          )}
          <Button
            as={'label'}
            className={s.fileLabel}
            fullWidth={!questionImage}
            htmlFor={'question-image'}
            title={'Upload question image'}
            variant={'secondary'}
          >
            <input
              accept={'image/*'}
              className={s.fileInput}
              id={'question-image'}
              type={'file'}
              {...register('questionImg')}
              onChange={e => handleCoverChange(e, setQuestionImage)}
            />
            <Image /> Upload Image
          </Button>
        </div>
        <Typography.Subtitle2>Answer:</Typography.Subtitle2>
        <Input
          errorMessage={errors.answer?.message}
          fullWidth
          label={'Answer?'}
          {...register('answer')}
        />
        {answerImage && <img src={URL.createObjectURL(answerImage)} />}
        <div className={s.buttons}>
          {answerImage && (
            <Button
              onClick={() => setAnswerImage(null)}
              title={'Delete Answer Image'}
              variant={'secondary'}
            >
              <Trash />
              Delete image
            </Button>
          )}
          <Button
            as={'label'}
            className={s.fileLabel}
            fullWidth={!answerImage}
            htmlFor={'answer-image'}
            title={'Upload answer image'}
            variant={'secondary'}
          >
            <input
              accept={'image/*'}
              className={s.fileInput}
              id={'answer-image'}
              type={'file'}
              {...register('answerImg')}
              onChange={e => handleCoverChange(e, setAnswerImage)}
            />
            <Image /> Upload Image
          </Button>
        </div>
      </form>
    </Dialog>
  )
}
