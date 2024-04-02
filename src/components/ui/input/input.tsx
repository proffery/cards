import { ComponentPropsWithoutRef, useState } from 'react'

import s from './input.module.scss'

import closeImage from '../../../assets/icons/close.svg'
import hidePasswordImage from '../../../assets/icons/eye-off-outline.svg'
import showPasswordImage from '../../../assets/icons/eye-outline.svg'
import searchImage from '../../../assets/icons/search.svg'

export type InputProps = {
  className?: string
  cleanSearch?: () => void
  error?: string
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
  error,
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
        className={`${s.input} ${variant ? s[variant] : ''} ${error ? s.error : ''} ${
          className || ''
        }`}
        disabled={disabled}
        id={label ? label : ''}
        value={value}
        {...rest}
        type={type === 'password' && !showPassword ? 'password' : 'text'}
      />
      {error && <div className={s.errorContainer}>{error}</div>}
      {type === 'password' && (
        <button
          className={s.inputButton}
          disabled={disabled}
          onMouseDown={showPasswordHandler}
          onMouseUp={hidePasswordHandler}
          title={'Show password'}
        >
          <svg
            className={`${s.inputIcon} ${error ? s.error : ''}`}
            height={'24px'}
            viewBox={'0 0 24 24'}
            width={'24px'}
          >
            <use
              href={
                showPassword
                  ? `${showPasswordImage}#eye-outline`
                  : `${hidePasswordImage}#eye-off-outline`
              }
              xlinkHref={
                showPassword
                  ? `${showPasswordImage}#eye-outline`
                  : `${hidePasswordImage}#eye-off-outline`
              }
            />
          </svg>
        </button>
      )}
      {variant === 'search' && (
        <div className={`${s.searchContainer} ${disabled ? s.disabled : ''}`}>
          <svg
            className={`${s.inputIcon} ${error ? s.error : ''}`}
            height={'20px'}
            viewBox={'0 0 24 24'}
            width={'20px'}
          >
            <use href={`${searchImage}#search`} xlinkHref={`${searchImage}#search`} />
          </svg>
        </div>
      )}
      {variant === 'search' && value && (
        <button className={s.inputButton} disabled={disabled} onClick={cleanSearch}>
          <svg
            className={`${s.inputIcon} ${error ? s.error : ''}`}
            height={'20px'}
            viewBox={'0 0 24 24'}
            width={'20px'}
          >
            <use href={`${closeImage}#close`} xlinkHref={`${closeImage}#close`} />
          </svg>
        </button>
      )}
    </div>
  )
}
