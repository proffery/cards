import { memo } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { MenuProfile } from '@/components/menus'
import { Avatar, Button, Loader, Typography } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const Header = memo(() => {
  const { data, isLoading: loading } = useGetMeQuery()

  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    await logout()
  }

  const name = data?.name || ''
  const avatar = data?.avatar || ''
  const userEmail = data?.email || ''

  const triggerHeader = (
    <div className={s.nameContainer}>
      <Typography.Subtitle1 as={Link} className={s.name} to={ROUTES.profile}>
        {name}
      </Typography.Subtitle1>
      <Avatar name={name} size={'s'} url={avatar} />
    </div>
  )

  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={ROUTES.base}>
          <img alt={'Logo'} height={36} src={logo} width={157} />
        </Link>
        {data && (
          <MenuProfile
            avatarUrl={avatar}
            email={userEmail}
            onLogout={handleLogout}
            triggerMenu={triggerHeader}
            userName={name}
          />
        )}
        {!data && (
          <Button as={Link} to={ROUTES.signIn} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
      {loading && <Loader />}
    </header>
  )
})
