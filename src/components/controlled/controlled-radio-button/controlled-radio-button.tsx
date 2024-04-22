import { ReactNode } from 'react'
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupProps } from '@/components'

export type ControlledRadioGroupProps<T extends FieldValues> = {
  children: ReactNode
  control: Control<T>
  name: FieldPath<T>
} & Omit<RadioGroupProps, 'id' | 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>(
  props: ControlledRadioGroupProps<T>
) => {
  const {
    field: { onChange, ...field },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <RadioGroup {...props} {...field} id={props.name} onValueChange={onChange} />
}
