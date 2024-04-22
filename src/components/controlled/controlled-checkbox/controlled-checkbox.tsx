import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'label' | 'onBlur' | 'onCheckedChange'> & { label?: string }
export const ControlledCheckbox = <T extends FieldValues>({
  control,
  disabled,
  name,
  shouldUnregister,
  ...rest
}: Props<T>) => {
  const {
    field: { onBlur, onChange, ref, value },
  } = useController({
    control,
    disabled,
    name,
    shouldUnregister,
  })

  return (
    <Checkbox
      checked={!!value}
      disabled={disabled}
      onCheckedChange={onChange}
      ref={ref}
      {...rest}
      onBlur={onBlur}
    />
  )
}
