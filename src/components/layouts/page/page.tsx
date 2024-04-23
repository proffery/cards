import { ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Page = (props: Props) => {
  const { children, className, ...rest } = props
  const classes = clsx(className, s.conteiner)

  return (
    <div {...rest} className={classes}>
      {children}
    </div>
  )
}
