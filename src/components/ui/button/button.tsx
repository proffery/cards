import {
  ComponentPropsWithoutRef,
  ElementRef,
  ElementType,
  ForwardedRef,
  ReactNode,
  forwardRef,
} from 'react'

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
  ref: ElementRef<T>
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

  // @ts-ignore
  return <Component className={classNames.component} {...rest} ref={ref} />
}

export const Button = forwardRef(ButtonComponent) as <T extends ElementType = 'button'>(
  props: ButtonProps<T> &
    Omit<ComponentPropsWithoutRef<T>, keyof ButtonProps<T>> & {
      ref?: ForwardedRef<ElementRef<T>>
    }
) => ReturnType<typeof ButtonComponent>
