import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { Typography } from '@/components'

import s from './card.module.scss'

type CardProps = {
  title?: string
} & ComponentPropsWithoutRef<'div'>

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, title, ...rest }: CardProps, ref) => {
    return (
      <div ref={ref} {...rest} className={`${s.card} ${className || ''}`}>
        {title && <Typography.H1 className={s.title}>{title}</Typography.H1>}
        {children}
      </div>
    )
  }
)
