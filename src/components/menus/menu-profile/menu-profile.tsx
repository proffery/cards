import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

import { Logout, Person } from '@/assets/icons'
import { ROUTES } from '@/common/consts/routes'
import {
  Avatar,
  DropdownItem,
  DropdownLabel,
  DropdownMenu,
  DropdownSeparator,
  Typography,
} from '@/components/ui'

import s from './menu-profile.module.scss'

export type MenuProfileProps = {
  avatarUrl?: string
  email?: string
  onLogout: () => void
  triangleRight?: string
  triggerMenu?: ReactNode
  userName?: string
}

export const MenuProfile = (props: MenuProfileProps) => {
  const { avatarUrl, email, onLogout, triangleRight = '10px', triggerMenu, userName } = props

  const triggerElement = <Avatar name={userName} size={'s'} url={avatarUrl} />

  return (
    <DropdownMenu
      ariaLabel={userName}
      triangleRight={triangleRight}
      trigger={triggerMenu || triggerElement}
    >
      <DropdownLabel asChild>
        <div className={s.userWrapper}>
          {triggerElement}
          <div className={s.userData}>
            <Typography.Subtitle2>{userName}</Typography.Subtitle2>
            <Typography.Caption className={s.userEmail}>{email}</Typography.Caption>
          </div>
        </div>
      </DropdownLabel>
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
          Log Out
        </button>
      </DropdownItem>
    </DropdownMenu>
  )
}
