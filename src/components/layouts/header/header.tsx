import { Link } from 'react-router-dom'

import logo from '@/assets/images/cover.png'
import { Button, Typography } from '@/components'
import { MenuProfile, MenuProfileProps } from '@/components/menus'

import s from './header.module.scss'

type HeaderProps = {
  isLoggedIn?: boolean
} & MenuProfileProps

export const Header = ({ avatarUrl, email, isLoggedIn, onLogout, userName }: HeaderProps) => {
  return (
    <header className={s.root}>
      <div className={s.content}>
        <Link className={s.banner} to={'/'}>
          <img alt={'Logo'} src={logo} />
        </Link>
        {isLoggedIn && (
          <div className={s.nameContainer}>
            <Typography.Subtitle1 as={Link} className={s.name} to={'/profile'}>
              {userName}
            </Typography.Subtitle1>
            <MenuProfile
              avatarUrl={avatarUrl}
              email={email}
              onLogout={onLogout}
              userName={userName}
            />
          </div>
        )}
        {!isLoggedIn && (
          <Button as={Link} to={'/sign-in'} variant={'secondary'}>
            Sign In
          </Button>
        )}
      </div>
    </header>
  )
}
