import { Link } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { MenuProfile } from '@/components/menus'
import { Avatar, Loader, Typography } from '@/components/ui'
import { useGetMeQuery, useLogoutMutation } from '@/services/auth/auth.service'

import s from './header.module.scss'

export const PrivateHeader = () => {
  const { data, isLoading: loading } = useGetMeQuery()
  const [logout] = useLogoutMutation()

  const handleLogout = async () => {
    await logout()
  }

  const user = {
    avatar: data?.avatar || '',
    email: data?.email || '',
    name: data?.name || '',
  }

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
      {loading && <Loader />}
    </header>
  )
}
