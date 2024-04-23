import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'

import { Header } from '@/components/layouts/header/header'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...rest }, ref) => {
    return (
      <div ref={ref} {...rest} className={s.layout}>
        <Header
          onLogout={() => {
            alert('Logged out')
          }}
        />
        <main className={s.main}>{children}</main>
      </div>
    )
  }
)
