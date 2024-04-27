import { ChangeEvent, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button, Dialog, DialogProps, Typography } from '@/components/ui'
import { convertUrlToFile } from '@/utils'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './card-dialog.module.scss'

import { addCardSchema } from './schema'

type FormFields = z.infer<typeof addCardSchema>
type Props = {
  defaultValues?: {
    answer: string
    answerImg: string
    question: string
    questionImg: string
  }
  onConfirm: (data: FormFields) => void
} & Omit<DialogProps, 'onConfirm'>

export const CardDialog = ({
  defaultValues,
  onCancel,
  onConfirm,
  onOpenChange,
  ...rest
}: Props) => {
  const [questionImage, setQuestionImage] = useState<File | null>(null)
  const [answerImage, setAnswerImage] = useState<File | null>(null)

  const { control, handleSubmit, register, reset } = useForm<FormFields>({
    defaultValues: {
      answer: defaultValues?.answer || '',
      question: defaultValues?.question || '',
    },
    resolver: zodResolver(addCardSchema),
  })

  useEffect(() => {
    defaultValues?.answerImg &&
      convertUrlToFile(defaultValues?.answerImg).then(answerImage => setAnswerImage(answerImage))
    defaultValues?.questionImg &&
      convertUrlToFile(defaultValues?.questionImg).then(questionImg =>
        setQuestionImage(questionImg)
      )
  }, [defaultValues?.answerImg, defaultValues?.questionImg])

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
      {...rest}
      onCancel={handleCancel}
    >
      <form className={s.form} onSubmit={handleConfirm}>
        <Typography.Subtitle2>Question:</Typography.Subtitle2>
        <ControlledInput control={control} fullWidth label={'Question?'} name={'question'} />
        {questionImage && <img alt={'Question cover'} src={URL.createObjectURL(questionImage)} />}
        <div className={s.buttons}>
          {questionImage && (
            <Button
              onClick={() => setQuestionImage(null)}
              title={'Delete Question Image'}
              variant={'secondary'}
            >
              <Trash size={16} />
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
            <Image size={16} /> Upload Image
          </Button>
        </div>
        <Typography.Subtitle2>Answer:</Typography.Subtitle2>
        <ControlledInput control={control} fullWidth label={'Answer?'} name={'answer'} />
        {answerImage && <img alt={'Answer cover'} src={URL.createObjectURL(answerImage)} />}
        <div className={s.buttons}>
          {answerImage && (
            <Button
              onClick={() => setAnswerImage(null)}
              title={'Delete Answer Image'}
              variant={'secondary'}
            >
              <Trash size={16} />
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
            <Image size={16} /> Upload Image
          </Button>
        </div>
      </form>
    </Dialog>
  )
}
