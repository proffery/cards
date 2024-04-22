import { Logout, Person } from '@/assets/icons'
import { Avatar, Typography } from '@/components'

import s from './menu-profile.module.scss'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export type MenuProfileProps = {
  avatarUrl?: string
  email?: string
  onLogout: () => void
  userName?: string
}

export const MenuProfile = ({ avatarUrl, email, onLogout, userName }: MenuProfileProps) => {
  return (
    <DropdownMenu
      ariaLabel={'Menu user profile'}
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
        <a href={'#'}>
          <Person />
          My Profile
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a href={'#'} onClick={onLogout}>
          <Logout />
          Sing Out
        </a>
      </DropdownItem>
    </DropdownMenu>
  )
}
