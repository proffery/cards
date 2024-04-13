import { ComponentPropsWithoutRef, forwardRef, useId, useState } from 'react'

import { Close, EyeOffOutline, EyeOutline, Search } from '@/assets/icons'
import clsx from 'clsx'

import s from './input.module.scss'

type InputProps = {
  className?: string
  cleanSearch?: () => void
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  value?: string
  variant?: 'default' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      cleanSearch,
      disabled,
      errorMessage,
      fullWidth,
      id,
      label,
      type = 'text',
      value,
      variant = 'default',
      ...rest
    }: InputProps,
    ref
  ) => {
    const classNames = {
      container: clsx(s.container, fullWidth && s.fullWidth),
      errorMessage: clsx(s.errorMessage),
      input: clsx(className, s.input, variant && s[variant], errorMessage && s.error),
      inputButton: clsx(s.inputButton),
      inputIcon: clsx(s.inputIcon, errorMessage && s.error),
      label: clsx(s.label),
      searchContainer: clsx(s.searchContainer, disabled && s.disabled),
    }
    const isTypePassword = type === 'password'
    const isVariantSearch = variant === 'search'

    const [showPassword, setShowPassword] = useState(false)
    const new_id = useId()

    const showPasswordHandler = () => {
      setShowPassword(true)
    }
    const hidePasswordHandler = () => {
      setShowPassword(false)
    }

    return (
      <div className={classNames.container}>
        {label && (
          <label className={classNames.label} htmlFor={id ?? new_id}>
            {label}
          </label>
        )}
        <input
          className={classNames.input}
          disabled={disabled}
          id={id ?? new_id}
          ref={ref}
          value={value}
          {...rest}
          type={isTypePassword && !showPassword ? 'password' : 'text'}
        />
        {errorMessage && <div className={classNames.errorMessage}>{errorMessage}</div>}
        {isTypePassword && (
          <button
            className={classNames.inputButton}
            disabled={disabled}
            onMouseDown={showPasswordHandler}
            onMouseUp={hidePasswordHandler}
            title={'Show password'}
          >
            {showPassword
              ? value && <EyeOutline className={classNames.inputIcon} size={20} />
              : value && <EyeOffOutline className={classNames.inputIcon} size={20} />}
          </button>
        )}
        {isVariantSearch && (
          <div className={classNames.searchContainer}>
            <Search className={classNames.inputIcon} />
          </div>
        )}
        {isVariantSearch && value && (
          <button className={classNames.inputButton} disabled={disabled} onClick={cleanSearch}>
            <Close className={classNames.inputIcon} />
          </button>
        )}
      </div>
    )
  }
)
