import { ChangeEvent, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Image, Trash } from '@/assets/icons'
import { ControlledInput } from '@/components/controlled/controlled-input/controlled-input'
import { Button, Dialog, DialogProps } from '@/components/ui'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

import s from './card-dialog.module.scss'

import { addCardSchema } from './schema'

export type AddCardFormFields = z.infer<typeof addCardSchema>
type Props = {
  defaultValues?: AddCardFormFields
  onConfirm: (data: AddCardFormFields) => void
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

  const { control, handleSubmit, register, reset } = useForm<AddCardFormFields>({
    defaultValues: {
      answer: defaultValues?.answer,
      question: defaultValues?.question,
    },
    resolver: zodResolver(addCardSchema),
  })

  const handleCancel = () => {
    reset()
    setQuestionImage(null)
    setAnswerImage(null)
    onCancel?.()
  }

  const handleConfirm = handleSubmit(data => {
    onConfirm({ ...data, answerImg: answerImage, questionImg: questionImage })
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
        <div className={s.formItem}>
          <ControlledInput
            control={control}
            fullWidth
            label={'Question'}
            name={'question'}
            placeholder={'What is the capital of France?'}
          />
          {questionImage ? (
            <img alt={'Question cover'} src={URL.createObjectURL(questionImage)} />
          ) : (
            defaultValues?.questionImg && (
              <img alt={'Question cover'} src={defaultValues.questionImg} />
            )
          )}
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
        </div>
        <div className={s.formItem}>
          <ControlledInput
            control={control}
            fullWidth
            label={'Answer'}
            name={'answer'}
            placeholder={'Paris'}
          />
          {answerImage ? (
            <img alt={'Answer cover'} src={URL.createObjectURL(answerImage)} />
          ) : (
            defaultValues?.questionImg && <img alt={'Answer cover'} src={defaultValues.answerImg} />
          )}
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
        </div>
      </form>
    </Dialog>
  )
}
