import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  Ref,
  forwardRef,
} from 'react'

import clsx from 'clsx'

import s from './button.module.scss'

type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  children: ReactNode
  className?: string
  fullWidth?: boolean
  type?: T extends 'button' ? 'button' | 'reset' | 'submit' : never
  variant?: 'primary' | 'secondary'
} & ComponentPropsWithoutRef<T>

const ButtonComponent = <T extends ElementType = 'button'>(
  props: ButtonProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>>,
  ref: Ref<HTMLButtonElement>
) => {
  const {
    as: Component = 'button',
    className,
    disabled = false,
    fullWidth,
    type,
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

  return (
    <Component
      className={classNames.component}
      {...rest}
      disabled={disabled}
      ref={ref}
      type={type}
    />
  )
}

export const Button = forwardRef(ButtonComponent) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonComponent>
