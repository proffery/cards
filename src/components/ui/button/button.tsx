import { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react'

import s from './button.module.scss'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

export const Button = ({
  as: Component = 'button',
  className,
  disabled,
  fullWidth,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <Component
      className={`${s.button} ${s[variant]} ${fullWidth ? s.fullWidth : ''} ${
        disabled ? s.disabled : ''
      } ${className || ''}`}
      {...rest}
    />
  )
}
