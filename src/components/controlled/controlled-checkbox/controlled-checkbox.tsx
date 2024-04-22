import { UseControllerProps, useController } from 'react-hook-form'

import { Checkbox } from '@/components'
import { FormValues } from '@/components/forms/sign-in/signInSchema'
import { CheckboxProps } from '@radix-ui/react-checkbox'

type Props<T extends FormValues> = UseControllerProps<T> &
  Omit<CheckboxProps, 'checked' | 'label' | 'onBlur' | 'onCheckedChange'> & { label: string }
export const ControlledCheckbox = <T extends FormValues>({
  control,
  disabled,
  label,
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
      label={label}
      onCheckedChange={onChange}
      ref={ref}
      {...rest}
      onBlur={onBlur}
    />
  )
}
