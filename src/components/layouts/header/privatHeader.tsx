import { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { useSuccessNotification } from '@/common/hooks/use-success-notification'
import { MenuProfile } from '@/components/menus'
import { Avatar, Typography } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const PrivateHeader = () => {
  const navigate = useNavigate()
  const { data } = useGetMeQuery()
  const [logout, { isSuccess: success }] = useLogoutMutation()

  const handleLogout = async () => {
    await logout()
  }

  const user = {
    avatar: data?.avatar || '',
    email: data?.email || '',
    name: data?.name || '',
  }

  useSuccessNotification(success, 'You are successfully logged out')

  useEffect(() => {
    if (success) {
      navigate(ROUTES.signIn)
    }
  }, [success, navigate])

  const triggerHeader = (
    <div className={s.nameContainer}>
      <Typography.Subtitle1 as={Link} className={s.name} to={ROUTES.profile}>
        {user.name}
      </Typography.Subtitle1>
      <Avatar name={user.name} size={'s'} url={user.avatar} />
    </div>
  )

  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={ROUTES.base}>
          <img alt={'Logo'} height={36} src={logo} width={157} />
        </Link>
        <MenuProfile
          avatarUrl={user.avatar}
          email={user.email}
          onLogout={handleLogout}
          triggerMenu={triggerHeader}
          userName={user.name}
        />
      </div>
    </header>
  )
}
