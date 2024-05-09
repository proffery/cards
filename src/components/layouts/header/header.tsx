import { memo } from 'react'
import { Link } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { MenuProfile } from '@/components/menus'
import { Avatar, Button, Typography } from '@/components/ui'
import { GetUser } from '@/services/auth/auth.types'

import s from '@/components/layouts/header/header.module.scss'

type Props = {
  data: GetUser | null
  logout: () => void
}

export const Header = memo(({ data, logout }: Props) => {
  const triggerHeader = (
    <div className={s.nameContainer}>
      <Typography.Subtitle1 as={Link} className={s.name} to={ROUTES.profile}>
        {data?.name}
      </Typography.Subtitle1>
      <Avatar name={data?.name} size={'s'} url={data?.avatar} />
    </div>
  )

  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={ROUTES.base}>
          <img alt={'Logo'} height={36} src={logo} width={157} />
        </Link>

        {data ? (
          <MenuProfile
            avatarUrl={data.avatar}
            email={data.email}
            onLogout={logout}
            triggerMenu={triggerHeader}
            userName={data.name}
          />
        ) : (
          <Button as={Link} to={ROUTES.signIn} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
})
