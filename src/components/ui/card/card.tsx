import { ComponentPropsWithoutRef, forwardRef } from 'react'

import clsx from 'clsx'

import s from './card.module.scss'

type CardProps = {} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...rest }: CardProps, ref) => {
    const classNames = {
      card: clsx(s.card, className),
    }

    return (
      <div ref={ref} {...rest} className={classNames.card}>
        {children}
      </div>
    )
  }
)
