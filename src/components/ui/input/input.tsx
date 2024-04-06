import { ComponentPropsWithoutRef, useState } from 'react'

import { Close, EyeOffOutline, EyeOutline, Search } from '@/assets/icons'

import s from './input.module.scss'

export type InputProps = {
  className?: string
  cleanSearch?: () => void
  errorMessage?: string
  fullWidth?: boolean
  label?: string
  type?: 'password' | 'text'
  value?: string
  variant?: 'default' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  cleanSearch,
  disabled,
  errorMessage,
  fullWidth,
  label,
  type = 'text',
  value,
  variant = 'default',
  ...rest
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false)
  const showPasswordHandler = () => {
    setShowPassword(true)
  }
  const hidePasswordHandler = () => {
    setShowPassword(false)
  }

  return (
    <div className={`${s.inputContainer} ${fullWidth ? s.fullWidth : ''}`}>
      {label && (
        <label className={s.label} htmlFor={label}>
          {label}
        </label>
      )}
      <input
        className={`${s.input} ${variant ? s[variant] : ''} ${errorMessage ? s.error : ''} ${
          className || ''
        }`}
        disabled={disabled}
        id={label ? label : ''}
        value={value}
        {...rest}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
      />
      {errorMessage && <div className={s.errorMessage}>{errorMessage}</div>}
      {type === 'password' && (
        <button
          className={s.inputButton}
          disabled={disabled}
          onMouseDown={showPasswordHandler}
          onMouseUp={hidePasswordHandler}
          title={'Show password'}
        >
          {showPassword
            ? value && (
                <EyeOutline className={`${s.inputIcon} ${errorMessage ? s.error : ''}`} size={20} />
              )
            : value && (
                <EyeOffOutline
                  className={`${s.inputIcon} ${errorMessage ? s.error : ''}`}
                  size={20}
                />
              )}
        </button>
      )}
      {variant === 'search' && (
        <div className={`${s.searchContainer} ${disabled ? s.disabled : ''}`}>
          <Search className={`${s.inputIcon} ${errorMessage ? s.error : ''}`} size={20} />
        </div>
      )}
      {variant === 'search' && value && (
        <button className={s.inputButton} disabled={disabled} onClick={cleanSearch}>
          <Close className={`${s.inputIcon} ${errorMessage ? s.error : ''}`} size={20} />
        </button>
      )}
    </div>
  )
}
