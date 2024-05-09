import { ComponentPropsWithoutRef, ElementRef, forwardRef } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router-dom'

import { Header } from '@/components/layouts/header/header'
import { Loader } from '@/components/ui'
import { selectAppIsLoading } from '@/services/app/app.selectors'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'
import clsx from 'clsx'

import s from './layout.module.scss'

type Props = ComponentPropsWithoutRef<'div'>

export const Layout = forwardRef<ElementRef<'div'>, Props>(
  ({ children, className, ...rest }, ref) => {
    const { data } = useGetMeQuery()

    const [logout] = useLogoutMutation()

    const headerData =
      data && !('success' in data)
        ? {
            ...data,
          }
        : null

    const isLoading = useSelector(selectAppIsLoading)

    const classNames = {
      main: clsx(s.main),
      root: clsx(s.layout),
    }

    return (
      <div ref={ref} {...rest} className={classNames.root}>
        {isLoading && <Loader />}
        <Header data={headerData} logout={logout} />
        <main className={classNames.main}>
          <Outlet />
        </main>
      </div>
    )
  }
)
