import { ComponentPropsWithoutRef, useState } from 'react'

import s from './input.module.scss'

import hidePasswordImage from '../../../assets/icons/eye-off-outline.svg'
import showPasswordImage from '../../../assets/icons/eye-outline.svg'

export type InputProps = {
  className?: string
  error?: string
  fullWidth?: boolean
  label?: string
  variant?: 'default' | 'password' | 'search'
} & ComponentPropsWithoutRef<'input'>

export const Input = ({
  className,
  disabled,
  error,
  fullWidth,
  label,
  type = 'text',
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
        className={`${s.input} ${variant ? s[variant] : ''} ${error ? s.error : ''} ${
          className || ''
        }`}
        disabled={disabled}
        id={label ? label : ''}
        {...rest}
        type={variant === 'password' && !showPassword ? 'password' : type}
      />
      {error && <div className={s.errorContainer}>{error}</div>}
      {variant === 'password' && (
        <button
          className={s.showPasswordButton}
          disabled={disabled}
          onMouseDown={showPasswordHandler}
          onMouseUp={hidePasswordHandler}
        >
          <img
            className={s.showPasswordImage}
            src={showPassword ? showPasswordImage : hidePasswordImage}
          />
        </button>
      )}
    </div>
  )
}
