import { CSSProperties, ComponentPropsWithoutRef } from 'react'

import clsx from 'clsx'

import s from './page.module.scss'

type Props = { marginTop?: CSSProperties['marginTop'] } & ComponentPropsWithoutRef<'div'>

export const Page = ({ children, className, marginTop = '32px', style, ...rest }: Props) => {
  const classes = clsx(className, s.container)
  const styles = { marginTop }

  return (
    <div className={classes} {...rest} style={styles}>
      {children}
    </div>
  )
}
