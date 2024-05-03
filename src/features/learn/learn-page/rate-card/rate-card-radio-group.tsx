import { useForm } from 'react-hook-form'

import { ControlledRadioGroup } from '@/components/controlled/controlled-radio-button/controlled-radio-button'
import { Button, Typography } from '@/components/ui'
import clsx from 'clsx'

import s from '../learn-page.module.scss'

const options = [
  { label: 'Did not know', value: '1' },
  { label: 'Forgot', value: '2' },
  { label: 'A lot of thought', value: '3' },
  { label: 'Confused', value: '4' },
  { label: 'Knew the answer', value: '5' },
]

export type RateType = { grade: string }
type RateCardRadioGroupType = {
  onSubmit: (data: RateType) => void
}
export const RateCardRadioGroup = ({ onSubmit }: RateCardRadioGroupType) => {
  const classNames = {
    submitButton: clsx(s.submitButton),
  }

  const { control, handleSubmit } = useForm<RateType>({
    defaultValues: { grade: '2' },
  })

  return (
    <form className={s.rate} onSubmit={handleSubmit(onSubmit)}>
      <Typography.Subtitle1>Rate yourself:</Typography.Subtitle1>
      <ControlledRadioGroup control={control} name={'grade'} options={options} />
      <Button className={classNames.submitButton} fullWidth>
        Next Question
      </Button>
    </form>
  )
}
