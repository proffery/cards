import { ComponentPropsWithoutRef, ElementType, ForwardedRef, ReactNode, forwardRef } from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: ForwardedRef<HTMLButtonElement>
) => {
  const {
    as: Component = 'button',
    className,
    disabled,
    fullWidth,
    variant = 'primary',
    ...rest
  } = props
  const classNames = {
    component: clsx(
      s.button,
      s[variant],
      fullWidth && s.fullWidth,
      disabled && s.disabled,
      className
    ),
  }

  return <Component className={classNames.component} {...rest} ref={ref} />
}

export const Button = forwardRef(ButtonComponent)
