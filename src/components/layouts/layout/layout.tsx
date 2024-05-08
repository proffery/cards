import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'

import { Header } from '@/components/layouts/header/header'
import { Loader } from '@/components/ui'
import { selectAppIsLoading } from '@/services/app/app.selectors'
import clsx from 'clsx'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...rest }, ref) => {
    const isLoading = useSelector(selectAppIsLoading)

    const classNames = {
      main: clsx(s.main),
      root: clsx(s.layout),
    }

    return (
      <div ref={ref} {...rest} className={classNames.root}>
        {isLoading && <Loader />}
        <Header />
        <main className={classNames.main}>{children}</main>
      </div>
    )
  }
)
