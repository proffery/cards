// controlled-radio-group.tsx
import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { RadioGroup, RadioGroupItem, RadioGroupProps } from '@/components/ui'

type Option = {
  disabled?: boolean
  label: string
  required?: boolean
  value: string
}

export type ControlledRadioGroupProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
  options: Option[]
} & Omit<RadioGroupProps, 'onChange' | 'value'>

export const ControlledRadioGroup = <T extends FieldValues>({
  control,
  name,
  options,
  ...rest
}: ControlledRadioGroupProps<T>) => {
  const {
    field: { onChange, ...field },
  } = useController({
    control,
    name,
  })

  return (
    <RadioGroup {...rest} {...field} id={name} onValueChange={onChange}>
      {options.map(option => (
        <RadioGroupItem
          disabled={option.disabled}
          key={option.value}
          required={option.required}
          value={option.value}
        >
          {option.label}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  )
}
