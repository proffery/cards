import { useForm } from 'react-hook-form'

import { Button, Option } from '@/components'
import { ControlledRadioGroup } from '@/components/controlled/controlled-radio-button/controlled-radio-button'

import s from '../learn-page.module.scss'

const options: Option[] = [
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
  const { control, handleSubmit } = useForm<RateType>({
    defaultValues: { grade: '2' },
  })

  return (
    <form className={s.rate} onSubmit={handleSubmit(onSubmit)}>
      Rate yourself:
      <ControlledRadioGroup control={control} name={'grade'} options={options} />
      <Button className={s.buttons} fullWidth>
        Next Question
      </Button>
    </form>
  )
}
