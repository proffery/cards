import { Link } from 'react-router-dom'

import { Logout, Person } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import { Avatar, DropdownItem, DropdownMenu, DropdownSeparator, Typography } from '@/components/ui'

import s from './menu-profile.module.scss'

export type MenuProfileProps = {
  avatarUrl?: string
  email?: string
  onLogout: () => void
  triangleRight?: string
  userName?: string
}

export const MenuProfile = (props: MenuProfileProps) => {
  const { avatarUrl, email, onLogout, triangleRight = '10px', userName } = props

  return (
    <DropdownMenu
      ariaLabel={userName}
      triangleRight={triangleRight}
      trigger={<Avatar name={userName} size={'s'} url={avatarUrl} />}
    >
      <DropdownItem asChild>
        <div className={s.userWrapper}>
          <Avatar name={userName} size={'s'} url={avatarUrl} />
          <div className={s.userData}>
            <Typography.Subtitle2>{userName}</Typography.Subtitle2>
            <Typography.Caption className={s.userEmail}>{email}</Typography.Caption>
          </div>
        </div>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <Link to={ROUTES.profile}>
          <Person />
          My Profile
        </Link>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <button onClick={onLogout}>
          <Logout />
          Sing Out
        </button>
      </DropdownItem>
    </DropdownMenu>
  )
}
