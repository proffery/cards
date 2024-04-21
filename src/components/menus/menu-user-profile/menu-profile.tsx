import { Logout, Person } from '@/assets/icons'
import { Avatar, Typography } from '@/components'

import s from './menu-profile.module.scss'

import { DropdownItem, DropdownMenu, DropdownSeparator } from '../../ui/drop-down'

export type Props = {
  avatar?: string
  email: string
  name: string
  profileUrl: string
  signOutUrl: string
}

export const MenuProfile = (props: Props) => {
  const { avatar, email, name, profileUrl, signOutUrl } = props

  return (
    <DropdownMenu
      ariaLabel={'Menu user profile'}
      trigger={<Avatar name={name} size={'s'} url={avatar} />}
    >
      <DropdownItem asChild>
        <div className={s.userWrapper}>
          <Avatar name={name} size={'s'} url={avatar} />
          <div className={s.userData}>
            <Typography.Subtitle2>{name}</Typography.Subtitle2>
            <Typography.Caption className={s.userEmail}>{email}</Typography.Caption>
          </div>
        </div>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a href={profileUrl}>
          <Person />
          My Profile
        </a>
      </DropdownItem>
      <DropdownSeparator />
      <DropdownItem asChild>
        <a href={signOutUrl}>
          <Logout />
          Sign Out
        </a>
      </DropdownItem>
    </DropdownMenu>
  )
}
