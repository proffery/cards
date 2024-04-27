import { Link } from 'react-router-dom'

import logo from '@/assets/images/LogoITI.svg'
import { ROUTES } from '@/common/consts/routes'
import { MenuProfile, MenuProfileProps } from '@/components/menus'
import { Avatar, Button, Typography } from '@/components/ui'

import s from './header.module.scss'

type HeaderProps = {
  isLoggedIn?: boolean
} & MenuProfileProps

export const Header = ({ avatarUrl, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  const triggerHeader = (
    <div className={s.nameContainer}>
      <Typography.Subtitle1 as={Link} className={s.name} to={ROUTES.profile}>
        {userName}
      </Typography.Subtitle1>
      <Avatar name={userName} size={'s'} url={avatarUrl} />
    </div>
  )

  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={ROUTES.base}>
          <img alt={'Logo'} height={36} src={logo} width={157} />
        </Link>
        {isLoggedIn && (
          <MenuProfile
            avatarUrl={avatarUrl}
            email={email}
            onLogout={onLogout}
            triggerMenu={triggerHeader}
            userName={userName}
          />
        )}
        {!isLoggedIn && (
          <Button as={Link} to={ROUTES.signIn} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
