import { ComponentPropsWithoutRef, ElementType, ReactNode, forwardRef } from 'react'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { as: Component = 'button', className, disabled, fullWidth, variant = 'primary', ...rest },
    ref
  ) => {
    return (
      <Component
        className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${
          disabled ? s.disabled : ''
        } ${className || ''}`}
        {...rest}
        ref={ref}
      />
    )
  }
)
