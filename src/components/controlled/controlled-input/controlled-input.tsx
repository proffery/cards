import { Control, FieldPath, FieldValues, useController } from 'react-hook-form'

import { Input } from '@/components/ui'
import { InputProps } from '@/components/ui/input/input'

export type ControlledInputProps<T extends FieldValues> = {
  control: Control<T>
  name: FieldPath<T>
} & Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledInput = <T extends FieldValues>(props: ControlledInputProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control: props.control,
    name: props.name,
  })

  return <Input errorMessage={error?.message} id={props.name} {...props} {...field} />
}
